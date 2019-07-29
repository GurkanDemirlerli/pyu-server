"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const ioc_1 = require("../ioc");
const subject_comment_controller_1 = require("../@controllers/subject-comment.controller");
class SubjectCommentRoutes {
    static configureRoutes(app) {
        const root = "/api/mocks";
        const ctrl = ioc_1.IOC.container.get(subject_comment_controller_1.SubjectCommentController);
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
exports.SubjectCommentRoutes = SubjectCommentRoutes;
//# sourceMappingURL=subject-comment.routes.js.map