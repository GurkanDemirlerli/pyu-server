import { ProjectCreateDto, ProjectUpdateDto, ProjectDetailDto, ProjectListDto, UserSummaryDto, ProjectUserRegisterDto } from "@models/dtos";
import { ProjectFilter } from "@models/filters";
import { ProjectEntity } from "@entities/project.entity";

export interface IProjectService {
  add(model: ProjectCreateDto): Promise<number>;
  // list(filters: ProjectFilter, requestorId: number): Promise<ProjectListDto[]>;
  listByCompany(filters: ProjectFilter, requestorId: number, companyId: number): Promise<ProjectListDto[]>;
  find(id: number, requestorId: number): Promise<ProjectDetailDto>;
  update(id: number, model: ProjectUpdateDto, requestorId: number): Promise<ProjectEntity>;
  delete(id: number, requestorId: number): Promise<void>;
  getMembers(id: number, requestorId: number): Promise<UserSummaryDto[]>;
  addMember(id: number, model: ProjectUserRegisterDto): Promise<void>;
}
