import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { ISubjectDomainService } from "../@services/abstract";
import { ErrorHandler } from "../errors/error-handler";
import { InjectTypes } from "../ioc/inject-types";

@injectable()
export class SubjectDomainController {

    constructor(
        @inject(InjectTypes.Service.SUBJECT_DOMAIN) private readonly _subjectDomainService: ISubjectDomainService
    ) { }
    list(req: Request, res: Response, next: NextFunction) {
        this._subjectDomainService.list({}, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'list', 'SubjectDomainController');
        });
    }

    insert(req: Request, res: Response, next: NextFunction) {
        let wspDto = Object.assign({}, req.body);
        wspDto.creatorId = req.decoded.id;
        this._subjectDomainService.add(wspDto).then((createdId) => {
            return this._subjectDomainService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'SubjectDomainController');
        });
    }

    find(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._subjectDomainService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'find', 'SubjectDomainController');
        });
    }

    update(req: Request, res: Response, next: NextFunction) {
        const id: number = req.params.id;
        const wspDto = Object.assign({}, req.body);
        this._subjectDomainService.update(id, wspDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'update', 'SubjectDomainController');
        });
    }

    delete(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._subjectDomainService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'delete', 'SubjectDomainController');
        });
    }
}