import { TaskEntity } from "./../../entities/task.entity";
import { IRepositoryBase } from "./base/i-repository.base";
import { TaskFilter } from "../../_models/filters/task-filter";

export interface ITaskRepository extends IRepositoryBase<TaskEntity> {
    listByFilters(filters: TaskFilter): Promise<TaskEntity[]>;
    findForDetails(id: number): Promise<TaskEntity>;
}
