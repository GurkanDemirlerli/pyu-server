import { TaskCreateDto, TaskUpdateDto, TaskDetailDto } from "@models/dtos";
import { TaskFilter } from "@models/filters";
import { TaskEntity } from "@entities/task.entity";

export interface ITaskService {
    add(model: TaskCreateDto):Promise<number>;
    list(filters: TaskFilter, requestorId: number);
    find(id: number, requestorId: number): Promise<TaskDetailDto>;
    update(id: number, model: TaskUpdateDto, requestorId: number);
    delete(id: number, requestorId: number);
}
