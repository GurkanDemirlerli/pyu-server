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
import 'reflect-metadata';
import { AnswerCreateDto } from '../_models/dtos/answer/answer-create.dto';
import { ErrorHandler } from '../errors/error-handler';
import { IAnswerService } from '../@services/abstract/i-answer.service';
@injectable()
export class AnswerController {

    constructor(
        @inject(InjectTypes.Service.ANSWER) private readonly _answerService: IAnswerService
    ) { }

    list(req: Request, res: Response, next: NextFunction) {
        // this._answerRepository.list().then((result: any) => {
        //     console.log("Result : " + result);
            res.send("aaa");
        // });
    }


    insert(req: Request, res: Response, next: NextFunction) {
        let ansDto: AnswerCreateDto = Object.assign(new AnswerCreateDto(), req.body);
        ansDto.creatorId = req.decoded.id;
        this._answerService.add(ansDto).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'AnswerController');
        });
    }
}