import * as express from 'express';
import 'reflect-metadata';
import { IOC } from '../ioc';
import { AccountController } from '../@controllers/account.controller';
import { validationMiddleware } from '../middlewares';
import { LoginDto } from '../_models/dtos';

export class AccountRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/accounts";
        const ctrl = IOC.container.get(AccountController);

        app.route(root + '/register')
            .post((req, res, next) => ctrl.register(req, res, next));

        app.route(root + '/login')
            .post(validationMiddleware(LoginDto), (req, res, next) => ctrl.login(req, res, next));


    }
}