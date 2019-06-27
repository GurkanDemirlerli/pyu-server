import { RepositoryBase } from './base/repository.base';
import { getManager, getConnection } from "typeorm";
import { ICompanyRepository } from "../abstract/i-company.repository";
import { CompanyEntity } from "./../../entities/company.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
import { CompanyFilter } from '@models/filters';
@injectable()
export class CompanyRepository extends RepositoryBase<CompanyEntity> implements ICompanyRepository {
  constructor() {
    super(
      CompanyEntity
    );
  }

  listByFiltersAndUser(filters: CompanyFilter, userId: number): Promise<CompanyEntity[]> {
    let query = getManager().createQueryBuilder(CompanyEntity, "company").select("company")
      .leftJoin("company.owner", "owner").addSelect(["owner.id", "owner.name", "owner.surname", "owner.username"])
      .where("owner.id =:userId", { userId: userId })
      .leftJoinAndSelect("company.members", "member")
      .leftJoin("member.user", "user").addSelect(["user.id", "user.name", "user.surname", "user.username"])
      .leftJoin("company.projects", "project").addSelect(["project.id"]);
    if (filters.owner === undefined) query = query.orWhere("user.id =:userId", { userId: userId });

    query = query.orderBy("company.id", "DESC");
    if (filters.take !== undefined) {
      query = query.take(filters.take);
      if (filters.skip !== undefined) query = query.skip(filters.skip);
    }
    return query.getMany();
  }

  findForDetails(id: number): Promise<CompanyEntity> {
    let query = getManager().createQueryBuilder(CompanyEntity, "company").select("company")
      .where("company.id =:id", { id: id })
      .leftJoin("company.owner", "owner").addSelect(["owner.id", "owner.name", "owner.surname", "owner.username"])
      .leftJoinAndSelect("company.members", "member")
      .leftJoin("member.user", "user").addSelect(["user.id", "user.name", "user.surname", "user.username"])
      .leftJoin("company.projects", "project").addSelect(["project.id"]);

    return query.getOne();
  }

  insertMembershipRequest(companyId: number, userId: number): Promise<void> {
    let query = getManager().createQueryBuilder().relation(CompanyEntity, "requestedUsers").of(companyId).add(userId);

    return query;
  }

  insertMember(companyId: number, userId: number): Promise<void> {
    let query = getManager().createQueryBuilder().relation(CompanyEntity, "users").of(companyId).add(userId);

    return query;
  }


  getTree(companyId: number) {
    console.log("CMPID", companyId);
    // return getManager().query("getProjectTree @companyId='" + companyId + "'");
    return getManager().query(`CALL getProjectTree(${companyId})`);
    // const escapeAlias = (alias: string) => getManager().connection.driver.escape(alias);
    // const escapeColumn = (column: string) => getManager().connection.driver.escape(column);
    // return getManager().query("")
    // return getManager().query(`SELECT * FROM project`);

  }
}
