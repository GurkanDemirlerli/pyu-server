"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const _middlewares_1 = require("@middlewares");
const _middlewares_2 = require("@middlewares");
const _ioc_1 = require("@ioc");
const company_controller_1 = require("@controllers/company.controller");
const dtos_1 = require("@models/dtos");
class CompanyRoutes {
    static configureRoutes(app) {
        const root = "/api/companies";
        const ctrl = _ioc_1.IOC.container.get(company_controller_1.CompanyController);
        app.route(root + '/')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));
        app.route(root + '/:id')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post(_middlewares_1.validationMiddleware(dtos_1.CompanyCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put(_middlewares_1.validationMiddleware(dtos_1.CompanyUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));
        app.route(root + '/:id/requestMembership')
            .post(_middlewares_1.validationMiddleware(dtos_1.CompanyUserRegisterDto), _middlewares_2.authorize, (req, res, next) => ctrl.requestMembership(req, res, next));
        app.route(root + '/:id/acceptMembership')
            .put(_middlewares_2.authorize, (req, res, next) => ctrl.acceptMembership(req, res, next));
        //TODO declineMembership metodu ekle
    }
}
exports.CompanyRoutes = CompanyRoutes;
