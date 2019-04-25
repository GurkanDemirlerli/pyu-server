import { getManager } from "typeorm";
import { IIssueRepository } from "../abstract/i-issue.repository";
import { IssueEntity } from "./../../entities/issue.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
import { RepositoryBase } from "./base/repository.base";
@injectable()
export class IssueRepository extends RepositoryBase<IssueEntity> implements IIssueRepository {
    constructor() {
        super(
            IssueEntity
        );
    }
}