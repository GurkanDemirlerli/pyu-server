import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ISubjectDomainRepository } from "../abstract";
import { SubjectDomainEntity } from "./../../entities/subject-domain.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class SubjectDomainRepository extends RepositoryBase<SubjectDomainEntity> implements ISubjectDomainRepository {
    constructor() {
        super(
            SubjectDomainEntity
        );
    }



}