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
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const task_entity_1 = require("./task.entity");
const company_entity_1 = require("./company.entity");
const status_entity_1 = require("./status.entity");
const project_manager_entity_1 = require("./project-manager.entity");
const project_membership_entity_1 = require("./project-membership.entity");
let ProjectEntity = class ProjectEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "tasks", void 0);
__decorate([
    typeorm_1.OneToMany(type => status_entity_1.StatusEntity, status => status.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "statuses", void 0);
__decorate([
    typeorm_1.OneToMany(type => issue_entity_1.IssueEntity, issue => issue.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "issues", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "companyId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => company_entity_1.CompanyEntity, company => company.projects),
    typeorm_1.JoinColumn({ name: "companyId" }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], ProjectEntity.prototype, "company", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdProjects),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], ProjectEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ProjectEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ProjectEntity.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_membership_entity_1.ProjectMembershipEntity, pms => pms.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "members", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_manager_entity_1.ProjectManagerEntity, prm => prm.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "managers", void 0);
ProjectEntity = __decorate([
    typeorm_1.Entity("project")
], ProjectEntity);
exports.ProjectEntity = ProjectEntity;
