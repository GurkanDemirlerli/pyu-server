import { RepositoryBase } from './base/repository.base';
import { ISubProjectRepository } from "../abstract/i-sub-project.repository";
import { SubProjectEntity } from "./../../entities/sub-project.entity";
import { getManager } from "typeorm";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class SubProjectRepository extends RepositoryBase<SubProjectEntity> implements ISubProjectRepository {
  constructor() {
    super(
      SubProjectEntity
    );
  }

  findForDetails(id: number): Promise<SubProjectEntity> {
    let query = getManager().createQueryBuilder(SubProjectEntity, "rtp").select(["rtp.id",])
      .where("rtp.id =:id", { id: id })
      // .leftJoin("rtp.company", "company").addSelect(["company.id", "company.name", "company.description"])
      // .leftJoin("company.owner", "companyOwner").addSelect(["companyOwner.id", "companyOwner.name", "companyOwner.surname", "companyOwner.username"])
      // .leftJoin("rtp.creator", "creator").addSelect(["creator.id", "creator.name", "creator.surname", "creator.username"])
      .leftJoinAndSelect("rtp.baseProject", "base")
      .leftJoinAndSelect("base.statuses", "status")
      .leftJoinAndSelect("rtp.assignedTask", "asgtsk")
      .leftJoinAndSelect("asgtsk.project", "pp")
      .leftJoinAndSelect("pp.subProject", "pps")
      .leftJoinAndSelect("pp.rootProject", "ppr")

    return query.getOne();
  }

  findAncestor(id: number): Promise<SubProjectEntity> {
    let query = getManager().createQueryBuilder(SubProjectEntity, "rtp").select(["rtp.id",])
      .where("rtp.id =:id", { id: id })
      .leftJoinAndSelect("rtp.baseProject", "base")
      .leftJoinAndSelect("rtp.assignedTask", "asgtsk")
      .leftJoinAndSelect("asgtsk.project", "pp")
      .leftJoinAndSelect("pp.subProject", "pps")
      .leftJoinAndSelect("pp.rootProject", "ppr")

    return query.getOne();
  }
}
