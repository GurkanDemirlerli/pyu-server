import { TaskController } from './../@controllers/task.controller';
import * as express from 'express';
import { IOC } from '../ioc';
import 'reflect-metadata';
import { authorize } from '../middlewares/authorize.middleware';
import { validationMiddleware } from '@middlewares/validation.middleware';
import { TaskCreateDto } from '@models/dtos/task/task-create.dto';
export class TaskRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/tasks";
        const ctrl = IOC.container.get(TaskController);

        app.route(root + '/')
            .get(authorize,(req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/')
            .post(validationMiddleware(TaskCreateDto) , authorize, (req, res, next) => ctrl.insert(req, res, next));

    }
}
