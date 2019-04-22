import { TaskService } from '../@services/concrete/task.service';
import { AuthService } from '../@services/concrete/auth.service';
import { ITaskService } from '../@services/abstract/i-task.service';
import { IAuthService } from '../@services/abstract/i-auth.service';
import { UserController } from '../@controllers/user.controller';
import { CommentController } from '../@controllers/comment.controller';
import { TaskController } from '../@controllers/task.controller';
import { ProjectController } from '../@controllers/project.controller';
import { CompanyController } from '../@controllers/company.controller';
import {
    ICommentRepository,
    ITaskRepository,
    IUserRepository,
    ICompanyRepository,
    IProjectRepository,
    IStatusRepository
} from './../@repository/abstract';

import {
    CommentRepository,
    TaskRepository,
    UserRepository,
    CompanyRepository,
    ProjectRepository,
    StatusRepository
} from './../@repository/concrete';



import { Container } from 'inversify';

import 'reflect-metadata';
import { InjectTypes } from './inject-types';
import { ICompanyService } from '../@services/abstract/i-company.service';
import { CompanyService } from '../@services/concrete/company.service';
import { IProjectService } from '../@services/abstract/i-project.service';
import { ProjectService } from '../@services/concrete/project.service';

export module IOC {
    export const container = new Container();
    export function configureContainer(): Container {

        //CONTROLLERS
        container
            .bind<TaskController>(TaskController)
            .toSelf();

        container
            .bind<CommentController>(CommentController)
            .toSelf();

        container
            .bind<UserController>(UserController)
            .toSelf();

        container
            .bind<CompanyController>(CompanyController)
            .toSelf();

        container
            .bind<ProjectController>(ProjectController)
            .toSelf();


        // REPOSITORIES


        container
            .bind<ITaskRepository>(InjectTypes.Repository.TASK)
            .to(TaskRepository);


        container
            .bind<ICommentRepository>(InjectTypes.Repository.COMMENT)
            .to(CommentRepository);

        container
            .bind<IUserRepository>(InjectTypes.Repository.USER)
            .to(UserRepository);

        container
            .bind<ICompanyRepository>(InjectTypes.Repository.COMPANY)
            .to(CompanyRepository);

        container
            .bind<IProjectRepository>(InjectTypes.Repository.PROJECT)
            .to(ProjectRepository);

            container
            .bind<IStatusRepository>(InjectTypes.Repository.STATUS)
            .to(StatusRepository);

        // SERVICES

        container
            .bind<IAuthService>(InjectTypes.Service.AUTH)
            .to(AuthService);

        container
            .bind<ITaskService>(InjectTypes.Service.TASK)
            .to(TaskService);

        container
            .bind<ICompanyService>(InjectTypes.Service.COMPANY)
            .to(CompanyService);

        container
            .bind<IProjectService>(InjectTypes.Service.PROJECT)
            .to(ProjectService);

        return container;
    }
}