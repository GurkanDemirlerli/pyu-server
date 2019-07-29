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
const subject_folder_entity_1 = require("./subject-folder.entity");
const typeorm_1 = require("typeorm");
const workflow_status_entity_1 = require("./workflow-status.entity");
let SubjectProjectEntity = class SubjectProjectEntity {
};
__decorate([
    typeorm_1.Column("int", { primary: true }),
    __metadata("design:type", Number)
], SubjectProjectEntity.prototype, "subjectId", void 0);
__decorate([
    typeorm_1.OneToOne(type => subject_folder_entity_1.SubjectFolderEntity, sbe => sbe.project),
    typeorm_1.JoinColumn({ name: "subjectId" }),
    __metadata("design:type", subject_folder_entity_1.SubjectFolderEntity)
], SubjectProjectEntity.prototype, "folder", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], SubjectProjectEntity.prototype, "statusId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workflow_status_entity_1.WorkflowStatusEntity, wfs => wfs.projects),
    typeorm_1.JoinColumn({ name: "statusId" }),
    __metadata("design:type", workflow_status_entity_1.WorkflowStatusEntity)
], SubjectProjectEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], SubjectProjectEntity.prototype, "startDate", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], SubjectProjectEntity.prototype, "dueDate", void 0);
SubjectProjectEntity = __decorate([
    typeorm_1.Entity("subject_project")
], SubjectProjectEntity);
exports.SubjectProjectEntity = SubjectProjectEntity;
//# sourceMappingURL=subject-project.entity.js.map