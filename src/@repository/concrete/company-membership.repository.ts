import { injectable } from "inversify";
import 'reflect-metadata';
import { RepositoryBase } from "./base/repository.base";
import { CompanyMembershipEntity } from "../../entities/company-membership.entity";
import { ICompanyMembershipRepository } from "../abstract";
@injectable()
export class CompanyMembershipRepository extends RepositoryBase<CompanyMembershipEntity> implements ICompanyMembershipRepository {
    constructor() {
        super(
            CompanyMembershipEntity
        );
    }
}
