import { TaskCreateDto, TaskUpdateDto, TaskDetailDto, TaskListDto } from "@models/dtos";
import { TaskFilter } from "@models/filters";
import { TaskEntity } from "@entities/task.entity";

export interface ITaskService {
    add(model: TaskCreateDto): Promise<number>;
    list(filters: TaskFilter, requestorId: number): Promise<TaskListDto[]>;
    find(id: number, requestorId: number): Promise<TaskDetailDto>;
    update(id: number, model: TaskUpdateDto, requestorId: number): Promise<TaskEntity>;
    delete(id: number, requestorId: number): Promise<void>;
}
