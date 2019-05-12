import { ProjectCreateDto, ProjectUpdateDto, ProjectDetailDto, ProjectListDto } from "@models/dtos";
import { ProjectFilter } from "@models/filters";
import { ProjectEntity } from "@entities/project.entity";

export interface IProjectService {
    add(model: ProjectCreateDto): Promise<number>;
    list(filters: ProjectFilter, requestorId: number): Promise<ProjectListDto[]>;
    find(id: number, requestorId: number): Promise<ProjectDetailDto>;
    update(id: number, model: ProjectUpdateDto, requestorId: number): Promise<ProjectEntity>;
    delete(id: number, requestorId: number): Promise<void>;
}
