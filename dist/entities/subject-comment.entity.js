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
const typeorm_1 = require("typeorm");
const subject_item_entity_1 = require("./subject-item.entity");
const subject_comment_content_entity_1 = require("./subject-comment-content.entity");
let SubjectCommentEntity = class SubjectCommentEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SubjectCommentEntity.prototype, "subjectCommentId", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], SubjectCommentEntity.prototype, "subjectId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => subject_item_entity_1.SubjectItemEntity, sbi => sbi.comments),
    typeorm_1.JoinColumn({ name: "subjectId" }),
    __metadata("design:type", subject_item_entity_1.SubjectItemEntity)
], SubjectCommentEntity.prototype, "subject", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], SubjectCommentEntity.prototype, "creatorId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => workspace_user_entity_1.WorkspaceUserEntity, wsu => wsu.comments),
    typeorm_1.JoinColumn({ name: "creatorId" }),
    __metadata("design:type", workspace_user_entity_1.WorkspaceUserEntity)
], SubjectCommentEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.OneToOne(type => subject_comment_content_entity_1.SubjectCommentContentEntity, scc => scc.subjectComment),
    __metadata("design:type", subject_comment_content_entity_1.SubjectCommentContentEntity)
], SubjectCommentEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], SubjectCommentEntity.prototype, "createdAt", void 0);
SubjectCommentEntity = __decorate([
    typeorm_1.Entity("subject_comment")
], SubjectCommentEntity);
exports.SubjectCommentEntity = SubjectCommentEntity;
//# sourceMappingURL=subject-comment.entity.js.map