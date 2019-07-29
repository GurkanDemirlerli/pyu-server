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
const typeorm_1 = require("typeorm");
const subject_item_entity_1 = require("./subject-item.entity");
const custom_field_entity_1 = require("./custom-field.entity");
let SubjectCustomFieldEntity = class SubjectCustomFieldEntity {
};
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], SubjectCustomFieldEntity.prototype, "subjectId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => subject_item_entity_1.SubjectItemEntity, sbi => sbi.subjectCustomFields),
    typeorm_1.JoinColumn({ name: "subjectId" }),
    __metadata("design:type", subject_item_entity_1.SubjectItemEntity)
], SubjectCustomFieldEntity.prototype, "subject", void 0);
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], SubjectCustomFieldEntity.prototype, "customFieldId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => custom_field_entity_1.CustomFieldEntity, cf => cf.subjectCustomFields),
    typeorm_1.JoinColumn({ name: "customFieldId" }),
    __metadata("design:type", custom_field_entity_1.CustomFieldEntity)
], SubjectCustomFieldEntity.prototype, "customField", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SubjectCustomFieldEntity.prototype, "value", void 0);
SubjectCustomFieldEntity = __decorate([
    typeorm_1.Entity("subject_custom_field")
], SubjectCustomFieldEntity);
exports.SubjectCustomFieldEntity = SubjectCustomFieldEntity;
//# sourceMappingURL=subject-custom-field.entity.js.map