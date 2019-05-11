import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { AppError } from '../../errors/app-error';
import { ITaskRepository, IProjectRepository } from "@repositories/abstract";
import { TaskCreateDto } from "@models/dtos";
import { TaskFilter } from "@models/filters/task-filter";
import { ITaskService } from "@services/abstract/i-task.service";
import { BaseStatus } from "@enums/base-status.enum";
import { TaskEntity } from "@entities/task.entity";


@injectable()
export class TaskService implements ITaskService {

    constructor(
        @inject(InjectTypes.Repository.TASK) private readonly _taskRepository: ITaskRepository,
        @inject(InjectTypes.Repository.PROJECT) private readonly _projectRepository: IProjectRepository
    ) { }

    add(model: TaskCreateDto) {
        return new Promise<any>((resolve, reject) => {
            let firstStatus;
            this.validateAuthority(model.projectId, model.creatorId).then(() => {
                return this._projectRepository.findOne(model.projectId, { relations: ["statuses"] });
            }).then((res) => {
                if (!res) {
                    throw new AppError(
                        'AppError',
                        'Böyle bir proje yok.',
                        404
                    );
                }
                let prjct = res;
                let plannings = prjct.statuses.filter((sts) => {
                    if (sts.baseStatus === BaseStatus.PLANNINING) {
                        return true;
                    }
                });
                firstStatus = plannings[0];
                for (let i = 0; i < plannings.length; i++) {
                    if (plannings[i].order < firstStatus.order)
                        firstStatus = plannings[i];
                }
                let task: TaskEntity = Object.assign(new TaskEntity(), model, { statusId: firstStatus.id });
                return this._taskRepository.insert(task);
            }).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    list(filters: TaskFilter, userId: number) {
        console.log(filters.projectId);
        return new Promise<any>((resolve, reject) => {
            this.validateAuthority(filters.projectId, userId).then(() => {
                //
                // let query: FindManyOptions<TaskEntity> = { where: {} };
                // query.relations = ["assignees"];
                // (query.where as FindConditions<TaskEntity>).projectId = filters.projectId;
                // if (filters.createdBy !== undefined) (query.where as FindConditions<TaskEntity>).creatorId = filters.createdBy;
                // if (filters.status !== undefined) (query.where as FindConditions<TaskEntity>).statusId = filters.status;
                // if (filters.assignedTo !== undefined) ((query.where as FindConditions<TaskEntity>).assignees as any) = { id: filters.assignedTo };
                //
                // let querya: FindManyOptions<TaskEntity> = {
                //     relations: [
                //         "assignees"
                //     ],
                //     where: {
                //         projectId: filters.projectId,
                //         assignees: {
                //             id: filters.assignedTo
                //         },
                //         creatorId: filters.createdBy,
                //     }
                // };
                //
                // console.log(query);
                //
                // return this._taskRepository.list(querya);
                return this._taskRepository.find(filters);
            }).then((tasks) => {
                console.log("OK");
                resolve(tasks);
            }).catch((err) => {
                reject(err);
            })
        });
    }
    find(id: number) {
        throw new Error("Method not implemented.");
    }
    update(model: any) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }

    private validateAuthority(projectId, userId): Promise<void> {
        return new Promise<any>((resolve, reject) => {
            this._projectRepository.findOne(projectId, { relations: ["users", "creator"] }).then((res) => {
                let prjct = res;
                if (prjct.users.filter(x => x.id === userId).length < 1 && prjct.creator.id !== userId) {
                    throw new AppError(
                        'AppError',
                        'Bu projede yetkiniz yoktur.',
                        403
                    );
                }
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
