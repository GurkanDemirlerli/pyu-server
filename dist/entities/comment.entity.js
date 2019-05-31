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
const task_entity_1 = require("./task.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let CommentEntity = class CommentEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 400
    }),
    __metadata("design:type", String)
], CommentEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], CommentEntity.prototype, "taskId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => task_entity_1.TaskEntity, task => task.comments),
    typeorm_1.JoinColumn({ name: "taskId" }),
    __metadata("design:type", task_entity_1.TaskEntity)
], CommentEntity.prototype, "task", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], CommentEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.comments),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], CommentEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], CommentEntity.prototype, "lastUpdated", void 0);
CommentEntity = __decorate([
    typeorm_1.Entity("comment")
], CommentEntity);
exports.CommentEntity = CommentEntity;
