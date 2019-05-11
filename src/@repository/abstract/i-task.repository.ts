import { TaskEntity } from "./../../entities/task.entity";
import { IRepositoryBase } from "./base/i-repository.base";
import { TaskFilter } from "@models/filters/task-filter";

export interface ITaskRepository extends IRepositoryBase<TaskEntity> {
    find(filters: TaskFilter): Promise<TaskEntity[]>;
    findForDetails(id: number): Promise<TaskEntity>;
}
