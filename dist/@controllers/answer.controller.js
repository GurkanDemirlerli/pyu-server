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
let AnswerController = class AnswerController {
    constructor(_answerService) {
        this._answerService = _answerService;
    }
    list(req, res, next) {
        let filters = {};
        this._answerService.list(filters, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'AnswerController');
        });
    }
    insert(req, res, next) {
        let ansDto = Object.assign(new dtos_1.AnswerCreateDto(), req.body);
        ansDto.creatorId = req.decoded.id;
        this._answerService.add(ansDto).then((createdId) => {
            return this._answerService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'AnswerController');
        });
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._answerService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'AnswerController');
        });
    }
    update(req, res, next) {
        const id = req.params.id;
        const ansDto = Object.assign(new dtos_1.AnswerCreateDto(), req.body);
        this._answerService.update(id, ansDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'AnswerController');
        });
    }
    delete(req, res, next) {
        const id = +req.params.id;
        this._answerService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'AnswerController');
        });
    }
};
AnswerController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.ANSWER)),
    __metadata("design:paramtypes", [Object])
], AnswerController);
exports.AnswerController = AnswerController;
