import { getManager } from "typeorm";
import { ICommentRepository } from "../abstract/i-comment.repository";
import { CommentEntity } from "./../../entities/comment.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
import { RepositoryBase } from "./base/repository.base";
@injectable()
export class CommentRepository extends RepositoryBase<CommentEntity> implements ICommentRepository {
    constructor() {
        super(
            CommentEntity
        );
    }
}