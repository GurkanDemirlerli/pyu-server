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
const question_entity_1 = require("./question.entity");
let AnswerEntity = class AnswerEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AnswerEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], AnswerEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], AnswerEntity.prototype, "creatorId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.answers),
    typeorm_1.JoinColumn({ name: "creatorId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], AnswerEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], AnswerEntity.prototype, "questionId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => question_entity_1.QuestionEntity, question => question.answers),
    typeorm_1.JoinColumn({ name: "questionId" }),
    __metadata("design:type", question_entity_1.QuestionEntity)
], AnswerEntity.prototype, "question", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], AnswerEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], AnswerEntity.prototype, "lastUpdated", void 0);
AnswerEntity = __decorate([
    typeorm_1.Entity("answer")
], AnswerEntity);
exports.AnswerEntity = AnswerEntity;
