import * as express from 'express';
import 'reflect-metadata';
import { IOC } from '../ioc';
import { SubjectItemController } from '../@controllers/subject-item.controller';

export class SubjectItemRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/subjects";
        const ctrl = IOC.container.get(SubjectItemController);

        app.route(root + '/ancestors/:id')
            .get((req, res, next) => ctrl.getAncestors(req, res, next));

        app.route(root + '/descendants/:id')
            .get((req, res, next) => ctrl.getDescendants(req, res, next));

        app.route(root + '/:id')
            .get((req, res, next) => ctrl.find(req, res, next));

        app.route(root + '/move')
            .post((req, res, next) => ctrl.move(req, res, next));

    }
}