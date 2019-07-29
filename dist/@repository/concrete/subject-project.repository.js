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
const subject_project_entity_1 = require("./../../entities/subject-project.entity");
const inversify_1 = require("inversify");
require("reflect-metadata");
let SubjectProjectRepository = class SubjectProjectRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(subject_project_entity_1.SubjectProjectEntity);
    }
};
SubjectProjectRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], SubjectProjectRepository);
exports.SubjectProjectRepository = SubjectProjectRepository;
//# sourceMappingURL=subject-project.repository.js.map