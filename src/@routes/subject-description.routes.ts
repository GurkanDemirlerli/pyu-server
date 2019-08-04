import * as express from 'express';
import 'reflect-metadata';
import { IOC } from '../ioc';
import { SubjectDescriptionController } from '../@controllers/subject-description.controller';

export class SubjectDescriptionRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/subject-descriptions";
        const ctrl = IOC.container.get(SubjectDescriptionController);

        app.route(root + '/')
            .get((req, res, next) => ctrl.list(req, res, next));

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