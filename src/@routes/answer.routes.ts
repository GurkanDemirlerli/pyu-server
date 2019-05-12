import * as express from 'express';
import 'reflect-metadata';
import { AnswerUpdateDto, AnswerCreateDto } from '@models/dtos';
import { validationMiddleware } from '@middlewares';
import { authorize } from '@middlewares';
import { IOC } from '@ioc';
import { AnswerController } from '@controllers/answer.controller';

export class AnswerRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/answers";
        const ctrl = IOC.container.get(AnswerController);

        app.route(root + '/')
            .get(authorize, (req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/:id')
            .get(authorize, (req, res, next) => ctrl.find(req, res, next));

        app.route(root + '/')
            .post(validationMiddleware(AnswerCreateDto), authorize, (req, res, next) => ctrl.insert(req, res, next));

        app.route(root + '/:id')
            .put(validationMiddleware(AnswerUpdateDto), authorize, (req, res, next) => ctrl.update(req, res, next));

        app.route(root + '/:id')
            .delete(authorize, (req, res, next) => ctrl.delete(req, res, next));

    }
}
