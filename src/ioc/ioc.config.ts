import { WorkspaceUserController } from './../@controllers/workspace-user.controller';
import { WorkspaceMemberController } from './../@controllers/workspace-member.controller';
import { WorkspaceGroupUserController } from './../@controllers/workspace-group-user.controller';
import { WorkflowController } from './../@controllers/workflow.controller';
import { WorkflowStatusController } from './../@controllers/workflow-status.controller';
import { WorkScheduleController } from './../@controllers/work-schedule.controller';
import { WorkScheduleWeekController } from './../@controllers/work-schedule-week.controller';
import { WorkScheduleExclusionController } from './../@controllers/work-schedule-exclusion.controller';
import { TaskDependencyController } from './../@controllers/task-dependency.controller';
import { TaskAssignmentController } from './../@controllers/task-assignment.controller';
import { SubjectProjectController } from './../@controllers/subject-project.controller';
import { SubjectFolderController } from './../@controllers/subject-folder.controller';
import { SubjectDomainController } from './../@controllers/subject-domain.controller';
import { SubjectDescriptionController } from './../@controllers/subject-description.controller';
import { SubjectCustomFieldController } from './../@controllers/subject-custom-field.controller';
import { SubjectCommentContentController } from './../@controllers/subject-comment-content.controller';
import { SubjectCommentController } from './../@controllers/subject-comment.controller';
import { GroupController } from './../@controllers/group.controller';
import { FolderSharingController } from './../@controllers/folder-sharing.controller';
import { FolderRoleController } from './../@controllers/folder-role.controller';
import { CustomFieldController } from './../@controllers/custom-field.controller';
import { AccountController } from './../@controllers/account.controller';
import { SubjectItemController } from './../@controllers/subject-item.controller';
import { SubjectTaskController } from './../@controllers/subject-task.controller';
import { WorkspaceController } from './../@controllers/workspace.controller';

import {
  IAccountRepository,
  ICustomFieldRepository,
  IFolderRoleRepository,
  IFolderSharingRepository,
  IGroupRepository,
  ISubjectCommentContentRepository,
  ISubjectCommentRepository,
  ISubjectCustomFieldRepository,
  ISubjectDescriptionRepository,
  ISubjectDomainRepository,
  ISubjectFolderRepository,
  ISubjectItemRepository,
  ISubjectProjectRepository,
  ISubjectTaskRepository,
  ITaskAssignmentRepository,
  ITaskDependencyRepository,
  IWorkScheduleExclusionRepository,
  IWorkScheduleWeekRepository,
  IWorkScheduleRepository,
  IWorkflowStatusRepository,
  IWorkflowRepository,
  IWorkspaceGroupUserRepository,
  IWorkspaceMemberRepository,
  IWorkspaceUserRepository,
  IWorkspaceRepository,
} from '../@repository/abstract';

import {
  AccountRepository,
  CustomFieldRepository,
  FolderRoleRepository,
  FolderSharingRepository,
  GroupRepository,
  SubjectCommentContentRepository,
  SubjectCommentRepository,
  SubjectCustomFieldRepository,
  SubjectDescriptionRepository,
  SubjectDomainRepository,
  SubjectFolderRepository,
  SubjectItemRepository,
  SubjectProjectRepository,
  SubjectTaskRepository,
  TaskAssignmentRepository,
  TaskDependencyRepository,
  WorkScheduleExclusionRepository,
  WorkScheduleWeekRepository,
  WorkScheduleRepository,
  WorkflowStatusRepository,
  WorkflowRepository,
  WorkspaceGroupUserRepository,
  WorkspaceMemberRepository,
  WorkspaceUserRepository,
  WorkspaceRepository,
} from '../@repository/concrete';
import {
  AccountService,
  CustomFieldService,
  FolderRoleService,
  FolderSharingService,
  GroupService,
  SubjectCommentContentService,
  SubjectCommentService,
  SubjectCustomFieldService,
  SubjectDescriptionService,
  SubjectDomainService,
  SubjectFolderService,
  SubjectItemService,
  SubjectProjectService,
  SubjectTaskService,
  TaskAssignmentService,
  TaskDependencyService,
  WorkScheduleExclusionService,
  WorkScheduleWeekService,
  WorkScheduleService,
  WorkflowStatusService,
  WorkflowService,
  WorkspaceGroupUserService,
  WorkspaceMemberService,
  WorkspaceUserService,
  WorkspaceService,
} from '../@services/concrete';

import {
  IAccountService,
  ICustomFieldService,
  IFolderRoleService,
  IFolderSharingService,
  IGroupService,
  ISubjectCommentContentService,
  ISubjectCommentService,
  ISubjectCustomFieldService,
  ISubjectDescriptionService,
  ISubjectDomainService,
  ISubjectFolderService,
  ISubjectItemService,
  ISubjectProjectService,
  ISubjectTaskService,
  ITaskAssignmentService,
  ITaskDependencyService,
  IWorkScheduleExclusionService,
  IWorkScheduleWeekService,
  IWorkScheduleService,
  IWorkflowStatusService,
  IWorkflowService,
  IWorkspaceGroupUserService,
  IWorkspaceMemberService,
  IWorkspaceUserService,
  IWorkspaceService,
} from '../@services/abstract';

import { Container } from 'inversify';

import 'reflect-metadata';
import { InjectTypes } from './inject-types';

export module IOC {
  export const container = new Container();
  export function configureContainer(): Container {

    //#region CONTROLLERS

    container
      .bind<AccountController>(AccountController)
      .toSelf();

    container
      .bind<CustomFieldController>(CustomFieldController)
      .toSelf();

    container
      .bind<FolderRoleController>(FolderRoleController)
      .toSelf();

    container
      .bind<FolderSharingController>(FolderSharingController)
      .toSelf();

    container
      .bind<GroupController>(GroupController)
      .toSelf();

    container
      .bind<SubjectCommentContentController>(SubjectCommentContentController)
      .toSelf();

    container
      .bind<SubjectCommentController>(SubjectCommentController)
      .toSelf();

    container
      .bind<SubjectCustomFieldController>(SubjectCustomFieldController)
      .toSelf();

    container
      .bind<SubjectDescriptionController>(SubjectDescriptionController)
      .toSelf();

    container
      .bind<SubjectDomainController>(SubjectDomainController)
      .toSelf();

    container
      .bind<SubjectFolderController>(SubjectFolderController)
      .toSelf();

    container
      .bind<SubjectItemController>(SubjectItemController)
      .toSelf();

    container
      .bind<SubjectProjectController>(SubjectProjectController)
      .toSelf();

    container
      .bind<SubjectTaskController>(SubjectTaskController)
      .toSelf();

    container
      .bind<TaskAssignmentController>(TaskAssignmentController)
      .toSelf();

    container
      .bind<TaskDependencyController>(TaskDependencyController)
      .toSelf();

    container
      .bind<WorkScheduleExclusionController>(WorkScheduleExclusionController)
      .toSelf();

    container
      .bind<WorkScheduleWeekController>(WorkScheduleWeekController)
      .toSelf();

    container
      .bind<WorkScheduleController>(WorkScheduleController)
      .toSelf();

    container
      .bind<WorkflowStatusController>(WorkflowStatusController)
      .toSelf();

    container
      .bind<WorkflowController>(WorkflowController)
      .toSelf();

    container
      .bind<WorkspaceGroupUserController>(WorkspaceGroupUserController)
      .toSelf();

    container
      .bind<WorkspaceMemberController>(WorkspaceMemberController)
      .toSelf();

    container
      .bind<WorkspaceUserController>(WorkspaceUserController)
      .toSelf();

    container
      .bind<WorkspaceController>(WorkspaceController)
      .toSelf();

 
    //#endregion

    //#region REPOSITORIES

    container
      .bind<IAccountRepository>(InjectTypes.Repository.ACCOUNT)
      .to(AccountRepository);

    container
      .bind<ICustomFieldRepository>(InjectTypes.Repository.CUSTOM_FIELD)
      .to(CustomFieldRepository);

    container
      .bind<IFolderRoleRepository>(InjectTypes.Repository.FOLDER_ROLE)
      .to(FolderRoleRepository);

    container
      .bind<IFolderSharingRepository>(InjectTypes.Repository.FOLDER_SHARING)
      .to(FolderSharingRepository);

    container
      .bind<IGroupRepository>(InjectTypes.Repository.GROUP)
      .to(GroupRepository);

    container
      .bind<ISubjectCommentContentRepository>(InjectTypes.Repository.SUBJECT_COMMENT_CONTENT)
      .to(SubjectCommentContentRepository);

    container
      .bind<ISubjectCommentRepository>(InjectTypes.Repository.SUBJECT_COMMENT)
      .to(SubjectCommentRepository);

    container
      .bind<ISubjectCustomFieldRepository>(InjectTypes.Repository.SUBJECT_CUSTOM_FIELD)
      .to(SubjectCustomFieldRepository);

    container
      .bind<ISubjectDescriptionRepository>(InjectTypes.Repository.SUBJECT_DESCRIPTION)
      .to(SubjectDescriptionRepository);

    container
      .bind<ISubjectDomainRepository>(InjectTypes.Repository.SUBJECT_DOMAIN)
      .to(SubjectDomainRepository);

    container
      .bind<ISubjectFolderRepository>(InjectTypes.Repository.SUBJECT_FOLDER)
      .to(SubjectFolderRepository);

    container
      .bind<ISubjectItemRepository>(InjectTypes.Repository.SUBJECT_ITEM)
      .to(SubjectItemRepository);

    container
      .bind<ISubjectProjectRepository>(InjectTypes.Repository.SUBJECT_PROJECT)
      .to(SubjectProjectRepository);

    container
      .bind<ISubjectTaskRepository>(InjectTypes.Repository.SUBJECT_TASK)
      .to(SubjectTaskRepository);

    container
      .bind<ITaskAssignmentRepository>(InjectTypes.Repository.TASK_ASSIGNMENT)
      .to(TaskAssignmentRepository);

    container
      .bind<ITaskDependencyRepository>(InjectTypes.Repository.TASK_DEPENDENCY)
      .to(TaskDependencyRepository);

    container
      .bind<IWorkScheduleExclusionRepository>(InjectTypes.Repository.WORK_SCHEDULE_EXCLUSION)
      .to(WorkScheduleExclusionRepository);

    container
      .bind<IWorkScheduleWeekRepository>(InjectTypes.Repository.WORK_SCHEDULE_WEEK)
      .to(WorkScheduleWeekRepository);

    container
      .bind<IWorkScheduleRepository>(InjectTypes.Repository.WORK_SCHEDULE)
      .to(WorkScheduleRepository);

    container
      .bind<IWorkflowStatusRepository>(InjectTypes.Repository.WORKFLOW_STATUS)
      .to(WorkflowStatusRepository);

    container
      .bind<IWorkflowRepository>(InjectTypes.Repository.WORKFLOW)
      .to(WorkflowRepository);

    container
      .bind<IWorkspaceGroupUserRepository>(InjectTypes.Repository.WORKSPACE_GROUP_USER)
      .to(WorkspaceGroupUserRepository);

    container
      .bind<IWorkspaceMemberRepository>(InjectTypes.Repository.WORKSPACE_MEMBER)
      .to(WorkspaceMemberRepository);

    container
      .bind<IWorkspaceUserRepository>(InjectTypes.Repository.WORKSPACE_USER)
      .to(WorkspaceUserRepository);

    container
      .bind<IWorkspaceRepository>(InjectTypes.Repository.WORKSPACE)
      .to(WorkspaceRepository);


    //#endregion

    //#region SERVICES

    container
      .bind<IAccountService>(InjectTypes.Service.ACCOUNT)
      .to(AccountService);

    container
      .bind<ICustomFieldService>(InjectTypes.Service.CUSTOM_FIELD)
      .to(CustomFieldService);

    container
      .bind<IFolderRoleService>(InjectTypes.Service.FOLDER_ROLE)
      .to(FolderRoleService);

    container
      .bind<IFolderSharingService>(InjectTypes.Service.FOLDER_SHARING)
      .to(FolderSharingService);

    container
      .bind<IGroupService>(InjectTypes.Service.GROUP)
      .to(GroupService);

    container
      .bind<ISubjectCommentContentService>(InjectTypes.Service.SUBJECT_COMMENT_CONTENT)
      .to(SubjectCommentContentService);

    container
      .bind<ISubjectCommentService>(InjectTypes.Service.SUBJECT_COMMENT)
      .to(SubjectCommentService);

    container
      .bind<ISubjectCustomFieldService>(InjectTypes.Service.SUBJECT_CUSTOM_FIELD)
      .to(SubjectCustomFieldService);

    container
      .bind<ISubjectDescriptionService>(InjectTypes.Service.SUBJECT_DESCRIPTION)
      .to(SubjectDescriptionService);

    container
      .bind<ISubjectDomainService>(InjectTypes.Service.SUBJECT_DOMAIN)
      .to(SubjectDomainService);

    container
      .bind<ISubjectFolderService>(InjectTypes.Service.SUBJECT_FOLDER)
      .to(SubjectFolderService);

    container
      .bind<ISubjectItemService>(InjectTypes.Service.SUBJECT_ITEM)
      .to(SubjectItemService);

    container
      .bind<ISubjectProjectService>(InjectTypes.Service.SUBJECT_PROJECT)
      .to(SubjectProjectService);

    container
      .bind<ISubjectTaskService>(InjectTypes.Service.SUBJECT_TASK)
      .to(SubjectTaskService);

    container
      .bind<ITaskAssignmentService>(InjectTypes.Service.TASK_ASSIGNMENT)
      .to(TaskAssignmentService);

    container
      .bind<ITaskDependencyService>(InjectTypes.Service.TASK_DEPENDENCY)
      .to(TaskDependencyService);

    container
      .bind<IWorkScheduleExclusionService>(InjectTypes.Service.WORK_SCHEDULE_EXCLUSION)
      .to(WorkScheduleExclusionService);

    container
      .bind<IWorkScheduleWeekService>(InjectTypes.Service.WORK_SCHEDULE_WEEK)
      .to(WorkScheduleWeekService);

    container
      .bind<IWorkScheduleService>(InjectTypes.Service.WORK_SCHEDULE)
      .to(WorkScheduleService);

    container
      .bind<IWorkflowStatusService>(InjectTypes.Service.WORKFLOW_STATUS)
      .to(WorkflowStatusService);

    container
      .bind<IWorkflowService>(InjectTypes.Service.WORKFLOW)
      .to(WorkflowService);

    container
      .bind<IWorkspaceGroupUserService>(InjectTypes.Service.WORKSPACE_GROUP_USER)
      .to(WorkspaceGroupUserService);

    container
      .bind<IWorkspaceMemberService>(InjectTypes.Service.WORKSPACE_MEMBER)
      .to(WorkspaceMemberService);

    container
      .bind<IWorkspaceUserService>(InjectTypes.Service.WORKSPACE_USER)
      .to(WorkspaceUserService);

    container
      .bind<IWorkspaceService>(InjectTypes.Service.WORKSPACE)
      .to(WorkspaceService);


    //#endregion

    return container;
  }
}
