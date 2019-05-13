import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
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
            .leftJoin("company.users", "user").addSelect(["user.id"])
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
            .leftJoin("company.users", "user").addSelect(["user.id"])
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
}
