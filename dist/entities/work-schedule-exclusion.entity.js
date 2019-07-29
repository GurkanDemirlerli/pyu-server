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
let WorkScheduleExclusionEntity = class WorkScheduleExclusionEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], WorkScheduleExclusionEntity.prototype, "workScheduleExclusionId", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], WorkScheduleExclusionEntity.prototype, "workScheduleId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => work_schedule_entity_1.WorkScheduleEntity, wse => wse.exclusions),
    typeorm_1.JoinColumn({ name: "workScheduleId" }),
    __metadata("design:type", work_schedule_entity_1.WorkScheduleEntity)
], WorkScheduleExclusionEntity.prototype, "workSchedule", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], WorkScheduleExclusionEntity.prototype, "fromDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], WorkScheduleExclusionEntity.prototype, "toDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], WorkScheduleExclusionEntity.prototype, "isActiveDay", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], WorkScheduleExclusionEntity.prototype, "exclusionType", void 0);
WorkScheduleExclusionEntity = __decorate([
    typeorm_1.Entity("work_schedule_exclusion")
], WorkScheduleExclusionEntity);
exports.WorkScheduleExclusionEntity = WorkScheduleExclusionEntity;
//# sourceMappingURL=work-schedule-exclusion.entity.js.map