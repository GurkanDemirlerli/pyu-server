import * as express from 'express';
import 'reflect-metadata';
import { QuestionUpdateDto, QuestionCreateDto } from '@models/dtos';
import { validationMiddleware } from '@middlewares';
import { authorize } from '@middlewares';
import { IOC } from '@ioc';
import { QuestionController } from '@controllers/question.controller';

export class QuestionRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/questions";
        const ctrl = IOC.container.get(QuestionController);

        app.route(root + '/')
            .get(authorize, (req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/:id')
            .get(authorize, (req, res, next) => ctrl.find(req, res, next));

        app.route(root + '/')
            .post(validationMiddleware(QuestionCreateDto), authorize, (req, res, next) => ctrl.insert(req, res, next));

        app.route(root + '/:id')
            .put(validationMiddleware(QuestionUpdateDto), authorize, (req, res, next) => ctrl.update(req, res, next));

        app.route(root + '/:id')
            .delete(authorize, (req, res, next) => ctrl.delete(req, res, next));

    }
}
