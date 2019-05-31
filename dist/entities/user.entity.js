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
const issue_entity_1 = require("./issue.entity");
const comment_entity_1 = require("./comment.entity");
const question_entity_1 = require("./question.entity");
const company_entity_1 = require("./company.entity");
const task_entity_1 = require("./task.entity");
const typeorm_1 = require("typeorm");
const project_entity_1 = require("./project.entity");
const answer_entity_1 = require("./answer.entity");
const status_entity_1 = require("./status.entity");
const project_manager_entity_1 = require("./project-manager.entity");
const membership_request_entity_1 = require("./membership-request.entity");
const project_membership_entity_1 = require("./project-membership.entity");
const task_assignment_entity_1 = require("./task-assignment.entity");
const company_membership_entity_1 = require("./company-membership.entity");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "surname", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], UserEntity.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "createdTasks", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_entity_1.ProjectEntity, project => project.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "createdProjects", void 0);
__decorate([
    typeorm_1.OneToMany(type => company_entity_1.CompanyEntity, company => company.owner),
    __metadata("design:type", Array)
], UserEntity.prototype, "ownedCompanies", void 0);
__decorate([
    typeorm_1.OneToMany(type => question_entity_1.QuestionEntity, question => question.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "questions", void 0);
__decorate([
    typeorm_1.OneToMany(type => answer_entity_1.AnswerEntity, answer => answer.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "answers", void 0);
__decorate([
    typeorm_1.OneToMany(type => comment_entity_1.CommentEntity, comment => comment.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToMany(type => issue_entity_1.IssueEntity, issue => issue.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "createdIssues", void 0);
__decorate([
    typeorm_1.OneToMany(type => status_entity_1.StatusEntity, status => status.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "createdStatuses", void 0);
__decorate([
    typeorm_1.OneToMany(type => company_membership_entity_1.CompanyMembershipEntity, cmem => cmem.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "memberships", void 0);
__decorate([
    typeorm_1.OneToMany(type => membership_request_entity_1.MembershipRequestEntity, msr => msr.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "companyRequests", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_membership_entity_1.ProjectMembershipEntity, pms => pms.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "projects", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_manager_entity_1.ProjectManagerEntity, pmn => pmn.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "managedProjects", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_assignment_entity_1.TaskAssignmentEntity, tsa => tsa.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "taskAssignments", void 0);
UserEntity = __decorate([
    typeorm_1.Entity("user")
], UserEntity);
exports.UserEntity = UserEntity;
