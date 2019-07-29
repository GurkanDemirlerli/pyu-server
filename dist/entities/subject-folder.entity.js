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
const folder_sharing_entity_1 = require("./folder-sharing.entity");
const typeorm_1 = require("typeorm");
const subject_item_entity_1 = require("./subject-item.entity");
const subject_domain_entity_1 = require("./subject-domain.entity");
const subject_project_entity_1 = require("./subject-project.entity");
const workflow_entity_1 = require("./workflow.entity");
const workflow_status_entity_1 = require("./workflow-status.entity");
let SubjectFolderEntity = class SubjectFolderEntity {
};
__decorate([
    typeorm_1.Column("int", { primary: true }),
    __metadata("design:type", Number)
], SubjectFolderEntity.prototype, "subjectId", void 0);
__decorate([
    typeorm_1.OneToOne(type => subject_item_entity_1.SubjectItemEntity, sbe => sbe.folder),
    typeorm_1.JoinColumn({ name: "subjectId" }),
    __metadata("design:type", subject_item_entity_1.SubjectItemEntity)
], SubjectFolderEntity.prototype, "subject", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], SubjectFolderEntity.prototype, "workflowId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workflow_entity_1.WorkflowEntity, wf => wf.folders),
    typeorm_1.JoinColumn({ name: "workflowId" }),
    __metadata("design:type", workflow_entity_1.WorkflowEntity)
], SubjectFolderEntity.prototype, "workflow", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], SubjectFolderEntity.prototype, "defaultWorkflowStatusId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workflow_status_entity_1.WorkflowStatusEntity, wfs => wfs.defaultFolders),
    typeorm_1.JoinColumn({ name: "defaultWorkflowStatusId" }),
    __metadata("design:type", workflow_status_entity_1.WorkflowStatusEntity)
], SubjectFolderEntity.prototype, "defaultWorkflowStatus", void 0);
__decorate([
    typeorm_1.OneToOne(type => subject_project_entity_1.SubjectProjectEntity, spr => spr.folder),
    __metadata("design:type", subject_project_entity_1.SubjectProjectEntity)
], SubjectFolderEntity.prototype, "project", void 0);
__decorate([
    typeorm_1.OneToOne(type => subject_domain_entity_1.SubjectDomainEntity, sd => sd.folder),
    __metadata("design:type", subject_domain_entity_1.SubjectDomainEntity)
], SubjectFolderEntity.prototype, "domain", void 0);
__decorate([
    typeorm_1.OneToMany(type => folder_sharing_entity_1.FolderSharingEntity, fs => fs.folder),
    __metadata("design:type", Array)
], SubjectFolderEntity.prototype, "folderSharings", void 0);
SubjectFolderEntity = __decorate([
    typeorm_1.Entity("subject_folder")
], SubjectFolderEntity);
exports.SubjectFolderEntity = SubjectFolderEntity;
//# sourceMappingURL=subject-folder.entity.js.map