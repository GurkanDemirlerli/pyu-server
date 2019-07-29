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
let WorkScheduleExclusionController = class WorkScheduleExclusionController {
    constructor(_workScheduleExclusionService) {
        this._workScheduleExclusionService = _workScheduleExclusionService;
    }
    list(req, res, next) {
        this._workScheduleExclusionService.list({}, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'WorkScheduleExclusionController');
        });
    }
    insert(req, res, next) {
        let wspDto = Object.assign({}, req.body);
        wspDto.creatorId = req.decoded.id;
        this._workScheduleExclusionService.add(wspDto).then((createdId) => {
            return this._workScheduleExclusionService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'WorkScheduleExclusionController');
        });
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._workScheduleExclusionService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'WorkScheduleExclusionController');
        });
    }
    update(req, res, next) {
        const id = req.params.id;
        const wspDto = Object.assign({}, req.body);
        this._workScheduleExclusionService.update(id, wspDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'WorkScheduleExclusionController');
        });
    }
    delete(req, res, next) {
        const id = +req.params.id;
        this._workScheduleExclusionService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'WorkScheduleExclusionController');
        });
    }
};
WorkScheduleExclusionController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.WORK_SCHEDULE_EXCLUSION)),
    __metadata("design:paramtypes", [Object])
], WorkScheduleExclusionController);
exports.WorkScheduleExclusionController = WorkScheduleExclusionController;
//# sourceMappingURL=work-schedule-exclusion.controller.js.map