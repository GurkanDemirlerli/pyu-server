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
let SubjectTaskController = class SubjectTaskController {
    constructor(_subjectTaskService) {
        this._subjectTaskService = _subjectTaskService;
    }
    list(req, res, next) {
        this._subjectTaskService.list({}, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'SubjectTaskController');
        });
    }
    insert(req, res, next) {
        let dtskDto = Object.assign({}, req.body);
        dtskDto.creatorId = req.decoded.id;
        this._subjectTaskService.add(dtskDto).then((createdId) => {
            return this._subjectTaskService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'SubjectTaskController');
        });
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._subjectTaskService.find(id, 0).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'SubjectTaskController');
        });
    }
    update(req, res, next) {
        const id = req.params.id;
        const dtskDto = Object.assign({}, req.body);
        this._subjectTaskService.update(id, dtskDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'SubjectTaskController');
        });
    }
    delete(req, res, next) {
        const id = +req.params.id;
        this._subjectTaskService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'SubjectTaskController');
        });
    }
};
SubjectTaskController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.SUBJECT_TASK)),
    __metadata("design:paramtypes", [Object])
], SubjectTaskController);
exports.SubjectTaskController = SubjectTaskController;
//# sourceMappingURL=subject-task.controller.js.map