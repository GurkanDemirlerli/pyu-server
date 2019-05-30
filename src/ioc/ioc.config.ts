import { AnswerController } from '../@controllers/answer.controller';
import { CommentController } from '../@controllers/comment.controller';
import { CompanyController } from '../@controllers/company.controller';
import { IssueController } from '../@controllers/issue.controller';
import { ProjectController } from '../@controllers/project.controller';
import { QuestionController } from '../@controllers/question.controller';
import { TaskController } from '../@controllers/task.controller';
import { UserController } from '../@controllers/user.controller';

import {
    IAnswerRepository,
    ICommentRepository,
    ICompanyRepository,
    IIssueRepository,
    IProjectRepository,
    IQuestionRepository,
    IStatusRepository,
    ITaskRepository,
    IUserRepository,
    ICompanyMemberRepository,

} from './../@repository/abstract';

import {
    AnswerRepository,
    CommentRepository,
    CompanyRepository,
    IssueRepository,
    ProjectRepository,
    QuestionRepository,
    StatusRepository,
    TaskRepository,
    UserRepository,
    CompanyMemberRepository,
} from './../@repository/concrete';

import {
    AnswerService,
    CommentService,
    CompanyService,
    IssueService,
    ProjectService,
    QuestionService,
    TaskService,
    UserService,
} from './../@services/concrete';

import {
    IAnswerService,
    ICommentService,
    ICompanyService,
    IIssueService,
    IProjectService,
    IQuestionService,
    ITaskService,
    IUserService,
} from './../@services/abstract';



import { Container } from 'inversify';

import 'reflect-metadata';
import { InjectTypes } from './inject-types';

export module IOC {
    export const container = new Container();
    export function configureContainer(): Container {

        //CONTROLLERS

        container
            .bind<AnswerController>(AnswerController)
            .toSelf();

        container
            .bind<CommentController>(CommentController)
            .toSelf();


        container
            .bind<CompanyController>(CompanyController)
            .toSelf();

        container
            .bind<IssueController>(IssueController)
            .toSelf();

        container
            .bind<ProjectController>(ProjectController)
            .toSelf();

        container
            .bind<QuestionController>(QuestionController)
            .toSelf();

        container
            .bind<TaskController>(TaskController)
            .toSelf();

        container
            .bind<UserController>(UserController)
            .toSelf();


        // REPOSITORIES

        container
            .bind<IAnswerRepository>(InjectTypes.Repository.ANSWER)
            .to(AnswerRepository);

        container
            .bind<ICommentRepository>(InjectTypes.Repository.COMMENT)
            .to(CommentRepository);

        container
            .bind<ICompanyRepository>(InjectTypes.Repository.COMPANY)
            .to(CompanyRepository);

        container
            .bind<ICompanyMemberRepository>(InjectTypes.Repository.COMPANY_MEMBER)
            .to(CompanyMemberRepository);

        container
            .bind<IIssueRepository>(InjectTypes.Repository.ISSUE)
            .to(IssueRepository);

        container
            .bind<IProjectRepository>(InjectTypes.Repository.PROJECT)
            .to(ProjectRepository);

        container
            .bind<IQuestionRepository>(InjectTypes.Repository.QUESTION)
            .to(QuestionRepository);

        container
            .bind<IStatusRepository>(InjectTypes.Repository.STATUS)
            .to(StatusRepository);


        container
            .bind<ITaskRepository>(InjectTypes.Repository.TASK)
            .to(TaskRepository);

        container
            .bind<IUserRepository>(InjectTypes.Repository.USER)
            .to(UserRepository);


        // SERVICES


        container
            .bind<IAnswerService>(InjectTypes.Service.ANSWER)
            .to(AnswerService);

        container
            .bind<ICommentService>(InjectTypes.Service.COMMENT)
            .to(CommentService);

        container
            .bind<ICompanyService>(InjectTypes.Service.COMPANY)
            .to(CompanyService);

        container
            .bind<IIssueService>(InjectTypes.Service.ISSUE)
            .to(IssueService);

        container
            .bind<IProjectService>(InjectTypes.Service.PROJECT)
            .to(ProjectService);

        container
            .bind<IQuestionService>(InjectTypes.Service.QUESTION)
            .to(QuestionService);

        container
            .bind<ITaskService>(InjectTypes.Service.TASK)
            .to(TaskService);

        container
            .bind<IUserService>(InjectTypes.Service.USER)
            .to(UserService);

        return container;
    }
}
