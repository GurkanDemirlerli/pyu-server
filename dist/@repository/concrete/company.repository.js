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
const repository_base_1 = require("./base/repository.base");
const typeorm_1 = require("typeorm");
const company_entity_1 = require("./../../entities/company.entity");
const inversify_1 = require("inversify");
require("reflect-metadata");
let CompanyRepository = class CompanyRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(company_entity_1.CompanyEntity);
    }
    listByFiltersAndUser(filters, userId) {
        let query = typeorm_1.getManager().createQueryBuilder(company_entity_1.CompanyEntity, "company").select("company")
            .leftJoin("company.owner", "owner").addSelect(["owner.id", "owner.name", "owner.surname", "owner.username"])
            .where("owner.id =:userId", { userId: userId })
            .leftJoinAndSelect("company.members", "member")
            .leftJoin("member.user", "user").addSelect(["user.id", "user.name", "user.surname", "user.username"])
            .leftJoin("company.projects", "project").addSelect(["project.id"]);
        if (filters.owner === undefined)
            query = query.orWhere("user.id =:userId", { userId: userId });
        query = query.orderBy("company.id", "DESC");
        if (filters.take !== undefined) {
            query = query.take(filters.take);
            if (filters.skip !== undefined)
                query = query.skip(filters.skip);
        }
        return query.getMany();
    }
    findForDetails(id) {
        let query = typeorm_1.getManager().createQueryBuilder(company_entity_1.CompanyEntity, "company").select("company")
            .where("company.id =:id", { id: id })
            .leftJoin("company.owner", "owner").addSelect(["owner.id", "owner.name", "owner.surname", "owner.username"])
            .leftJoin("company.users", "user").addSelect(["user.id"])
            .leftJoin("company.projects", "project").addSelect(["project.id"]);
        return query.getOne();
    }
    insertMembershipRequest(companyId, userId) {
        let query = typeorm_1.getManager().createQueryBuilder().relation(company_entity_1.CompanyEntity, "requestedUsers").of(companyId).add(userId);
        return query;
    }
    insertMember(companyId, userId) {
        let query = typeorm_1.getManager().createQueryBuilder().relation(company_entity_1.CompanyEntity, "users").of(companyId).add(userId);
        return query;
    }
};
CompanyRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], CompanyRepository);
exports.CompanyRepository = CompanyRepository;
