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
const error_handler_1 = require("../errors/error-handler");
const inject_types_1 = require("../ioc/inject-types");
let WorkScheduleController = class WorkScheduleController {
    constructor(_workScheduleService) {
        this._workScheduleService = _workScheduleService;
    }
    list(req, res, next) {
        this._workScheduleService.list({}, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'WorkScheduleController');
        });
    }
    insert(req, res, next) {
        let wspDto = Object.assign({}, req.body);
        wspDto.creatorId = req.decoded.id;
        this._workScheduleService.add(wspDto).then((createdId) => {
            return this._workScheduleService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'WorkScheduleController');
        });
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._workScheduleService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'WorkScheduleController');
        });
    }
    update(req, res, next) {
        const id = req.params.id;
        const wspDto = Object.assign({}, req.body);
        this._workScheduleService.update(id, wspDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'WorkScheduleController');
        });
    }
    delete(req, res, next) {
        const id = +req.params.id;
        this._workScheduleService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'WorkScheduleController');
        });
    }
};
WorkScheduleController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.WORK_SCHEDULE)),
    __metadata("design:paramtypes", [Object])
], WorkScheduleController);
exports.WorkScheduleController = WorkScheduleController;
//# sourceMappingURL=work-schedule.controller.js.map