import { validationMiddleware } from '../middlewares/validation.middleware';
import { LoginDto } from './../_models/login.dto.model';
import { UserController } from './../@controllers/user.controller';
import * as express from 'express';
import { IOC } from '../ioc';

export class UserRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/users";
        const ctrl = IOC.container.get(UserController);

        // app.route(root + '/')
        //     .get((req, res, next) => ctrl.list(req, res, next));

        // app.route(root + '/')
        //     .post((req, res, next) => ctrl.insert(req, res, next));

        app.route(root + '/register')
            .post((req, res, next) => ctrl.register(req, res, next));

        app.route(root + '/login')
            .post(validationMiddleware(LoginDto), (req, res, next) => ctrl.login(req, res, next));

    }
}