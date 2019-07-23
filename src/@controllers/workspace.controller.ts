import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { IWorkspaceService } from "../@services/abstract";
import { ErrorHandler } from "../errors/error-handler";
import { InjectTypes } from "../ioc/inject-types";

@injectable()
export class WorkspaceController {

    constructor(
        @inject(InjectTypes.Service.WORKSPACE) private readonly _workspaceService: IWorkspaceService
    ) { }
    list(req: Request, res: Response, next: NextFunction) {
        this._workspaceService.list({}, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'list', 'WorkspaceController');
        });
    }

    insert(req: Request, res: Response, next: NextFunction) {
        let wspDto = Object.assign({}, req.body);
        wspDto.creatorId = req.decoded.id;
        this._workspaceService.add(wspDto).then((createdId) => {
            return this._workspaceService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'WorkspaceController');
        });
    }

    find(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._workspaceService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'find', 'WorkspaceController');
        });
    }

    update(req: Request, res: Response, next: NextFunction) {
        const id: number = req.params.id;
        const wspDto = Object.assign({}, req.body);
        this._workspaceService.update(id, wspDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'update', 'WorkspaceController');
        });
    }

    delete(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._workspaceService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'delete', 'WorkspaceController');
        });
    }
}