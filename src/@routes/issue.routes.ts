import * as express from 'express';
import 'reflect-metadata';
import { IssueUpdateDto, IssueCreateDto } from '../_models/dtos';
import { validationMiddleware } from '../middlewares';
import { authorize } from '../middlewares';
import { IOC } from '../ioc';
import { IssueController } from '../@controllers/issue.controller';

export class IssueRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/issues";
        const ctrl = IOC.container.get(IssueController);

        app.route(root + '/')
            .get(authorize, (req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/:id')
            .get(authorize, (req, res, next) => ctrl.find(req, res, next));

        app.route(root + '/')
            .post(validationMiddleware(IssueCreateDto), authorize, (req, res, next) => ctrl.insert(req, res, next));

        app.route(root + '/:id')
            .put(validationMiddleware(IssueUpdateDto), authorize, (req, res, next) => ctrl.update(req, res, next));

        app.route(root + '/:id')
            .delete(authorize, (req, res, next) => ctrl.delete(req, res, next));

    }
}
