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
const work_schedule_entity_1 = require("./work-schedule.entity");
let WorkScheduleWeekEntity = class WorkScheduleWeekEntity {
};
__decorate([
    typeorm_1.Column("int", { primary: true }),
    __metadata("design:type", Number)
], WorkScheduleWeekEntity.prototype, "workScheduleId", void 0);
__decorate([
    typeorm_1.OneToOne(type => work_schedule_entity_1.WorkScheduleEntity, wsh => wsh.week),
    typeorm_1.JoinColumn({ name: "workScheduleId" }),
    __metadata("design:type", work_schedule_entity_1.WorkScheduleEntity)
], WorkScheduleWeekEntity.prototype, "workSchedule", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], WorkScheduleWeekEntity.prototype, "isMondayActive", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], WorkScheduleWeekEntity.prototype, "isTuesdayActive", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], WorkScheduleWeekEntity.prototype, "isWednesdayActive", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], WorkScheduleWeekEntity.prototype, "isThursdayActive", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], WorkScheduleWeekEntity.prototype, "isFridayActive", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], WorkScheduleWeekEntity.prototype, "isSaturdayActive", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], WorkScheduleWeekEntity.prototype, "isSundayActive", void 0);
WorkScheduleWeekEntity = __decorate([
    typeorm_1.Entity("work_schedule_week")
], WorkScheduleWeekEntity);
exports.WorkScheduleWeekEntity = WorkScheduleWeekEntity;
//# sourceMappingURL=work-schedule-week.entity.js.map