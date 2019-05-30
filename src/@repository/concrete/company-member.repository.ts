import { getManager } from "typeorm";
import { ICompanyMemberRepository } from "../abstract/i-company-member.repository";
import { CompanyMemberEntity } from "./../../entities/company-member.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
import { RepositoryBase } from "./base/repository.base";
@injectable()
export class CompanyMemberRepository extends RepositoryBase<CompanyMemberEntity> implements ICompanyMemberRepository {
    constructor() {
        super(
            CompanyMemberEntity
        );
    }
}
