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
let QuestionController = class QuestionController {
    constructor(_questionService) {
        this._questionService = _questionService;
    }
    list(req, res, next) {
        let filters = {};
        this._questionService.list(filters, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'QuestionController');
        });
    }
    insert(req, res, next) {
        let qstDto = Object.assign(new dtos_1.QuestionCreateDto(), req.body);
        qstDto.creatorId = req.decoded.id;
        this._questionService.add(qstDto).then((createdId) => {
            return this._questionService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'QuestionController');
        });
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._questionService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'QuestionController');
        });
    }
    update(req, res, next) {
        const id = req.params.id;
        const qstDto = Object.assign(new dtos_1.QuestionCreateDto(), req.body);
        this._questionService.update(id, qstDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'QuestionController');
        });
    }
    delete(req, res, next) {
        const id = +req.params.id;
        this._questionService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'QuestionController');
        });
    }
};
QuestionController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.TASK)),
    __metadata("design:paramtypes", [Object])
], QuestionController);
exports.QuestionController = QuestionController;
