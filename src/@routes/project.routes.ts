import * as express from 'express';
import 'reflect-metadata';
import { ProjectUpdateDto, ProjectCreateDto, ProjectAssignManagerDto } from '@models/dtos';
import { validationMiddleware } from '@middlewares';
import { authorize } from '@middlewares';
import { IOC } from '@ioc';
import { ProjectController } from '@controllers/project.controller';

export class ProjectRoutes {
  public static configureRoutes(app: express.Application): void {
    const root = "/api/projects"; //TODO rootProjects yap
    const ctrl = IOC.container.get(ProjectController);

    //verilen companyId'ye gore projeleri getirir
    app.route(root + '/company/:companyId')
      .get(authorize, (req, res, next) => ctrl.listByCompany(req, res, next));

    app.route(root + '/:id')
      .get(authorize, (req, res, next) => ctrl.find(req, res, next));

    app.route(root + '/')
      .get(authorize, (req, res, next) => ctrl.list(req, res, next));

    app.route(root + '/')
      .post(validationMiddleware(ProjectCreateDto), authorize, (req, res, next) => ctrl.insert(req, res, next));

    app.route(root + '/:id')
      .put(validationMiddleware(ProjectUpdateDto), authorize, (req, res, next) => ctrl.update(req, res, next));

    app.route(root + '/:id')
      .delete(authorize, (req, res, next) => ctrl.delete(req, res, next));

    app.route(root + '/:id/assignProjectManager')
      .put(validationMiddleware(ProjectAssignManagerDto), authorize, (req, res, next) => ctrl.assignProjectManager(req, res, next));

    app.route(root + '/:id/addMember')
      .post(validationMiddleware(ProjectAssignManagerDto), authorize, (req, res, next) => ctrl.addMember(req, res, next));

    app.route(root + '/:id/members')
      .get(authorize, (req, res, next) => ctrl.getMembers(req, res, next));

    app.route(root + '/:id/start')
      .get(authorize, (req, res, next) => ctrl.start(req, res, next));

    app.route(root + '/:id/pause')
      .get(authorize, (req, res, next) => ctrl.pause(req, res, next));



  }
}
