import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { QuestionCreateDto, QuestionUpdateDto } from "../_models/dtos";
import { IQuestionService } from "../@services/abstract";
import { QuestionFilter } from "../_models/filters/question-filter";
import { ErrorHandler } from "../errors/error-handler";
import { InjectTypes } from "../ioc/inject-types";

@injectable()
export class QuestionController {

    constructor(
        @inject(InjectTypes.Service.TASK) private readonly _questionService: IQuestionService
    ) { }

    list(req: Request, res: Response, next: NextFunction) {

        let filters: QuestionFilter = {};

        this._questionService.list(filters, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'list', 'QuestionController');
        });
    }

    insert(req: Request, res: Response, next: NextFunction) {

        let qstDto: QuestionCreateDto = Object.assign(new QuestionCreateDto(), req.body);
        qstDto.creatorId = req.decoded.id;
        this._questionService.add(qstDto).then((createdId) => {
            return this._questionService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'QuestionController');
        });
    }

    find(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._questionService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'find', 'QuestionController');
        });
    }

    update(req: Request, res: Response, next: NextFunction) {
        const id: number = req.params.id;
        const qstDto: QuestionUpdateDto = Object.assign(new QuestionCreateDto(), req.body);
        this._questionService.update(id, qstDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'update', 'QuestionController');
        });
    }

    delete(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._questionService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'delete', 'QuestionController');
        });
    }
}
