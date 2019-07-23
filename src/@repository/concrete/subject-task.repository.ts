import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ISubjectTaskRepository } from "../abstract/i-subject-task.repository";
import { SubjectTaskEntity } from "./../../entities/subject-task.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class SubjectTaskRepository extends RepositoryBase<SubjectTaskEntity> implements ISubjectTaskRepository {
    constructor() {
        super(
            SubjectTaskEntity
        );
    }
}