"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const ioc_1 = require("../ioc");
const subject_task_controller_1 = require("../@controllers/subject-task.controller");
class SubjectTaskRoutes {
    static configureRoutes(app) {
        const root = "/api/tasks";
        const ctrl = ioc_1.IOC.container.get(subject_task_controller_1.SubjectTaskController);
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
exports.SubjectTaskRoutes = SubjectTaskRoutes;
//# sourceMappingURL=subject-task.routes.js.map