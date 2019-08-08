import { ISubjectItemService } from './../@services/abstract/i-subject-item.service';
import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { ISubjectProjectService } from "../@services/abstract";
import { ErrorHandler } from "../errors/error-handler";
import { InjectTypes } from "../ioc/inject-types";

@injectable()
export class SubjectProjectController {

    constructor(
        @inject(InjectTypes.Service.SUBJECT_PROJECT) private readonly _subjectProjectService: ISubjectProjectService,
        @inject(InjectTypes.Service.SUBJECT_ITEM) private readonly _subjectItemService: ISubjectItemService
    ) { }
    list(req: Request, res: Response, next: NextFunction) {
        this._subjectProjectService.list({}, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'list', 'SubjectProjectController');
        });
    }

    insert(req: Request, res: Response, next: NextFunction) {
        let prjDto = Object.assign({}, req.body);
        prjDto.creatorId = req.decoded.id;
        this._subjectProjectService.add(prjDto, req.decoded.id).then((createdId) => {
            return this._subjectItemService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'SubjectProjectController');
        });
    }

    find(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._subjectProjectService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'find', 'SubjectProjectController');
        });
    }

    update(req: Request, res: Response, next: NextFunction) {
        const id: number = req.params.id;
        const wspDto = Object.assign({}, req.body);
        this._subjectProjectService.update(id, wspDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'update', 'SubjectProjectController');
        });
    }

    delete(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._subjectProjectService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'delete', 'SubjectProjectController');
        });
    }
}