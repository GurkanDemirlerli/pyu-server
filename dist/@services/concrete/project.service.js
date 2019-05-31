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
const inversify_1 = require("inversify");
const _ioc_1 = require("@ioc");
const dtos_1 = require("@models/dtos");
const project_entity_1 = require("@entities/project.entity");
const app_error_1 = require("@errors/app-error");
const status_entity_1 = require("@entities/status.entity");
const _enums_1 = require("@enums");
const uow_1 = require("@repositories/uow");
let ProjectService = class ProjectService {
    constructor(_projectRepository, _statusRepository, _companyRepository) {
        this._projectRepository = _projectRepository;
        this._statusRepository = _statusRepository;
        this._companyRepository = _companyRepository;
    }
    add(model) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateAuthority(model.companyId, model.userId);
            let projectEn = Object.assign(new project_entity_1.ProjectEntity(), model);
            let uow = new uow_1.Uow();
            yield uow.start();
            try {
                projectEn = yield this._projectRepository.insert(projectEn, uow.getManager());
                let status0 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'Planning',
                    description: 'Proje sürecine dahil olabilecek görevler',
                    baseStatus: _enums_1.BaseStatus.PLANNINING,
                    order: 0,
                    creatorId: model.userId,
                    projectId: projectEn.id
                });
                let status1 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'To do',
                    description: 'Proje sürecinde olan ama henüz baslanmamis görevler',
                    baseStatus: _enums_1.BaseStatus.NOT_STARTED,
                    order: 0,
                    creatorId: model.userId,
                    projectId: projectEn.id
                });
                let status2 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'In Progress',
                    description: 'Yapılmakta olan görevler',
                    baseStatus: _enums_1.BaseStatus.IN_PROGRESS,
                    order: 0,
                    creatorId: model.userId,
                    projectId: projectEn.id
                });
                let status3 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'Done',
                    description: 'Bitmiş görevler',
                    baseStatus: _enums_1.BaseStatus.FINISHED,
                    order: 0,
                    creatorId: model.userId,
                    projectId: projectEn.id
                });
                yield this._statusRepository.insert(status0, uow.getManager());
                yield this._statusRepository.insert(status1, uow.getManager());
                yield this._statusRepository.insert(status2, uow.getManager());
                yield this._statusRepository.insert(status3, uow.getManager());
                yield uow.commit();
            }
            catch (err) {
                yield uow.rollback();
                throw err;
            }
            finally {
                yield uow.release();
            }
            return Promise.resolve(projectEn.id);
        });
    }
    //TODO sadece yetkisi olanlar gelsin
    listByCompany(filters, requestorId, companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            let projectDtos = [];
            yield this.validateAuthority(companyId, requestorId);
            let projects = yield this._projectRepository.listByFiltersByCompany(filters, companyId);
            projects.map((prj) => {
                let projectDto = Object.assign(new dtos_1.ProjectListDto(), prj);
                projectDtos.push(projectDto);
            });
            return Promise.resolve(projectDtos);
        });
    }
    find(id, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let projectEntity = yield this._projectRepository.findForDetails(id);
            if (!projectEntity)
                throw new app_error_1.AppError('AppError', 'Project not found.', 404);
            yield this.validateAuthority(projectEntity.company.id, requestorId);
            let prjDto = Object.assign(new dtos_1.ProjectDetailDto(), projectEntity);
            return Promise.resolve(prjDto);
        });
    }
    update(id, model, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let updatedProject;
            let oldProject = yield this._projectRepository.findById(id);
            if (!oldProject)
                throw new app_error_1.AppError('AppError', 'Project not found.', 404);
            yield this.validateAuthority(oldProject.companyId, requestorId);
            updatedProject = Object.assign(oldProject, model);
            yield this._projectRepository.update(id, updatedProject);
            return Promise.resolve(updatedProject);
        });
    }
    delete(id, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let projectEntity = yield this._projectRepository.findById(id);
            if (!projectEntity)
                throw new app_error_1.AppError('AppError', 'Project not found.', 404);
            yield this.validateAuthority(projectEntity.companyId, requestorId);
            yield this._projectRepository.delete(id);
            return Promise.resolve();
        });
    }
    // private async validateAuthority(type: ProjectAuthTypes, userId: number, companyId: number, projectId?: number): Promise<void> {
    //     let cmpEn: CompanyEntity;
    //     if (companyId !== null) cmpEn = await this._companyRepository.findOne(companyId, { relations: ["users", "owner"] });
    //
    //     //TODO company kurucusunun admin olması daha sonra değişirse burası da değişir.
    //     if (type === ProjectAuthTypes.ADMIN) {
    //         if (!cmpEn) throw new AppError('AppError', 'Internal Error.', 500);
    //         if (cmpEn.owner.id !== userId)
    //             throw new AppError('AppError', 'Yetkiniz yoktur.', 403);
    //         return Promise.resolve();
    //     }
    //
    //     let prjEn: ProjectEntity;
    //     if (projectId !== null) prjEn = await this._projectRepository.findForDetails(projectId);
    //
    //     if (type === ProjectAuthTypes.USER) {
    //         if (!prjEn) throw new AppError('AppError', 'Internal Error.', 500);
    //         if (prjEn.users.filter(x => x.id === userId).length < 1 && cmpEn.owner.id !== userId)
    //             throw new AppError('AppError', 'Bu topluluğun üyesi değilsiniz.', 403);
    //         return Promise.resolve();
    //     }
    //
    //     if (type === ProjectAuthTypes.MANAGER) {
    //         if (!prjEn) throw new AppError('AppError', 'Internal Error.', 500);
    //         if (prjEn.managers.filter(x => x.id === userId).length < 1 && cmpEn.owner.id !== userId)
    //             throw new AppError('AppError', 'Yetkiniz yoktur.', 403);
    //         return Promise.resolve();
    //     }
    //
    //     throw new AppError('AppError', 'Internal Error.', 500);
    //     //TODO Internal errorları düzelt.
    //
    // }
    validateAuthority(companyId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let cmpEn = yield this._companyRepository.findOne(companyId, { relations: ["users", "owner"] });
            console.log("cmpEn : ", cmpEn);
            if (cmpEn.members.filter(x => x.userId === userId).length < 1 && cmpEn.owner.id !== userId)
                throw new app_error_1.AppError('AppError', 'Bu topluluğun üyesi değilsiniz.', 403);
            return Promise.resolve();
        });
    }
};
ProjectService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.PROJECT)),
    __param(1, inversify_1.inject(_ioc_1.InjectTypes.Repository.STATUS)),
    __param(2, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY)),
    __metadata("design:paramtypes", [Object, Object, Object])
], ProjectService);
exports.ProjectService = ProjectService;
