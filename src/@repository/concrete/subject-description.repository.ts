import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ISubjectDescriptionRepository } from "../abstract";
import { SubjectDescriptionEntity } from "./../../entities/subject-description.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class SubjectDescriptionRepository extends RepositoryBase<SubjectDescriptionEntity> implements ISubjectDescriptionRepository {
    constructor() {
        super(
            SubjectDescriptionEntity
        );
    }
}