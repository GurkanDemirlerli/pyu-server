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

  async add(model: TaskCreateDto): Promise<number> {
    let prjEn = await this._projectRepository.findOne(model.projectId, { relations: ["statuses"] });
    if (!prjEn)
      throw new AppError('AppError', 'Böyle bir proje yok.', 404);
    if (prjEn.statuses.filter(x => x.id === model.statusId).length < 1) {
      throw new AppError('AppError', 'Bilinmeyen aşama.', 404);
    }
    let taskEn: TaskEntity = Object.assign(new TaskEntity(), model);
    taskEn.createdAt = new Date();
    taskEn.lastUpdated = new Date();
    let inserted: TaskEntity = await this._taskRepository.insert(taskEn);
    return Promise.resolve(inserted.id);
  }

  async list(filters: TaskFilter, requestorId: number) {
    let taskDtos: TaskListDto[] = [];
    // await this.validateAuthority(filters.projectId, requestorId);
    let tasks = await this._taskRepository.listByFilters(filters);
    tasks.map((tsk) => {
      let taskDto = Object.assign(new TaskListDto(), tsk, { comments: undefined })
      taskDto.commentCount = tsk.comments.length;
      taskDtos.push(taskDto);
    });
    return Promise.resolve(taskDtos);
  }

  async find(id: number, requestorId: number): Promise<TaskDetailDto> {
    let taskEn: TaskEntity = await this._taskRepository.findForDetails(id);
    if (!taskEn) throw new AppError('AppError', 'Task not found.', 404);
    let taskDto: TaskDetailDto = Object.assign(new TaskDetailDto(), taskEn, { projects: undefined, users: undefined });
    return Promise.resolve(taskDto);
  }

  //TODO update entity donmemeli
  update(id: number, model: TaskUpdateDto, requestorId: number): Promise<TaskEntity> {
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
        if (prjct.members.filter(x => x.userId === userId).length < 1 && prjct.creator.id !== userId)
          throw new AppError('AppError', 'Bu projede yetkiniz yoktur.', 403);
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }
}


//TODO task silme ve update işlemlerinde auth için başka kısıtlar da ekle şuanda projeye dahil olan herkes herhangi bir task üzerinde işlem yapabilir.
