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
const workspace_entity_1 = require("./workspace.entity");
const subject_folder_entity_1 = require("./subject-folder.entity");
const workflow_status_entity_1 = require("./workflow-status.entity");
let WorkflowEntity = class WorkflowEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], WorkflowEntity.prototype, "workflowId", void 0);
__decorate([
    typeorm_1.Column("int", { nullable: true }),
    __metadata("design:type", Number)
], WorkflowEntity.prototype, "workspaceId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workspace_entity_1.WorkspaceEntity, wsp => wsp.workflows),
    typeorm_1.JoinColumn({ name: "workspaceId" }),
    __metadata("design:type", workspace_entity_1.WorkspaceEntity)
], WorkflowEntity.prototype, "workspace", void 0);
__decorate([
    typeorm_1.Column({ length: 60 }),
    __metadata("design:type", String)
], WorkflowEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], WorkflowEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], WorkflowEntity.prototype, "deletedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], WorkflowEntity.prototype, "isBuiltin", void 0);
__decorate([
    typeorm_1.OneToMany(type => subject_folder_entity_1.SubjectFolderEntity, sf => sf.workflow),
    __metadata("design:type", Array)
], WorkflowEntity.prototype, "folders", void 0);
__decorate([
    typeorm_1.OneToMany(type => workflow_status_entity_1.WorkflowStatusEntity, fs => fs.workflow),
    __metadata("design:type", Array)
], WorkflowEntity.prototype, "statuses", void 0);
WorkflowEntity = __decorate([
    typeorm_1.Entity("workflow")
], WorkflowEntity);
exports.WorkflowEntity = WorkflowEntity;
//# sourceMappingURL=workflow.entity.js.map