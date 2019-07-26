import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ISubjectCommentContentRepository } from "../abstract";
import { SubjectCommentContentEntity } from "./../../entities/subject-comment-content.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class SubjectCommentContentRepository extends RepositoryBase<SubjectCommentContentEntity> implements ISubjectCommentContentRepository {
    constructor() {
        super(
            SubjectCommentContentEntity
        );
    }
}