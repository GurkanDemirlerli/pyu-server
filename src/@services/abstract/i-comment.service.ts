import { CommentCreateDto, CommentUpdateDto, CommentDetailDto, CommentListDto } from "@models/dtos";
import { CommentFilter } from "@models/filters";
import { CommentEntity } from "@entities/comment.entity";

export interface ICommentService {
    add(model: CommentCreateDto): Promise<number>;
    list(filters: CommentFilter, requestorId: number): Promise<CommentListDto[]>;
    find(id: number, requestorId: number): Promise<CommentDetailDto>;
    update(id: number, model: CommentUpdateDto, requestorId: number): Promise<CommentEntity>;
    delete(id: number, requestorId: number): Promise<void>;
}
