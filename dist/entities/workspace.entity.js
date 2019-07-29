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
const work_schedule_entity_1 = require("./work-schedule.entity");
const typeorm_1 = require("typeorm");
const subject_item_entity_1 = require("./subject-item.entity");
const workflow_entity_1 = require("./workflow.entity");
const account_entity_1 = require("./account.entity");
const workspace_member_entity_1 = require("./workspace-member.entity");
let WorkspaceEntity = class WorkspaceEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], WorkspaceEntity.prototype, "workspaceId", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], WorkspaceEntity.prototype, "ownerId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => account_entity_1.AccountEntity, ac => ac.workspaces),
    typeorm_1.JoinColumn({ name: "ownerId" }),
    __metadata("design:type", account_entity_1.AccountEntity)
], WorkspaceEntity.prototype, "owner", void 0);
__decorate([
    typeorm_1.Column({ length: 60 }),
    __metadata("design:type", String)
], WorkspaceEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], WorkspaceEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.OneToMany(type => subject_item_entity_1.SubjectItemEntity, sbj => sbj.workspace),
    __metadata("design:type", Array)
], WorkspaceEntity.prototype, "subjects", void 0);
__decorate([
    typeorm_1.OneToMany(type => workflow_entity_1.WorkflowEntity, wf => wf.workspace),
    __metadata("design:type", Array)
], WorkspaceEntity.prototype, "workflows", void 0);
__decorate([
    typeorm_1.OneToMany(type => workspace_member_entity_1.WorkspaceMemberEntity, mb => mb.workspace),
    __metadata("design:type", Array)
], WorkspaceEntity.prototype, "members", void 0);
__decorate([
    typeorm_1.OneToMany(type => work_schedule_entity_1.WorkScheduleEntity, wsh => wsh.workspace),
    __metadata("design:type", Array)
], WorkspaceEntity.prototype, "schedules", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], WorkspaceEntity.prototype, "workspaceType", void 0);
WorkspaceEntity = __decorate([
    typeorm_1.Entity("workspace")
], WorkspaceEntity);
exports.WorkspaceEntity = WorkspaceEntity;
//# sourceMappingURL=workspace.entity.js.map