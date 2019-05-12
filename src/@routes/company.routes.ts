import * as express from 'express';
import 'reflect-metadata';
import { validationMiddleware } from '@middlewares';
import { authorize } from '@middlewares';
import { IOC } from '@ioc';
import { CompanyController } from '@controllers/company.controller';
import { CompanyCreateDto, CompanyUpdateDto } from '@models/dtos';

export class CompanyRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/companies";
        const ctrl = IOC.container.get(CompanyController);

        app.route(root + '/')
            .get(authorize, (req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/:id')
            .get(authorize, (req, res, next) => ctrl.find(req, res, next));

        app.route(root + '/')
            .post(validationMiddleware(CompanyCreateDto), authorize, (req, res, next) => ctrl.insert(req, res, next));

        app.route(root + '/:id')
            .put(validationMiddleware(CompanyUpdateDto), authorize, (req, res, next) => ctrl.update(req, res, next));

        app.route(root + '/:id')
            .delete(authorize, (req, res, next) => ctrl.delete(req, res, next));



    }
}
