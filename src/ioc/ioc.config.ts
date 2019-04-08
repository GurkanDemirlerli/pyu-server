import { AuthService } from './../@services/concrete/auth.service';
import { IAuthService } from './../@services/abstract/i-auth.service';
import { UserController } from './../@controllers/user.controller';
import { CommentController } from './../@controllers/comment.controller';
import { TaskController } from './../@controllers/task.controller';
import {
    ICommentRepository,
    ITaskRepository,
    IUserRepository
} from './../@repository/abstract';

import {
    CommentRepository,
    TaskRepository,
    UserRepository
} from './../@repository/concrete';



import { Container } from 'inversify';

import 'reflect-metadata';
import { InjectTypes } from './inject-types';

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
            .bind<ITaskRepository>(InjectTypes.Repository.TASK)
            .to(TaskRepository);


        container
            .bind<ICommentRepository>(InjectTypes.Repository.COMMENT)
            .to(CommentRepository);

        container
            .bind<IUserRepository>(InjectTypes.Repository.USER)
            .to(UserRepository);

        container
            .bind<IAuthService>(InjectTypes.Service.AUTH)
            .to(AuthService);

        return container;
    }
}