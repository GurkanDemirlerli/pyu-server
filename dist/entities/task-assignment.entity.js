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
const user_entity_1 = require("./user.entity");
const task_entity_1 = require("./task.entity");
let TaskAssignmentEntity = class TaskAssignmentEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TaskAssignmentEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskAssignmentEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.taskAssignments),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], TaskAssignmentEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskAssignmentEntity.prototype, "taskId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => task_entity_1.TaskEntity, tsk => tsk.assignees),
    typeorm_1.JoinColumn({ name: "taskId" }),
    __metadata("design:type", task_entity_1.TaskEntity)
], TaskAssignmentEntity.prototype, "task", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TaskAssignmentEntity.prototype, "createdAt", void 0);
TaskAssignmentEntity = __decorate([
    typeorm_1.Entity("task_assignment")
], TaskAssignmentEntity);
exports.TaskAssignmentEntity = TaskAssignmentEntity;
