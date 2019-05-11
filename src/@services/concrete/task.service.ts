import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { AppError } from '../../errors/app-error';
import { ITaskRepository, IProjectRepository } from "@repositories/abstract";
import { TaskCreateDto, TaskUpdateDto, TaskDetailDto, TaskListDto } from "@models/dtos";
import { TaskFilter } from "@models/filters/task-filter";
import { ITaskService } from "@services/abstract/i-task.service";
import { BaseStatus } from "@enums/base-status.enum";
import { TaskEntity } from "@entities/task.entity";
import { StatusEntity } from "@entities/status.entity";


@injectable()
export class TaskService implements ITaskService {

    constructor(
        @inject(InjectTypes.Repository.TASK) private readonly _taskRepository: ITaskRepository,
        @inject(InjectTypes.Repository.PROJECT) private readonly _projectRepository: IProjectRepository
    ) { }

    add(model: TaskCreateDto): Promise<number> {
        return new Promise<any>((resolve, reject) => {
            let firstStatus: StatusEntity;
            this.validateAuthority(model.projectId, model.creatorId).then(() => {
                return this._projectRepository.findOne(model.projectId, { relations: ["statuses"] });
            }).then((res) => {
                if (!res) throw new AppError('AppError', 'Böyle bir proje yok.', 404);
                let prjct = res;
                let plannings = prjct.statuses.filter((sts) => sts.baseStatus === BaseStatus.PLANNINING);
                firstStatus = plannings[0];
                for (let i = 0; i < plannings.length; i++) {
                    if (plannings[i].order < firstStatus.order)
                        firstStatus = plannings[i];
                }
                let task: TaskEntity = Object.assign(new TaskEntity(), model, { statusId: firstStatus.id });
                return this._taskRepository.insert(task);
            }).then((res) => {
                resolve(res.id);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    list(filters: TaskFilter, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            let taskDtos: TaskListDto[] = [];
            this.validateAuthority(filters.projectId, requestorId).then(() => {
                return this._taskRepository.find(filters);
            }).then((tasks) => {
                tasks.map((tsk) => {
                    let taskDto = Object.assign(new TaskListDto(), tsk, { comments: undefined })
                    taskDto.commentCount = tsk.comments.length;
                    taskDtos.push(taskDto);
                });
                resolve(taskDtos);
            }).catch((err) => {
                reject(err);
            })
        });
    }

    find(id: number, requestorId: number): Promise<TaskDetailDto> {
        return new Promise<TaskDetailDto>((resolve, reject) => {
            let taskEntity: TaskEntity;
            this._taskRepository.findForDetails(id).then((foundTask) => {
                if (!foundTask) throw new AppError('AppError', 'Task not found.', 404);
                taskEntity = foundTask;
                return this.validateAuthority(foundTask.projectId, requestorId);
            }).then(() => {
                let taskDto: TaskDetailDto = Object.assign(new TaskDetailDto(), taskEntity);
                resolve(taskDto);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    update(id: number, model: TaskUpdateDto, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            let oldTask: TaskEntity;
            let updatedTask: TaskEntity;
            this._taskRepository.findById(id).then((foundTask) => {
                oldTask = foundTask;
                if (!foundTask) throw new AppError('AppError', 'Task not found.', 404);
                return this.validateAuthority(foundTask.projectId, requestorId);
            }).then(() => {
                updatedTask = Object.assign(oldTask, model);
                return this._taskRepository.update(id, updatedTask);
            }).then(() => {
                resolve(updatedTask);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    delete(id: number, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            this._taskRepository.findById(id).then((foundTask) => {
                if (!foundTask) throw new AppError('AppError', 'Task not found.', 404);
                return this.validateAuthority(foundTask.projectId, requestorId);
            }).then(() => {
                return this._taskRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    private validateAuthority(projectId: number, userId: number): Promise<void> {
        return new Promise<any>((resolve, reject) => {
            this._projectRepository.findOne(projectId, { relations: ["users", "creator"] }).then((res) => {
                let prjct = res;
                if (prjct.users.filter(x => x.id === userId).length < 1 && prjct.creator.id !== userId)
                    throw new AppError('AppError', 'Bu projede yetkiniz yoktur.', 403);
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
}


//TODO task silme ve update işlemlerinde auth için başka kısıtlar da ekle şuanda projeye dahil olan herkes herhangi bir task üzerinde işlem yapabilir.
