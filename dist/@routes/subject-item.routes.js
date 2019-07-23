"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const ioc_1 = require("../ioc");
const subject_item_controller_1 = require("../@controllers/subject-item.controller");
class SubjectItemRoutes {
    static configureRoutes(app) {
        const root = "/api/subjects";
        const ctrl = ioc_1.IOC.container.get(subject_item_controller_1.SubjectItemController);
        app.route(root + '/ancestors/:id')
            .get((req, res, next) => ctrl.getAncestors(req, res, next));
        app.route(root + '/descendants/:id')
            .get((req, res, next) => ctrl.getDescendants(req, res, next));
        app.route(root + '/:id')
            .get((req, res, next) => ctrl.find(req, res, next));
    }
}
exports.SubjectItemRoutes = SubjectItemRoutes;
//# sourceMappingURL=subject-item.routes.js.map