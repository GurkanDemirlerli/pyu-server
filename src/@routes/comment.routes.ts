import { CommentController } from './../@controllers/comment.controller';
import * as express from 'express';
import { IOC } from '../ioc';
import 'reflect-metadata';
import { CommentCreateDto } from '@models/dtos/comment/comment-create.dto';
import { validationMiddleware } from '@middlewares/validation.middleware';
import { authorize } from '@middlewares/authorize.middleware';

export class CommentRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/comments";
        const ctrl = IOC.container.get(CommentController);

        app.route(root + '/')
            .get((req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/')
            .post(validationMiddleware(CommentCreateDto) ,authorize ,(req, res, next) => ctrl.insert(req, res, next));

    }
}
