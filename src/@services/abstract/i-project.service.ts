import { ProjectCreateDto } from './../../_models/dtos/project/project-create.dto';
import { ProjectFilter } from './../../_models/filters/project-filter';
export interface IProjectService {
    add(model: ProjectCreateDto);
    list(filters: ProjectFilter);
    find(id: number);
    update(model);
    delete(id:number);
}