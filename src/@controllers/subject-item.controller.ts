import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { ISubjectItemService } from "../@services/abstract";
import { ErrorHandler } from "../errors/error-handler";
import { InjectTypes } from "../ioc/inject-types";

@injectable()
export class SubjectItemController {

    constructor(
        @inject(InjectTypes.Service.SUBJECT_ITEM) private readonly _subjectItemService: ISubjectItemService
    ) { }

    getAncestors(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._subjectItemService.getAncestors(id, 0).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'getAncestors', 'SubjectItemController');
        });
    }

    getDescendants(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._subjectItemService.getDescendants(id, 0).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'getDescendants', 'SubjectItemController');
        });
    }

    find(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._subjectItemService.find(id, 0).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'find', 'SubjectItemController');
        });
    }

    move(req: Request, res: Response, next: NextFunction) {
        const dto = Object.assign({}, req.body);
        this._subjectItemService.move(dto, 0).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'find', 'SubjectItemController');
        });
    }


}