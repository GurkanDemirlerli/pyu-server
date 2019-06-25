import * as express from 'express';
import 'reflect-metadata';
import { validationMiddleware } from '@middlewares';
import { authorize } from '@middlewares';
import { IOC } from '@ioc';
import { SubProjectController } from '@controllers/sub-project.controller';

export class SubProjectRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/subprojects";
        const ctrl = IOC.container.get(SubProjectController);

        app.route(root + '/:id')
            .get(authorize, (req, res, next) => ctrl.find(req, res, next));

    }
}
