"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const ioc_1 = require("../ioc");
const work_schedule_exclusion_controller_1 = require("../@controllers/work-schedule-exclusion.controller");
class WorkScheduleExclusionRoutes {
    static configureRoutes(app) {
        const root = "/api/mocks";
        const ctrl = ioc_1.IOC.container.get(work_schedule_exclusion_controller_1.WorkScheduleExclusionController);
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
exports.WorkScheduleExclusionRoutes = WorkScheduleExclusionRoutes;
//# sourceMappingURL=work-schedule-exclusion.routes.js.map