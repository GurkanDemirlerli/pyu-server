import { WorkspaceUserEntity } from './../entities/workspace-user.entity';
import { WorkspaceMemberEntity } from './../entities/workspace-member.entity';
import { WorkspaceGroupUserEntity } from './../entities/workspace-group-user.entity';
import { WorkflowEntity } from './../entities/workflow.entity';
import { WorkflowStatusEntity } from './../entities/workflow-status.entity';
import { WorkScheduleEntity } from './../entities/work-schedule.entity';
import { WorkScheduleWeekEntity } from './../entities/work-schedule-week.entity';
import { WorkScheduleExclusionEntity } from './../entities/work-schedule-exclusion.entity';
import { TaskDependencyEntity } from './../entities/task-dependency.entity';
import { TaskAssignmentEntity } from './../entities/task-assignment.entity';
import { SubjectProjectEntity } from './../entities/subject-project.entity';
import { SubjectFolderEntity } from './../entities/subject-folder.entity';
import { SubjectDomainEntity } from './../entities/subject-domain.entity';
import { SubjectDescriptionEntity } from './../entities/subject-description.entity';
import { SubjectCustomFieldEntity } from './../entities/subject-custom-field.entity';
import { SubjectCommentContentEntity } from './../entities/subject-comment-content.entity';
import { SubjectCommentEntity } from './../entities/subject-comment.entity';
import { GroupEntity } from './../entities/group.entity';
import { FolderSharingEntity } from './../entities/folder-sharing.entity';
import { FolderRoleEntity } from './../entities/folder-role.entity';
import { CustomFieldEntity } from './../entities/custom-field.entity';
import { AccountEntity } from './../entities/account.entity';
import { SubjectItemEntity } from './../entities/subject-item.entity';
import { SubjectTaskEntity } from './../entities/subject-task.entity';
import { WorkspaceEntity } from './../entities/workspace.entity';

import 'reflect-metadata';

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
import { InjectTypes } from "../ioc";
import { injectable, inject } from "inversify";
import { createConnection } from "typeorm";
import faker = require("faker");
import * as appConfig from "../common/app-config";
import { WorkspaceTypes, SubjectTypes, StatusTypes, MemberTypes, UserTypes } from '../enums';
import _ = require('lodash');

@injectable()
export class SeedDatabase {
  constructor(
    @inject(InjectTypes.Repository.ACCOUNT) private readonly _accountRepository: IAccountRepository,
    @inject(InjectTypes.Repository.CUSTOM_FIELD) private readonly _customFieldRepository: ICustomFieldRepository,
    @inject(InjectTypes.Repository.FOLDER_ROLE) private readonly _folderRoleRepository: IFolderRoleRepository,
    @inject(InjectTypes.Repository.FOLDER_SHARING) private readonly _folderSharingRepository: IFolderSharingRepository,
    @inject(InjectTypes.Repository.GROUP) private readonly _groupRepository: IGroupRepository,
    @inject(InjectTypes.Repository.SUBJECT_COMMENT_CONTENT) private readonly _subjectCommentContentRepository: ISubjectCommentContentRepository,
    @inject(InjectTypes.Repository.SUBJECT_COMMENT) private readonly _subjectCommentRepository: ISubjectCommentRepository,
    @inject(InjectTypes.Repository.SUBJECT_CUSTOM_FIELD) private readonly _sujectCustomFieldRepository: ISubjectCustomFieldRepository,
    @inject(InjectTypes.Repository.SUBJECT_DESCRIPTION) private readonly _descriptionRepository: ISubjectDescriptionRepository,
    @inject(InjectTypes.Repository.SUBJECT_DOMAIN) private readonly _subjectDomainRepository: ISubjectDomainRepository,
    @inject(InjectTypes.Repository.SUBJECT_FOLDER) private readonly _subjectFolderRepository: ISubjectFolderRepository,
    @inject(InjectTypes.Repository.SUBJECT_ITEM) private readonly _subjectItemRepository: ISubjectItemRepository,
    @inject(InjectTypes.Repository.SUBJECT_PROJECT) private readonly _subjectProjectRepository: ISubjectProjectRepository,
    @inject(InjectTypes.Repository.SUBJECT_TASK) private readonly _subjectTaskRepository: ISubjectTaskRepository,
    @inject(InjectTypes.Repository.TASK_ASSIGNMENT) private readonly _taskAssignmentRepository: ITaskAssignmentRepository,
    @inject(InjectTypes.Repository.TASK_DEPENDENCY) private readonly _taskDependnencyRepository: ITaskDependencyRepository,
    @inject(InjectTypes.Repository.WORK_SCHEDULE_EXCLUSION) private readonly _workScheduleExclusionRepository: IWorkScheduleExclusionRepository,
    @inject(InjectTypes.Repository.WORK_SCHEDULE_WEEK) private readonly _workScheduleWeekRepository: IWorkScheduleWeekRepository,
    @inject(InjectTypes.Repository.WORK_SCHEDULE) private readonly _workScheduleRepository: IWorkScheduleRepository,
    @inject(InjectTypes.Repository.WORKFLOW_STATUS) private readonly _workflowStatusRepository: IWorkflowStatusRepository,
    @inject(InjectTypes.Repository.WORKFLOW) private readonly _workflowRepository: IWorkflowRepository,
    @inject(InjectTypes.Repository.WORKSPACE_GROUP_USER) private readonly _workspaceGroupUserRepository: IWorkspaceGroupUserRepository,
    @inject(InjectTypes.Repository.WORKSPACE_MEMBER) private readonly _workspaceMemberRepository: IWorkspaceMemberRepository,
    @inject(InjectTypes.Repository.WORKSPACE_USER) private readonly _workspaceUserRepository: IWorkspaceUserRepository,
    @inject(InjectTypes.Repository.WORKSPACE) private readonly _workspaceRepository: IWorkspaceRepository,

  ) { }

  workspaces: WorkspaceEntity[] = [];
  subjects: SubjectItemEntity[] = [];

  public readonly WORKSPACE_COUNT = 5;

  public async initialize() {
    console.log("INITIALIZING...");
    let connection = await createConnection(appConfig);
    console.log("CONNECTED TO DB");
    try {
      await this.addAccounts();
      console.log("SEED COMPLETED");
      await connection.close();
    } catch (e) {
      console.log(e);
    }

    process.exit(0);
  }

  // public async addWorkspaces() {
  //   for (let i = 0; i < this.WORKSPACE_COUNT; i++) {
  //     let workspaceEn = new WorkspaceEntity();
  //     workspaceEn.name = faker.name.lastName();
  //     workspaceEn.createdAt = new Date();
  //     let createdWs = await this._workspaceRepository.insert(workspaceEn);
  //     createdWs.subjects = [];
  //     let prevsbj: SubjectItemEntity = null;
  //     for (let i = 0; i < 15; i++) {
  //       let sbjEn = new SubjectItemEntity();
  //       sbjEn.createdAt = new Date();
  //       sbjEn.lastUpdated = new Date();
  //       sbjEn.name = faker.name.jobType();
  //       sbjEn.subjectDeleteState = 0;
  //       sbjEn.subjectType = 0;
  //       sbjEn.workspaceId = createdWs.workspaceId;
  //       if (prevsbj !== null) {
  //         sbjEn.parentId = prevsbj.subjectId;
  //       }
  //       let createdSbj = await this._subjectItemRepository.insert(sbjEn);
  //       prevsbj = createdSbj;
  //       let tskEn = new SubjectTaskEntity();
  //       tskEn.priority = 1;
  //       tskEn.subjectId = createdSbj.subjectId;

  //       let createdTsk = await this._subjectTaskRepository.insert(tskEn);
  //       createdSbj.task = createdTsk;
  //       createdWs.subjects.push(createdSbj);
  //     }
  //     this.workspaces.push(createdWs);
  //   }
  // }

  public async addAccounts() {
    let accEn = new AccountEntity();
    accEn.createdAt = new Date();
    accEn.email = faker.internet.email();
    accEn.firstname = faker.name.firstName();
    accEn.lastname = faker.name.lastName();
    accEn.phone = faker.phone.phoneNumber();
    let createdAcc = await this._accountRepository.insert(accEn);

    let grknAcc = new AccountEntity();
    grknAcc.createdAt = new Date();
    grknAcc.email = "gurkandemirlerli@gmail.com";
    grknAcc.firstname = "gürkan";
    grknAcc.lastname = "demirlerli";
    grknAcc.phone = "901234567890";
    grknAcc = await this._accountRepository.insert(grknAcc);
    grknAcc = await this.addWorkspaces(grknAcc, 4);
  }

  public async addWorkspaces(account: AccountEntity, count: number) {
    account.workspaces = [];
    for (let i = 0; i < count; i++) {
      let wspEn = new WorkspaceEntity();
      wspEn.createdAt = new Date();
      wspEn.name = faker.name.lastName();
      wspEn.ownerId = account.accountId;
      wspEn.workspaceType = WorkspaceTypes.ENTERPRISE;

      wspEn = await this._workspaceRepository.insert(wspEn);

      wspEn = await this.addWorkflows(wspEn, 2);
      wspEn = await this.addWorkSchedule(wspEn);
      wspEn = await this.addMembers(wspEn);
      wspEn = await this.addDomains(wspEn, 5);
      wspEn = await this.addProjects(wspEn, 50);

      account.workspaces.push(wspEn);

    }
    return account;
  }

  public async addWorkflows(workspace: WorkspaceEntity, count: number) {
    workspace.workflows = [];
    for (let i = 0; i < count; i++) {
      let wflEn = new WorkflowEntity();
      wflEn.createdAt = new Date();
      wflEn.isBuiltin = false;
      wflEn.name = faker.random.word();
      wflEn.workspaceId = workspace.workspaceId;

      wflEn = await this._workflowRepository.insert(wflEn);

      wflEn = await this.addStatuses(wflEn);

      workspace.workflows.push(wflEn);
    }
    return workspace;
  }

  public async addStatuses(workflow: WorkflowEntity) {
    workflow.statuses = [];
    for (let i = 0; i < 4; i++) {
      let stsEn = new WorkflowStatusEntity();
      stsEn.color = "4682b4";
      stsEn.createdAt = new Date();
      stsEn.name = faker.name.jobArea();
      stsEn.order = 0;
      stsEn.statusType = i;
      stsEn.workflowId = workflow.workflowId;
      stsEn = await this._workflowStatusRepository.insert(stsEn);
      workflow.statuses.push(stsEn);
    }
    return workflow;
  }

  public async addWorkSchedule(workspace: WorkspaceEntity) {
    workspace.schedules = [];
    let wschEn = new WorkScheduleEntity();
    wschEn.name = "Default";
    wschEn.workspaceId = workspace.workspaceId;
    wschEn = await this._workScheduleRepository.insert(wschEn);

    //Hafta ekle

    workspace.schedules.push(wschEn);
    return workspace;

  }

  public async addMembers(workspace: WorkspaceEntity) {
    workspace.members = [];
    let wmemEn = new WorkspaceMemberEntity();
    wmemEn.memberType = MemberTypes.USER;
    wmemEn.workspaceId = workspace.workspaceId;

    wmemEn = await this._workspaceMemberRepository.insert(wmemEn);

    let wsu = new WorkspaceUserEntity();
    wsu.accountId = workspace.ownerId;
    wsu.createdAt = new Date();
    wsu.userType = UserTypes.REGULAR;
    wsu.workScheduleId = workspace.schedules[0].workScheduleId;
    wsu.workspaceMemberId = wmemEn.workspaceMemberId;
    wsu = await this._workspaceUserRepository.insert(wsu);
    wmemEn.user = wsu;

    workspace.members.push(wmemEn);
    return workspace;
  }

  public async addDomains(workspace: WorkspaceEntity, count: number) {
    workspace.subjects = [];
    for (let i = 0; i < count; i++) {

      let sbjEn = new SubjectItemEntity();
      sbjEn.createdAt = new Date();
      sbjEn.lastUpdated = new Date();
      sbjEn.name = faker.name.jobType();
      sbjEn.subjectDeleteState = 0;
      sbjEn.creatorId = workspace.members[0].workspaceMemberId;
      sbjEn.subjectType = SubjectTypes.DOMAIN;
      sbjEn.workspaceId = workspace.workspaceId;
      sbjEn = await this._subjectItemRepository.insert(sbjEn);

      let fldEn = new SubjectFolderEntity();
      fldEn.defaultWorkflowStatusId = workspace.workflows[0].statuses[0].workflowStatusId;
      fldEn.subjectId = sbjEn.subjectId;
      fldEn.workflowId = workspace.workflows[0].workflowId;

      fldEn = await this._subjectFolderRepository.insert(fldEn);

      let dmnEn = new SubjectDomainEntity();
      dmnEn.color = "00c957";
      dmnEn.subjectId = fldEn.subjectId;
      dmnEn.isPublic = true;
      dmnEn.icon = "icon";

      dmnEn = await this._subjectDomainRepository.insert(dmnEn);

      fldEn.domain = dmnEn;
      sbjEn.folder = fldEn;

      workspace.subjects.push(sbjEn);
    }
    return workspace;
  }

  public async addProjects(workspace: WorkspaceEntity, count: number) {
    for (let i = 0; i < count; i++) {
      let sbjEn = new SubjectItemEntity();
      sbjEn.createdAt = new Date();
      sbjEn.lastUpdated = new Date();
      sbjEn.name = faker.name.jobType();
      sbjEn.subjectDeleteState = 0;
      sbjEn.creatorId = workspace.members[0].workspaceMemberId;
      sbjEn.subjectType = SubjectTypes.PROJECT;
      sbjEn.workspaceId = workspace.workspaceId;
      let sbjs = workspace.subjects.filter((sb) => sb.subjectType === SubjectTypes.DOMAIN || sb.subjectType === SubjectTypes.PROJECT || sb.subjectType === SubjectTypes.FOLDER);
      sbjs = _.shuffle(sbjs);
      sbjEn.parentId = sbjs[0].subjectId;
      sbjs = null;
      sbjEn = await this._subjectItemRepository.insert(sbjEn);

      let fldEn = new SubjectFolderEntity();
      fldEn.defaultWorkflowStatusId = workspace.workflows[0].statuses[0].workflowStatusId;
      fldEn.subjectId = sbjEn.subjectId;
      fldEn.workflowId = workspace.workflows[0].workflowId;

      fldEn = await this._subjectFolderRepository.insert(fldEn);

      let prjEn = new SubjectProjectEntity();
      prjEn.dueDate = new Date();
      prjEn.startDate = new Date();
      prjEn.statusId = workspace.workflows[0].statuses[0].workflowStatusId;
      prjEn.subjectId = fldEn.subjectId;

      prjEn = await this._subjectProjectRepository.insert(prjEn);

      fldEn.project = prjEn;
      sbjEn.folder = fldEn;

      workspace.subjects.push(sbjEn);

    }
    return workspace;
  }

}
