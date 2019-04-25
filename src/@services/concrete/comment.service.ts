import { ICommentRepository } from "../../@repository/abstract/i-comment.repository";
import { injectable, inject } from "inversify";
import { ICommentService } from "../abstract/i-comment.service";
import { InjectTypes } from "../../ioc";
import { CommentEntity } from "../../entities/comment.entity";
import { CommentCreateDto } from "../../_models/dtos/comment/comment-create.dto";

@injectable()
export class CommentService implements ICommentService {

    constructor(
        @inject(InjectTypes.Repository.COMMENT) private readonly _commentRepository: ICommentRepository
    ) { }

    add(model: CommentCreateDto) {
        return new Promise<any>((resolve, reject) => {
            let comment: CommentEntity = Object.assign(new CommentEntity(), model);
            this._commentRepository.insert(comment).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    list(filters) {
        throw new Error("Method not implemented.");
    }
    find(id: number) {
        throw new Error("Method not implemented.");
    }
    update(model: any) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }



}