import 'module-alias/register';

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
  IProjectMembershipRepository,
  IProjectRepository,
  IQuestionRepository,
  IStatusRepository,
  ITaskAssignmentRepository,
  ITaskRepository,
  IUserRepository,
  ICompanyMembershipRepository,
  IMembershipRequestRepository,
  ILabelRepository,
  ITaskLabelRepository,
  IStatusTemplateRepository,
  IAbstractStatusRepository,
  IProjectManagerRepository,
} from '../@repository/abstract';

import {
  AnswerRepository,
  CommentRepository,
  CompanyRepository,
  IssueRepository,
  ProjectMembershipRepository,
  ProjectRepository,
  QuestionRepository,
  StatusRepository,
  TaskAssignmentRepository,
  TaskRepository,
  UserRepository,
  CompanyMembershipRepository,
  MembershipRequestRepository,
  LabelRepository,
  TaskLabelRepository,
  StatusTemplateRepository,
  AbstractStatusRepository,
  ProjectManagerRepository,
} from '../@repository/concrete';

import {
  AnswerService,
  CommentService,
  CompanyService,
  IssueService,
  QuestionService,
  TaskService,
  UserService,
  ProjectService,
} from '../@services/concrete';

import {
  IAnswerService,
  ICommentService,
  ICompanyService,
  IIssueService,
  IQuestionService,
  ITaskService,
  IUserService,
  IProjectService
} from '../@services/abstract';

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
      .bind<ICompanyMembershipRepository>(InjectTypes.Repository.COMPANY_MEMBERSHIP)
      .to(CompanyMembershipRepository);

    container
      .bind<IMembershipRequestRepository>(InjectTypes.Repository.MEMBERSHIP_REQUEST)
      .to(MembershipRequestRepository);

    container
      .bind<IIssueRepository>(InjectTypes.Repository.ISSUE)
      .to(IssueRepository);

    container
      .bind<IProjectMembershipRepository>(InjectTypes.Repository.PROJECT_MEMBERSHIP)
      .to(ProjectMembershipRepository);

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

    container
      .bind<ITaskAssignmentRepository>(InjectTypes.Repository.TASK_ASSIGNMENT)
      .to(TaskAssignmentRepository)

    container
      .bind<ITaskLabelRepository>(InjectTypes.Repository.TASK_LABEL)
      .to(TaskLabelRepository)

    container
      .bind<ILabelRepository>(InjectTypes.Repository.LABEL)
      .to(LabelRepository)

    container
      .bind<IStatusTemplateRepository>(InjectTypes.Repository.STATUS_TEMPLATE)
      .to(StatusTemplateRepository)

    container
      .bind<IAbstractStatusRepository>(InjectTypes.Repository.ABSTRACT_STATUS)
      .to(AbstractStatusRepository)

    container
      .bind<IProjectManagerRepository>(InjectTypes.Repository.PROJECT_MANAGER)
      .to(ProjectManagerRepository)

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
