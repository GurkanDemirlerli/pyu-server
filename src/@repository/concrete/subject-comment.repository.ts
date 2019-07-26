import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ISubjectCommentRepository } from "../abstract";
import { SubjectCommentEntity } from "./../../entities/subject-comment.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class SubjectCommentRepository extends RepositoryBase<SubjectCommentEntity> implements ISubjectCommentRepository {
    constructor() {
        super(
            SubjectCommentEntity
        );
    }
}