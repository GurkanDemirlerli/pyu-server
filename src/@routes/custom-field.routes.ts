import * as express from 'express';
import 'reflect-metadata';
import { IOC } from '../ioc';
import { CustomFieldController } from '../@controllers/custom-field.controller';

export class CustomFieldRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/custom-fields";
        const ctrl = IOC.container.get(CustomFieldController);

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