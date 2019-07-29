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
const workflow_entity_1 = require("./workflow.entity");
const subject_folder_entity_1 = require("./subject-folder.entity");
const subject_task_entity_1 = require("./subject-task.entity");
const subject_project_entity_1 = require("./subject-project.entity");
let WorkflowStatusEntity = class WorkflowStatusEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], WorkflowStatusEntity.prototype, "workflowStatusId", void 0);
__decorate([
    typeorm_1.Column("int", { nullable: true }),
    __metadata("design:type", Number)
], WorkflowStatusEntity.prototype, "workflowId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workflow_entity_1.WorkflowEntity, wf => wf.statuses),
    typeorm_1.JoinColumn({ name: "workflowId" }),
    __metadata("design:type", workflow_entity_1.WorkflowEntity)
], WorkflowStatusEntity.prototype, "workflow", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], WorkflowStatusEntity.prototype, "statusType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], WorkflowStatusEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], WorkflowStatusEntity.prototype, "color", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], WorkflowStatusEntity.prototype, "order", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], WorkflowStatusEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], WorkflowStatusEntity.prototype, "deletedAt", void 0);
__decorate([
    typeorm_1.OneToMany(type => subject_folder_entity_1.SubjectFolderEntity, sf => sf.defaultWorkflowStatus),
    __metadata("design:type", Array)
], WorkflowStatusEntity.prototype, "defaultFolders", void 0);
__decorate([
    typeorm_1.OneToMany(type => subject_task_entity_1.SubjectTaskEntity, st => st.status),
    __metadata("design:type", Array)
], WorkflowStatusEntity.prototype, "tasks", void 0);
__decorate([
    typeorm_1.OneToMany(type => subject_project_entity_1.SubjectProjectEntity, st => st.status),
    __metadata("design:type", Array)
], WorkflowStatusEntity.prototype, "projects", void 0);
WorkflowStatusEntity = __decorate([
    typeorm_1.Entity("workflow_status")
], WorkflowStatusEntity);
exports.WorkflowStatusEntity = WorkflowStatusEntity;
//# sourceMappingURL=workflow-status.entity.js.map