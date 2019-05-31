"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dtos_1 = require("@models/dtos");
const _middlewares_1 = require("@middlewares");
const _middlewares_2 = require("@middlewares");
const _ioc_1 = require("@ioc");
const project_controller_1 = require("@controllers/project.controller");
class ProjectRoutes {
    static configureRoutes(app) {
        const root = "/api/projects";
        const ctrl = _ioc_1.IOC.container.get(project_controller_1.ProjectController);
        app.route(root + '/company/:companyId')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.listByCompany(req, res, next));
        app.route(root + '/:id')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post(_middlewares_1.validationMiddleware(dtos_1.ProjectCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put(_middlewares_1.validationMiddleware(dtos_1.ProjectUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));
        app.route(root + '/:id/assignProjectManager')
            .put(_middlewares_1.validationMiddleware(dtos_1.ProjectAssignManagerDto), _middlewares_2.authorize, (req, res, next) => ctrl.assignProjectManager(req, res, next));
        app.route(root + '/:id/start')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.start(req, res, next));
        app.route(root + '/:id/pause')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.pause(req, res, next));
    }
}
exports.ProjectRoutes = ProjectRoutes;
