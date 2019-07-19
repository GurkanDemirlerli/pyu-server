import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { IssueCreateDto, IssueUpdateDto } from "../_models/dtos";
import { IIssueService } from "../@services/abstract";
import { IssueFilter } from "../_models/filters/issue-filter";
import { ErrorHandler } from "../errors/error-handler";
import { InjectTypes } from "../ioc/inject-types";

@injectable()
export class IssueController {

    constructor(
        @inject(InjectTypes.Service.ISSUE) private readonly _issueService: IIssueService
    ) { }

    list(req: Request, res: Response, next: NextFunction) {

        let filters: IssueFilter = {};

        this._issueService.list(filters, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'list', 'IssueController');
        });
    }

    insert(req: Request, res: Response, next: NextFunction) {

        let issDto: IssueCreateDto = Object.assign(new IssueCreateDto(), req.body);
        issDto.creatorId = req.decoded.id;
        this._issueService.add(issDto).then((createdId) => {
            return this._issueService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'IssueController');
        });
    }

    find(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._issueService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'find', 'IssueController');
        });
    }

    update(req: Request, res: Response, next: NextFunction) {
        const id: number = req.params.id;
        const issDto: IssueUpdateDto = Object.assign(new IssueCreateDto(), req.body);
        this._issueService.update(id, issDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'update', 'IssueController');
        });
    }

    delete(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._issueService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'delete', 'IssueController');
        });
    }
}
