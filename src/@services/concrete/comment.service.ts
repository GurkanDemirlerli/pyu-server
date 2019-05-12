import { ICommentService } from "@services/abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "@ioc";
import { ICommentRepository } from "@repositories/abstract";
import { CommentCreateDto, CommentListDto, CommentDetailDto, CommentUpdateDto } from "@models/dtos";
import { CommentEntity } from "@entities/comment.entity";
import { CommentFilter } from "@models/filters";
import { AppError } from "@errors/app-error";

@injectable()
export class CommentService implements ICommentService {

    constructor(
        @inject(InjectTypes.Repository.COMMENT) private readonly _commentRepository: ICommentRepository
    ) { }

    add(model: CommentCreateDto): Promise<number> {
        return new Promise<any>((resolve, reject) => {
            //TODO yetkisi var mı diye kontrol et
            let commentEn: CommentEntity = Object.assign(new CommentEntity(), model);
            this._commentRepository.insert(commentEn).then((res) => {
                resolve(res.id);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    list(filters: CommentFilter, requestorId: number): Promise<CommentListDto[]> {
        throw new Error("Method not implemented.");
    }

    find(id: number, requestorId: number): Promise<CommentDetailDto> {
        throw new Error("Method not implemented.");
    }

    update(id: number, model: CommentUpdateDto, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            let oldComment: CommentEntity;
            let updatedComment: CommentEntity;
            this._commentRepository.findById(id).then((foundComment) => {
                oldComment = foundComment;
                if (!foundComment) throw new AppError('AppError', 'Comment not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                updatedComment = Object.assign(oldComment, model);
                return this._commentRepository.update(id, updatedComment);
            }).then(() => {
                resolve(updatedComment);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    delete(id: number, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            this._commentRepository.findById(id).then((foundComment) => {
                if (!foundComment) throw new AppError('AppError', 'Comment not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                return this._commentRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }


    //TODO Auth fonksiyonu yaz

}
