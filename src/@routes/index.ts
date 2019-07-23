import { SubjectTaskRoutes } from './subject-task.routes';
import { WorkspaceRoutes } from './workspace.routes';
import { SubjectItemRoutes } from './subject-item.routes';
import * as express from 'express';


export class RouteBinder {
  public static configureRoutes(app: express.Application): void {
    SubjectItemRoutes.configureRoutes(app);
    WorkspaceRoutes.configureRoutes(app);
    SubjectTaskRoutes.configureRoutes(app);
  }
}
