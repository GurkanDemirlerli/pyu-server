import * as express from 'express';
import 'reflect-metadata';
import { TaskUpdateDto, TaskCreateDto, TaskStatusUpdateDto } from '@models/dtos';
import { validationMiddleware } from '@middlewares';
import { authorize } from '@middlewares';
import { IOC } from '@ioc';
import { TaskController } from '@controllers/task.controller';

export class TaskRoutes {
  public static configureRoutes(app: express.Application): void {
    const root = "/api/tasks";
    const ctrl = IOC.container.get(TaskController);

    app.route(root + '/')
      .get(authorize, (req, res, next) => ctrl.list(req, res, next));

    app.route(root + '/:id')
      .get(authorize, (req, res, next) => ctrl.find(req, res, next));

    app.route(root + '/')
      .post(validationMiddleware(TaskCreateDto), authorize, (req, res, next) => ctrl.insert(req, res, next));

    app.route(root + '/:id')
      .put(validationMiddleware(TaskUpdateDto), authorize, (req, res, next) => ctrl.update(req, res, next));

    app.route(root + '/:id')
      .delete(authorize, (req, res, next) => ctrl.delete(req, res, next));

    app.route(root + '/:id/updateStatus')
      .put(validationMiddleware(TaskStatusUpdateDto), authorize, (req, res, next) => ctrl.updateStatus(req, res, next));

    app.route(root + '/:id/convertToProject')
      .put(authorize, (req, res, next) => ctrl.convertToProject(req, res, next));

  }
}
