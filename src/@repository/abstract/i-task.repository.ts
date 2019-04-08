import { TaskEntity } from "./../../entities/task.entity";

export interface ITaskRepository {
    list();
    insert(task: TaskEntity);
}