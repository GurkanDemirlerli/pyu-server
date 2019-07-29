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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = require("./base/repository.base");
const typeorm_1 = require("typeorm");
const subject_item_entity_1 = require("./../../entities/subject-item.entity");
const inversify_1 = require("inversify");
require("reflect-metadata");
const dottie = require("dottie");
let SubjectItemRepository = class SubjectItemRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(subject_item_entity_1.SubjectItemEntity);
    }
    getDescendants(subjectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const rawRes = yield typeorm_1.getManager().query(`CALL get_descendants_subjects(?)`, [subjectId]);
            let mapped = dottie.transform(rawRes[0]);
            return mapped;
        });
    }
    getAncestors(subjectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const rawRes = yield typeorm_1.getManager().query(`CALL get_ancestors_subjects(?)`, [subjectId]);
            let mapped = [];
            rawRes[0].map((item) => {
                mapped.push(dottie.transform(item));
            });
            return mapped;
        });
    }
};
SubjectItemRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], SubjectItemRepository);
exports.SubjectItemRepository = SubjectItemRepository;
//# sourceMappingURL=subject-item.repository.js.map