import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ICompanyRepository } from "../abstract/i-company.repository";
import { CompanyEntity } from "./../../entities/company.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class CompanyRepository extends RepositoryBase<CompanyEntity> implements ICompanyRepository {
    constructor() {
        super(
            CompanyEntity
        );
    }
}