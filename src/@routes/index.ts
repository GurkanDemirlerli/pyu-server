import { UserRoutes } from './user.routes';
import { ProjectRoutes } from './project.routes';
import { CompanyRoutes } from './company.routes';
import * as express from 'express';
import { TaskRoutes } from './task.routes';
import { CommentRoutes } from './comment.routes';

export class RouteBinder {
    public static configureRoutes(app: express.Application): void {
        TaskRoutes.configureRoutes(app);
        CommentRoutes.configureRoutes(app);
        UserRoutes.configureRoutes(app);
        CompanyRoutes.configureRoutes(app);
        ProjectRoutes.configureRoutes(app);
    }
}