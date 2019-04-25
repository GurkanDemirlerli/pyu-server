import { TaskFilter } from './../_models/filters/task-filter';
// import { AppError } from '../errors/app-error';
// import { ErrorHandler } from '../errors/error-handler';
import { injectable, inject } from 'inversify';
import { InjectTypes } from '../ioc';
import { validate } from 'class-validator';
import {
    Request,
    Response,
    NextFunction
} from 'express';
import 'reflect-metadata';
import { TaskCreateDto } from '../_models/dtos';
import { ErrorHandler } from '../errors/error-handler';
import { ITaskService } from '../@services/abstract/i-task.service';
@injectable()
export class TaskController {

    constructor(
        @inject(InjectTypes.Service.TASK) private readonly _taskService: ITaskService
    ) { }

    list(req: Request, res: Response, next: NextFunction) {
        let filters: TaskFilter;
        filters.assignedTo = Number(req.query.assignedTo);
        filters.createdBy = Number(req.query.createdBy);
        filters.projectId = Number(req.query.projectId);
        filters.status = Number(req.query.status);
        
        this._taskService.list(filters, req.decoded.id).then((result) => {
            return res.status(201).json({
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
        this._taskService.add(tskDto).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'TaskController');
        });
    }
}