import { RepositoryBase } from './base/repository.base';
import { IRootProjectRepository } from "../abstract/i-root-project.repository";
import { RootProjectEntity } from "./../../entities/root-project.entity";
import { injectable } from "inversify";
import { getManager } from "typeorm";
import 'reflect-metadata';
import { RootProjectFilter } from '@models/filters';
@injectable()
export class RootProjectRepository extends RepositoryBase<RootProjectEntity> implements IRootProjectRepository {
  constructor() {
    super(
      RootProjectEntity
    );
  }
  // listByFiltersByCompany(filters: RootProjectFilter, companyId: number): Promise<RootProjectEntity[]> {
  //   let query = getManager().createQueryBuilder(RootProjectEntity, "project")
  //     .leftJoinAndSelect("project.managers", "manager")
  //     .where("project.companyId =:companyId", { companyId: companyId })
  //   query = query.orderBy("project.id", "DESC");
  //   if (filters.take !== undefined) {
  //     query = query.take(filters.take);
  //     if (filters.skip !== undefined) query = query.skip(filters.skip);
  //   }
  //   return query.orderBy("project.id", "DESC").getMany();
  // }

  findForDetails(id: number): Promise<RootProjectEntity> {
    let query = getManager().createQueryBuilder(RootProjectEntity, "rtp").select(["rtp.id", "rtp.title", "rtp.description"])
      .where("rtp.id =:id", { id: id })
      .leftJoin("rtp.company", "company").addSelect(["company.id", "company.name", "company.description"])
      .leftJoin("company.owner", "companyOwner").addSelect(["companyOwner.id", "companyOwner.name", "companyOwner.surname", "companyOwner.username"])
      .leftJoin("rtp.creator", "creator").addSelect(["creator.id", "creator.name", "creator.surname", "creator.username"])
      .leftJoinAndSelect("rtp.baseProject", "base")
      .leftJoinAndSelect("base.statuses", "status")
    return query.getOne();
  }



}
