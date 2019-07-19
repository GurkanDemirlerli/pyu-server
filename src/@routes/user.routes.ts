import * as express from 'express';
import { IOC } from '../ioc';
import { validationMiddleware } from '../middlewares';
import { LoginDto } from '../_models/dtos';
import { UserController } from '../@controllers/user.controller';

export class UserRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/users";
        const ctrl = IOC.container.get(UserController);

        app.route(root + '/register')
            .post((req, res, next) => ctrl.register(req, res, next));

        app.route(root + '/login')
            .post(validationMiddleware(LoginDto), (req, res, next) => ctrl.login(req, res, next));
    }
}
