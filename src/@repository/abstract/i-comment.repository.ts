import { CommentEntity } from "./../../entities/comment.entity";

export interface ICommentRepository {
    list();
    insert(task: CommentEntity);
}