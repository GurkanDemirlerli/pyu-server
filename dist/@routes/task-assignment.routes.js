"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const ioc_1 = require("../ioc");
const task_assignment_controller_1 = require("../@controllers/task-assignment.controller");
class TaskAssignmentRoutes {
    static configureRoutes(app) {
        const root = "/api/mocks";
        const ctrl = ioc_1.IOC.container.get(task_assignment_controller_1.TaskAssignmentController);
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
exports.TaskAssignmentRoutes = TaskAssignmentRoutes;
//# sourceMappingURL=task-assignment.routes.js.map