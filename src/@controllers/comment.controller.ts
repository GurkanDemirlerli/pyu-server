// import { AppError } from '../errors/app-error';
// import { ErrorHandler } from '../errors/error-handler';
import { injectable, inject } from 'inversify';
import { InjectTypes } from '../ioc';
import {
    Request,
    Response,
    NextFunction
} from 'express';
import 'reflect-metadata';
import { CommentCreateDto } from '../_models/dtos/comment/comment-create.dto';
import { ErrorHandler } from '../errors/error-handler';
import { ICommentService } from '../@services/abstract/i-comment.service';
@injectable()
export class CommentController {

    constructor(
        @inject(InjectTypes.Service.COMMENT) private readonly _commentService: ICommentService
    ) { }

    list(req: Request, res: Response, next: NextFunction) {
        // this._commentRepository.list().then((result: any) => {
        //     console.log("Result : " + result);
            res.send("aaaaa");
        // });
    }


    insert(req: Request, res: Response, next: NextFunction) {
        let issDto: CommentCreateDto = Object.assign(new CommentCreateDto(), req.body);
        issDto.userId = req.decoded.id;
        this._commentService.add(issDto).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'CommentController');
        });
    }
}
