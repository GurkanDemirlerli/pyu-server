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
let SubjectDomainEntity = class SubjectDomainEntity {
};
__decorate([
    typeorm_1.Column("int", { primary: true }),
    __metadata("design:type", Number)
], SubjectDomainEntity.prototype, "subjectId", void 0);
__decorate([
    typeorm_1.OneToOne(type => subject_folder_entity_1.SubjectFolderEntity, sbe => sbe.domain),
    typeorm_1.JoinColumn({ name: "subjectId" }),
    __metadata("design:type", subject_folder_entity_1.SubjectFolderEntity)
], SubjectDomainEntity.prototype, "folder", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SubjectDomainEntity.prototype, "color", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], SubjectDomainEntity.prototype, "isPublic", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SubjectDomainEntity.prototype, "icon", void 0);
SubjectDomainEntity = __decorate([
    typeorm_1.Entity("subject_domain")
], SubjectDomainEntity);
exports.SubjectDomainEntity = SubjectDomainEntity;
//# sourceMappingURL=subject-domain.entity.js.map