import { ProjectController } from './../@controllers/project.controller';
import * as express from 'express';
import { IOC } from '../ioc';
import 'reflect-metadata';
import { authorize } from '../middlewares/authorize.middleware';
import { validationMiddleware } from '@middlewares/validation.middleware';
import { ProjectCreateDto } from '@models/dtos/project/project-create.dto';

export class ProjectRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/projects";
        const ctrl = IOC.container.get(ProjectController);

        app.route(root + '/')
            .get((req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/')
            .post(validationMiddleware(ProjectCreateDto) , authorize, (req, res, next) => ctrl.insert(req, res, next));


    }
}
