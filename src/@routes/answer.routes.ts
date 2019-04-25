import { AnswerController } from './../@controllers/answer.controller';
import * as express from 'express';
import { IOC } from '../ioc';
import 'reflect-metadata';
export class AnswerRoutes {
    public static configureRoutes(app: express.Application): void {
        const root = "/api/answers";
        const ctrl = IOC.container.get(AnswerController);
        
        app.route(root + '/')
            .get((req, res, next) => ctrl.list(req, res, next));

        app.route(root + '/')
            .post((req, res, next) => ctrl.insert(req, res, next));

    }
}