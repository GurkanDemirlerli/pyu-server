import { TaskCreateDto } from './../../_models/dtos/task/task-create.dto';
import { TaskFilter } from './../../_models/filters/task-filter';
export interface ITaskService {
    add(model: TaskCreateDto);
    list(filters: TaskFilter, userId: number);
    find(id: number);
    update(model);
    delete(id:number);
}