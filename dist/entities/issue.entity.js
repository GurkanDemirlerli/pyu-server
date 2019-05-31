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
const project_entity_1 = require("./project.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const task_entity_1 = require("./task.entity");
let IssueEntity = class IssueEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], IssueEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], IssueEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], IssueEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.fromIssue),
    __metadata("design:type", Array)
], IssueEntity.prototype, "tasks", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], IssueEntity.prototype, "creatorId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdIssues),
    typeorm_1.JoinColumn({ name: "creatorId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], IssueEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], IssueEntity.prototype, "projectId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => project_entity_1.ProjectEntity, project => project.issues),
    typeorm_1.JoinColumn({ name: "projectId" }),
    __metadata("design:type", project_entity_1.ProjectEntity)
], IssueEntity.prototype, "project", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], IssueEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], IssueEntity.prototype, "lastUpdated", void 0);
IssueEntity = __decorate([
    typeorm_1.Entity("issue")
], IssueEntity);
exports.IssueEntity = IssueEntity;
