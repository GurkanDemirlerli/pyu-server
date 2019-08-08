import * as express from 'express';
import 'reflect-metadata';
import { IOC } from '../ioc';
import { WorkspaceController } from '../@controllers/workspace.controller';
import { authorize } from 'src/middlewares';

export class WorkspaceRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/workspaces";
        const ctrl = IOC.container.get(WorkspaceController);

        app.route(root + '/')
            .get(authorize, (req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/:id')
            .get((req, res, next) => ctrl.find(req, res, next));

        app.route(root + '/')
            .post((req, res, next) => ctrl.insert(req, res, next));

        app.route(root + '/:id')
            .put((req, res, next) => ctrl.update(req, res, next));

        app.route(root + '/:id')
            .delete((req, res, next) => ctrl.delete(req, res, next));
    }
}