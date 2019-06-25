import { RootProjectCreateDto, RootProjectUpdateDto, RootProjectDetailDto, RootProjectListDto, UserSummaryDto, RootProjectUserRegisterDto } from "@models/dtos";
import { RootProjectFilter } from "@models/filters";
import { RootProjectEntity } from "@entities/project.entity";

export interface IRootProjectService {
  add(model: RootProjectCreateDto): Promise<number>;
  // list(filters: RootProjectFilter, requestorId: number): Promise<RootProjectListDto[]>;
  listByCompany(filters: RootProjectFilter, requestorId: number, companyId: number): Promise<RootProjectListDto[]>;
  find(id: number, requestorId: number): Promise<RootProjectDetailDto>;
  update(id: number, model: RootProjectUpdateDto, requestorId: number): Promise<RootProjectEntity>;
  delete(id: number, requestorId: number): Promise<void>;
  getMembers(id: number, requestorId: number): Promise<UserSummaryDto[]>;
  addMember(id: number, model: RootProjectUserRegisterDto): Promise<void>;
}
