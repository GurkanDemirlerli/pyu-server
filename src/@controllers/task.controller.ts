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
@injectable()
export class TaskController {

    constructor(
        @inject(InjectTypes.Repository.TASK) private readonly _taskRepository: ITaskRepository
    ) { }

    list(req: Request, res: Response, next: NextFunction) {

        console.log("Received GetAllTasks ==> GET");

        this._taskRepository.list().then((result: any) => {
            console.log("Result : " + result);
            res.send(result);
        });
    }


    insert(req: Request, res: Response, next: NextFunction) {

        console.log("Received SaveEmployee ==> POST");
        console.log(req.body);

        let emp: TaskEntity = new TaskEntity();
        emp.description = req.body.description;
        emp.title = req.body.title;

        this._taskRepository.insert(emp).then((result: any) => {
            console.log("Result : " + result);
            res.send(result);
        });
    }
}