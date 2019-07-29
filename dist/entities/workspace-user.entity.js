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
Object.defineProperty(exports, "__esModule", { value: true });
const subject_item_entity_1 = require("./subject-item.entity");
const subject_comment_entity_1 = require("./subject-comment.entity");
const task_dependency_entity_1 = require("./task-dependency.entity");
const typeorm_1 = require("typeorm");
const account_entity_1 = require("./account.entity");
const workspace_member_entity_1 = require("./workspace-member.entity");
const workspace_group_user_entity_1 = require("./workspace-group-user.entity");
const work_schedule_entity_1 = require("./work-schedule.entity");
const task_assignment_entity_1 = require("./task-assignment.entity");
let WorkspaceUserEntity = class WorkspaceUserEntity {
};
__decorate([
    typeorm_1.Column("int", { primary: true }),
    __metadata("design:type", Number)
], WorkspaceUserEntity.prototype, "workspaceMemberId", void 0);
__decorate([
    typeorm_1.OneToOne(type => workspace_member_entity_1.WorkspaceMemberEntity, wsm => wsm.user),
    typeorm_1.JoinColumn({ name: "workspaceMemberId" }),
    __metadata("design:type", workspace_member_entity_1.WorkspaceMemberEntity)
], WorkspaceUserEntity.prototype, "workspaceMember", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], WorkspaceUserEntity.prototype, "accountId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => account_entity_1.AccountEntity, ac => ac.workspaces),
    typeorm_1.JoinColumn({ name: "accountId" }),
    __metadata("design:type", account_entity_1.AccountEntity)
], WorkspaceUserEntity.prototype, "account", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], WorkspaceUserEntity.prototype, "workScheduleId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => work_schedule_entity_1.WorkScheduleEntity, wsc => wsc.users),
    typeorm_1.JoinColumn({ name: "workScheduleId" }),
    __metadata("design:type", work_schedule_entity_1.WorkScheduleEntity)
], WorkspaceUserEntity.prototype, "workSchedule", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], WorkspaceUserEntity.prototype, "userType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], WorkspaceUserEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], WorkspaceUserEntity.prototype, "removedAt", void 0);
__decorate([
    typeorm_1.OneToMany(type => workspace_group_user_entity_1.WorkspaceGroupUserEntity, wsgu => wsgu.workspaceUser),
    __metadata("design:type", Array)
], WorkspaceUserEntity.prototype, "usersToGroups", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_dependency_entity_1.TaskDependencyEntity, wsu => wsu.creator),
    __metadata("design:type", Array)
], WorkspaceUserEntity.prototype, "createdTaskDependencies", void 0);
__decorate([
    typeorm_1.OneToMany(type => subject_comment_entity_1.SubjectCommentEntity, scm => scm.creator),
    __metadata("design:type", Array)
], WorkspaceUserEntity.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToMany(type => subject_item_entity_1.SubjectItemEntity, sbi => sbi.creator),
    __metadata("design:type", Array)
], WorkspaceUserEntity.prototype, "createdSubjects", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_assignment_entity_1.TaskAssignmentEntity, tasg => tasg.workspaceUser),
    __metadata("design:type", Array)
], WorkspaceUserEntity.prototype, "taskAssignments", void 0);
WorkspaceUserEntity = __decorate([
    typeorm_1.Entity("workspace_user")
], WorkspaceUserEntity);
exports.WorkspaceUserEntity = WorkspaceUserEntity;
//# sourceMappingURL=workspace-user.entity.js.map