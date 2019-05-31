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
const dtos_1 = require("@models/dtos");
const error_handler_1 = require("@errors/error-handler");
const inject_types_1 = require("@ioc/inject-types");
const app_error_1 = require("@errors/app-error");
let ProjectController = class ProjectController {
    constructor(_projectService) {
        this._projectService = _projectService;
    }
    listByCompany(req, res, next) {
        const companyId = req.params.companyId;
        let filters = {};
        if (req.query.hasOwnProperty("skip"))
            filters.skip = +req.query.skip;
        if (req.query.hasOwnProperty("take"))
            filters.take = +req.query.take;
        this._projectService.listByCompany(filters, req.decoded.id, companyId).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'ProjectController');
        });
    }
    insert(req, res, next) {
        let prjDto = Object.assign(new dtos_1.ProjectCreateDto(), req.body);
        prjDto.userId = req.decoded.id;
        this._projectService.add(prjDto).then((createdId) => {
            // return this._projectService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'ProjectController');
        });
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._projectService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'ProjectController');
        });
    }
    update(req, res, next) {
        const id = req.params.id;
        const prjDto = Object.assign(new dtos_1.ProjectCreateDto(), req.body);
        this._projectService.update(id, prjDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'ProjectController');
        });
    }
    delete(req, res, next) {
        const id = +req.params.id;
        this._projectService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'ProjectController');
        });
    }
    assignProjectManager(req, res, next) {
        return error_handler_1.ErrorHandler.handleErrorResponses(new app_error_1.AppError('AppError', 'Method Not Implemented', 501), res, 'assignProjectManager', 'ProjectController');
    }
    start(req, res, next) {
        return error_handler_1.ErrorHandler.handleErrorResponses(new app_error_1.AppError('AppError', 'Method Not Implemented', 501), res, 'start', 'ProjectController');
    }
    pause(req, res, next) {
        return error_handler_1.ErrorHandler.handleErrorResponses(new app_error_1.AppError('AppError', 'Method Not Implemented', 501), res, 'stop', 'ProjectController');
    }
};
ProjectController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.PROJECT)),
    __metadata("design:paramtypes", [Object])
], ProjectController);
exports.ProjectController = ProjectController;
