import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ISubjectProjectRepository } from "../abstract";
import { SubjectProjectEntity } from "./../../entities/subject-project.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class SubjectProjectRepository extends RepositoryBase<SubjectProjectEntity> implements ISubjectProjectRepository {
    constructor() {
        super(
            SubjectProjectEntity
        );
    }
}