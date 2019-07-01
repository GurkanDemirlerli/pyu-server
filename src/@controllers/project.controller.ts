import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { ProjectCreateDto, ProjectUpdateDto, ProjectUserRegisterDto } from "@models/dtos";
import { IProjectService } from "@services/abstract";
import { ProjectFilter } from "@models/filters/project-filter";
import { ErrorHandler } from "@errors/error-handler";
import { InjectTypes } from "@ioc/inject-types";
import { AppError } from "@errors/app-error";

@injectable()
export class ProjectController {

  constructor(
    @inject(InjectTypes.Service.PROJECT) private readonly _projectService: IProjectService
  ) { }

  list(req: Request, res: Response, next: NextFunction) {

    let filters: ProjectFilter = {};
    if (req.query.hasOwnProperty("projectId")) filters.parentId = +req.query.parentId;
    if (req.query.hasOwnProperty("statusId")) filters.statusId = +req.query.statusId;
    if (req.query.hasOwnProperty("skip")) filters.skip = +req.query.skip;
    if (req.query.hasOwnProperty("take")) filters.take = +req.query.take;

    this._projectService.list(filters, req.decoded.id).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'list', 'TaskController');
    });
  }

  listByCompany(req: Request, res: Response, next: NextFunction) {
    const companyId: number = req.params.companyId;
    let filters: ProjectFilter = {};
    if (req.query.hasOwnProperty("skip")) filters.skip = +req.query.skip;
    if (req.query.hasOwnProperty("take")) filters.take = +req.query.take;

    this._projectService.listByCompany(filters, req.decoded.id, companyId).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'list', 'ProjectController');
    });
  }

  insert(req: Request, res: Response, next: NextFunction) {

    let prjDto: ProjectCreateDto = Object.assign(new ProjectCreateDto(), req.body);
    prjDto.creatorId = req.decoded.id;
    this._projectService.add(prjDto).then((createdId) => {
      return this._projectService.find(createdId, req.decoded.id);
    }).then((result) => {
      return res.status(201).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'insert', 'ProjectController');
    });
  }

  find(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;
    this._projectService.find(id, req.decoded.id).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'find', 'ProjectController');
    });
  }

  update(req: Request, res: Response, next: NextFunction) {
    const id: number = req.params.id;
    const prjDto: ProjectUpdateDto = Object.assign(new ProjectCreateDto(), req.body);
    this._projectService.update(id, prjDto, req.decoded.id).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'update', 'ProjectController');
    });
  }

  delete(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;
    this._projectService.delete(id, req.decoded.id).then(() => {
      return res.status(200).json({
        success: true
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'delete', 'ProjectController');
    });
  }

  assignProjectManager(req: Request, res: Response, next: NextFunction) {
    return ErrorHandler.handleErrorResponses(new AppError('AppError', 'Method Not Implemented', 501), res, 'assignProjectManager', 'ProjectController');
  }

  start(req: Request, res: Response, next: NextFunction) {
    return ErrorHandler.handleErrorResponses(new AppError('AppError', 'Method Not Implemented', 501), res, 'start', 'ProjectController');
  }

  pause(req: Request, res: Response, next: NextFunction) {
    return ErrorHandler.handleErrorResponses(new AppError('AppError', 'Method Not Implemented', 501), res, 'stop', 'ProjectController');
  }

  getMembers(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;
    this._projectService.getMembers(id, req.decoded.id).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'getMembers', 'ProjectController');
    });
  }

  addMember(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;
    let prjRgDto: ProjectUserRegisterDto = Object.assign(new ProjectUserRegisterDto(), req.body);
    this._projectService.addMember(id, prjRgDto).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'addMember', 'ProjectController');
    });
  }
}
