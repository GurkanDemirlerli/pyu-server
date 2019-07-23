import { SubjectItemController } from './../@controllers/subject-item.controller';
import { SubjectTaskController } from './../@controllers/subject-task.controller';
import { WorkspaceController } from './../@controllers/workspace.controller';
import {
  ISubjectItemRepository,
  ISubjectTaskRepository,
  IWorkspaceRepository
} from '../@repository/abstract';

import {
  SubjectItemRepository,
  SubjectTaskRepository,
  WorkspaceRepository
} from '../@repository/concrete';
import {
  WorkspaceService,
  SubjectTaskService,
  SubjectItemService
} from '../@services/concrete';

import {
  IWorkspaceService,
  ISubjectTaskService,
  ISubjectItemService
} from '../@services/abstract';

import { Container } from 'inversify';

import 'reflect-metadata';
import { InjectTypes } from './inject-types';

export module IOC {
  export const container = new Container();
  export function configureContainer(): Container {

    container
      .bind<WorkspaceController>(WorkspaceController)
      .toSelf();

    container
      .bind<SubjectTaskController>(SubjectTaskController)
      .toSelf();

    container
      .bind<SubjectItemController>(SubjectItemController)
      .toSelf();


    // container
    //   .bind<AnswerController>(AnswerController)
    //   .toSelf();

    //CONTROLLERS

    // container
    //   .bind<AnswerController>(AnswerController)
    //   .toSelf();

    // container
    //   .bind<CommentController>(CommentController)
    //   .toSelf();


    // container
    //   .bind<CompanyController>(CompanyController)
    //   .toSelf();

    // container
    //   .bind<IssueController>(IssueController)
    //   .toSelf();

    // container
    //   .bind<ProjectController>(ProjectController)
    //   .toSelf();

    // container
    //   .bind<QuestionController>(QuestionController)
    //   .toSelf();

    // container
    //   .bind<TaskController>(TaskController)
    //   .toSelf();

    // container
    //   .bind<UserController>(UserController)
    //   .toSelf();

    // // REPOSITORIES

    container
      .bind<ISubjectItemRepository>(InjectTypes.Repository.SUBJECT_ITEM)
      .to(SubjectItemRepository);

    container
      .bind<ISubjectTaskRepository>(InjectTypes.Repository.SUBJECT_TASK)
      .to(SubjectTaskRepository);

    container
      .bind<IWorkspaceRepository>(InjectTypes.Repository.WORKSPACE)
      .to(WorkspaceRepository);

    // container
    //   .bind<IAnswerRepository>(InjectTypes.Repository.ANSWER)
    //   .to(AnswerRepository);

    // container
    //   .bind<ICommentRepository>(InjectTypes.Repository.COMMENT)
    //   .to(CommentRepository);

    // container
    //   .bind<ICompanyRepository>(InjectTypes.Repository.COMPANY)
    //   .to(CompanyRepository);

    // container
    //   .bind<ICompanyMembershipRepository>(InjectTypes.Repository.COMPANY_MEMBERSHIP)
    //   .to(CompanyMembershipRepository);

    // container
    //   .bind<IMembershipRequestRepository>(InjectTypes.Repository.MEMBERSHIP_REQUEST)
    //   .to(MembershipRequestRepository);

    // container
    //   .bind<IIssueRepository>(InjectTypes.Repository.ISSUE)
    //   .to(IssueRepository);

    // container
    //   .bind<IProjectMembershipRepository>(InjectTypes.Repository.PROJECT_MEMBERSHIP)
    //   .to(ProjectMembershipRepository);

    // container
    //   .bind<IProjectRepository>(InjectTypes.Repository.PROJECT)
    //   .to(ProjectRepository);

    // container
    //   .bind<IQuestionRepository>(InjectTypes.Repository.QUESTION)
    //   .to(QuestionRepository);

    // container
    //   .bind<IStatusRepository>(InjectTypes.Repository.STATUS)
    //   .to(StatusRepository);

    // container
    //   .bind<ITaskRepository>(InjectTypes.Repository.TASK)
    //   .to(TaskRepository);

    // container
    //   .bind<IUserRepository>(InjectTypes.Repository.USER)
    //   .to(UserRepository);

    // container
    //   .bind<ITaskAssignmentRepository>(InjectTypes.Repository.TASK_ASSIGNMENT)
    //   .to(TaskAssignmentRepository)

    // container
    //   .bind<ITaskLabelRepository>(InjectTypes.Repository.TASK_LABEL)
    //   .to(TaskLabelRepository)

    // container
    //   .bind<ILabelRepository>(InjectTypes.Repository.LABEL)
    //   .to(LabelRepository)

    // container
    //   .bind<IStatusTemplateRepository>(InjectTypes.Repository.STATUS_TEMPLATE)
    //   .to(StatusTemplateRepository)

    // container
    //   .bind<IAbstractStatusRepository>(InjectTypes.Repository.ABSTRACT_STATUS)
    //   .to(AbstractStatusRepository)

    // container
    //   .bind<IProjectManagerRepository>(InjectTypes.Repository.PROJECT_MANAGER)
    //   .to(ProjectManagerRepository)

    // // SERVICES

    container
      .bind<IWorkspaceService>(InjectTypes.Service.WORKSPACE)
      .to(WorkspaceService);

    container
      .bind<ISubjectTaskService>(InjectTypes.Service.SUBJECT_TASK)
      .to(SubjectTaskService);

    container
      .bind<ISubjectItemService>(InjectTypes.Service.SUBJECT_ITEM)
      .to(SubjectItemService);

    // container
    //   .bind<IAnswerService>(InjectTypes.Service.ANSWER)
    //   .to(AnswerService);

    // container
    //   .bind<ICommentService>(InjectTypes.Service.COMMENT)
    //   .to(CommentService);

    // container
    //   .bind<ICompanyService>(InjectTypes.Service.COMPANY)
    //   .to(CompanyService);

    // container
    //   .bind<IIssueService>(InjectTypes.Service.ISSUE)
    //   .to(IssueService);

    // container
    //   .bind<IProjectService>(InjectTypes.Service.PROJECT)
    //   .to(ProjectService);

    // container
    //   .bind<IQuestionService>(InjectTypes.Service.QUESTION)
    //   .to(QuestionService);

    // container
    //   .bind<ITaskService>(InjectTypes.Service.TASK)
    //   .to(TaskService);

    // container
    //   .bind<IUserService>(InjectTypes.Service.USER)
    //   .to(UserService);

    return container;
  }
}
