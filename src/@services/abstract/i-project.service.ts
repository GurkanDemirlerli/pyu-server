import { ProjectCreateDto } from "../../_models/dtos/project/project-create.dto";

export interface IProjectService {
    add(model: ProjectCreateDto);
    list(filters);
    find(id: number);
    update(model);
    delete(id:number);
}