"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dtos_1 = require("@models/dtos");
const _middlewares_1 = require("@middlewares");
const _middlewares_2 = require("@middlewares");
const _ioc_1 = require("@ioc");
const question_controller_1 = require("@controllers/question.controller");
class QuestionRoutes {
    static configureRoutes(app) {
        const root = "/api/questions";
        const ctrl = _ioc_1.IOC.container.get(question_controller_1.QuestionController);
        app.route(root + '/')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));
        app.route(root + '/:id')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post(_middlewares_1.validationMiddleware(dtos_1.QuestionCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put(_middlewares_1.validationMiddleware(dtos_1.QuestionUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));
    }
}
exports.QuestionRoutes = QuestionRoutes;
