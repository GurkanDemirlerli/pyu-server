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
const group_entity_1 = require("./group.entity");
const workspace_user_entity_1 = require("./workspace-user.entity");
const typeorm_1 = require("typeorm");
const workspace_entity_1 = require("./workspace.entity");
const folder_sharing_entity_1 = require("./folder-sharing.entity");
let WorkspaceMemberEntity = class WorkspaceMemberEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], WorkspaceMemberEntity.prototype, "workspaceMemberId", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], WorkspaceMemberEntity.prototype, "workspaceId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workspace_entity_1.WorkspaceEntity, ws => ws.members),
    typeorm_1.JoinColumn({ name: "workspaceId" }),
    __metadata("design:type", workspace_entity_1.WorkspaceEntity)
], WorkspaceMemberEntity.prototype, "workspace", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], WorkspaceMemberEntity.prototype, "memberType", void 0);
__decorate([
    typeorm_1.OneToOne(type => workspace_user_entity_1.WorkspaceUserEntity, us => us.workspaceMember),
    __metadata("design:type", workspace_user_entity_1.WorkspaceUserEntity)
], WorkspaceMemberEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToOne(type => group_entity_1.GroupEntity, gr => gr.workspaceMember),
    __metadata("design:type", group_entity_1.GroupEntity)
], WorkspaceMemberEntity.prototype, "group", void 0);
__decorate([
    typeorm_1.OneToMany(type => folder_sharing_entity_1.FolderSharingEntity, fs => fs.workspaceMember),
    __metadata("design:type", Array)
], WorkspaceMemberEntity.prototype, "folderSharings", void 0);
WorkspaceMemberEntity = __decorate([
    typeorm_1.Entity("workspace_member")
], WorkspaceMemberEntity);
exports.WorkspaceMemberEntity = WorkspaceMemberEntity;
//# sourceMappingURL=workspace-member.entity.js.map