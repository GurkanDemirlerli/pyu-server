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
const typeorm_1 = require("typeorm");
const subject_item_entity_1 = require("./subject-item.entity");
const workflow_status_entity_1 = require("./workflow-status.entity");
const task_dependency_entity_1 = require("./task-dependency.entity");
const task_assignment_entity_1 = require("./task-assignment.entity");
let SubjectTaskEntity = class SubjectTaskEntity {
};
__decorate([
    typeorm_1.Column("int", { primary: true }),
    __metadata("design:type", Number)
], SubjectTaskEntity.prototype, "subjectId", void 0);
__decorate([
    typeorm_1.OneToOne(type => subject_item_entity_1.SubjectItemEntity, sbe => sbe.task),
    typeorm_1.JoinColumn({ name: "subjectId" }),
    __metadata("design:type", subject_item_entity_1.SubjectItemEntity)
], SubjectTaskEntity.prototype, "subject", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], SubjectTaskEntity.prototype, "statusId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workflow_status_entity_1.WorkflowStatusEntity, wfs => wfs.tasks),
    typeorm_1.JoinColumn({ name: "statusId" }),
    __metadata("design:type", workflow_status_entity_1.WorkflowStatusEntity)
], SubjectTaskEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], SubjectTaskEntity.prototype, "priority", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], SubjectTaskEntity.prototype, "completedAt", void 0);
__decorate([
    typeorm_1.Column("int", { nullable: true }),
    __metadata("design:type", Number)
], SubjectTaskEntity.prototype, "duration", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], SubjectTaskEntity.prototype, "startDate", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], SubjectTaskEntity.prototype, "dueDate", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_dependency_entity_1.TaskDependencyEntity, wsu => wsu.predecessor),
    __metadata("design:type", Array)
], SubjectTaskEntity.prototype, "predecessorDependecies", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_dependency_entity_1.TaskDependencyEntity, wsu => wsu.successor),
    __metadata("design:type", Array)
], SubjectTaskEntity.prototype, "successorDependencies", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_assignment_entity_1.TaskAssignmentEntity, tasg => tasg.task),
    __metadata("design:type", Array)
], SubjectTaskEntity.prototype, "assignments", void 0);
SubjectTaskEntity = __decorate([
    typeorm_1.Entity("subject_task")
], SubjectTaskEntity);
exports.SubjectTaskEntity = SubjectTaskEntity;
//# sourceMappingURL=subject-task.entity.js.map