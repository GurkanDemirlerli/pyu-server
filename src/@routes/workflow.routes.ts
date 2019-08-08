import * as express from 'express';
import 'reflect-metadata';
import { IOC } from '../ioc';
import { WorkflowController } from '../@controllers/workflow.controller';
import { authorize } from 'src/middlewares';

export class WorkflowRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/workflows";
        const ctrl = IOC.container.get(WorkflowController);

        app.route(root + '/')
            .get((req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/:id')
            .get((req, res, next) => ctrl.find(req, res, next));

        app.route(root + '/getActiveWorkflow/:folderId')
            .get(authorize, (req, res, next) => ctrl.getActiveWorkflow(req, res, next));

        app.route(root + '/')
            .post((req, res, next) => ctrl.insert(req, res, next));

        app.route(root + '/:id')
            .put((req, res, next) => ctrl.update(req, res, next));

        app.route(root + '/:id')
            .delete((req, res, next) => ctrl.delete(req, res, next));
    }
}