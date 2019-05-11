import { CompanyController } from './../@controllers/company.controller';
import * as express from 'express';
import { IOC } from '../ioc';
import 'reflect-metadata';
import { authorize } from '../middlewares/authorize.middleware';
import { CompanyCreateDto } from '@models/dtos/company/company-create.dto';
import { validationMiddleware } from '@middlewares/validation.middleware';

export class CompanyRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/companies";
        const ctrl = IOC.container.get(CompanyController);

        app.route(root + '/')
            .get((req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/')
            .post(validationMiddleware(CompanyCreateDto) , authorize, (req, res, next) => ctrl.insert(req, res, next));

    }
}
