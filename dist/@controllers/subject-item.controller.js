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
let SubjectItemController = class SubjectItemController {
    constructor(_subjectItemService) {
        this._subjectItemService = _subjectItemService;
    }
    getAncestors(req, res, next) {
        const id = +req.params.id;
        this._subjectItemService.getAncestors(id, 0).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'getAncestors', 'SubjectItemController');
        });
    }
    getDescendants(req, res, next) {
        const id = +req.params.id;
        this._subjectItemService.getDescendants(id, 0).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'getDescendants', 'SubjectItemController');
        });
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._subjectItemService.find(id, 0).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'SubjectItemController');
        });
    }
};
SubjectItemController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.SUBJECT_ITEM)),
    __metadata("design:paramtypes", [Object])
], SubjectItemController);
exports.SubjectItemController = SubjectItemController;
//# sourceMappingURL=subject-item.controller.js.map