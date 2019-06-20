import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { TaskCreateDto, TaskUpdateDto, TaskStatusUpdateDto } from "@models/dtos";
import { ITaskService } from "@services/abstract";
import { TaskFilter } from "@models/filters/task-filter";
import { ErrorHandler } from "@errors/error-handler";
import { InjectTypes } from "@ioc";
import { AppError } from "@errors/app-error";

@injectable()
export class TaskController {

  constructor(
    @inject(InjectTypes.Service.TASK) private readonly _taskService: ITaskService
  ) { }

  list(req: Request, res: Response, next: NextFunction) {

    let filters: TaskFilter = {};
    if (req.query.hasOwnProperty("assignedTo")) filters.assignedTo = +req.query.assignedTo;
    if (req.query.hasOwnProperty("createdBy")) filters.createdBy = +req.query.createdBy;
    if (req.query.hasOwnProperty("projectId")) filters.projectId = +req.query.projectId;
    if (req.query.hasOwnProperty("status")) filters.status = +req.query.status;
    if (req.query.hasOwnProperty("skip")) filters.skip = +req.query.skip;
    if (req.query.hasOwnProperty("take")) filters.take = +req.query.take;

    this._taskService.list(filters, req.decoded.id).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'list', 'TaskController');
    });
  }

  insert(req: Request, res: Response, next: NextFunction) {

    let tskDto: TaskCreateDto = Object.assign(new TaskCreateDto(), req.body);
    tskDto.creatorId = req.decoded.id;
    this._taskService.add(tskDto).then((createdId) => {
      return this._taskService.find(createdId, req.decoded.id);
    }).then((result) => {
      return res.status(201).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'insert', 'TaskController');
    });
  }

  find(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;
    this._taskService.find(id, req.decoded.id).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'find', 'TaskController');
    });
  }

  update(req: Request, res: Response, next: NextFunction) {
    const id: number = req.params.id;
    const tskDto: TaskUpdateDto = Object.assign(new TaskCreateDto(), req.body);
    this._taskService.update(id, tskDto, req.decoded.id).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'update', 'TaskController');
    });
  }

  delete(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;
    this._taskService.delete(id, req.decoded.id).then(() => {
      return res.status(200).json({
        success: true
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'delete', 'TaskController');
    });
  }

  //TODO guncellenen status projede var mı diye kontrol et
  updateStatus(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;
    let tStatusUpDto: TaskStatusUpdateDto = Object.assign(new TaskStatusUpdateDto(), req.body);
    this._taskService.changeStatus(id, tStatusUpDto).then(() => {
      return res.status(200).json({
        success: true
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'updateStatus', 'TaskController');
    });
  }
}
