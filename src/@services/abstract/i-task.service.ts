import { TaskCreateDto, TaskUpdateDto } from "@models/dtos";
import { TaskFilter } from "@models/filters";

export interface ITaskService {
    add(model: TaskCreateDto);
    list(filters: TaskFilter, requestorId: number);
    find(id: number, requestorId: number);
    update(id: number, model: TaskUpdateDto, requestorId: number);
    delete(id: number, requestorId: number);
}
