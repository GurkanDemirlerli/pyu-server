import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { ISubjectCustomFieldService } from "../@services/abstract";
import { ErrorHandler } from "../errors/error-handler";
import { InjectTypes } from "../ioc/inject-types";

@injectable()
export class SubjectCustomFieldController {

    constructor(
        @inject(InjectTypes.Service.SUBJECT_CUSTOM_FIELD) private readonly _subjectCustomFieldService: ISubjectCustomFieldService
    ) { }
    list(req: Request, res: Response, next: NextFunction) {
        this._subjectCustomFieldService.list({}, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'list', 'SubjectCustomFieldController');
        });
    }

    insert(req: Request, res: Response, next: NextFunction) {
        let wspDto = Object.assign({}, req.body);
        wspDto.creatorId = req.decoded.id;
        this._subjectCustomFieldService.add(wspDto).then((createdId) => {
            return this._subjectCustomFieldService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'SubjectCustomFieldController');
        });
    }

    find(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._subjectCustomFieldService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'find', 'SubjectCustomFieldController');
        });
    }

    update(req: Request, res: Response, next: NextFunction) {
        const id: number = req.params.id;
        const wspDto = Object.assign({}, req.body);
        this._subjectCustomFieldService.update(id, wspDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'update', 'SubjectCustomFieldController');
        });
    }

    delete(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._subjectCustomFieldService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'delete', 'SubjectCustomFieldController');
        });
    }
}