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
const workspace_entity_1 = require("./workspace.entity");
const typeorm_1 = require("typeorm");
const work_schedule_week_entity_1 = require("./work-schedule-week.entity");
const work_schedule_exclusion_entity_1 = require("./work-schedule-exclusion.entity");
let WorkScheduleEntity = class WorkScheduleEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], WorkScheduleEntity.prototype, "workScheduleId", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], WorkScheduleEntity.prototype, "workspaceId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workspace_entity_1.WorkspaceEntity, ws => ws.schedules),
    typeorm_1.JoinColumn({ name: "workspaceId" }),
    __metadata("design:type", workspace_entity_1.WorkspaceEntity)
], WorkScheduleEntity.prototype, "workspace", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], WorkScheduleEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(type => workspace_user_entity_1.WorkspaceUserEntity, wsu => wsu.workSchedule),
    __metadata("design:type", Array)
], WorkScheduleEntity.prototype, "users", void 0);
__decorate([
    typeorm_1.OneToMany(type => work_schedule_exclusion_entity_1.WorkScheduleExclusionEntity, wse => wse.workSchedule),
    __metadata("design:type", Array)
], WorkScheduleEntity.prototype, "exclusions", void 0);
__decorate([
    typeorm_1.OneToOne(type => work_schedule_week_entity_1.WorkScheduleWeekEntity, wsw => wsw.workSchedule),
    __metadata("design:type", work_schedule_week_entity_1.WorkScheduleWeekEntity)
], WorkScheduleEntity.prototype, "week", void 0);
WorkScheduleEntity = __decorate([
    typeorm_1.Entity("work_schedule")
], WorkScheduleEntity);
exports.WorkScheduleEntity = WorkScheduleEntity;
//# sourceMappingURL=work-schedule.entity.js.map