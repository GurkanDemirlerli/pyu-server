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
const workspace_member_entity_1 = require("./workspace-member.entity");
const typeorm_1 = require("typeorm");
const folder_role_entity_1 = require("./folder-role.entity");
let FolderSharingEntity = class FolderSharingEntity {
};
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], FolderSharingEntity.prototype, "subjectFolderId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => subject_folder_entity_1.SubjectFolderEntity, sf => sf.folderSharings),
    typeorm_1.JoinColumn({ name: "subjectFolderId" }),
    __metadata("design:type", subject_folder_entity_1.SubjectFolderEntity)
], FolderSharingEntity.prototype, "folder", void 0);
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], FolderSharingEntity.prototype, "workspaceMemberId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workspace_member_entity_1.WorkspaceMemberEntity, wm => wm.folderSharings),
    typeorm_1.JoinColumn({ name: "workspaceMemberId" }),
    __metadata("design:type", workspace_member_entity_1.WorkspaceMemberEntity)
], FolderSharingEntity.prototype, "workspaceMember", void 0);
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], FolderSharingEntity.prototype, "folderRoleId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => folder_role_entity_1.FolderRoleEntity, fr => fr.folderSharings),
    typeorm_1.JoinColumn({ name: "folderRoleId" }),
    __metadata("design:type", folder_role_entity_1.FolderRoleEntity)
], FolderSharingEntity.prototype, "folderRole", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FolderSharingEntity.prototype, "value", void 0);
FolderSharingEntity = __decorate([
    typeorm_1.Entity("folder_sharing")
], FolderSharingEntity);
exports.FolderSharingEntity = FolderSharingEntity;
//# sourceMappingURL=folder-sharing.entity.js.map