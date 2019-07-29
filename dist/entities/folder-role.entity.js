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
let FolderRoleEntity = class FolderRoleEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], FolderRoleEntity.prototype, "folderRoleId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FolderRoleEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], FolderRoleEntity.prototype, "isBuiltin", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], FolderRoleEntity.prototype, "right1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], FolderRoleEntity.prototype, "right2", void 0);
__decorate([
    typeorm_1.OneToMany(type => folder_sharing_entity_1.FolderSharingEntity, fs => fs.folderRole),
    __metadata("design:type", Array)
], FolderRoleEntity.prototype, "folderSharings", void 0);
FolderRoleEntity = __decorate([
    typeorm_1.Entity("folder_role")
], FolderRoleEntity);
exports.FolderRoleEntity = FolderRoleEntity;
//# sourceMappingURL=folder-role.entity.js.map