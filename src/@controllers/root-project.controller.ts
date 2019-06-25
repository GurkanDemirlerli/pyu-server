import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { RootProjectCreateDto, RootProjectUpdateDto, RootProjectUserRegisterDto } from "@models/dtos";
import { IRootProjectService } from "@services/abstract";
import { RootProjectFilter } from "@models/filters/root-project-filter";
import { ErrorHandler } from "@errors/error-handler";
import { InjectTypes } from "@ioc/inject-types";
import { AppError } from "@errors/app-error";

@injectable()
export class RootProjectController {

  constructor(
    @inject(InjectTypes.Service.ROOTPROJECT) private readonly _rootProjectService: IRootProjectService
  ) { }

  listByCompany(req: Request, res: Response, next: NextFunction) {
    const companyId: number = req.params.companyId;
    let filters: RootProjectFilter = {};
    if (req.query.hasOwnProperty("skip")) filters.skip = +req.query.skip;
    if (req.query.hasOwnProperty("take")) filters.take = +req.query.take;

    this._rootProjectService.listByCompany(filters, req.decoded.id, companyId).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'list', 'RootProjectController');
    });
  }

  insert(req: Request, res: Response, next: NextFunction) {

    let prjDto: RootProjectCreateDto = Object.assign(new RootProjectCreateDto(), req.body);
    prjDto.userId = req.decoded.id;
    this._rootProjectService.add(prjDto).then((createdId) => {
      return this._rootProjectService.find(createdId, req.decoded.id);
    }).then((result) => {
      return res.status(201).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'insert', 'RootProjectController');
    });
  }

  find(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;
    this._rootProjectService.find(id, req.decoded.id).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'find', 'RootProjectController');
    });
  }

  update(req: Request, res: Response, next: NextFunction) {
    const id: number = req.params.id;
    const prjDto: RootProjectUpdateDto = Object.assign(new RootProjectCreateDto(), req.body);
    this._rootProjectService.update(id, prjDto, req.decoded.id).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'update', 'RootProjectController');
    });
  }

  delete(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;
    this._rootProjectService.delete(id, req.decoded.id).then(() => {
      return res.status(200).json({
        success: true
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'delete', 'RootProjectController');
    });
  }

  assignRootProjectManager(req: Request, res: Response, next: NextFunction) {
    return ErrorHandler.handleErrorResponses(new AppError('AppError', 'Method Not Implemented', 501), res, 'assignRootProjectManager', 'RootProjectController');
  }

  start(req: Request, res: Response, next: NextFunction) {
    return ErrorHandler.handleErrorResponses(new AppError('AppError', 'Method Not Implemented', 501), res, 'start', 'RootProjectController');
  }

  pause(req: Request, res: Response, next: NextFunction) {
    return ErrorHandler.handleErrorResponses(new AppError('AppError', 'Method Not Implemented', 501), res, 'stop', 'RootProjectController');
  }

  getMembers(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;
    this._rootProjectService.getMembers(id, req.decoded.id).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'getMembers', 'RootProjectController');
    });
  }

  addMember(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;
    let prjRgDto: RootProjectUserRegisterDto = Object.assign(new RootProjectUserRegisterDto(), req.body);
    this._rootProjectService.addMember(id, prjRgDto).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'addMember', 'RootProjectController');
    });
  }
}
