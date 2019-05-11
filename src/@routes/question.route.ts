import { QuestionController } from './../@controllers/question.controller';
import * as express from 'express';
import { IOC } from '../ioc';
import 'reflect-metadata';
import { authorize } from '@middlewares/authorize.middleware';
import { validationMiddleware } from '@middlewares/validation.middleware';
import { QuestionCreateDto } from '@models/dtos/question/question-create.dto';
export class QuestionRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/questions";
        const ctrl = IOC.container.get(QuestionController);

        app.route(root + '/')
            .get((req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/')
            .post(validationMiddleware(QuestionCreateDto) , authorize,(req, res, next) => ctrl.insert(req, res, next));

    }
}
