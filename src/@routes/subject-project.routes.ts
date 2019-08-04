import { ProjectCreateDto } from './../_models/dtos/project/project-create.dto';
import * as express from 'express';
import 'reflect-metadata';
import { IOC } from '../ioc';
import { SubjectProjectController } from '../@controllers/subject-project.controller';
import { validationMiddleware, authorize } from '../middlewares';

export class SubjectProjectRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/projects";
        const ctrl = IOC.container.get(SubjectProjectController);

        app.route(root + '/')
            .get((req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/:id')
            .get((req, res, next) => ctrl.find(req, res, next));

        app.route(root + '/')
            .post(authorize, validationMiddleware(ProjectCreateDto), (req, res, next) => ctrl.insert(req, res, next));

        app.route(root + '/:id')
            .put((req, res, next) => ctrl.update(req, res, next));

        app.route(root + '/:id')
            .delete((req, res, next) => ctrl.delete(req, res, next));
    }
}