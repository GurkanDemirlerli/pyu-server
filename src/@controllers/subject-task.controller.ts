import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { ISubjectTaskService } from "../@services/abstract";
import { ErrorHandler } from "../errors/error-handler";
import { InjectTypes } from "../ioc/inject-types";

@injectable()
export class SubjectTaskController {

    constructor(
        @inject(InjectTypes.Service.SUBJECT_TASK) private readonly _subjectTaskService: ISubjectTaskService
    ) { }
    list(req: Request, res: Response, next: NextFunction) {
        this._subjectTaskService.list({}, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'list', 'SubjectTaskController');
        });
    }

    insert(req: Request, res: Response, next: NextFunction) {
        let dtskDto = Object.assign({}, req.body);
        dtskDto.creatorId = req.decoded.id;
        this._subjectTaskService.add(dtskDto).then((createdId) => {
            return this._subjectTaskService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'SubjectTaskController');
        });
    }

    find(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._subjectTaskService.find(id, 0).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'find', 'SubjectTaskController');
        });
    }

    update(req: Request, res: Response, next: NextFunction) {
        const id: number = req.params.id;
        const dtskDto = Object.assign({}, req.body);
        this._subjectTaskService.update(id, dtskDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'update', 'SubjectTaskController');
        });
    }

    delete(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._subjectTaskService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'delete', 'SubjectTaskController');
        });
    }
}