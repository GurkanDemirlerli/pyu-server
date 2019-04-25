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
import { QuestionCreateDto } from '../_models/dtos/question/question-create.dto';
import { ErrorHandler } from '../errors/error-handler';
import { IQuestionService } from '../@services/abstract/i-question.service';
@injectable()
export class QuestionController {

    constructor(
        @inject(InjectTypes.Service.QUESTION) private readonly _questionService: IQuestionService
    ) { }

    list(req: Request, res: Response, next: NextFunction) {
        // this._questionRepository.list().then((result: any) => {
        //     console.log("Result : " + result);
            res.send("aaa");
        // });
    }


    insert(req: Request, res: Response, next: NextFunction) {
        let issDto: QuestionCreateDto = Object.assign(new QuestionCreateDto(), req.body);
        issDto.creatorId = req.decoded.id;
        this._questionService.add(issDto).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'QuestionController');
        });
    }
}