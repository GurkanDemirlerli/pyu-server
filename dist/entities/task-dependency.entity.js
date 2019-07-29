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
const subject_task_entity_1 = require("./subject-task.entity");
const typeorm_1 = require("typeorm");
const workspace_user_entity_1 = require("./workspace-user.entity");
let TaskDependencyEntity = class TaskDependencyEntity {
};
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], TaskDependencyEntity.prototype, "predecessorId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => subject_task_entity_1.SubjectTaskEntity, ts => ts.predecessorDependecies),
    typeorm_1.JoinColumn({ name: "predecessorId" }),
    __metadata("design:type", subject_task_entity_1.SubjectTaskEntity)
], TaskDependencyEntity.prototype, "predecessor", void 0);
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], TaskDependencyEntity.prototype, "successorId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => subject_task_entity_1.SubjectTaskEntity, ts => ts.successorDependencies),
    typeorm_1.JoinColumn({ name: "successorId" }),
    __metadata("design:type", subject_task_entity_1.SubjectTaskEntity)
], TaskDependencyEntity.prototype, "successor", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskDependencyEntity.prototype, "creatorId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workspace_user_entity_1.WorkspaceUserEntity, us => us.createdTaskDependencies),
    typeorm_1.JoinColumn({ name: "creatorId" }),
    __metadata("design:type", workspace_user_entity_1.WorkspaceUserEntity)
], TaskDependencyEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TaskDependencyEntity.prototype, "dependencyType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TaskDependencyEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], TaskDependencyEntity.prototype, "deletedAt", void 0);
TaskDependencyEntity = __decorate([
    typeorm_1.Entity("task_dependency")
], TaskDependencyEntity);
exports.TaskDependencyEntity = TaskDependencyEntity;
//# sourceMappingURL=task-dependency.entity.js.map