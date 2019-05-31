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
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const _ioc_1 = require("@ioc");
const dtos_1 = require("@models/dtos");
const company_entity_1 = require("@entities/company.entity");
const app_error_1 = require("@errors/app-error");
const company_membership_entity_1 = require("@entities/company-membership.entity");
let CompanyService = class CompanyService {
    constructor(_companyRepository, _companyMemberRepository) {
        this._companyRepository = _companyRepository;
        this._companyMemberRepository = _companyMemberRepository;
    }
    add(model) {
        return new Promise((resolve, reject) => {
            let companyEn = Object.assign(new company_entity_1.CompanyEntity(), model);
            this._companyRepository.insert(companyEn).then((res) => {
                resolve(res.id);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    list(filters, requestorId) {
        return new Promise((resolve, reject) => {
            let companyDtos = [];
            this._companyRepository.listByFiltersAndUser(filters, requestorId).then((companies) => {
                companies.map((cmp) => {
                    let companyDto = Object.assign(new dtos_1.CompanyListDto(), cmp, { projects: undefined, users: undefined });
                    companyDto.projectCount = cmp.projects.length;
                    companyDto.userCount = cmp.members.length;
                    companyDtos.push(companyDto);
                });
                resolve(companyDtos);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    find(id, requestorId) {
        return new Promise((resolve, reject) => {
            let companyEntity;
            this._companyRepository.findForDetails(id).then((foundCompany) => {
                if (!foundCompany)
                    throw new app_error_1.AppError('AppError', 'Company not found.', 404);
                companyEntity = foundCompany;
                //TODO bu companyiye üye mi diyo kontrol et
                let companyDto = Object.assign(new dtos_1.CompanyDetailDto(), companyEntity, { projects: undefined, users: undefined });
                companyDto.projectCount = companyEntity.projects.length;
                companyDto.userCount = companyEntity.members.length;
                resolve(companyDto);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    update(id, model, requestorId) {
        return new Promise((resolve, reject) => {
            let oldCompany;
            let updatedCompany;
            this._companyRepository.findById(id).then((foundCompany) => {
                oldCompany = foundCompany;
                if (!foundCompany)
                    throw new app_error_1.AppError('AppError', 'Company not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                updatedCompany = Object.assign(oldCompany, model);
                return this._companyRepository.update(id, updatedCompany);
            }).then(() => {
                resolve(updatedCompany);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    delete(id, requestorId) {
        return new Promise((resolve, reject) => {
            this._companyRepository.findById(id).then((foundCompany) => {
                if (!foundCompany)
                    throw new app_error_1.AppError('AppError', 'Company not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                return this._companyRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
    acceptMembership(id, requestorId) {
        return new Promise((resolve, reject) => {
            this._companyRepository.findOne(id, { relations: ["requestedUsers", "members", "members.user", "owner"] }).then((foundCompany) => {
                if (!foundCompany)
                    throw new app_error_1.AppError('AppError', 'Company not found.', 404);
                //TODO yetki kontrol
                //TODO istek varmı diye kontrol et
                console.log(requestorId);
                console.log(foundCompany);
                if (foundCompany.requestsSent.filter(x => x.userId === requestorId).length < 1)
                    throw new app_error_1.AppError('AppError', 'There is not any membership request for you from this company.', 401);
                if (foundCompany.members.filter(x => x.userId == requestorId).length > 0 || foundCompany.owner.id === requestorId)
                    throw new app_error_1.AppError('AppError', 'You Are Already a Member of this company.', 409);
                let cMemEn = new company_membership_entity_1.CompanyMembershipEntity();
                cMemEn.userId = requestorId;
                cMemEn.companyId = id;
                cMemEn.joiningDate = new Date();
                cMemEn.status = 1;
                return this._companyMemberRepository.insert(cMemEn);
                //TODO üye eklendiğinde kabul edilen istedği sil
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
    requestMembership(id, model, requestorId) {
        return new Promise((resolve, reject) => {
            this._companyRepository.findOne(id, { relations: ["requestedUsers", "members", "members.user", "owner"] }).then((foundCompany) => {
                if (!foundCompany)
                    throw new app_error_1.AppError('AppError', 'Company not found.', 404);
                //TODO yetki kontrol
                if (foundCompany.members.filter(x => x.userId === model.userId).length > 0 || foundCompany.owner.id === model.userId)
                    throw new app_error_1.AppError('AppError', 'User Is Already a Member of this company.', 409);
                if (foundCompany.requestsSent.filter(x => x.userId === model.userId).length > 0)
                    throw new app_error_1.AppError('AppError', 'Your Company already sent a membership request to this user.', 409);
                return this._companyRepository.insertMembershipRequest(id, model.userId);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
    validateAuthority(companyId, userId, role) {
        return new Promise((resolve, reject) => {
            this._companyRepository.findOne(companyId, { relations: ["users", "creator"] }).then((foundCompany) => {
                let cmp = foundCompany;
                if (cmp.members.filter(x => x.userId === userId).length < 1 && cmp.owner.id !== userId)
                    throw new app_error_1.AppError('AppError', 'You Are Not A Member of This Company', 403);
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
};
CompanyService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY)),
    __param(1, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY_MEMBERSHIP)),
    __metadata("design:paramtypes", [Object, Object])
], CompanyService);
exports.CompanyService = CompanyService;
