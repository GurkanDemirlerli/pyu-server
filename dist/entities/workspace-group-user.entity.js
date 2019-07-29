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
const group_entity_1 = require("./group.entity");
const typeorm_1 = require("typeorm");
let WorkspaceGroupUserEntity = class WorkspaceGroupUserEntity {
};
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], WorkspaceGroupUserEntity.prototype, "workspaceUserId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workspace_user_entity_1.WorkspaceUserEntity, wsm => wsm.usersToGroups),
    typeorm_1.JoinColumn({ name: "workspaceUserId" }),
    __metadata("design:type", workspace_user_entity_1.WorkspaceUserEntity)
], WorkspaceGroupUserEntity.prototype, "workspaceUser", void 0);
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], WorkspaceGroupUserEntity.prototype, "groupId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => group_entity_1.GroupEntity, gr => gr.groupsToUsers),
    typeorm_1.JoinColumn({ name: "groupId" }),
    __metadata("design:type", group_entity_1.GroupEntity)
], WorkspaceGroupUserEntity.prototype, "group", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], WorkspaceGroupUserEntity.prototype, "value", void 0);
WorkspaceGroupUserEntity = __decorate([
    typeorm_1.Entity("workspace_group_user")
], WorkspaceGroupUserEntity);
exports.WorkspaceGroupUserEntity = WorkspaceGroupUserEntity;
//# sourceMappingURL=workspace-group-user.entity.js.map