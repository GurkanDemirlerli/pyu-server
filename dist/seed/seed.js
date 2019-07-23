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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const subject_task_entity_1 = require("./../entities/subject-task.entity");
const subject_item_entity_1 = require("./../entities/subject-item.entity");
const workspace_entity_1 = require("./../entities/workspace.entity");
require("reflect-metadata");
const ioc_1 = require("../ioc");
const inversify_1 = require("inversify");
const typeorm_1 = require("typeorm");
const faker = require("faker");
const appConfig = require("../common/app-config");
let SeedDatabase = class SeedDatabase {
    constructor(_subjectItemRepository, _subjectTaskRepository, _workspaceRepository) {
        this._subjectItemRepository = _subjectItemRepository;
        this._subjectTaskRepository = _subjectTaskRepository;
        this._workspaceRepository = _workspaceRepository;
        this.workspaces = [];
        this.subjects = [];
        this.WORKSPACE_COUNT = 5;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("INITIALIZING...");
            let connection = yield typeorm_1.createConnection(appConfig);
            console.log("CONNECTED TO DB");
            try {
                yield this.addWorkspaces();
                console.log("SEED COMPLETED");
                yield connection.close();
            }
            catch (e) {
                console.log(e);
            }
            process.exit(0);
        });
    }
    addWorkspaces() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.WORKSPACE_COUNT; i++) {
                let workspaceEn = new workspace_entity_1.WorkspaceEntity();
                workspaceEn.name = faker.name.lastName();
                workspaceEn.createdAt = new Date();
                let createdWs = yield this._workspaceRepository.insert(workspaceEn);
                createdWs.subjects = [];
                let prevsbj = null;
                for (let i = 0; i < 15; i++) {
                    let sbjEn = new subject_item_entity_1.SubjectItemEntity();
                    sbjEn.createdAt = new Date();
                    sbjEn.lastUpdated = new Date();
                    sbjEn.name = faker.name.jobType();
                    sbjEn.subjectDeleteState = 0;
                    sbjEn.subjectType = 0;
                    sbjEn.workspaceId = createdWs.workspaceId;
                    if (prevsbj !== null) {
                        sbjEn.parentId = prevsbj.subjectId;
                    }
                    let createdSbj = yield this._subjectItemRepository.insert(sbjEn);
                    prevsbj = createdSbj;
                    let tskEn = new subject_task_entity_1.SubjectTaskEntity();
                    tskEn.priority = 1;
                    tskEn.subjectId = createdSbj.subjectId;
                    let createdTsk = yield this._subjectTaskRepository.insert(tskEn);
                    createdSbj.task = createdTsk;
                    createdWs.subjects.push(createdSbj);
                }
                this.workspaces.push(createdWs);
            }
        });
    }
};
SeedDatabase = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_1.InjectTypes.Repository.SUBJECT_ITEM)),
    __param(1, inversify_1.inject(ioc_1.InjectTypes.Repository.SUBJECT_TASK)),
    __param(2, inversify_1.inject(ioc_1.InjectTypes.Repository.WORKSPACE)),
    __metadata("design:paramtypes", [Object, Object, Object])
], SeedDatabase);
exports.SeedDatabase = SeedDatabase;
//# sourceMappingURL=seed.js.map