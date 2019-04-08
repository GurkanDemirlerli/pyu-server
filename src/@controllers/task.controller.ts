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

import { TaskEntity } from "../entities/task.entity";
import { ITaskRepository } from './../@repository/abstract/i-task.repository';
import 'reflect-metadata';
import { TaskCreateDto } from '../_models/task-create.dto';
import { ErrorHandler } from '../errors/error-handler';
@injectable()
export class TaskController {

    constructor(
        @inject(InjectTypes.Repository.TASK) private readonly _taskRepository: ITaskRepository
    ) { }

    list(req: Request, res: Response, next: NextFunction) {
        this._taskRepository.list().then((result: any) => {
            console.log("Result : " + result);
            res.send(result);
        });
    }


    insert(req: Request, res: Response, next: NextFunction) {
        let tskDto: TaskCreateDto = Object.assign(new TaskCreateDto(), req.body);
        tskDto.creatorId = req.decoded.id;
        let task: TaskEntity = Object.assign(new TaskEntity(), tskDto);
        this._taskRepository.insert(task).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'TaskController');
        });
    }
}