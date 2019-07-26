import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ISubjectFolderRepository } from "../abstract";
import { SubjectFolderEntity } from "./../../entities/subject-folder.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class SubjectFolderRepository extends RepositoryBase<SubjectFolderEntity> implements ISubjectFolderRepository {
    constructor() {
        super(
            SubjectFolderEntity
        );
    }
}