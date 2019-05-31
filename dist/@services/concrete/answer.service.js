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
const answer_entity_1 = require("@entities/answer.entity");
const app_error_1 = require("@errors/app-error");
let AnswerService = class AnswerService {
    constructor(_answerRepository) {
        this._answerRepository = _answerRepository;
    }
    add(model) {
        return new Promise((resolve, reject) => {
            //TODO yetkisi var mı diye kontrol et
            let answerEn = Object.assign(new answer_entity_1.AnswerEntity(), model);
            this._answerRepository.insert(answerEn).then((res) => {
                resolve(res.id);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    list(filters, requestorId) {
        throw new Error("Method not implemented.");
    }
    find(id, requestorId) {
        throw new Error("Method not implemented.");
    }
    update(id, model, requestorId) {
        return new Promise((resolve, reject) => {
            let oldAnswer;
            let updatedAnswer;
            this._answerRepository.findById(id).then((foundAnswer) => {
                oldAnswer = foundAnswer;
                if (!foundAnswer)
                    throw new app_error_1.AppError('AppError', 'Answer not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                updatedAnswer = Object.assign(oldAnswer, model);
                return this._answerRepository.update(id, updatedAnswer);
            }).then(() => {
                resolve(updatedAnswer);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    delete(id, requestorId) {
        return new Promise((resolve, reject) => {
            this._answerRepository.findById(id).then((foundAnswer) => {
                if (!foundAnswer)
                    throw new app_error_1.AppError('AppError', 'Answer not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                return this._answerRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
};
AnswerService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.ANSWER)),
    __metadata("design:paramtypes", [Object])
], AnswerService);
exports.AnswerService = AnswerService;
