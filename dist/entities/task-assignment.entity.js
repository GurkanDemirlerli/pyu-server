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
const workspace_user_entity_1 = require("./workspace-user.entity");
const subject_task_entity_1 = require("./subject-task.entity");
const typeorm_1 = require("typeorm");
let TaskAssignmentEntity = class TaskAssignmentEntity {
};
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], TaskAssignmentEntity.prototype, "subjectTaskId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => subject_task_entity_1.SubjectTaskEntity, sbt => sbt.assignments),
    typeorm_1.JoinColumn({ name: "subjectTaskId" }),
    __metadata("design:type", subject_task_entity_1.SubjectTaskEntity)
], TaskAssignmentEntity.prototype, "task", void 0);
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], TaskAssignmentEntity.prototype, "workspaceUserId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workspace_user_entity_1.WorkspaceUserEntity, usr => usr.taskAssignments),
    typeorm_1.JoinColumn({ name: "workspaceUserId" }),
    __metadata("design:type", workspace_user_entity_1.WorkspaceUserEntity)
], TaskAssignmentEntity.prototype, "workspaceUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TaskAssignmentEntity.prototype, "createdAt", void 0);
TaskAssignmentEntity = __decorate([
    typeorm_1.Entity("task_assignment")
], TaskAssignmentEntity);
exports.TaskAssignmentEntity = TaskAssignmentEntity;
//# sourceMappingURL=task-assignment.entity.js.map