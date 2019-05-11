import { injectable, inject } from "inversify";
import { Request,Response,NextFunction } from "express";
import { TaskCreateDto } from "@models/dtos";
import { ITaskService } from "@services/abstract";
import { TaskFilter } from "@models/filters/task-filter";
import { ErrorHandler } from "@errors/error-handler";
import { InjectTypes } from "@ioc/inject-types";

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
