import { getManager } from "typeorm";
import { ICommentRepository } from "../abstract/i-comment.repository";
import { CommentEntity } from "./../../entities/comment.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class CommentRepository implements ICommentRepository {

    list() {
        return getManager().getRepository(CommentEntity).find();
    }

    insert(comment: CommentEntity) {
        return getManager().getRepository(CommentEntity).save(comment);
    }

}