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
const error_handler_1 = require("@errors/error-handler");
const inject_types_1 = require("@ioc/inject-types");
const dtos_1 = require("@models/dtos");
let CompanyController = class CompanyController {
    constructor(_companyService) {
        this._companyService = _companyService;
    }
    list(req, res, next) {
        let filters = {};
        if (req.query.hasOwnProperty("owner")) {
            if (req.query.assignedTo === "true")
                filters.owner = true;
        }
        this._companyService.list(filters, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'CompanyController');
        });
    }
    insert(req, res, next) {
        let cmpDto = Object.assign(new dtos_1.CompanyCreateDto(), req.body);
        cmpDto.ownerId = req.decoded.id;
        this._companyService.add(cmpDto).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'CompanyController');
        });
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._companyService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'CompanyController');
        });
    }
    update(req, res, next) {
        const id = req.params.id;
        const cmpDto = Object.assign(new dtos_1.CompanyCreateDto(), req.body);
        this._companyService.update(id, cmpDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'CompanyController');
        });
    }
    delete(req, res, next) {
        const id = +req.params.id;
        this._companyService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'CompanyController');
        });
    }
    requestMembership(req, res, next) {
        const id = +req.params.id;
        const curDto = Object.assign(new dtos_1.CompanyUserRegisterDto(), req.body);
        this._companyService.requestMembership(id, curDto, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'requestMembership', 'CompanyController');
        });
    }
    acceptMembership(req, res, next) {
        const id = +req.params.id;
        this._companyService.acceptMembership(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'acceptMembership', 'CompanyController');
        });
    }
};
CompanyController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.COMPANY)),
    __metadata("design:paramtypes", [Object])
], CompanyController);
exports.CompanyController = CompanyController;
