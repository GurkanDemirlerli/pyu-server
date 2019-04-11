import { TaskEntity } from "./../../entities/task.entity";
import { IRepositoryBase } from "./base/i-repository.base";

export interface ITaskRepository extends IRepositoryBase<TaskEntity> {

}