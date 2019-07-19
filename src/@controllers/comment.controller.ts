import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { CommentCreateDto, CommentUpdateDto } from "../_models/dtos";
import { ICommentService } from "../@services/abstract";
import { CommentFilter } from "../_models/filters/comment-filter";
import { ErrorHandler } from "../errors/error-handler";
import { InjectTypes } from "../ioc/inject-types";

@injectable()
export class CommentController {

    constructor(
        @inject(InjectTypes.Service.COMMENT) private readonly _commentService: ICommentService
    ) { }

    list(req: Request, res: Response, next: NextFunction) {

        let filters: CommentFilter = {};

        this._commentService.list(filters, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'list', 'CommentController');
        });
    }

    insert(req: Request, res: Response, next: NextFunction) {

        let cmtDto: CommentCreateDto = Object.assign(new CommentCreateDto(), req.body);
        cmtDto.userId = req.decoded.id;
        this._commentService.add(cmtDto).then((createdId) => {
            return this._commentService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'CommentController');
        });
    }

    find(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._commentService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'find', 'CommentController');
        });
    }

    update(req: Request, res: Response, next: NextFunction) {
        const id: number = req.params.id;
        const cmtDto: CommentUpdateDto = Object.assign(new CommentCreateDto(), req.body);
        this._commentService.update(id, cmtDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'update', 'CommentController');
        });
    }

    delete(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._commentService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'delete', 'CommentController');
        });
    }
}
