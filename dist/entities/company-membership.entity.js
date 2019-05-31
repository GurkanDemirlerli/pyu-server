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
const company_entity_1 = require("./company.entity");
let CompanyMembershipEntity = class CompanyMembershipEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CompanyMembershipEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], CompanyMembershipEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.memberships),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], CompanyMembershipEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], CompanyMembershipEntity.prototype, "companyId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => company_entity_1.CompanyEntity, company => company.members),
    typeorm_1.JoinColumn({ name: "companyId" }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], CompanyMembershipEntity.prototype, "company", void 0);
__decorate([
    typeorm_1.Column("datetime"),
    __metadata("design:type", Date)
], CompanyMembershipEntity.prototype, "joiningDate", void 0);
__decorate([
    typeorm_1.Column("datetime", { nullable: true }),
    __metadata("design:type", Date)
], CompanyMembershipEntity.prototype, "leavingDate", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], CompanyMembershipEntity.prototype, "status", void 0);
CompanyMembershipEntity = __decorate([
    typeorm_1.Entity("company_membership")
], CompanyMembershipEntity);
exports.CompanyMembershipEntity = CompanyMembershipEntity;
