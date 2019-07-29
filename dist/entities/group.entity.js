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
const workspace_group_user_entity_1 = require("./workspace-group-user.entity");
const typeorm_1 = require("typeorm");
const workspace_member_entity_1 = require("./workspace-member.entity");
let GroupEntity = class GroupEntity {
};
__decorate([
    typeorm_1.Column("int", { primary: true }),
    __metadata("design:type", Number)
], GroupEntity.prototype, "workspaceMemberId", void 0);
__decorate([
    typeorm_1.OneToOne(type => workspace_member_entity_1.WorkspaceMemberEntity, wsm => wsm.group),
    typeorm_1.JoinColumn({ name: "workspaceMemberId" }),
    __metadata("design:type", workspace_member_entity_1.WorkspaceMemberEntity)
], GroupEntity.prototype, "workspaceMember", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GroupEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], GroupEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], GroupEntity.prototype, "removedAt", void 0);
__decorate([
    typeorm_1.OneToMany(type => workspace_group_user_entity_1.WorkspaceGroupUserEntity, wsgu => wsgu.group),
    __metadata("design:type", Array)
], GroupEntity.prototype, "groupsToUsers", void 0);
GroupEntity = __decorate([
    typeorm_1.Entity("group")
], GroupEntity);
exports.GroupEntity = GroupEntity;
//# sourceMappingURL=group.entity.js.map