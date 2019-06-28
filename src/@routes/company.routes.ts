import * as express from 'express';
import 'reflect-metadata';
import { validationMiddleware } from '@middlewares';
import { authorize } from '@middlewares';
import { IOC } from '@ioc';
import { CompanyController } from '@controllers/company.controller';
import { CompanyCreateDto, CompanyUpdateDto, CompanyUserRegisterDto, AddStatusTemplateDto } from '@models/dtos';

export class CompanyRoutes {
  public static configureRoutes(app: express.Application): void {
    const root = "/api/companies";
    const ctrl = IOC.container.get(CompanyController);

    app.route(root + '/')
      .get(authorize, (req, res, next) => ctrl.list(req, res, next));

    app.route(root + '/:id')
      .get(authorize, (req, res, next) => ctrl.find(req, res, next));

    app.route(root + '/')
      .post(validationMiddleware(CompanyCreateDto), authorize, (req, res, next) => ctrl.insert(req, res, next));

    app.route(root + '/:id')
      .put(validationMiddleware(CompanyUpdateDto), authorize, (req, res, next) => ctrl.update(req, res, next));

    app.route(root + '/:id')
      .delete(authorize, (req, res, next) => ctrl.delete(req, res, next));

    //TODO asagidaki 2 fonksiyon duzenlenecek baska controllere eklenecek
    app.route(root + '/:id/requestMembership')
      .post(validationMiddleware(CompanyUserRegisterDto), authorize, (req, res, next) => ctrl.requestMembership(req, res, next));

    app.route(root + '/:id/acceptMembership')
      .put(authorize, (req, res, next) => ctrl.acceptMembership(req, res, next));

    //TODO declineMembership metodu ekle

    app.route(root + '/:id/addStatusTemplate')
      .post(validationMiddleware(AddStatusTemplateDto), authorize, (req, res, next) => ctrl.addStatusTemplate(req, res, next));

    app.route(root + '/:id/showTree')
      .get(authorize, (req, res, next) => ctrl.showTree(req, res, next));

    app.route(root + '/:id/statusTemplates')
      .get(authorize, (req, res, next) => ctrl.statusTemplates(req, res, next));

    app.route(root + '/:id/getMembers')
      .get(authorize, (req, res, next) => ctrl.getMembers(req, res, next));
  }
}
