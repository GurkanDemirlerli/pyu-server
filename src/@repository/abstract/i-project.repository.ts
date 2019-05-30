import { ProjectEntity } from "./../../entities/project.entity";
import { IRepositoryBase } from "./base/i-repository.base";
import { ProjectFilter } from "@models/filters";

export interface IProjectRepository extends IRepositoryBase<ProjectEntity> {
    listByFiltersByCompany(filters: ProjectFilter, companyId: number): Promise<ProjectEntity[]>;
    findForDetails(id: number): Promise<ProjectEntity>;
}
