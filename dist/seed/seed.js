"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const workspace_user_entity_1 = require("./../entities/workspace-user.entity");
const workspace_member_entity_1 = require("./../entities/workspace-member.entity");
const workflow_entity_1 = require("./../entities/workflow.entity");
const workflow_status_entity_1 = require("./../entities/workflow-status.entity");
const work_schedule_entity_1 = require("./../entities/work-schedule.entity");
const subject_project_entity_1 = require("./../entities/subject-project.entity");
const subject_folder_entity_1 = require("./../entities/subject-folder.entity");
const subject_domain_entity_1 = require("./../entities/subject-domain.entity");
const account_entity_1 = require("./../entities/account.entity");
const subject_item_entity_1 = require("./../entities/subject-item.entity");
const workspace_entity_1 = require("./../entities/workspace.entity");
require("reflect-metadata");
const ioc_1 = require("../ioc");
const inversify_1 = require("inversify");
const typeorm_1 = require("typeorm");
const faker = require("faker");
const appConfig = require("../common/app-config");
const enums_1 = require("../enums");
const _ = require("lodash");
let SeedDatabase = class SeedDatabase {
    constructor(_accountRepository, _customFieldRepository, _folderRoleRepository, _folderSharingRepository, _groupRepository, _subjectCommentContentRepository, _subjectCommentRepository, _sujectCustomFieldRepository, _descriptionRepository, _subjectDomainRepository, _subjectFolderRepository, _subjectItemRepository, _subjectProjectRepository, _subjectTaskRepository, _taskAssignmentRepository, _taskDependnencyRepository, _workScheduleExclusionRepository, _workScheduleWeekRepository, _workScheduleRepository, _workflowStatusRepository, _workflowRepository, _workspaceGroupUserRepository, _workspaceMemberRepository, _workspaceUserRepository, _workspaceRepository) {
        this._accountRepository = _accountRepository;
        this._customFieldRepository = _customFieldRepository;
        this._folderRoleRepository = _folderRoleRepository;
        this._folderSharingRepository = _folderSharingRepository;
        this._groupRepository = _groupRepository;
        this._subjectCommentContentRepository = _subjectCommentContentRepository;
        this._subjectCommentRepository = _subjectCommentRepository;
        this._sujectCustomFieldRepository = _sujectCustomFieldRepository;
        this._descriptionRepository = _descriptionRepository;
        this._subjectDomainRepository = _subjectDomainRepository;
        this._subjectFolderRepository = _subjectFolderRepository;
        this._subjectItemRepository = _subjectItemRepository;
        this._subjectProjectRepository = _subjectProjectRepository;
        this._subjectTaskRepository = _subjectTaskRepository;
        this._taskAssignmentRepository = _taskAssignmentRepository;
        this._taskDependnencyRepository = _taskDependnencyRepository;
        this._workScheduleExclusionRepository = _workScheduleExclusionRepository;
        this._workScheduleWeekRepository = _workScheduleWeekRepository;
        this._workScheduleRepository = _workScheduleRepository;
        this._workflowStatusRepository = _workflowStatusRepository;
        this._workflowRepository = _workflowRepository;
        this._workspaceGroupUserRepository = _workspaceGroupUserRepository;
        this._workspaceMemberRepository = _workspaceMemberRepository;
        this._workspaceUserRepository = _workspaceUserRepository;
        this._workspaceRepository = _workspaceRepository;
        this.workspaces = [];
        this.subjects = [];
        this.WORKSPACE_COUNT = 5;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("INITIALIZING...");
            let connection = yield typeorm_1.createConnection(appConfig);
            console.log("CONNECTED TO DB");
            try {
                yield this.addAccounts();
                console.log("SEED COMPLETED");
                yield connection.close();
            }
            catch (e) {
                console.log(e);
            }
            process.exit(0);
        });
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
    addAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            let accEn = new account_entity_1.AccountEntity();
            accEn.createdAt = new Date();
            accEn.email = faker.internet.email();
            accEn.firstname = faker.name.firstName();
            accEn.lastname = faker.name.lastName();
            accEn.phone = faker.phone.phoneNumber();
            let createdAcc = yield this._accountRepository.insert(accEn);
            let grknAcc = new account_entity_1.AccountEntity();
            grknAcc.createdAt = new Date();
            grknAcc.email = "gurkandemirlerli@gmail.com";
            grknAcc.firstname = "gürkan";
            grknAcc.lastname = "demirlerli";
            grknAcc.phone = "901234567890";
            grknAcc = yield this._accountRepository.insert(grknAcc);
            grknAcc = yield this.addWorkspaces(grknAcc, 4);
        });
    }
    addWorkspaces(account, count) {
        return __awaiter(this, void 0, void 0, function* () {
            account.workspaces = [];
            for (let i = 0; i < count; i++) {
                let wspEn = new workspace_entity_1.WorkspaceEntity();
                wspEn.createdAt = new Date();
                wspEn.name = faker.name.lastName();
                wspEn.ownerId = account.accountId;
                wspEn.workspaceType = enums_1.WorkspaceTypes.ENTERPRISE;
                wspEn = yield this._workspaceRepository.insert(wspEn);
                wspEn = yield this.addWorkflows(wspEn, 2);
                wspEn = yield this.addWorkSchedule(wspEn);
                wspEn = yield this.addMembers(wspEn);
                wspEn = yield this.addDomains(wspEn, 5);
                wspEn = yield this.addProjects(wspEn, 50);
                account.workspaces.push(wspEn);
            }
            return account;
        });
    }
    addWorkflows(workspace, count) {
        return __awaiter(this, void 0, void 0, function* () {
            workspace.workflows = [];
            for (let i = 0; i < count; i++) {
                let wflEn = new workflow_entity_1.WorkflowEntity();
                wflEn.createdAt = new Date();
                wflEn.isBuiltin = false;
                wflEn.name = faker.random.word();
                wflEn.workspaceId = workspace.workspaceId;
                wflEn = yield this._workflowRepository.insert(wflEn);
                wflEn = yield this.addStatuses(wflEn);
                workspace.workflows.push(wflEn);
            }
            return workspace;
        });
    }
    addStatuses(workflow) {
        return __awaiter(this, void 0, void 0, function* () {
            workflow.statuses = [];
            for (let i = 0; i < 4; i++) {
                let stsEn = new workflow_status_entity_1.WorkflowStatusEntity();
                stsEn.color = "4682b4";
                stsEn.createdAt = new Date();
                stsEn.name = faker.name.jobArea();
                stsEn.order = 0;
                stsEn.statusType = i;
                stsEn.workflowId = workflow.workflowId;
                stsEn = yield this._workflowStatusRepository.insert(stsEn);
                workflow.statuses.push(stsEn);
            }
            return workflow;
        });
    }
    addWorkSchedule(workspace) {
        return __awaiter(this, void 0, void 0, function* () {
            workspace.schedules = [];
            let wschEn = new work_schedule_entity_1.WorkScheduleEntity();
            wschEn.name = "Default";
            wschEn.workspaceId = workspace.workspaceId;
            wschEn = yield this._workScheduleRepository.insert(wschEn);
            //Hafta ekle
            workspace.schedules.push(wschEn);
            return workspace;
        });
    }
    addMembers(workspace) {
        return __awaiter(this, void 0, void 0, function* () {
            workspace.members = [];
            let wmemEn = new workspace_member_entity_1.WorkspaceMemberEntity();
            wmemEn.memberType = enums_1.MemberTypes.USER;
            wmemEn.workspaceId = workspace.workspaceId;
            wmemEn = yield this._workspaceMemberRepository.insert(wmemEn);
            let wsu = new workspace_user_entity_1.WorkspaceUserEntity();
            wsu.accountId = workspace.ownerId;
            wsu.createdAt = new Date();
            wsu.userType = enums_1.UserTypes.REGULAR;
            wsu.workScheduleId = workspace.schedules[0].workScheduleId;
            wsu.workspaceMemberId = wmemEn.workspaceMemberId;
            wsu = yield this._workspaceUserRepository.insert(wsu);
            wmemEn.user = wsu;
            workspace.members.push(wmemEn);
            return workspace;
        });
    }
    addDomains(workspace, count) {
        return __awaiter(this, void 0, void 0, function* () {
            workspace.subjects = [];
            for (let i = 0; i < count; i++) {
                let sbjEn = new subject_item_entity_1.SubjectItemEntity();
                sbjEn.createdAt = new Date();
                sbjEn.lastUpdated = new Date();
                sbjEn.name = faker.name.jobType();
                sbjEn.subjectDeleteState = 0;
                sbjEn.creatorId = workspace.members[0].workspaceMemberId;
                sbjEn.subjectType = enums_1.SubjectTypes.DOMAIN;
                sbjEn.workspaceId = workspace.workspaceId;
                sbjEn = yield this._subjectItemRepository.insert(sbjEn);
                let fldEn = new subject_folder_entity_1.SubjectFolderEntity();
                fldEn.defaultWorkflowStatusId = workspace.workflows[0].statuses[0].workflowStatusId;
                fldEn.subjectId = sbjEn.subjectId;
                fldEn.workflowId = workspace.workflows[0].workflowId;
                fldEn = yield this._subjectFolderRepository.insert(fldEn);
                let dmnEn = new subject_domain_entity_1.SubjectDomainEntity();
                dmnEn.color = "00c957";
                dmnEn.subjectId = fldEn.subjectId;
                dmnEn.isPublic = true;
                dmnEn.icon = "icon";
                dmnEn = yield this._subjectDomainRepository.insert(dmnEn);
                fldEn.domain = dmnEn;
                sbjEn.folder = fldEn;
                workspace.subjects.push(sbjEn);
            }
            return workspace;
        });
    }
    addProjects(workspace, count) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < count; i++) {
                let sbjEn = new subject_item_entity_1.SubjectItemEntity();
                sbjEn.createdAt = new Date();
                sbjEn.lastUpdated = new Date();
                sbjEn.name = faker.name.jobType();
                sbjEn.subjectDeleteState = 0;
                sbjEn.creatorId = workspace.members[0].workspaceMemberId;
                sbjEn.subjectType = enums_1.SubjectTypes.PROJECT;
                sbjEn.workspaceId = workspace.workspaceId;
                let sbjs = workspace.subjects.filter((sb) => sb.subjectType === enums_1.SubjectTypes.DOMAIN || sb.subjectType === enums_1.SubjectTypes.PROJECT || sb.subjectType === enums_1.SubjectTypes.FOLDER);
                sbjs = _.shuffle(sbjs);
                sbjEn.parentId = sbjs[0].subjectId;
                sbjs = null;
                sbjEn = yield this._subjectItemRepository.insert(sbjEn);
                let fldEn = new subject_folder_entity_1.SubjectFolderEntity();
                fldEn.defaultWorkflowStatusId = workspace.workflows[0].statuses[0].workflowStatusId;
                fldEn.subjectId = sbjEn.subjectId;
                fldEn.workflowId = workspace.workflows[0].workflowId;
                fldEn = yield this._subjectFolderRepository.insert(fldEn);
                let prjEn = new subject_project_entity_1.SubjectProjectEntity();
                prjEn.dueDate = new Date();
                prjEn.startDate = new Date();
                prjEn.statusId = workspace.workflows[0].statuses[0].workflowStatusId;
                prjEn.subjectId = fldEn.subjectId;
                prjEn = yield this._subjectProjectRepository.insert(prjEn);
                fldEn.project = prjEn;
                sbjEn.folder = fldEn;
                workspace.subjects.push(sbjEn);
            }
            return workspace;
        });
    }
};
SeedDatabase = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_1.InjectTypes.Repository.ACCOUNT)),
    __param(1, inversify_1.inject(ioc_1.InjectTypes.Repository.CUSTOM_FIELD)),
    __param(2, inversify_1.inject(ioc_1.InjectTypes.Repository.FOLDER_ROLE)),
    __param(3, inversify_1.inject(ioc_1.InjectTypes.Repository.FOLDER_SHARING)),
    __param(4, inversify_1.inject(ioc_1.InjectTypes.Repository.GROUP)),
    __param(5, inversify_1.inject(ioc_1.InjectTypes.Repository.SUBJECT_COMMENT_CONTENT)),
    __param(6, inversify_1.inject(ioc_1.InjectTypes.Repository.SUBJECT_COMMENT)),
    __param(7, inversify_1.inject(ioc_1.InjectTypes.Repository.SUBJECT_CUSTOM_FIELD)),
    __param(8, inversify_1.inject(ioc_1.InjectTypes.Repository.SUBJECT_DESCRIPTION)),
    __param(9, inversify_1.inject(ioc_1.InjectTypes.Repository.SUBJECT_DOMAIN)),
    __param(10, inversify_1.inject(ioc_1.InjectTypes.Repository.SUBJECT_FOLDER)),
    __param(11, inversify_1.inject(ioc_1.InjectTypes.Repository.SUBJECT_ITEM)),
    __param(12, inversify_1.inject(ioc_1.InjectTypes.Repository.SUBJECT_PROJECT)),
    __param(13, inversify_1.inject(ioc_1.InjectTypes.Repository.SUBJECT_TASK)),
    __param(14, inversify_1.inject(ioc_1.InjectTypes.Repository.TASK_ASSIGNMENT)),
    __param(15, inversify_1.inject(ioc_1.InjectTypes.Repository.TASK_DEPENDENCY)),
    __param(16, inversify_1.inject(ioc_1.InjectTypes.Repository.WORK_SCHEDULE_EXCLUSION)),
    __param(17, inversify_1.inject(ioc_1.InjectTypes.Repository.WORK_SCHEDULE_WEEK)),
    __param(18, inversify_1.inject(ioc_1.InjectTypes.Repository.WORK_SCHEDULE)),
    __param(19, inversify_1.inject(ioc_1.InjectTypes.Repository.WORKFLOW_STATUS)),
    __param(20, inversify_1.inject(ioc_1.InjectTypes.Repository.WORKFLOW)),
    __param(21, inversify_1.inject(ioc_1.InjectTypes.Repository.WORKSPACE_GROUP_USER)),
    __param(22, inversify_1.inject(ioc_1.InjectTypes.Repository.WORKSPACE_MEMBER)),
    __param(23, inversify_1.inject(ioc_1.InjectTypes.Repository.WORKSPACE_USER)),
    __param(24, inversify_1.inject(ioc_1.InjectTypes.Repository.WORKSPACE)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object])
], SeedDatabase);
exports.SeedDatabase = SeedDatabase;
//# sourceMappingURL=seed.js.map