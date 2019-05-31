"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dtos_1 = require("@models/dtos");
const _middlewares_1 = require("@middlewares");
const _middlewares_2 = require("@middlewares");
const _ioc_1 = require("@ioc");
const issue_controller_1 = require("@controllers/issue.controller");
class IssueRoutes {
    static configureRoutes(app) {
        const root = "/api/issues";
        const ctrl = _ioc_1.IOC.container.get(issue_controller_1.IssueController);
        app.route(root + '/')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));
        app.route(root + '/:id')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post(_middlewares_1.validationMiddleware(dtos_1.IssueCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put(_middlewares_1.validationMiddleware(dtos_1.IssueUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));
    }
}
exports.IssueRoutes = IssueRoutes;
