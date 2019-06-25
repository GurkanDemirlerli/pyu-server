import { SubProjectEntity } from "./../../entities/sub-project.entity";
import { IRepositoryBase } from "./base/i-repository.base";

export interface ISubProjectRepository extends IRepositoryBase<SubProjectEntity> {
  findForDetails(id: number): Promise<SubProjectEntity>;
  findAncestor(id: number): Promise<SubProjectEntity>;
}
