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
var SubjectItemEntity_1;
const subject_task_entity_1 = require("./subject-task.entity");
const typeorm_1 = require("typeorm");
const workspace_entity_1 = require("./workspace.entity");
let SubjectItemEntity = SubjectItemEntity_1 = class SubjectItemEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SubjectItemEntity.prototype, "subjectId", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], SubjectItemEntity.prototype, "workspaceId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workspace_entity_1.WorkspaceEntity, ws => ws.subjects),
    typeorm_1.JoinColumn({ name: "workspaceId" }),
    __metadata("design:type", workspace_entity_1.WorkspaceEntity)
], SubjectItemEntity.prototype, "workspace", void 0);
__decorate([
    typeorm_1.OneToOne(type => subject_task_entity_1.SubjectTaskEntity, tsk => tsk.subject),
    __metadata("design:type", subject_task_entity_1.SubjectTaskEntity)
], SubjectItemEntity.prototype, "task", void 0);
__decorate([
    typeorm_1.Column("int", { nullable: true }),
    __metadata("design:type", Number)
], SubjectItemEntity.prototype, "parentId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => SubjectItemEntity_1, sbj => sbj.children),
    typeorm_1.JoinColumn({ name: "parentId" }),
    __metadata("design:type", SubjectItemEntity)
], SubjectItemEntity.prototype, "parent", void 0);
__decorate([
    typeorm_1.OneToMany(type => SubjectItemEntity_1, sbj => sbj.parent),
    __metadata("design:type", Array)
], SubjectItemEntity.prototype, "children", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], SubjectItemEntity.prototype, "subjectType", void 0);
__decorate([
    typeorm_1.Column({ length: 60 }),
    __metadata("design:type", String)
], SubjectItemEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], SubjectItemEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], SubjectItemEntity.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], SubjectItemEntity.prototype, "subjectDeleteState", void 0);
SubjectItemEntity = SubjectItemEntity_1 = __decorate([
    typeorm_1.Entity("subject_item")
], SubjectItemEntity);
exports.SubjectItemEntity = SubjectItemEntity;
//# sourceMappingURL=subject-item.entity.js.map