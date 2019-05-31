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
let TaskController = class TaskController {
    constructor(_taskService) {
        this._taskService = _taskService;
    }
    list(req, res, next) {
        let filters = {};
        if (req.query.hasOwnProperty("assignedTo"))
            filters.assignedTo = +req.query.assignedTo;
        if (req.query.hasOwnProperty("createdBy"))
            filters.createdBy = +req.query.createdBy;
        if (req.query.hasOwnProperty("projectId"))
            filters.projectId = +req.query.projectId;
        if (req.query.hasOwnProperty("status"))
            filters.status = +req.query.status;
        if (req.query.hasOwnProperty("skip"))
            filters.skip = +req.query.skip;
        if (req.query.hasOwnProperty("take"))
            filters.take = +req.query.take;
        this._taskService.list(filters, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'TaskController');
        });
    }
    insert(req, res, next) {
        let tskDto = Object.assign(new dtos_1.TaskCreateDto(), req.body);
        tskDto.creatorId = req.decoded.id;
        this._taskService.add(tskDto).then((createdId) => {
            return this._taskService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'TaskController');
        });
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._taskService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'TaskController');
        });
    }
    update(req, res, next) {
        const id = req.params.id;
        const tskDto = Object.assign(new dtos_1.TaskCreateDto(), req.body);
        this._taskService.update(id, tskDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'TaskController');
        });
    }
    delete(req, res, next) {
        const id = +req.params.id;
        this._taskService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'TaskController');
        });
    }
    updateStatus(req, res, next) {
        return error_handler_1.ErrorHandler.handleErrorResponses(new app_error_1.AppError('AppError', 'Method Not Implemented', 501), res, 'stop', 'ProjectController');
    }
};
TaskController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.TASK)),
    __metadata("design:paramtypes", [Object])
], TaskController);
exports.TaskController = TaskController;
