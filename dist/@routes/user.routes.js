"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_1 = require("../ioc");
const _middlewares_1 = require("@middlewares");
const dtos_1 = require("@models/dtos");
const user_controller_1 = require("@controllers/user.controller");
class UserRoutes {
    static configureRoutes(app) {
        const root = "/api/users";
        const ctrl = ioc_1.IOC.container.get(user_controller_1.UserController);
        app.route(root + '/register')
            .post((req, res, next) => ctrl.register(req, res, next));
        app.route(root + '/login')
            .post(_middlewares_1.validationMiddleware(dtos_1.LoginDto), (req, res, next) => ctrl.login(req, res, next));
    }
}
exports.UserRoutes = UserRoutes;
