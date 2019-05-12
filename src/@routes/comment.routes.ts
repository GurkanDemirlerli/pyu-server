import * as express from 'express';
import 'reflect-metadata';
import { CommentUpdateDto, CommentCreateDto } from '@models/dtos';
import { validationMiddleware } from '@middlewares';
import { authorize } from '@middlewares';
import { IOC } from '@ioc';
import { CommentController } from '@controllers/comment.controller';

export class CommentRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/comments";
        const ctrl = IOC.container.get(CommentController);

        app.route(root + '/')
            .get(authorize, (req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/:id')
            .get(authorize, (req, res, next) => ctrl.find(req, res, next));

        app.route(root + '/')
            .post(validationMiddleware(CommentCreateDto), authorize, (req, res, next) => ctrl.insert(req, res, next));

        app.route(root + '/:id')
            .put(validationMiddleware(CommentUpdateDto), authorize, (req, res, next) => ctrl.update(req, res, next));

        app.route(root + '/:id')
            .delete(authorize, (req, res, next) => ctrl.delete(req, res, next));

    }
}
