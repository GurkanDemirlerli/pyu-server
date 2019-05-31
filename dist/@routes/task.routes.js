"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dtos_1 = require("@models/dtos");
const _middlewares_1 = require("@middlewares");
const _middlewares_2 = require("@middlewares");
const _ioc_1 = require("@ioc");
const task_controller_1 = require("@controllers/task.controller");
class TaskRoutes {
    static configureRoutes(app) {
        const root = "/api/tasks";
        const ctrl = _ioc_1.IOC.container.get(task_controller_1.TaskController);
        app.route(root + '/')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));
        app.route(root + '/:id')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post(_middlewares_1.validationMiddleware(dtos_1.TaskCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put(_middlewares_1.validationMiddleware(dtos_1.TaskUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));
        app.route(root + '/:id/updateStatus')
            .put(_middlewares_1.validationMiddleware(dtos_1.TaskStatusUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.updateStatus(req, res, next));
    }
}
exports.TaskRoutes = TaskRoutes;
