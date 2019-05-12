import * as express from 'express';
import 'reflect-metadata';
import { ProjectUpdateDto, ProjectCreateDto } from '@models/dtos';
import { validationMiddleware } from '@middlewares';
import { authorize } from '@middlewares';
import { IOC } from '@ioc';
import { ProjectController } from '@controllers/project.controller';

export class ProjectRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/projects";
        const ctrl = IOC.container.get(ProjectController);

        app.route(root + '/')
            .get(authorize, (req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/:id')
            .get(authorize, (req, res, next) => ctrl.find(req, res, next));

        app.route(root + '/')
            .post(validationMiddleware(ProjectCreateDto), authorize, (req, res, next) => ctrl.insert(req, res, next));

        app.route(root + '/:id')
            .put(validationMiddleware(ProjectUpdateDto), authorize, (req, res, next) => ctrl.update(req, res, next));

        app.route(root + '/:id')
            .delete(authorize, (req, res, next) => ctrl.delete(req, res, next));

    }
}
