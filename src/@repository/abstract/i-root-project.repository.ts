import { RootProjectEntity } from "./../../entities/root-project.entity";
import { IRepositoryBase } from "./base/i-repository.base";

export interface IRootProjectRepository extends IRepositoryBase<RootProjectEntity> {
  findForDetails(id: number): Promise<RootProjectEntity>;
}
