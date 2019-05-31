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
const project_entity_1 = require("./../../entities/project.entity");
const inversify_1 = require("inversify");
require("reflect-metadata");
let ProjectRepository = class ProjectRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(project_entity_1.ProjectEntity);
    }
    listByFiltersByCompany(filters, companyId) {
        let query = typeorm_1.getManager().createQueryBuilder(project_entity_1.ProjectEntity, "project")
            .leftJoinAndSelect("project.managers", "manager")
            .where("project.companyId =:companyId", { companyId: companyId });
        query = query.orderBy("project.id", "DESC");
        if (filters.take !== undefined) {
            query = query.take(filters.take);
            if (filters.skip !== undefined)
                query = query.skip(filters.skip);
        }
        return query.orderBy("project.id", "DESC").getMany();
    }
    findForDetails(id) {
        let query = typeorm_1.getManager().createQueryBuilder(project_entity_1.ProjectEntity, "project").select(["project.id", "project.title", "project.description"])
            .where("project.id =:id", { id: id })
            .leftJoin("project.company", "company").addSelect(["company.id", "company.name", "company.description"])
            .leftJoin("company.owner", "companyOwner").addSelect(["companyOwner.id", "companyOwner.name", "companyOwner.surname", "companyOwner.username"])
            .leftJoin("project.creator", "creator").addSelect(["creator.id", "creator.name", "creator.surname", "creator.username"]);
        return query.getOne();
    }
};
ProjectRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], ProjectRepository);
exports.ProjectRepository = ProjectRepository;
