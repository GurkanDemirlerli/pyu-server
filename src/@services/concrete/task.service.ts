import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { AppError } from '../../errors/app-error';
import { ITaskRepository, IProjectRepository, ITaskAssignmentRepository } from "../../@repository/abstract";
import { TaskCreateDto, TaskUpdateDto, TaskDetailDto, TaskListDto, TaskStatusUpdateDto } from "../../_models/dtos";
import { TaskFilter } from "../../_models/filters/task-filter";
import { ITaskService } from "../abstract/i-task.service";
import { TaskEntity } from "../../entities/task.entity";
import { TaskAssignmentEntity } from "../../entities/task-assignment.entity";


@injectable()
export class TaskService implements ITaskService {
    convertToProject(id: number, requestorId: number): Promise<TaskDetailDto> {
        throw new Error("Method not implemented.");
    }

  constructor(
    @inject(InjectTypes.Repository.TASK) private readonly _taskRepository: ITaskRepository,
    @inject(InjectTypes.Repository.PROJECT) private readonly _projectRepository: IProjectRepository,
    @inject(InjectTypes.Repository.TASK_ASSIGNMENT) private readonly _taskAssignmentRepository: ITaskAssignmentRepository
  ) { }

  //TODO kullanıcıyı göreve atama işlemi transactionda olacak.
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
    //TODO max değeri getirip +1ini al
    taskEn.code = 45;
    let inserted: TaskEntity = await this._taskRepository.insert(taskEn);
    console.log(inserted);
    await this.assignMembers(inserted.id, model.assignees);
    return Promise.resolve(inserted.id);
  }

  //TODO bu idye sahip kişiler gerçenten taskın ait olduğu projenin üyesi mi kontrol et, transaction yap
  async assignMembers(taskId: number, members: number[]) {
    for (let i = 0; i < members.length; i++) {
      let tskAsgEn: TaskAssignmentEntity = new TaskAssignmentEntity();
      tskAsgEn.taskId = taskId;
      tskAsgEn.userId = members[i];
      tskAsgEn.createdAt = new Date();
      await this._taskAssignmentRepository.insert(tskAsgEn);
    }
    return Promise.resolve();
  }

  // async convertToProject(id: number, requestorId: number, statusTemplateId: number) {
  //
  // }

  async list(filters: TaskFilter, requestorId: number) {
    let taskDtos: TaskListDto[] = [];
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
    let taskDto: TaskDetailDto = Object.assign(new TaskDetailDto(), taskEn, {  users: undefined });
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
        return this._taskRepository.delete(id);
      }).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  async changeStatus(id: number, model: TaskStatusUpdateDto): Promise<void> {
    let updatedTask: TaskEntity;
    let oldTask: TaskEntity = await this._taskRepository.findById(id);
    if (!oldTask) throw new AppError('AppError', 'Task not found.', 404);
    updatedTask = Object.assign(oldTask, model);
    updatedTask.lastUpdated = new Date();
    await this._taskRepository.update(id, updatedTask);
    return Promise.resolve();
  }


  // private validateAuthority(projectId: number, userId: number): Promise<void> {
  //   return new Promise<any>((resolve, reject) => {
  //     this._projectRepository.findOne(projectId, { relations: ["users", "creator"] }).then((res) => {
  //       let prjct = res;
  //       if (prjct.members.filter(x => x.userId === userId).length < 1 && prjct.creator.id !== userId)
  //         throw new AppError('AppError', 'Bu projede yetkiniz yoktur.', 403);
  //       resolve();
  //     }).catch((err) => {
  //       reject(err);
  //     });
  //   });
  // }
}


//TODO task silme ve update işlemlerinde auth için başka kısıtlar da ekle şuanda projeye dahil olan herkes herhangi bir task üzerinde işlem yapabilir.
