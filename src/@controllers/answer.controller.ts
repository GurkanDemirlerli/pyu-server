import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { AnswerCreateDto, AnswerUpdateDto } from "@models/dtos";
import { IAnswerService } from "@services/abstract";
import { AnswerFilter } from "@models/filters/answer-filter";
import { ErrorHandler } from "@errors/error-handler";
import { InjectTypes } from "@ioc/inject-types";

@injectable()
export class AnswerController {

    constructor(
        @inject(InjectTypes.Service.ANSWER) private readonly _answerService: IAnswerService
    ) { }

    list(req: Request, res: Response, next: NextFunction) {

        let filters: AnswerFilter = {};

        this._answerService.list(filters, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'list', 'AnswerController');
        });
    }

    insert(req: Request, res: Response, next: NextFunction) {

        let ansDto: AnswerCreateDto = Object.assign(new AnswerCreateDto(), req.body);
        ansDto.creatorId = req.decoded.id;
        this._answerService.add(ansDto).then((createdId) => {
            return this._answerService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'AnswerController');
        });
    }

    find(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._answerService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'find', 'AnswerController');
        });
    }

    update(req: Request, res: Response, next: NextFunction) {
        const id: number = req.params.id;
        const ansDto: AnswerUpdateDto = Object.assign(new AnswerCreateDto(), req.body);
        this._answerService.update(id, ansDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'update', 'AnswerController');
        });
    }

    delete(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._answerService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'delete', 'AnswerController');
        });
    }
}
