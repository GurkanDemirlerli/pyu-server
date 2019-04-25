import { CommentCreateDto } from './../../_models/dtos/comment/comment-create.dto';
import { CommentFilter } from './../../_models/filters/comment-filter';
export interface ICommentService {
    add(model: CommentCreateDto);
    list(filters: CommentFilter);
    find(id: number);
    update(model);
    delete(id:number);
}