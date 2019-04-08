// import { AppError } from '../errors/app-error';
// import { ErrorHandler } from '../errors/error-handler';
import { injectable, inject } from 'inversify';
import { InjectTypes } from '../ioc';
import { validate } from 'class-validator';
import {
    Request,
    Response,
    NextFunction
} from 'express';

import { CommentEntity } from "../entities/comment.entity";
import { ICommentRepository } from './../@repository/abstract/i-comment.repository';
import 'reflect-metadata';
@injectable()
export class CommentController {

    constructor(
        @inject(InjectTypes.Repository.COMMENT) private readonly _commentRepository: ICommentRepository
    ) { }

    list(req: Request, res: Response, next: NextFunction) {

        console.log("Received GetAllComments ==> GET");

        this._commentRepository.list().then((result: any) => {
            console.log("Result : " + result);
            res.send(result);
        });
    }

    insert(req: Request, res: Response, next: NextFunction) {

        console.log("Received SaveEmployee ==> POST");
        console.log(req.body);

        let emp: CommentEntity = new CommentEntity();
        emp.content = req.body.content;
        emp.title = req.body.title;
        emp.taskId = req.body.taskId;

        this._commentRepository.insert(emp).then((result: any) => {
            console.log("Result : " + result);
            res.send(result);
        });
    }
}