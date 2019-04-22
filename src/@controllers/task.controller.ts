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
        // this._taskRepository.list().then((result: any) => {
        //     console.log("Result : " + result);
            res.send("aaa");
        // });
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