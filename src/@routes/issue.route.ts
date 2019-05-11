import { IssueController } from './../@controllers/issue.controller';
import * as express from 'express';
import { IOC } from '../ioc';
import 'reflect-metadata';
import { authorize } from '@middlewares/authorize.middleware';
import { validationMiddleware } from '@middlewares/validation.middleware';
import { IssueCreateDto } from '@models/dtos/issue/issue-create.dto';
export class IssueRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/issues";
        const ctrl = IOC.container.get(IssueController);

        app.route(root + '/')
            .get((req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/')
            .post(validationMiddleware(IssueCreateDto), authorize,(req, res, next) => ctrl.insert(req, res, next));
    }
}
