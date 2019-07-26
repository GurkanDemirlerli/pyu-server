import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ISubjectCustomFieldRepository } from "../abstract";
import { SubjectCustomFieldEntity } from "./../../entities/subject-custom-field.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class SubjectCustomFieldRepository extends RepositoryBase<SubjectCustomFieldEntity> implements ISubjectCustomFieldRepository {
    constructor() {
        super(
            SubjectCustomFieldEntity
        );
    }
}