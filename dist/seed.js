/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/seed/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/@controllers/answer.controller.ts":
/*!***********************************************!*\
  !*** ./src/@controllers/answer.controller.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const error_handler_1 = __webpack_require__(/*! @errors/error-handler */ "./src/errors/error-handler.ts");
const inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ "./src/ioc/inject-types.ts");
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


/***/ }),

/***/ "./src/@controllers/comment.controller.ts":
/*!************************************************!*\
  !*** ./src/@controllers/comment.controller.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const error_handler_1 = __webpack_require__(/*! @errors/error-handler */ "./src/errors/error-handler.ts");
const inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ "./src/ioc/inject-types.ts");
let CommentController = class CommentController {
    constructor(_commentService) {
        this._commentService = _commentService;
    }
    list(req, res, next) {
        let filters = {};
        this._commentService.list(filters, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'CommentController');
        });
    }
    insert(req, res, next) {
        let cmtDto = Object.assign(new dtos_1.CommentCreateDto(), req.body);
        cmtDto.userId = req.decoded.id;
        this._commentService.add(cmtDto).then((createdId) => {
            return this._commentService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'CommentController');
        });
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._commentService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'CommentController');
        });
    }
    update(req, res, next) {
        const id = req.params.id;
        const cmtDto = Object.assign(new dtos_1.CommentCreateDto(), req.body);
        this._commentService.update(id, cmtDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'CommentController');
        });
    }
    delete(req, res, next) {
        const id = +req.params.id;
        this._commentService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'CommentController');
        });
    }
};
CommentController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.COMMENT)),
    __metadata("design:paramtypes", [Object])
], CommentController);
exports.CommentController = CommentController;


/***/ }),

/***/ "./src/@controllers/company.controller.ts":
/*!************************************************!*\
  !*** ./src/@controllers/company.controller.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const error_handler_1 = __webpack_require__(/*! @errors/error-handler */ "./src/errors/error-handler.ts");
const inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ "./src/ioc/inject-types.ts");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
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
        //aaaaaaaaaa
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
        const memRequestId = +req.params.id;
        const curDto = Object.assign(new dtos_1.CompanyUserRegisterDto(), req.body);
        this._companyService.requestMembership(memRequestId, curDto, req.decoded.id).then(() => {
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
    addStatusTemplate(req, res, next) {
        const companyId = +req.params.id;
        const stDto = Object.assign(new dtos_1.AddStatusTemplateDto(), req.body);
        this._companyService.addStatusTemplate(companyId, stDto, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'addStatusTemplate', 'CompanyController');
        });
    }
};
CompanyController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.COMPANY)),
    __metadata("design:paramtypes", [Object])
], CompanyController);
exports.CompanyController = CompanyController;


/***/ }),

/***/ "./src/@controllers/issue.controller.ts":
/*!**********************************************!*\
  !*** ./src/@controllers/issue.controller.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const error_handler_1 = __webpack_require__(/*! @errors/error-handler */ "./src/errors/error-handler.ts");
const inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ "./src/ioc/inject-types.ts");
let IssueController = class IssueController {
    constructor(_issueService) {
        this._issueService = _issueService;
    }
    list(req, res, next) {
        let filters = {};
        this._issueService.list(filters, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'IssueController');
        });
    }
    insert(req, res, next) {
        let issDto = Object.assign(new dtos_1.IssueCreateDto(), req.body);
        issDto.creatorId = req.decoded.id;
        this._issueService.add(issDto).then((createdId) => {
            return this._issueService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'IssueController');
        });
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._issueService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'IssueController');
        });
    }
    update(req, res, next) {
        const id = req.params.id;
        const issDto = Object.assign(new dtos_1.IssueCreateDto(), req.body);
        this._issueService.update(id, issDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'IssueController');
        });
    }
    delete(req, res, next) {
        const id = +req.params.id;
        this._issueService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'IssueController');
        });
    }
};
IssueController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.ISSUE)),
    __metadata("design:paramtypes", [Object])
], IssueController);
exports.IssueController = IssueController;


/***/ }),

/***/ "./src/@controllers/question.controller.ts":
/*!*************************************************!*\
  !*** ./src/@controllers/question.controller.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const error_handler_1 = __webpack_require__(/*! @errors/error-handler */ "./src/errors/error-handler.ts");
const inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ "./src/ioc/inject-types.ts");
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


/***/ }),

/***/ "./src/@controllers/root-project.controller.ts":
/*!*****************************************************!*\
  !*** ./src/@controllers/root-project.controller.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const error_handler_1 = __webpack_require__(/*! @errors/error-handler */ "./src/errors/error-handler.ts");
const inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ "./src/ioc/inject-types.ts");
const app_error_1 = __webpack_require__(/*! @errors/app-error */ "./src/errors/app-error.ts");
let RootProjectController = class RootProjectController {
    constructor(_rootProjectService) {
        this._rootProjectService = _rootProjectService;
    }
    listByCompany(req, res, next) {
        const companyId = req.params.companyId;
        let filters = {};
        if (req.query.hasOwnProperty("skip"))
            filters.skip = +req.query.skip;
        if (req.query.hasOwnProperty("take"))
            filters.take = +req.query.take;
        this._rootProjectService.listByCompany(filters, req.decoded.id, companyId).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'RootProjectController');
        });
    }
    insert(req, res, next) {
        let prjDto = Object.assign(new dtos_1.RootProjectCreateDto(), req.body);
        prjDto.userId = req.decoded.id;
        this._rootProjectService.add(prjDto).then((createdId) => {
            return this._rootProjectService.find(createdId, req.decoded.id);
        }).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'RootProjectController');
        });
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._rootProjectService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'RootProjectController');
        });
    }
    update(req, res, next) {
        const id = req.params.id;
        const prjDto = Object.assign(new dtos_1.RootProjectCreateDto(), req.body);
        this._rootProjectService.update(id, prjDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'RootProjectController');
        });
    }
    delete(req, res, next) {
        const id = +req.params.id;
        this._rootProjectService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'RootProjectController');
        });
    }
    assignRootProjectManager(req, res, next) {
        return error_handler_1.ErrorHandler.handleErrorResponses(new app_error_1.AppError('AppError', 'Method Not Implemented', 501), res, 'assignRootProjectManager', 'RootProjectController');
    }
    start(req, res, next) {
        return error_handler_1.ErrorHandler.handleErrorResponses(new app_error_1.AppError('AppError', 'Method Not Implemented', 501), res, 'start', 'RootProjectController');
    }
    pause(req, res, next) {
        return error_handler_1.ErrorHandler.handleErrorResponses(new app_error_1.AppError('AppError', 'Method Not Implemented', 501), res, 'stop', 'RootProjectController');
    }
    getMembers(req, res, next) {
        const id = +req.params.id;
        this._rootProjectService.getMembers(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'getMembers', 'RootProjectController');
        });
    }
    addMember(req, res, next) {
        const id = +req.params.id;
        let prjRgDto = Object.assign(new dtos_1.RootProjectUserRegisterDto(), req.body);
        this._rootProjectService.addMember(id, prjRgDto).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'addMember', 'RootProjectController');
        });
    }
};
RootProjectController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.ROOTPROJECT)),
    __metadata("design:paramtypes", [Object])
], RootProjectController);
exports.RootProjectController = RootProjectController;


/***/ }),

/***/ "./src/@controllers/sub-project.controller.ts":
/*!****************************************************!*\
  !*** ./src/@controllers/sub-project.controller.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const error_handler_1 = __webpack_require__(/*! @errors/error-handler */ "./src/errors/error-handler.ts");
const inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ "./src/ioc/inject-types.ts");
let SubProjectController = class SubProjectController {
    constructor(_subProjectService) {
        this._subProjectService = _subProjectService;
    }
    find(req, res, next) {
        const id = +req.params.id;
        this._subProjectService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'SubProjectController');
        });
    }
};
SubProjectController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.SUB_PROJECT)),
    __metadata("design:paramtypes", [Object])
], SubProjectController);
exports.SubProjectController = SubProjectController;


/***/ }),

/***/ "./src/@controllers/task.controller.ts":
/*!*********************************************!*\
  !*** ./src/@controllers/task.controller.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const error_handler_1 = __webpack_require__(/*! @errors/error-handler */ "./src/errors/error-handler.ts");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
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
    //TODO guncellenen status projede var mı diye kontrol et
    updateStatus(req, res, next) {
        const id = +req.params.id;
        let tStatusUpDto = Object.assign(new dtos_1.TaskStatusUpdateDto(), req.body);
        this._taskService.changeStatus(id, tStatusUpDto).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'updateStatus', 'TaskController');
        });
    }
    convertToProject(req, res, next) {
        const id = +req.params.id;
        this._taskService.convertToProject(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'convertToProject', 'TaskController');
        });
    }
};
TaskController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Service.TASK)),
    __metadata("design:paramtypes", [Object])
], TaskController);
exports.TaskController = TaskController;


/***/ }),

/***/ "./src/@controllers/user.controller.ts":
/*!*********************************************!*\
  !*** ./src/@controllers/user.controller.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const error_handler_1 = __webpack_require__(/*! @errors/error-handler */ "./src/errors/error-handler.ts");
const inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ "./src/ioc/inject-types.ts");
let UserController = class UserController {
    constructor(_userService) {
        this._userService = _userService;
    }
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let registerDto = Object.assign(new dtos_1.RegisterDto(), req.body);
            this._userService.register(registerDto).then((user) => {
                return res.status(200).json({
                    success: true,
                    data: user
                });
            }).catch((error) => {
                return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'register', 'UserController');
            });
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let loginDto = Object.assign(new dtos_1.LoginDto(), req.body);
            this._userService.login(loginDto).then((user) => {
                return res.status(200).json({
                    success: true,
                    data: user
                });
            }).catch((error) => {
                return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'login', 'UserController');
            });
        });
    }
};
UserController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.USER)),
    __metadata("design:paramtypes", [Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./src/@repository/concrete/abstract-status.repository.ts":
/*!****************************************************************!*\
  !*** ./src/@repository/concrete/abstract-status.repository.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const abstract_status_entity_1 = __webpack_require__(/*! ./../../entities/abstract-status.entity */ "./src/entities/abstract-status.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let AbstractStatusRepository = class AbstractStatusRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(abstract_status_entity_1.AbstractStatusEntity);
    }
};
AbstractStatusRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], AbstractStatusRepository);
exports.AbstractStatusRepository = AbstractStatusRepository;


/***/ }),

/***/ "./src/@repository/concrete/answer.repository.ts":
/*!*******************************************************!*\
  !*** ./src/@repository/concrete/answer.repository.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const answer_entity_1 = __webpack_require__(/*! ./../../entities/answer.entity */ "./src/entities/answer.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let AnswerRepository = class AnswerRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(answer_entity_1.AnswerEntity);
    }
};
AnswerRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], AnswerRepository);
exports.AnswerRepository = AnswerRepository;


/***/ }),

/***/ "./src/@repository/concrete/base/repository.base.ts":
/*!**********************************************************!*\
  !*** ./src/@repository/concrete/base/repository.base.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let RepositoryBase = class RepositoryBase {
    constructor(type) {
        this.type = type;
    }
    list(options) {
        return typeorm_1.getManager().getRepository(this.type).find(options);
    }
    findById(id) {
        return typeorm_1.getManager().getRepository(this.type).findOne(id);
    }
    findOne(id, options) {
        if (id !== null)
            return typeorm_1.getManager().getRepository(this.type).findOne(id, options);
        else
            return typeorm_1.getManager().getRepository(this.type).findOne(options);
    }
    insert(model, manager = typeorm_1.getManager()) {
        return manager.getRepository(this.type).save(model);
    }
    update(id, model, manager = typeorm_1.getManager()) {
        return manager.getRepository(this.type).update(id, model);
    }
    delete(id, manager = typeorm_1.getManager()) {
        return manager.getRepository(this.type).delete(id);
    }
};
RepositoryBase = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.unmanaged()),
    __metadata("design:paramtypes", [Object])
], RepositoryBase);
exports.RepositoryBase = RepositoryBase;


/***/ }),

/***/ "./src/@repository/concrete/comment.repository.ts":
/*!********************************************************!*\
  !*** ./src/@repository/concrete/comment.repository.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const comment_entity_1 = __webpack_require__(/*! ./../../entities/comment.entity */ "./src/entities/comment.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
let CommentRepository = class CommentRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(comment_entity_1.CommentEntity);
    }
};
CommentRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], CommentRepository);
exports.CommentRepository = CommentRepository;


/***/ }),

/***/ "./src/@repository/concrete/company-membership.repository.ts":
/*!*******************************************************************!*\
  !*** ./src/@repository/concrete/company-membership.repository.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const company_membership_entity_1 = __webpack_require__(/*! @entities/company-membership.entity */ "./src/entities/company-membership.entity.ts");
let CompanyMembershipRepository = class CompanyMembershipRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(company_membership_entity_1.CompanyMembershipEntity);
    }
};
CompanyMembershipRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], CompanyMembershipRepository);
exports.CompanyMembershipRepository = CompanyMembershipRepository;


/***/ }),

/***/ "./src/@repository/concrete/company.repository.ts":
/*!********************************************************!*\
  !*** ./src/@repository/concrete/company.repository.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const company_entity_1 = __webpack_require__(/*! ./../../entities/company.entity */ "./src/entities/company.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let CompanyRepository = class CompanyRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(company_entity_1.CompanyEntity);
    }
    listByFiltersAndUser(filters, userId) {
        let query = typeorm_1.getManager().createQueryBuilder(company_entity_1.CompanyEntity, "company").select("company")
            .leftJoin("company.owner", "owner").addSelect(["owner.id", "owner.name", "owner.surname", "owner.username"])
            .where("owner.id =:userId", { userId: userId })
            .leftJoinAndSelect("company.members", "member")
            .leftJoin("member.user", "user").addSelect(["user.id", "user.name", "user.surname", "user.username"])
            .leftJoin("company.projects", "project").addSelect(["project.id"]);
        if (filters.owner === undefined)
            query = query.orWhere("user.id =:userId", { userId: userId });
        query = query.orderBy("company.id", "DESC");
        if (filters.take !== undefined) {
            query = query.take(filters.take);
            if (filters.skip !== undefined)
                query = query.skip(filters.skip);
        }
        return query.getMany();
    }
    findForDetails(id) {
        let query = typeorm_1.getManager().createQueryBuilder(company_entity_1.CompanyEntity, "company").select("company")
            .where("company.id =:id", { id: id })
            .leftJoin("company.owner", "owner").addSelect(["owner.id", "owner.name", "owner.surname", "owner.username"])
            .leftJoinAndSelect("company.members", "member")
            .leftJoin("member.user", "user").addSelect(["user.id", "user.name", "user.surname", "user.username"])
            .leftJoin("company.projects", "project").addSelect(["project.id"]);
        return query.getOne();
    }
    insertMembershipRequest(companyId, userId) {
        let query = typeorm_1.getManager().createQueryBuilder().relation(company_entity_1.CompanyEntity, "requestedUsers").of(companyId).add(userId);
        return query;
    }
    insertMember(companyId, userId) {
        let query = typeorm_1.getManager().createQueryBuilder().relation(company_entity_1.CompanyEntity, "users").of(companyId).add(userId);
        return query;
    }
};
CompanyRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], CompanyRepository);
exports.CompanyRepository = CompanyRepository;


/***/ }),

/***/ "./src/@repository/concrete/index.ts":
/*!*******************************************!*\
  !*** ./src/@repository/concrete/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var project_manager_repository_1 = __webpack_require__(/*! ./project-manager.repository */ "./src/@repository/concrete/project-manager.repository.ts");
exports.ProjectManagerRepository = project_manager_repository_1.ProjectManagerRepository;
var question_repository_1 = __webpack_require__(/*! ./question.repository */ "./src/@repository/concrete/question.repository.ts");
exports.QuestionRepository = question_repository_1.QuestionRepository;
var issue_repository_1 = __webpack_require__(/*! ./issue.repository */ "./src/@repository/concrete/issue.repository.ts");
exports.IssueRepository = issue_repository_1.IssueRepository;
var answer_repository_1 = __webpack_require__(/*! ./answer.repository */ "./src/@repository/concrete/answer.repository.ts");
exports.AnswerRepository = answer_repository_1.AnswerRepository;
var status_repository_1 = __webpack_require__(/*! ./status.repository */ "./src/@repository/concrete/status.repository.ts");
exports.StatusRepository = status_repository_1.StatusRepository;
var project_repository_1 = __webpack_require__(/*! ./project.repository */ "./src/@repository/concrete/project.repository.ts");
exports.ProjectRepository = project_repository_1.ProjectRepository;
var company_repository_1 = __webpack_require__(/*! ./company.repository */ "./src/@repository/concrete/company.repository.ts");
exports.CompanyRepository = company_repository_1.CompanyRepository;
var user_repository_1 = __webpack_require__(/*! ./user.repository */ "./src/@repository/concrete/user.repository.ts");
exports.UserRepository = user_repository_1.UserRepository;
var comment_repository_1 = __webpack_require__(/*! ./comment.repository */ "./src/@repository/concrete/comment.repository.ts");
exports.CommentRepository = comment_repository_1.CommentRepository;
var task_assignment_repository_1 = __webpack_require__(/*! ./task-assignment.repository */ "./src/@repository/concrete/task-assignment.repository.ts");
exports.TaskAssignmentRepository = task_assignment_repository_1.TaskAssignmentRepository;
var task_repository_1 = __webpack_require__(/*! ./task.repository */ "./src/@repository/concrete/task.repository.ts");
exports.TaskRepository = task_repository_1.TaskRepository;
var company_membership_repository_1 = __webpack_require__(/*! ./company-membership.repository */ "./src/@repository/concrete/company-membership.repository.ts");
exports.CompanyMembershipRepository = company_membership_repository_1.CompanyMembershipRepository;
var membership_request_repository_1 = __webpack_require__(/*! ./membership-request.repository */ "./src/@repository/concrete/membership-request.repository.ts");
exports.MembershipRequestRepository = membership_request_repository_1.MembershipRequestRepository;
var project_membership_repository_1 = __webpack_require__(/*! ./project-membership.repository */ "./src/@repository/concrete/project-membership.repository.ts");
exports.ProjectMembershipRepository = project_membership_repository_1.ProjectMembershipRepository;
var label_repository_1 = __webpack_require__(/*! ./label.repository */ "./src/@repository/concrete/label.repository.ts");
exports.LabelRepository = label_repository_1.LabelRepository;
var task_label_repository_1 = __webpack_require__(/*! ./task-label.repository */ "./src/@repository/concrete/task-label.repository.ts");
exports.TaskLabelRepository = task_label_repository_1.TaskLabelRepository;
var abstract_status_repository_1 = __webpack_require__(/*! ./abstract-status.repository */ "./src/@repository/concrete/abstract-status.repository.ts");
exports.AbstractStatusRepository = abstract_status_repository_1.AbstractStatusRepository;
var status_template_repository_1 = __webpack_require__(/*! ./status-template.repository */ "./src/@repository/concrete/status-template.repository.ts");
exports.StatusTemplateRepository = status_template_repository_1.StatusTemplateRepository;
var sub_project_repository_1 = __webpack_require__(/*! ./sub-project.repository */ "./src/@repository/concrete/sub-project.repository.ts");
exports.SubProjectRepository = sub_project_repository_1.SubProjectRepository;
var root_project_repository_1 = __webpack_require__(/*! ./root-project.repository */ "./src/@repository/concrete/root-project.repository.ts");
exports.RootProjectRepository = root_project_repository_1.RootProjectRepository;


/***/ }),

/***/ "./src/@repository/concrete/issue.repository.ts":
/*!******************************************************!*\
  !*** ./src/@repository/concrete/issue.repository.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const issue_entity_1 = __webpack_require__(/*! ./../../entities/issue.entity */ "./src/entities/issue.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
let IssueRepository = class IssueRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(issue_entity_1.IssueEntity);
    }
};
IssueRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], IssueRepository);
exports.IssueRepository = IssueRepository;


/***/ }),

/***/ "./src/@repository/concrete/label.repository.ts":
/*!******************************************************!*\
  !*** ./src/@repository/concrete/label.repository.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const label_entity_1 = __webpack_require__(/*! ./../../entities/label.entity */ "./src/entities/label.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let LabelRepository = class LabelRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(label_entity_1.LabelEntity);
    }
};
LabelRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], LabelRepository);
exports.LabelRepository = LabelRepository;


/***/ }),

/***/ "./src/@repository/concrete/membership-request.repository.ts":
/*!*******************************************************************!*\
  !*** ./src/@repository/concrete/membership-request.repository.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const membership_request_entity_1 = __webpack_require__(/*! @entities/membership-request.entity */ "./src/entities/membership-request.entity.ts");
let MembershipRequestRepository = class MembershipRequestRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(membership_request_entity_1.MembershipRequestEntity);
    }
};
MembershipRequestRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], MembershipRequestRepository);
exports.MembershipRequestRepository = MembershipRequestRepository;


/***/ }),

/***/ "./src/@repository/concrete/project-manager.repository.ts":
/*!****************************************************************!*\
  !*** ./src/@repository/concrete/project-manager.repository.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const project_manager_entity_1 = __webpack_require__(/*! ./../../entities/project-manager.entity */ "./src/entities/project-manager.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let ProjectManagerRepository = class ProjectManagerRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(project_manager_entity_1.ProjectManagerEntity);
    }
};
ProjectManagerRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], ProjectManagerRepository);
exports.ProjectManagerRepository = ProjectManagerRepository;


/***/ }),

/***/ "./src/@repository/concrete/project-membership.repository.ts":
/*!*******************************************************************!*\
  !*** ./src/@repository/concrete/project-membership.repository.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const project_membership_entity_1 = __webpack_require__(/*! ./../../entities/project-membership.entity */ "./src/entities/project-membership.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let ProjectMembershipRepository = class ProjectMembershipRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(project_membership_entity_1.ProjectMembershipEntity);
    }
};
ProjectMembershipRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], ProjectMembershipRepository);
exports.ProjectMembershipRepository = ProjectMembershipRepository;


/***/ }),

/***/ "./src/@repository/concrete/project.repository.ts":
/*!********************************************************!*\
  !*** ./src/@repository/concrete/project.repository.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const project_entity_1 = __webpack_require__(/*! ./../../entities/project.entity */ "./src/entities/project.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let ProjectRepository = class ProjectRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(project_entity_1.ProjectEntity);
    }
    listByFiltersByCompany(filters, companyId) {
        let query = typeorm_1.getManager().createQueryBuilder(project_entity_1.ProjectEntity, "project")
            .leftJoinAndSelect("project.managers", "manager")
            .where("project.companyId =:companyId", { companyId: companyId });
        query = query.orderBy("project.id", "DESC");
        if (filters.take !== undefined) {
            query = query.take(filters.take);
            if (filters.skip !== undefined)
                query = query.skip(filters.skip);
        }
        return query.orderBy("project.id", "DESC").getMany();
    }
    findForDetails(id) {
        let query = typeorm_1.getManager().createQueryBuilder(project_entity_1.ProjectEntity, "project").select(["project.id", "project.title", "project.description"])
            .where("project.id =:id", { id: id })
            .leftJoin("project.company", "company").addSelect(["company.id", "company.name", "company.description"])
            .leftJoin("company.owner", "companyOwner").addSelect(["companyOwner.id", "companyOwner.name", "companyOwner.surname", "companyOwner.username"])
            .leftJoin("project.creator", "creator").addSelect(["creator.id", "creator.name", "creator.surname", "creator.username"])
            .leftJoinAndSelect("project.statuses", "status");
        return query.getOne();
    }
};
ProjectRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], ProjectRepository);
exports.ProjectRepository = ProjectRepository;


/***/ }),

/***/ "./src/@repository/concrete/question.repository.ts":
/*!*********************************************************!*\
  !*** ./src/@repository/concrete/question.repository.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const question_entity_1 = __webpack_require__(/*! ./../../entities/question.entity */ "./src/entities/question.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let QuestionRepository = class QuestionRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(question_entity_1.QuestionEntity);
    }
};
QuestionRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], QuestionRepository);
exports.QuestionRepository = QuestionRepository;


/***/ }),

/***/ "./src/@repository/concrete/root-project.repository.ts":
/*!*************************************************************!*\
  !*** ./src/@repository/concrete/root-project.repository.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const root_project_entity_1 = __webpack_require__(/*! ./../../entities/root-project.entity */ "./src/entities/root-project.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let RootProjectRepository = class RootProjectRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(root_project_entity_1.RootProjectEntity);
    }
    // listByFiltersByCompany(filters: RootProjectFilter, companyId: number): Promise<RootProjectEntity[]> {
    //   let query = getManager().createQueryBuilder(RootProjectEntity, "project")
    //     .leftJoinAndSelect("project.managers", "manager")
    //     .where("project.companyId =:companyId", { companyId: companyId })
    //   query = query.orderBy("project.id", "DESC");
    //   if (filters.take !== undefined) {
    //     query = query.take(filters.take);
    //     if (filters.skip !== undefined) query = query.skip(filters.skip);
    //   }
    //   return query.orderBy("project.id", "DESC").getMany();
    // }
    findForDetails(id) {
        let query = typeorm_1.getManager().createQueryBuilder(root_project_entity_1.RootProjectEntity, "rtp").select(["rtp.id", "rtp.title", "rtp.description"])
            .where("rtp.id =:id", { id: id })
            .leftJoin("rtp.company", "company").addSelect(["company.id", "company.name", "company.description"])
            .leftJoin("company.owner", "companyOwner").addSelect(["companyOwner.id", "companyOwner.name", "companyOwner.surname", "companyOwner.username"])
            .leftJoin("rtp.creator", "creator").addSelect(["creator.id", "creator.name", "creator.surname", "creator.username"])
            .leftJoinAndSelect("rtp.baseProject", "base")
            .leftJoinAndSelect("base.statuses", "status");
        return query.getOne();
    }
};
RootProjectRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], RootProjectRepository);
exports.RootProjectRepository = RootProjectRepository;


/***/ }),

/***/ "./src/@repository/concrete/status-template.repository.ts":
/*!****************************************************************!*\
  !*** ./src/@repository/concrete/status-template.repository.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const status_template_entity_1 = __webpack_require__(/*! ./../../entities/status-template.entity */ "./src/entities/status-template.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let StatusTemplateRepository = class StatusTemplateRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(status_template_entity_1.StatusTemplateEntity);
    }
};
StatusTemplateRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], StatusTemplateRepository);
exports.StatusTemplateRepository = StatusTemplateRepository;


/***/ }),

/***/ "./src/@repository/concrete/status.repository.ts":
/*!*******************************************************!*\
  !*** ./src/@repository/concrete/status.repository.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const status_entity_1 = __webpack_require__(/*! ./../../entities/status.entity */ "./src/entities/status.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let StatusRepository = class StatusRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(status_entity_1.StatusEntity);
    }
};
StatusRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], StatusRepository);
exports.StatusRepository = StatusRepository;


/***/ }),

/***/ "./src/@repository/concrete/sub-project.repository.ts":
/*!************************************************************!*\
  !*** ./src/@repository/concrete/sub-project.repository.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const sub_project_entity_1 = __webpack_require__(/*! ./../../entities/sub-project.entity */ "./src/entities/sub-project.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let SubProjectRepository = class SubProjectRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(sub_project_entity_1.SubProjectEntity);
    }
    findForDetails(id) {
        let query = typeorm_1.getManager().createQueryBuilder(sub_project_entity_1.SubProjectEntity, "rtp").select(["rtp.id",])
            .where("rtp.id =:id", { id: id })
            // .leftJoin("rtp.company", "company").addSelect(["company.id", "company.name", "company.description"])
            // .leftJoin("company.owner", "companyOwner").addSelect(["companyOwner.id", "companyOwner.name", "companyOwner.surname", "companyOwner.username"])
            // .leftJoin("rtp.creator", "creator").addSelect(["creator.id", "creator.name", "creator.surname", "creator.username"])
            .leftJoinAndSelect("rtp.baseProject", "base")
            .leftJoinAndSelect("base.statuses", "status")
            .leftJoinAndSelect("rtp.assignedTask", "asgtsk")
            .leftJoinAndSelect("asgtsk.project", "pp")
            .leftJoinAndSelect("pp.subProject", "pps")
            .leftJoinAndSelect("pp.rootProject", "ppr");
        return query.getOne();
    }
    findAncestor(id) {
        let query = typeorm_1.getManager().createQueryBuilder(sub_project_entity_1.SubProjectEntity, "rtp").select(["rtp.id",])
            .where("rtp.id =:id", { id: id })
            .leftJoinAndSelect("rtp.baseProject", "base")
            .leftJoinAndSelect("rtp.assignedTask", "asgtsk")
            .leftJoinAndSelect("asgtsk.project", "pp")
            .leftJoinAndSelect("pp.subProject", "pps")
            .leftJoinAndSelect("pp.rootProject", "ppr");
        return query.getOne();
    }
};
SubProjectRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], SubProjectRepository);
exports.SubProjectRepository = SubProjectRepository;


/***/ }),

/***/ "./src/@repository/concrete/task-assignment.repository.ts":
/*!****************************************************************!*\
  !*** ./src/@repository/concrete/task-assignment.repository.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const task_assignment_entity_1 = __webpack_require__(/*! ./../../entities/task-assignment.entity */ "./src/entities/task-assignment.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let TaskAssignmentRepository = class TaskAssignmentRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(task_assignment_entity_1.TaskAssignmentEntity);
    }
};
TaskAssignmentRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], TaskAssignmentRepository);
exports.TaskAssignmentRepository = TaskAssignmentRepository;


/***/ }),

/***/ "./src/@repository/concrete/task-label.repository.ts":
/*!***********************************************************!*\
  !*** ./src/@repository/concrete/task-label.repository.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const task_label_entity_1 = __webpack_require__(/*! ./../../entities/task-label.entity */ "./src/entities/task-label.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
let TaskLabelRepository = class TaskLabelRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(task_label_entity_1.TaskLabelEntity);
    }
};
TaskLabelRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], TaskLabelRepository);
exports.TaskLabelRepository = TaskLabelRepository;


/***/ }),

/***/ "./src/@repository/concrete/task.repository.ts":
/*!*****************************************************!*\
  !*** ./src/@repository/concrete/task.repository.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
const task_entity_1 = __webpack_require__(/*! ./../../entities/task.entity */ "./src/entities/task.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let TaskRepository = class TaskRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(task_entity_1.TaskEntity);
    }
    listByFilters(filters) {
        let query = typeorm_1.getManager().createQueryBuilder(task_entity_1.TaskEntity, "task")
            .leftJoinAndSelect("task.assignees", "assignee");
        if (filters.assignedTo !== undefined)
            query = query.andWhere("task.assignee.id =:id", { id: filters.assignedTo });
        if (filters.projectId !== undefined)
            query = query.andWhere("task.projectId =:projectId", { projectId: filters.projectId });
        if (filters.createdBy !== undefined)
            query = query.andWhere("task.creatorId =:creatorId", { creatorId: filters.createdBy });
        if (filters.status !== undefined)
            query = query.andWhere("task.statusId =:statusId", { statusId: filters.status });
        query = query.orderBy("task.id", "DESC");
        if (filters.take !== undefined) {
            query = query.take(filters.take);
            if (filters.skip !== undefined)
                query = query.skip(filters.skip);
        }
        query = query
            .leftJoin("task.comments", "comment").addSelect(["comment.id"])
            .leftJoinAndSelect("task.subProject", "sbp")
            .leftJoinAndSelect("sbp.baseProject", "bsp")
            .leftJoinAndSelect("bsp.tasks", "sbts");
        return query.orderBy("task.id", "DESC").getMany();
    }
    findForDetails(id) {
        let query = typeorm_1.getManager().createQueryBuilder(task_entity_1.TaskEntity, "task").select("task")
            .where("task.id =:id", { id: id })
            .innerJoin("task.creator", "creator").addSelect(["creator.id", "creator.name", "creator.surname", "creator.username"])
            .leftJoinAndSelect("task.assignees", "assignment")
            .leftJoin("assignment.user", "assignee").addSelect(["assignee.id", "assignee.name", "assignee.surname", "assignee.username"])
            .leftJoin("task.comments", "comment").addSelect(["comment.id", "comment.content", "comment.taskId"])
            .leftJoin("comment.creator", "commentCreator").addSelect(["commentCreator.id", "commentCreator.name", "commentCreator.surname", "commentCreator.username"])
            .leftJoin("task.fromIssue", "fromIssue").addSelect(["fromIssue.id", "fromIssue.title", "fromIssue.description"])
            .leftJoinAndSelect("task.project", "project")
            .leftJoinAndSelect("project.subProject", "pps")
            .leftJoinAndSelect("project.rootProject", "ppr")
            .leftJoin("task.status", "status").addSelect(["status.id", "status.title", "status.description"])
            .leftJoinAndSelect("task.subProject", "sbp")
            .leftJoinAndSelect("sbp.baseProject", "bsp")
            .leftJoinAndSelect("bsp.tasks", "sbts");
        return query.getOne();
    }
};
TaskRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], TaskRepository);
exports.TaskRepository = TaskRepository;


/***/ }),

/***/ "./src/@repository/concrete/user.repository.ts":
/*!*****************************************************!*\
  !*** ./src/@repository/concrete/user.repository.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./../../entities/user.entity */ "./src/entities/user.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const repository_base_1 = __webpack_require__(/*! ./base/repository.base */ "./src/@repository/concrete/base/repository.base.ts");
let UserRepository = class UserRepository extends repository_base_1.RepositoryBase {
    constructor() {
        super(user_entity_1.UserEntity);
    }
    findByLogin(email, password) {
        return typeorm_1.getManager().getRepository(user_entity_1.UserEntity).findOne({ email: email, password: password });
    }
};
UserRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], UserRepository);
exports.UserRepository = UserRepository;


/***/ }),

/***/ "./src/@repository/uow.ts":
/*!********************************!*\
  !*** ./src/@repository/uow.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
class Uow {
    constructor() {
        this.qr = typeorm_1.getConnection().createQueryRunner();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.qr.connect();
            yield this.qr.startTransaction();
        });
    }
    getManager() {
        return this.qr.manager;
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.qr.commitTransaction();
        });
    }
    rollback() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.qr.rollbackTransaction();
        });
    }
    release() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.qr.release();
        });
    }
}
exports.Uow = Uow;


/***/ }),

/***/ "./src/@services/concrete/answer.service.ts":
/*!**************************************************!*\
  !*** ./src/@services/concrete/answer.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const answer_entity_1 = __webpack_require__(/*! @entities/answer.entity */ "./src/entities/answer.entity.ts");
const app_error_1 = __webpack_require__(/*! @errors/app-error */ "./src/errors/app-error.ts");
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


/***/ }),

/***/ "./src/@services/concrete/comment.service.ts":
/*!***************************************************!*\
  !*** ./src/@services/concrete/comment.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const comment_entity_1 = __webpack_require__(/*! @entities/comment.entity */ "./src/entities/comment.entity.ts");
const app_error_1 = __webpack_require__(/*! @errors/app-error */ "./src/errors/app-error.ts");
let CommentService = class CommentService {
    constructor(_commentRepository) {
        this._commentRepository = _commentRepository;
    }
    add(model) {
        return new Promise((resolve, reject) => {
            //TODO yetkisi var mı diye kontrol et
            let commentEn = Object.assign(new comment_entity_1.CommentEntity(), model);
            this._commentRepository.insert(commentEn).then((res) => {
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
            let oldComment;
            let updatedComment;
            this._commentRepository.findById(id).then((foundComment) => {
                oldComment = foundComment;
                if (!foundComment)
                    throw new app_error_1.AppError('AppError', 'Comment not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                updatedComment = Object.assign(oldComment, model);
                return this._commentRepository.update(id, updatedComment);
            }).then(() => {
                resolve(updatedComment);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    delete(id, requestorId) {
        return new Promise((resolve, reject) => {
            this._commentRepository.findById(id).then((foundComment) => {
                if (!foundComment)
                    throw new app_error_1.AppError('AppError', 'Comment not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                return this._commentRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
};
CommentService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMMENT)),
    __metadata("design:paramtypes", [Object])
], CommentService);
exports.CommentService = CommentService;


/***/ }),

/***/ "./src/@services/concrete/company.service.ts":
/*!***************************************************!*\
  !*** ./src/@services/concrete/company.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const company_entity_1 = __webpack_require__(/*! @entities/company.entity */ "./src/entities/company.entity.ts");
const app_error_1 = __webpack_require__(/*! @errors/app-error */ "./src/errors/app-error.ts");
const company_membership_entity_1 = __webpack_require__(/*! @entities/company-membership.entity */ "./src/entities/company-membership.entity.ts");
const membership_request_entity_1 = __webpack_require__(/*! @entities/membership-request.entity */ "./src/entities/membership-request.entity.ts");
const uow_1 = __webpack_require__(/*! @repositories/uow */ "./src/@repository/uow.ts");
const status_template_entity_1 = __webpack_require__(/*! @entities/status-template.entity */ "./src/entities/status-template.entity.ts");
const abstract_status_entity_1 = __webpack_require__(/*! @entities/abstract-status.entity */ "./src/entities/abstract-status.entity.ts");
let CompanyService = class CompanyService {
    constructor(_companyRepository, _companyMembershipRepository, _membershipRequestRepository, _statusTemplateRepository, _abstractStatusRepository) {
        this._companyRepository = _companyRepository;
        this._companyMembershipRepository = _companyMembershipRepository;
        this._membershipRequestRepository = _membershipRequestRepository;
        this._statusTemplateRepository = _statusTemplateRepository;
        this._abstractStatusRepository = _abstractStatusRepository;
    }
    //Herkes topluluk oluşturabilir. Daha sonra sayı sınırı ekle.
    add(model) {
        return __awaiter(this, void 0, void 0, function* () {
            let companyEn = Object.assign(new company_entity_1.CompanyEntity(), model);
            companyEn.createdAt = new Date();
            companyEn.lastUpdated = new Date();
            let inserted = yield this._companyRepository.insert(companyEn);
            return Promise.resolve(inserted.id);
        });
    }
    //Yalnızca kullanıcının üyesi veya kurucusu olduğu topluluklar gelecek
    list(filters, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let companyDtos = [];
            let companyEns = yield this._companyRepository.listByFiltersAndUser(filters, requestorId);
            companyEns.map((cmp) => {
                let companyDto = Object.assign(new dtos_1.CompanyListDto(), cmp, { rootProjects: undefined, users: undefined });
                companyDto.projectCount = cmp.rootProjects.length;
                companyDto.userCount = cmp.members.length;
                companyDtos.push(companyDto);
            });
            return Promise.resolve(companyDtos);
        });
    }
    //Yalnızca kullanıcının üyesi olduğu topluluklar gelecek aksi halde unauthorized, diger kullanıcılar için daha az veri getiren başka metot olacak
    find(id, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let companyEn = yield this._companyRepository.findForDetails(id);
            if (!companyEn)
                throw new app_error_1.AppError('AppError', 'Company not found.', 404);
            let companyDto = Object.assign(new dtos_1.CompanyDetailDto(), companyEn, { projects: undefined, users: undefined });
            companyDto.projectCount = companyEn.rootProjects.length;
            companyDto.userCount = companyEn.members.length;
            return Promise.resolve(companyDto);
        });
    }
    //Yalnızca kurucu işlem yapabilir
    update(id, model, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let updatedCompany;
            let oldCompany = yield this._companyRepository.findById(id);
            if (!oldCompany)
                throw new app_error_1.AppError('AppError', 'Company not found.', 404);
            if (oldCompany.ownerId !== requestorId)
                throw new app_error_1.AppError('AppError', 'Your are not the owner of this company.', 403);
            updatedCompany = Object.assign(oldCompany, model);
            yield this._companyRepository.update(id, updatedCompany);
            return Promise.resolve(updatedCompany);
        });
    }
    //Yalnızca kurucu işlem yapabilir
    delete(id, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let companyEn = yield this._companyRepository.findById(id);
            if (!companyEn)
                throw new app_error_1.AppError('AppError', 'Company not found.', 404);
            if (companyEn.ownerId !== requestorId)
                throw new app_error_1.AppError('AppError', 'Your are not the owner of this company.', 403);
            yield this._companyRepository.delete(id);
            return Promise.resolve();
        });
    }
    //Yalnızca isteği alan kişi işlem yapabilir.
    acceptMembership(msrId, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let msReEn = yield this._membershipRequestRepository.findOne(msrId, { relations: ["user", "company", "company.members"] });
            if (!msReEn)
                throw new app_error_1.AppError('AppError', 'Membership request not found.', 404);
            if (msReEn.userId !== requestorId)
                throw new app_error_1.AppError('AppError', 'You cant accept requests which are not for you', 403);
            if (msReEn.company.members.filter(x => x.userId === msReEn.userId).length > 0 || msReEn.company.ownerId === msReEn.userId)
                throw new app_error_1.AppError('AppError', 'You are Already a Member of this company.', 409);
            let cMemEn = new company_membership_entity_1.CompanyMembershipEntity();
            cMemEn.userId = msReEn.userId;
            cMemEn.companyId = msReEn.companyId;
            cMemEn.joiningDate = new Date();
            cMemEn.status = 1; //TODO enum yapılacak kullanıcı topluluğun aktif üyesiyse 1 topluluktan atılırsa başka değer
            let uow = new uow_1.Uow();
            yield uow.start();
            try {
                cMemEn = yield this._companyMembershipRepository.insert(cMemEn, uow.getManager());
                yield this._membershipRequestRepository.delete(msrId, uow.getManager());
                yield uow.commit();
            }
            catch (err) {
                yield uow.rollback();
                throw err;
            }
            finally {
                yield uow.release();
            }
            return Promise.resolve();
        });
    }
    //Yalnızca kurucu istek gönderebilir.
    requestMembership(id, model, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let companyEn = yield this._companyRepository.findOne(id, { relations: ["requestsSent", "members", "members.user", "owner"] });
            if (!companyEn)
                throw new app_error_1.AppError('AppError', 'Company not found.', 404);
            if (companyEn.ownerId !== requestorId)
                throw new app_error_1.AppError('AppError', 'You must be the owner of this company for this operation', 403);
            if (companyEn.members.filter(x => x.userId === model.userId).length > 0 || companyEn.owner.id === model.userId)
                throw new app_error_1.AppError('AppError', 'User Is Already a Member of this company.', 409);
            let duplicated = yield this._membershipRequestRepository.findOne(null, { where: { userId: model.userId, companyId: id } });
            if (duplicated)
                throw new app_error_1.AppError('AppError', 'Your Company already sent a membership request to this user.', 409);
            let msReEn = new membership_request_entity_1.MembershipRequestEntity();
            msReEn.userId = model.userId;
            msReEn.companyId = id;
            msReEn.createdAt = new Date();
            yield this._membershipRequestRepository.insert(msReEn);
            return Promise.resolve();
        });
    }
    addStatusTemplate(id, model, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let uow = new uow_1.Uow();
            yield uow.start();
            try {
                let modST = new status_template_entity_1.StatusTemplateEntity();
                modST.companyId = id;
                modST.createdAt = new Date();
                modST.lastUpdated = new Date();
                modST.creatorId = requestorId;
                modST.name = model.name;
                modST = yield this._statusTemplateRepository.insert(modST);
                for (let i = 0; i < model.statuses.length; i++) {
                    let abs = new abstract_status_entity_1.AbstractStatusEntity();
                    abs.baseStatus = model.statuses[i].baseStatus;
                    abs.title = model.statuses[i].title;
                    abs.description = model.statuses[i].description;
                    abs.createdAt = new Date();
                    abs.order = model.statuses[i].order;
                    abs.templateId = modST.id;
                    abs = yield this._abstractStatusRepository.insert(abs);
                }
                yield uow.commit();
            }
            catch (err) {
                yield uow.rollback();
                throw err;
            }
            finally {
                yield uow.release();
            }
            return Promise.resolve();
        });
    }
};
CompanyService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY)),
    __param(1, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY_MEMBERSHIP)),
    __param(2, inversify_1.inject(_ioc_1.InjectTypes.Repository.MEMBERSHIP_REQUEST)),
    __param(3, inversify_1.inject(_ioc_1.InjectTypes.Repository.STATUS_TEMPLATE)),
    __param(4, inversify_1.inject(_ioc_1.InjectTypes.Repository.ABSTRACT_STATUS)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], CompanyService);
exports.CompanyService = CompanyService;


/***/ }),

/***/ "./src/@services/concrete/index.ts":
/*!*****************************************!*\
  !*** ./src/@services/concrete/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = __webpack_require__(/*! ./user.service */ "./src/@services/concrete/user.service.ts");
exports.UserService = user_service_1.UserService;
var question_service_1 = __webpack_require__(/*! ./question.service */ "./src/@services/concrete/question.service.ts");
exports.QuestionService = question_service_1.QuestionService;
var issue_service_1 = __webpack_require__(/*! ./issue.service */ "./src/@services/concrete/issue.service.ts");
exports.IssueService = issue_service_1.IssueService;
var comment_service_1 = __webpack_require__(/*! ./comment.service */ "./src/@services/concrete/comment.service.ts");
exports.CommentService = comment_service_1.CommentService;
var answer_service_1 = __webpack_require__(/*! ./answer.service */ "./src/@services/concrete/answer.service.ts");
exports.AnswerService = answer_service_1.AnswerService;
var root_project_service_1 = __webpack_require__(/*! ./root-project.service */ "./src/@services/concrete/root-project.service.ts");
exports.RootProjectService = root_project_service_1.RootProjectService;
var task_service_1 = __webpack_require__(/*! ./task.service */ "./src/@services/concrete/task.service.ts");
exports.TaskService = task_service_1.TaskService;
var company_service_1 = __webpack_require__(/*! ./company.service */ "./src/@services/concrete/company.service.ts");
exports.CompanyService = company_service_1.CompanyService;
var sub_project_service_1 = __webpack_require__(/*! ./sub-project.service */ "./src/@services/concrete/sub-project.service.ts");
exports.SubProjectService = sub_project_service_1.SubProjectService;


/***/ }),

/***/ "./src/@services/concrete/issue.service.ts":
/*!*************************************************!*\
  !*** ./src/@services/concrete/issue.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const issue_entity_1 = __webpack_require__(/*! @entities/issue.entity */ "./src/entities/issue.entity.ts");
const app_error_1 = __webpack_require__(/*! @errors/app-error */ "./src/errors/app-error.ts");
let IssueService = class IssueService {
    constructor(_issueRepository) {
        this._issueRepository = _issueRepository;
    }
    add(model) {
        return new Promise((resolve, reject) => {
            //TODO yetkisi var mı diye kontrol et
            let issueEn = Object.assign(new issue_entity_1.IssueEntity(), model);
            this._issueRepository.insert(issueEn).then((res) => {
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
            let oldIssue;
            let updatedIssue;
            this._issueRepository.findById(id).then((foundIssue) => {
                oldIssue = foundIssue;
                if (!foundIssue)
                    throw new app_error_1.AppError('AppError', 'Issue not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                updatedIssue = Object.assign(oldIssue, model);
                return this._issueRepository.update(id, updatedIssue);
            }).then(() => {
                resolve(updatedIssue);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    delete(id, requestorId) {
        return new Promise((resolve, reject) => {
            this._issueRepository.findById(id).then((foundIssue) => {
                if (!foundIssue)
                    throw new app_error_1.AppError('AppError', 'Issue not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                return this._issueRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
};
IssueService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.ISSUE)),
    __metadata("design:paramtypes", [Object])
], IssueService);
exports.IssueService = IssueService;


/***/ }),

/***/ "./src/@services/concrete/question.service.ts":
/*!****************************************************!*\
  !*** ./src/@services/concrete/question.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const question_entity_1 = __webpack_require__(/*! @entities/question.entity */ "./src/entities/question.entity.ts");
const app_error_1 = __webpack_require__(/*! @errors/app-error */ "./src/errors/app-error.ts");
let QuestionService = class QuestionService {
    constructor(_questionRepository) {
        this._questionRepository = _questionRepository;
    }
    add(model) {
        return new Promise((resolve, reject) => {
            //TODO yetkisi var mı diye kontrol et
            let questionEn = Object.assign(new question_entity_1.QuestionEntity(), model);
            this._questionRepository.insert(questionEn).then((res) => {
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
            let oldQuestion;
            let updatedQuestion;
            this._questionRepository.findById(id).then((foundQuestion) => {
                oldQuestion = foundQuestion;
                if (!foundQuestion)
                    throw new app_error_1.AppError('AppError', 'Question not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                updatedQuestion = Object.assign(oldQuestion, model);
                return this._questionRepository.update(id, updatedQuestion);
            }).then(() => {
                resolve(updatedQuestion);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    delete(id, requestorId) {
        return new Promise((resolve, reject) => {
            this._questionRepository.findById(id).then((foundQuestion) => {
                if (!foundQuestion)
                    throw new app_error_1.AppError('AppError', 'Question not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                return this._questionRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
};
QuestionService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.QUESTION)),
    __metadata("design:paramtypes", [Object])
], QuestionService);
exports.QuestionService = QuestionService;


/***/ }),

/***/ "./src/@services/concrete/root-project.service.ts":
/*!********************************************************!*\
  !*** ./src/@services/concrete/root-project.service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const project_entity_1 = __webpack_require__(/*! @entities/project.entity */ "./src/entities/project.entity.ts");
const app_error_1 = __webpack_require__(/*! @errors/app-error */ "./src/errors/app-error.ts");
const _enums_1 = __webpack_require__(/*! @enums */ "./src/enums/index.ts");
const uow_1 = __webpack_require__(/*! @repositories/uow */ "./src/@repository/uow.ts");
const project_membership_entity_1 = __webpack_require__(/*! @entities/project-membership.entity */ "./src/entities/project-membership.entity.ts");
const root_project_entity_1 = __webpack_require__(/*! @entities/root-project.entity */ "./src/entities/root-project.entity.ts");
const _models_1 = __webpack_require__(/*! @models */ "./src/_models/index.ts");
let RootProjectService = class RootProjectService {
    constructor(_rootProjectRepository, _projectRepository, _statusRepository, _companyRepository, _companyMembershipRepository, _projectMembershipRepository) {
        this._rootProjectRepository = _rootProjectRepository;
        this._projectRepository = _projectRepository;
        this._statusRepository = _statusRepository;
        this._companyRepository = _companyRepository;
        this._companyMembershipRepository = _companyMembershipRepository;
        this._projectMembershipRepository = _projectMembershipRepository;
    }
    //Yalnızca sahibi ekleyebilir
    add(model) {
        return __awaiter(this, void 0, void 0, function* () {
            let companyEn = yield this._companyRepository.findOne(model.companyId, { relations: [] });
            if (!companyEn)
                throw new app_error_1.AppError('AppError', 'Company Not Found', 404);
            console.log("Owner:", companyEn.ownerId);
            console.log("Model:", model.userId);
            if (companyEn.ownerId !== model.userId)
                throw new app_error_1.AppError('AppError', 'You can not add a new project to company which is not yours', 403);
            let prjEn;
            let rtpEn;
            let uow = new uow_1.Uow();
            yield uow.start();
            try {
                prjEn = new project_entity_1.ProjectEntity();
                prjEn.projectType = _enums_1.ProjectTypes.ROOT;
                prjEn = yield this._projectRepository.insert(prjEn, uow.getManager());
                rtpEn = new root_project_entity_1.RootProjectEntity();
                rtpEn.baseProjectId = prjEn.id;
                rtpEn.companyId = model.companyId;
                rtpEn.userId = model.userId;
                rtpEn.title = model.title;
                rtpEn.description = model.description;
                rtpEn.createdAt = new Date();
                rtpEn.lastUpdated = new Date();
                rtpEn = yield this._rootProjectRepository.insert(rtpEn, uow.getManager());
                yield uow.commit();
            }
            catch (err) {
                yield uow.rollback();
                throw err;
            }
            finally {
                yield uow.release();
            }
            return Promise.resolve(rtpEn.id);
        });
    }
    //sadece ayni sirkettekiler erisebilir
    listByCompany(filters, requestorId, companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            let projectDtos = [];
            const memberEn = yield this._companyMembershipRepository.findOne(null, { where: { userId: requestorId, companyId: companyId } });
            if (!memberEn)
                throw new app_error_1.AppError('AppError', 'You are not part of this company', 403);
            let projects = yield this._projectRepository.listByFiltersByCompany(filters, companyId);
            projects.map((prj) => {
                let projectDto = Object.assign(new dtos_1.ProjectListDto(), prj);
                projectDtos.push(projectDto);
            });
            return Promise.resolve(projectDtos);
        });
    }
    //sadece ayni sirkettekiler erisebilir
    find(id, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let rtpEn = yield this._rootProjectRepository.findForDetails(id);
            if (!rtpEn)
                throw new app_error_1.AppError('AppError', 'Project not found.', 404);
            const memberEn = yield this._companyMembershipRepository.findOne(null, { where: { userId: requestorId, companyId: rtpEn.company.id } });
            if (!memberEn && rtpEn.company.owner.id !== requestorId)
                throw new app_error_1.AppError('AppError', 'You are not part of this company', 403);
            let prjDto = Object.assign(new dtos_1.ProjectDetailDto(), rtpEn);
            return Promise.resolve(prjDto);
        });
    }
    //yalnızca sirket sahibi izinlidir
    update(id, model, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let updatedProject;
            let oldProject = yield this._projectRepository.findById(id);
            if (!oldProject)
                throw new app_error_1.AppError('AppError', 'Project not found.', 404);
            const companyEn = yield this._companyRepository.findOne(oldProject.companyId, { relations: [] });
            if (!companyEn)
                throw new app_error_1.AppError('AppError', 'Company Not Found', 404);
            if (companyEn.ownerId !== requestorId)
                throw new app_error_1.AppError('AppError', 'You can not update this project', 403);
            updatedProject = Object.assign(oldProject, model);
            yield this._projectRepository.update(id, updatedProject);
            return Promise.resolve(updatedProject);
        });
    }
    //yalnızca sirket sahibi izinlidir
    delete(id, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let projectEntity = yield this._projectRepository.findById(id);
            if (!projectEntity)
                throw new app_error_1.AppError('AppError', 'Project not found.', 404);
            const companyEn = yield this._companyRepository.findOne(projectEntity.companyId, { relations: [] });
            if (!companyEn)
                throw new app_error_1.AppError('AppError', 'Company Not Found', 404);
            if (companyEn.ownerId !== requestorId)
                throw new app_error_1.AppError('AppError', 'You can not delete this project', 403);
            yield this._projectRepository.delete(id);
            return Promise.resolve();
        });
    }
    getMembers(id, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let userDtos = [];
            let projectMbshipEns;
            projectMbshipEns = yield this._projectMembershipRepository.list({ where: { projectId: id }, relations: ["user"] });
            for (let i = 0; i < projectMbshipEns.length; i++) {
                let userDto = new dtos_1.UserSummaryDto();
                userDto.id = projectMbshipEns[i].user.id;
                userDto.name = projectMbshipEns[i].user.name;
                userDto.surname = projectMbshipEns[i].user.surname;
                userDtos.push(userDto);
            }
            return Promise.resolve(userDtos);
        });
    }
    //Todo projenin bolunduğu şirketin üyesi mi diye kontrol edilecek. Yetkli kontrolü yapılacak
    addMember(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            let prjMbshipEn = new project_membership_entity_1.ProjectMembershipEntity();
            prjMbshipEn.userId = model.userId;
            // prjMbshipEn.projectId = id;
            prjMbshipEn.createdAt = new Date();
            yield this._projectMembershipRepository.insert(prjMbshipEn);
            return Promise.resolve();
        });
    }
    getTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let tr = new _models_1.TreeExplorerItem();
            let root = yield this._rootProjectRepository.findOne(id, null);
            tr.label = root.title;
            tr.data = root.baseProjectId;
            tr.expandedIcon = "fa fa-folder-open";
            tr.collapsedIcon = "fa fa-folder";
            yield this._projectRepository.populateChilds();
            return Promise.resolve(new _models_1.TreeExplorerItem());
        });
    }
};
RootProjectService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.ROOT_PROJECT)),
    __param(1, inversify_1.inject(_ioc_1.InjectTypes.Repository.PROJECT)),
    __param(2, inversify_1.inject(_ioc_1.InjectTypes.Repository.STATUS)),
    __param(3, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY)),
    __param(4, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY_MEMBERSHIP)),
    __param(5, inversify_1.inject(_ioc_1.InjectTypes.Repository.PROJECT_MEMBERSHIP)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object])
], RootProjectService);
exports.RootProjectService = RootProjectService;


/***/ }),

/***/ "./src/@services/concrete/sub-project.service.ts":
/*!*******************************************************!*\
  !*** ./src/@services/concrete/sub-project.service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const app_error_1 = __webpack_require__(/*! @errors/app-error */ "./src/errors/app-error.ts");
const _enums_1 = __webpack_require__(/*! @enums */ "./src/enums/index.ts");
let SubProjectService = class SubProjectService {
    constructor(_subProjectRepository) {
        this._subProjectRepository = _subProjectRepository;
    }
    find(id, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let sbpEn = yield this._subProjectRepository.findForDetails(id);
            if (!sbpEn)
                throw new app_error_1.AppError('AppError', 'Sub Project not found.', 404);
            // const memberEn: CompanyMembershipEntity = await this._companyMembershipRepository.findOne(null, { where: { userId: requestorId, companyId: rtpEn.company.id } });
            // if (!memberEn && rtpEn.company.owner.id !== requestorId)
            //   throw new AppError('AppError', 'You are not part of this company', 403);
            // let prjDto: ProjectDetailDto = Object.assign(new ProjectDetailDto(), rtpEn);
            // sbpEn.assignedTask.
            yield this.populateAncestors(sbpEn);
            return Promise.resolve(sbpEn);
        });
    }
    populateAncestors(sbp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sbp.assignedTask.project.projectType === _enums_1.ProjectTypes.ROOT)
                return;
            sbp.assignedTask.project.subProject = yield this._subProjectRepository.findAncestor(sbp.assignedTask.project.subProject.id);
            this.populateAncestors(sbp.assignedTask.project.subProject);
        });
    }
};
SubProjectService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.SUB_PROJECT)),
    __metadata("design:paramtypes", [Object])
], SubProjectService);
exports.SubProjectService = SubProjectService;


/***/ }),

/***/ "./src/@services/concrete/task.service.ts":
/*!************************************************!*\
  !*** ./src/@services/concrete/task.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ioc_1 = __webpack_require__(/*! ../../ioc */ "./src/ioc/index.ts");
const app_error_1 = __webpack_require__(/*! ../../errors/app-error */ "./src/errors/app-error.ts");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
const task_assignment_entity_1 = __webpack_require__(/*! @entities/task-assignment.entity */ "./src/entities/task-assignment.entity.ts");
const _enums_1 = __webpack_require__(/*! @enums */ "./src/enums/index.ts");
let TaskService = class TaskService {
    constructor(_taskRepository, _projectRepository, _taskAssignmentRepository) {
        this._taskRepository = _taskRepository;
        this._projectRepository = _projectRepository;
        this._taskAssignmentRepository = _taskAssignmentRepository;
    }
    //TODO kullanıcıyı göreve atama işlemi transactionda olacak.
    add(model) {
        return __awaiter(this, void 0, void 0, function* () {
            let prjEn = yield this._projectRepository.findOne(model.projectId, { relations: ["statuses"] });
            if (!prjEn)
                throw new app_error_1.AppError('AppError', 'Böyle bir proje yok.', 404);
            if (prjEn.statuses.filter(x => x.id === model.statusId).length < 1) {
                throw new app_error_1.AppError('AppError', 'Bilinmeyen aşama.', 404);
            }
            let taskEn = Object.assign(new task_entity_1.TaskEntity(), model);
            taskEn.createdAt = new Date();
            taskEn.lastUpdated = new Date();
            taskEn.type = _enums_1.TaskTypes.BASIC;
            //TODO max değeri getirip +1ini al
            taskEn.code = 45;
            let inserted = yield this._taskRepository.insert(taskEn);
            console.log(inserted);
            yield this.assignMembers(inserted.id, model.assignees);
            return Promise.resolve(inserted.id);
        });
    }
    //TODO bu idye sahip kişiler gerçenten taskın ait olduğu projenin üyesi mi kontrol et, transaction yap
    assignMembers(taskId, members) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < members.length; i++) {
                let tskAsgEn = new task_assignment_entity_1.TaskAssignmentEntity();
                tskAsgEn.taskId = taskId;
                tskAsgEn.userId = members[i];
                tskAsgEn.createdAt = new Date();
                yield this._taskAssignmentRepository.insert(tskAsgEn);
            }
            return Promise.resolve();
        });
    }
    // async convertToProject(id: number, requestorId: number, statusTemplateId: number) {
    //
    // }
    list(filters, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let taskDtos = [];
            let tasks = yield this._taskRepository.listByFilters(filters);
            tasks.map((tsk) => {
                let taskDto = Object.assign(new dtos_1.TaskListDto(), tsk, { comments: undefined });
                taskDto.commentCount = tsk.comments.length;
                if (tsk.type === _enums_1.TaskTypes.SUBPROJECT && tsk.subProject) {
                    taskDto.subTaskCount = tsk.subProject.baseProject.tasks.length;
                    taskDto.subProject.baseProject.tasks = undefined;
                }
                taskDtos.push(taskDto);
            });
            return Promise.resolve(taskDtos);
        });
    }
    find(id, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let taskEn = yield this._taskRepository.findForDetails(id);
            if (!taskEn)
                throw new app_error_1.AppError('AppError', 'Task not found.', 404);
            let taskDto = Object.assign(new dtos_1.TaskDetailDto(), taskEn, { projects: undefined, users: undefined });
            return Promise.resolve(taskDto);
        });
    }
    //TODO update entity donmemeli
    update(id, model, requestorId) {
        return new Promise((resolve, reject) => {
            let oldTask;
            let updatedTask;
            this._taskRepository.findById(id).then((foundTask) => {
                oldTask = foundTask;
                if (!foundTask)
                    throw new app_error_1.AppError('AppError', 'Task not found.', 404);
                updatedTask = Object.assign(oldTask, model);
                return this._taskRepository.update(id, updatedTask);
            }).then(() => {
                resolve(updatedTask);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    delete(id, requestorId) {
        return new Promise((resolve, reject) => {
            this._taskRepository.findById(id).then((foundTask) => {
                if (!foundTask)
                    throw new app_error_1.AppError('AppError', 'Task not found.', 404);
                return this._taskRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
    changeStatus(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            let updatedTask;
            let oldTask = yield this._taskRepository.findById(id);
            if (!oldTask)
                throw new app_error_1.AppError('AppError', 'Task not found.', 404);
            updatedTask = Object.assign(oldTask, model);
            updatedTask.lastUpdated = new Date();
            yield this._taskRepository.update(id, updatedTask);
            return Promise.resolve();
        });
    }
};
TaskService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_1.InjectTypes.Repository.TASK)),
    __param(1, inversify_1.inject(ioc_1.InjectTypes.Repository.PROJECT)),
    __param(2, inversify_1.inject(ioc_1.InjectTypes.Repository.TASK_ASSIGNMENT)),
    __metadata("design:paramtypes", [Object, Object, Object])
], TaskService);
exports.TaskService = TaskService;
//TODO task silme ve update işlemlerinde auth için başka kısıtlar da ekle şuanda projeye dahil olan herkes herhangi bir task üzerinde işlem yapabilir.


/***/ }),

/***/ "./src/@services/concrete/user.service.ts":
/*!************************************************!*\
  !*** ./src/@services/concrete/user.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ioc_1 = __webpack_require__(/*! ../../ioc */ "./src/ioc/index.ts");
const user_entity_1 = __webpack_require__(/*! ../../entities/user.entity */ "./src/entities/user.entity.ts");
const app_error_1 = __webpack_require__(/*! ../../errors/app-error */ "./src/errors/app-error.ts");
const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
let UserService = class UserService {
    constructor(_userRepository) {
        this._userRepository = _userRepository;
    }
    list(filters) {
        throw new Error("Method not implemented.");
    }
    find(id) {
        throw new Error("Method not implemented.");
    }
    update(model) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    login(model) {
        return new Promise((resolve, reject) => {
            this._userRepository.findByLogin(model.email, model.password).then((found_user) => {
                console.log(found_user);
                if (!found_user) {
                    throw new app_error_1.AppError('AppError', 'Wrong Username or Password.', 404);
                }
                console.log("Found User : ", found_user);
                let decodedToken = {
                    id: found_user.id,
                    username: found_user.username,
                    email: found_user.email,
                    name: found_user.name,
                    surname: found_user.surname
                };
                let token = jwt.sign(Object.assign({}, decodedToken), 'MySecret', { expiresIn: 86400000 });
                let loginResult = {
                    id: found_user.id,
                    email: found_user.email,
                    token: token
                };
                resolve(loginResult);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    register(model) {
        return new Promise((resolve, reject) => {
            this.checkUniqueness(model.email, model.username).then(() => {
                let user = Object.assign(new user_entity_1.UserEntity(), model, { createdAt: new Date });
                return this._userRepository.insert(user);
            }).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    checkUniqueness(email, username) {
        return new Promise((resolve, reject) => {
            let query = {
                where: [
                    { email: email },
                    { username: username }
                ]
            };
            this._userRepository.list(query).then((users) => {
                if (users.length > 0) {
                    if (users[0].email === email)
                        throw new app_error_1.AppError('AppError', 'This email is already taken', 422);
                    else
                        throw new app_error_1.AppError('AppError', 'This username is already taken', 422);
                }
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
};
UserService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_1.InjectTypes.Repository.USER)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./src/_models/dtos/abstract-status/abstract-status-create.dto.ts":
/*!************************************************************************!*\
  !*** ./src/_models/dtos/abstract-status/abstract-status-create.dto.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AbstractStatusCreateDto {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], AbstractStatusCreateDto.prototype, "baseStatus", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], AbstractStatusCreateDto.prototype, "order", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AbstractStatusCreateDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AbstractStatusCreateDto.prototype, "description", void 0);
exports.AbstractStatusCreateDto = AbstractStatusCreateDto;


/***/ }),

/***/ "./src/_models/dtos/answer/answer-create.dto.ts":
/*!******************************************************!*\
  !*** ./src/_models/dtos/answer/answer-create.dto.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AnswerCreateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AnswerCreateDto.prototype, "content", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], AnswerCreateDto.prototype, "questionId", void 0);
exports.AnswerCreateDto = AnswerCreateDto;


/***/ }),

/***/ "./src/_models/dtos/answer/answer-detail.dto.ts":
/*!******************************************************!*\
  !*** ./src/_models/dtos/answer/answer-detail.dto.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AnswerDetailDto {
}
exports.AnswerDetailDto = AnswerDetailDto;


/***/ }),

/***/ "./src/_models/dtos/answer/answer-list.dto.ts":
/*!****************************************************!*\
  !*** ./src/_models/dtos/answer/answer-list.dto.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AnswerListDto {
}
exports.AnswerListDto = AnswerListDto;


/***/ }),

/***/ "./src/_models/dtos/answer/answer-summary.dto.ts":
/*!*******************************************************!*\
  !*** ./src/_models/dtos/answer/answer-summary.dto.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AnswerSummaryDto {
}
exports.AnswerSummaryDto = AnswerSummaryDto;


/***/ }),

/***/ "./src/_models/dtos/answer/answer-update.dto.ts":
/*!******************************************************!*\
  !*** ./src/_models/dtos/answer/answer-update.dto.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AnswerUpdateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AnswerUpdateDto.prototype, "content", void 0);
exports.AnswerUpdateDto = AnswerUpdateDto;


/***/ }),

/***/ "./src/_models/dtos/comment/comment-create.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/comment/comment-create.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CommentCreateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CommentCreateDto.prototype, "content", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CommentCreateDto.prototype, "taskId", void 0);
exports.CommentCreateDto = CommentCreateDto;


/***/ }),

/***/ "./src/_models/dtos/comment/comment-detail.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/comment/comment-detail.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CommentDetailDto {
}
exports.CommentDetailDto = CommentDetailDto;


/***/ }),

/***/ "./src/_models/dtos/comment/comment-list.dto.ts":
/*!******************************************************!*\
  !*** ./src/_models/dtos/comment/comment-list.dto.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CommentListDto {
}
exports.CommentListDto = CommentListDto;


/***/ }),

/***/ "./src/_models/dtos/comment/comment-summary.dto.ts":
/*!*********************************************************!*\
  !*** ./src/_models/dtos/comment/comment-summary.dto.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CommentSummaryDto {
}
exports.CommentSummaryDto = CommentSummaryDto;


/***/ }),

/***/ "./src/_models/dtos/comment/comment-update.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/comment/comment-update.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CommentUpdateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CommentUpdateDto.prototype, "content", void 0);
exports.CommentUpdateDto = CommentUpdateDto;


/***/ }),

/***/ "./src/_models/dtos/company/company-create.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/company/company-create.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CompanyCreateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CompanyCreateDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CompanyCreateDto.prototype, "description", void 0);
exports.CompanyCreateDto = CompanyCreateDto;


/***/ }),

/***/ "./src/_models/dtos/company/company-detail.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/company/company-detail.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CompanyDetailDto {
    constructor() {
        this.userCount = 0;
        this.projectCount = 0;
    }
}
exports.CompanyDetailDto = CompanyDetailDto;


/***/ }),

/***/ "./src/_models/dtos/company/company-list.dto.ts":
/*!******************************************************!*\
  !*** ./src/_models/dtos/company/company-list.dto.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CompanyListDto {
    constructor() {
        this.userCount = 0;
        this.projectCount = 0;
    }
}
exports.CompanyListDto = CompanyListDto;


/***/ }),

/***/ "./src/_models/dtos/company/company-summary.dto.ts":
/*!*********************************************************!*\
  !*** ./src/_models/dtos/company/company-summary.dto.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CompanySummaryDto {
}
exports.CompanySummaryDto = CompanySummaryDto;


/***/ }),

/***/ "./src/_models/dtos/company/company-update.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/company/company-update.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CompanyUpdateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CompanyUpdateDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CompanyUpdateDto.prototype, "description", void 0);
exports.CompanyUpdateDto = CompanyUpdateDto;


/***/ }),

/***/ "./src/_models/dtos/company/company-user-register.dto.ts":
/*!***************************************************************!*\
  !*** ./src/_models/dtos/company/company-user-register.dto.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CompanyUserRegisterDto {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CompanyUserRegisterDto.prototype, "userId", void 0);
exports.CompanyUserRegisterDto = CompanyUserRegisterDto;


/***/ }),

/***/ "./src/_models/dtos/index.ts":
/*!***********************************!*\
  !*** ./src/_models/dtos/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var abstract_status_create_dto_1 = __webpack_require__(/*! ./abstract-status/abstract-status-create.dto */ "./src/_models/dtos/abstract-status/abstract-status-create.dto.ts");
exports.AbstractStatusCreateDto = abstract_status_create_dto_1.AbstractStatusCreateDto;
var answer_update_dto_1 = __webpack_require__(/*! ./answer/answer-update.dto */ "./src/_models/dtos/answer/answer-update.dto.ts");
exports.AnswerUpdateDto = answer_update_dto_1.AnswerUpdateDto;
var answer_create_dto_1 = __webpack_require__(/*! ./answer/answer-create.dto */ "./src/_models/dtos/answer/answer-create.dto.ts");
exports.AnswerCreateDto = answer_create_dto_1.AnswerCreateDto;
var answer_detail_dto_1 = __webpack_require__(/*! ./answer/answer-detail.dto */ "./src/_models/dtos/answer/answer-detail.dto.ts");
exports.AnswerDetailDto = answer_detail_dto_1.AnswerDetailDto;
var answer_list_dto_1 = __webpack_require__(/*! ./answer/answer-list.dto */ "./src/_models/dtos/answer/answer-list.dto.ts");
exports.AnswerListDto = answer_list_dto_1.AnswerListDto;
var answer_summary_dto_1 = __webpack_require__(/*! ./answer/answer-summary.dto */ "./src/_models/dtos/answer/answer-summary.dto.ts");
exports.AnswerSummaryDto = answer_summary_dto_1.AnswerSummaryDto;
var comment_update_dto_1 = __webpack_require__(/*! ./comment/comment-update.dto */ "./src/_models/dtos/comment/comment-update.dto.ts");
exports.CommentUpdateDto = comment_update_dto_1.CommentUpdateDto;
var comment_create_dto_1 = __webpack_require__(/*! ./comment/comment-create.dto */ "./src/_models/dtos/comment/comment-create.dto.ts");
exports.CommentCreateDto = comment_create_dto_1.CommentCreateDto;
var comment_detail_dto_1 = __webpack_require__(/*! ./comment/comment-detail.dto */ "./src/_models/dtos/comment/comment-detail.dto.ts");
exports.CommentDetailDto = comment_detail_dto_1.CommentDetailDto;
var comment_list_dto_1 = __webpack_require__(/*! ./comment/comment-list.dto */ "./src/_models/dtos/comment/comment-list.dto.ts");
exports.CommentListDto = comment_list_dto_1.CommentListDto;
var comment_summary_dto_1 = __webpack_require__(/*! ./comment/comment-summary.dto */ "./src/_models/dtos/comment/comment-summary.dto.ts");
exports.CommentSummaryDto = comment_summary_dto_1.CommentSummaryDto;
var task_update_dto_1 = __webpack_require__(/*! ./task/task-update.dto */ "./src/_models/dtos/task/task-update.dto.ts");
exports.TaskUpdateDto = task_update_dto_1.TaskUpdateDto;
var task_create_dto_1 = __webpack_require__(/*! ./task/task-create.dto */ "./src/_models/dtos/task/task-create.dto.ts");
exports.TaskCreateDto = task_create_dto_1.TaskCreateDto;
var task_detail_dto_1 = __webpack_require__(/*! ./task/task-detail.dto */ "./src/_models/dtos/task/task-detail.dto.ts");
exports.TaskDetailDto = task_detail_dto_1.TaskDetailDto;
var task_list_dto_1 = __webpack_require__(/*! ./task/task-list.dto */ "./src/_models/dtos/task/task-list.dto.ts");
exports.TaskListDto = task_list_dto_1.TaskListDto;
var task_summary_dto_1 = __webpack_require__(/*! ./task/task-summary.dto */ "./src/_models/dtos/task/task-summary.dto.ts");
exports.TaskSummaryDto = task_summary_dto_1.TaskSummaryDto;
var task_status_update_dto_1 = __webpack_require__(/*! ./task/task-status-update.dto */ "./src/_models/dtos/task/task-status-update.dto.ts");
exports.TaskStatusUpdateDto = task_status_update_dto_1.TaskStatusUpdateDto;
var company_update_dto_1 = __webpack_require__(/*! ./company/company-update.dto */ "./src/_models/dtos/company/company-update.dto.ts");
exports.CompanyUpdateDto = company_update_dto_1.CompanyUpdateDto;
var company_create_dto_1 = __webpack_require__(/*! ./company/company-create.dto */ "./src/_models/dtos/company/company-create.dto.ts");
exports.CompanyCreateDto = company_create_dto_1.CompanyCreateDto;
var company_detail_dto_1 = __webpack_require__(/*! ./company/company-detail.dto */ "./src/_models/dtos/company/company-detail.dto.ts");
exports.CompanyDetailDto = company_detail_dto_1.CompanyDetailDto;
var company_list_dto_1 = __webpack_require__(/*! ./company/company-list.dto */ "./src/_models/dtos/company/company-list.dto.ts");
exports.CompanyListDto = company_list_dto_1.CompanyListDto;
var company_summary_dto_1 = __webpack_require__(/*! ./company/company-summary.dto */ "./src/_models/dtos/company/company-summary.dto.ts");
exports.CompanySummaryDto = company_summary_dto_1.CompanySummaryDto;
var company_user_register_dto_1 = __webpack_require__(/*! ./company/company-user-register.dto */ "./src/_models/dtos/company/company-user-register.dto.ts");
exports.CompanyUserRegisterDto = company_user_register_dto_1.CompanyUserRegisterDto;
var issue_update_dto_1 = __webpack_require__(/*! ./issue/issue-update.dto */ "./src/_models/dtos/issue/issue-update.dto.ts");
exports.IssueUpdateDto = issue_update_dto_1.IssueUpdateDto;
var issue_create_dto_1 = __webpack_require__(/*! ./issue/issue-create.dto */ "./src/_models/dtos/issue/issue-create.dto.ts");
exports.IssueCreateDto = issue_create_dto_1.IssueCreateDto;
var issue_detail_dto_1 = __webpack_require__(/*! ./issue/issue-detail.dto */ "./src/_models/dtos/issue/issue-detail.dto.ts");
exports.IssueDetailDto = issue_detail_dto_1.IssueDetailDto;
var issue_list_dto_1 = __webpack_require__(/*! ./issue/issue-list.dto */ "./src/_models/dtos/issue/issue-list.dto.ts");
exports.IssueListDto = issue_list_dto_1.IssueListDto;
var issue_summary_dto_1 = __webpack_require__(/*! ./issue/issue-summary.dto */ "./src/_models/dtos/issue/issue-summary.dto.ts");
exports.IssueSummaryDto = issue_summary_dto_1.IssueSummaryDto;
var project_update_dto_1 = __webpack_require__(/*! ./project/project-update.dto */ "./src/_models/dtos/project/project-update.dto.ts");
exports.ProjectUpdateDto = project_update_dto_1.ProjectUpdateDto;
// export { ProjectCreateDto } from './project/project-create.dto';
var project_detail_dto_1 = __webpack_require__(/*! ./project/project-detail.dto */ "./src/_models/dtos/project/project-detail.dto.ts");
exports.ProjectDetailDto = project_detail_dto_1.ProjectDetailDto;
var project_list_dto_1 = __webpack_require__(/*! ./project/project-list.dto */ "./src/_models/dtos/project/project-list.dto.ts");
exports.ProjectListDto = project_list_dto_1.ProjectListDto;
var project_summary_dto_1 = __webpack_require__(/*! ./project/project-summary.dto */ "./src/_models/dtos/project/project-summary.dto.ts");
exports.ProjectSummaryDto = project_summary_dto_1.ProjectSummaryDto;
var project_assign_manager_dto_1 = __webpack_require__(/*! ./project/project-assign-manager.dto */ "./src/_models/dtos/project/project-assign-manager.dto.ts");
exports.ProjectAssignManagerDto = project_assign_manager_dto_1.ProjectAssignManagerDto;
var project_user_register_dto_1 = __webpack_require__(/*! ./project/project-user-register.dto */ "./src/_models/dtos/project/project-user-register.dto.ts");
exports.ProjectUserRegisterDto = project_user_register_dto_1.ProjectUserRegisterDto;
var root_project_create_dto_1 = __webpack_require__(/*! ./root-project/root-project-create.dto */ "./src/_models/dtos/root-project/root-project-create.dto.ts");
exports.RootProjectCreateDto = root_project_create_dto_1.RootProjectCreateDto;
var question_update_dto_1 = __webpack_require__(/*! ./question/question-update.dto */ "./src/_models/dtos/question/question-update.dto.ts");
exports.QuestionUpdateDto = question_update_dto_1.QuestionUpdateDto;
var question_create_dto_1 = __webpack_require__(/*! ./question/question-create.dto */ "./src/_models/dtos/question/question-create.dto.ts");
exports.QuestionCreateDto = question_create_dto_1.QuestionCreateDto;
var question_detail_dto_1 = __webpack_require__(/*! ./question/question-detail.dto */ "./src/_models/dtos/question/question-detail.dto.ts");
exports.QuestionDetailDto = question_detail_dto_1.QuestionDetailDto;
var question_list_dto_1 = __webpack_require__(/*! ./question/question-list.dto */ "./src/_models/dtos/question/question-list.dto.ts");
exports.QuestionListDto = question_list_dto_1.QuestionListDto;
var question_summary_dto_1 = __webpack_require__(/*! ./question/question-summary.dto */ "./src/_models/dtos/question/question-summary.dto.ts");
exports.QuestionSummaryDto = question_summary_dto_1.QuestionSummaryDto;
var login_dto_model_1 = __webpack_require__(/*! ./user/login.dto.model */ "./src/_models/dtos/user/login.dto.model.ts");
exports.LoginDto = login_dto_model_1.LoginDto;
var register_dto_1 = __webpack_require__(/*! ./user/register.dto */ "./src/_models/dtos/user/register.dto.ts");
exports.RegisterDto = register_dto_1.RegisterDto;
var user_summary_dto_1 = __webpack_require__(/*! ./user/user-summary.dto */ "./src/_models/dtos/user/user-summary.dto.ts");
exports.UserSummaryDto = user_summary_dto_1.UserSummaryDto;
var status_summary_dto_1 = __webpack_require__(/*! ./status/status-summary.dto */ "./src/_models/dtos/status/status-summary.dto.ts");
exports.StatusSummaryDto = status_summary_dto_1.StatusSummaryDto;
var add_status_template_dto_1 = __webpack_require__(/*! ./status-template/add-status-template.dto */ "./src/_models/dtos/status-template/add-status-template.dto.ts");
exports.AddStatusTemplateDto = add_status_template_dto_1.AddStatusTemplateDto;


/***/ }),

/***/ "./src/_models/dtos/issue/issue-create.dto.ts":
/*!****************************************************!*\
  !*** ./src/_models/dtos/issue/issue-create.dto.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class IssueCreateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], IssueCreateDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], IssueCreateDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], IssueCreateDto.prototype, "projectId", void 0);
exports.IssueCreateDto = IssueCreateDto;


/***/ }),

/***/ "./src/_models/dtos/issue/issue-detail.dto.ts":
/*!****************************************************!*\
  !*** ./src/_models/dtos/issue/issue-detail.dto.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class IssueDetailDto {
}
exports.IssueDetailDto = IssueDetailDto;


/***/ }),

/***/ "./src/_models/dtos/issue/issue-list.dto.ts":
/*!**************************************************!*\
  !*** ./src/_models/dtos/issue/issue-list.dto.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class IssueListDto {
    constructor() {
        this.commentCount = 0;
    }
}
exports.IssueListDto = IssueListDto;


/***/ }),

/***/ "./src/_models/dtos/issue/issue-summary.dto.ts":
/*!*****************************************************!*\
  !*** ./src/_models/dtos/issue/issue-summary.dto.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class IssueSummaryDto {
}
exports.IssueSummaryDto = IssueSummaryDto;


/***/ }),

/***/ "./src/_models/dtos/issue/issue-update.dto.ts":
/*!****************************************************!*\
  !*** ./src/_models/dtos/issue/issue-update.dto.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class IssueUpdateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], IssueUpdateDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], IssueUpdateDto.prototype, "description", void 0);
exports.IssueUpdateDto = IssueUpdateDto;


/***/ }),

/***/ "./src/_models/dtos/project/project-assign-manager.dto.ts":
/*!****************************************************************!*\
  !*** ./src/_models/dtos/project/project-assign-manager.dto.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ProjectAssignManagerDto {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], ProjectAssignManagerDto.prototype, "userId", void 0);
exports.ProjectAssignManagerDto = ProjectAssignManagerDto;


/***/ }),

/***/ "./src/_models/dtos/project/project-detail.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/project/project-detail.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ProjectDetailDto {
}
exports.ProjectDetailDto = ProjectDetailDto;


/***/ }),

/***/ "./src/_models/dtos/project/project-list.dto.ts":
/*!******************************************************!*\
  !*** ./src/_models/dtos/project/project-list.dto.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ProjectListDto {
}
exports.ProjectListDto = ProjectListDto;


/***/ }),

/***/ "./src/_models/dtos/project/project-summary.dto.ts":
/*!*********************************************************!*\
  !*** ./src/_models/dtos/project/project-summary.dto.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ProjectSummaryDto {
}
exports.ProjectSummaryDto = ProjectSummaryDto;


/***/ }),

/***/ "./src/_models/dtos/project/project-update.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/project/project-update.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ProjectUpdateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], ProjectUpdateDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], ProjectUpdateDto.prototype, "description", void 0);
exports.ProjectUpdateDto = ProjectUpdateDto;


/***/ }),

/***/ "./src/_models/dtos/project/project-user-register.dto.ts":
/*!***************************************************************!*\
  !*** ./src/_models/dtos/project/project-user-register.dto.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ProjectUserRegisterDto {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], ProjectUserRegisterDto.prototype, "userId", void 0);
exports.ProjectUserRegisterDto = ProjectUserRegisterDto;


/***/ }),

/***/ "./src/_models/dtos/question/question-create.dto.ts":
/*!**********************************************************!*\
  !*** ./src/_models/dtos/question/question-create.dto.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class QuestionCreateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], QuestionCreateDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], QuestionCreateDto.prototype, "content", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], QuestionCreateDto.prototype, "projectId", void 0);
exports.QuestionCreateDto = QuestionCreateDto;


/***/ }),

/***/ "./src/_models/dtos/question/question-detail.dto.ts":
/*!**********************************************************!*\
  !*** ./src/_models/dtos/question/question-detail.dto.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class QuestionDetailDto {
}
exports.QuestionDetailDto = QuestionDetailDto;


/***/ }),

/***/ "./src/_models/dtos/question/question-list.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/question/question-list.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class QuestionListDto {
}
exports.QuestionListDto = QuestionListDto;


/***/ }),

/***/ "./src/_models/dtos/question/question-summary.dto.ts":
/*!***********************************************************!*\
  !*** ./src/_models/dtos/question/question-summary.dto.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class QuestionSummaryDto {
}
exports.QuestionSummaryDto = QuestionSummaryDto;


/***/ }),

/***/ "./src/_models/dtos/question/question-update.dto.ts":
/*!**********************************************************!*\
  !*** ./src/_models/dtos/question/question-update.dto.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class QuestionUpdateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], QuestionUpdateDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], QuestionUpdateDto.prototype, "content", void 0);
exports.QuestionUpdateDto = QuestionUpdateDto;


/***/ }),

/***/ "./src/_models/dtos/root-project/root-project-create.dto.ts":
/*!******************************************************************!*\
  !*** ./src/_models/dtos/root-project/root-project-create.dto.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RootProjectCreateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], RootProjectCreateDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], RootProjectCreateDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], RootProjectCreateDto.prototype, "companyId", void 0);
exports.RootProjectCreateDto = RootProjectCreateDto;


/***/ }),

/***/ "./src/_models/dtos/status-template/add-status-template.dto.ts":
/*!*********************************************************************!*\
  !*** ./src/_models/dtos/status-template/add-status-template.dto.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AddStatusTemplateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddStatusTemplateDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], AddStatusTemplateDto.prototype, "companyId", void 0);
exports.AddStatusTemplateDto = AddStatusTemplateDto;


/***/ }),

/***/ "./src/_models/dtos/status/status-summary.dto.ts":
/*!*******************************************************!*\
  !*** ./src/_models/dtos/status/status-summary.dto.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class StatusSummaryDto {
}
exports.StatusSummaryDto = StatusSummaryDto;


/***/ }),

/***/ "./src/_models/dtos/task/task-create.dto.ts":
/*!**************************************************!*\
  !*** ./src/_models/dtos/task/task-create.dto.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class TaskCreateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], TaskCreateDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], TaskCreateDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], TaskCreateDto.prototype, "projectId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], TaskCreateDto.prototype, "statusId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], TaskCreateDto.prototype, "fromIssueId", void 0);
exports.TaskCreateDto = TaskCreateDto;


/***/ }),

/***/ "./src/_models/dtos/task/task-detail.dto.ts":
/*!**************************************************!*\
  !*** ./src/_models/dtos/task/task-detail.dto.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TaskDetailDto {
    constructor() {
        this.comments = [];
        this.assignees = [];
        this.commentCount = 0;
    }
}
exports.TaskDetailDto = TaskDetailDto;


/***/ }),

/***/ "./src/_models/dtos/task/task-list.dto.ts":
/*!************************************************!*\
  !*** ./src/_models/dtos/task/task-list.dto.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TaskListDto {
    constructor() {
        this.assignees = [];
    }
}
exports.TaskListDto = TaskListDto;


/***/ }),

/***/ "./src/_models/dtos/task/task-status-update.dto.ts":
/*!*********************************************************!*\
  !*** ./src/_models/dtos/task/task-status-update.dto.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class TaskStatusUpdateDto {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", String)
], TaskStatusUpdateDto.prototype, "statusId", void 0);
exports.TaskStatusUpdateDto = TaskStatusUpdateDto;


/***/ }),

/***/ "./src/_models/dtos/task/task-summary.dto.ts":
/*!***************************************************!*\
  !*** ./src/_models/dtos/task/task-summary.dto.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TaskSummaryDto {
    constructor() {
        this.assignees = [];
        this.comentCount = 0;
    }
}
exports.TaskSummaryDto = TaskSummaryDto;


/***/ }),

/***/ "./src/_models/dtos/task/task-update.dto.ts":
/*!**************************************************!*\
  !*** ./src/_models/dtos/task/task-update.dto.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class TaskUpdateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], TaskUpdateDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], TaskUpdateDto.prototype, "description", void 0);
exports.TaskUpdateDto = TaskUpdateDto;


/***/ }),

/***/ "./src/_models/dtos/user/login.dto.model.ts":
/*!**************************************************!*\
  !*** ./src/_models/dtos/user/login.dto.model.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginDto {
}
__decorate([
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;


/***/ }),

/***/ "./src/_models/dtos/user/register.dto.ts":
/*!***********************************************!*\
  !*** ./src/_models/dtos/user/register.dto.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RegisterDto {
}
__decorate([
    class_validator_1.Length(2, 20),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    class_validator_1.Length(2, 20),
    __metadata("design:type", String)
], RegisterDto.prototype, "surname", void 0);
__decorate([
    class_validator_1.Length(5, 20),
    __metadata("design:type", String)
], RegisterDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
exports.RegisterDto = RegisterDto;


/***/ }),

/***/ "./src/_models/dtos/user/user-summary.dto.ts":
/*!***************************************************!*\
  !*** ./src/_models/dtos/user/user-summary.dto.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UserSummaryDto {
}
exports.UserSummaryDto = UserSummaryDto;


/***/ }),

/***/ "./src/_models/index.ts":
/*!******************************!*\
  !*** ./src/_models/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tree_explorer_item_model_1 = __webpack_require__(/*! ./tree-explorer-item.model */ "./src/_models/tree-explorer-item.model.ts");
exports.TreeExplorerItem = tree_explorer_item_model_1.TreeExplorerItem;


/***/ }),

/***/ "./src/_models/tree-explorer-item.model.ts":
/*!*************************************************!*\
  !*** ./src/_models/tree-explorer-item.model.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TreeExplorerItem {
    constructor() {
        this.children = [];
    }
}
exports.TreeExplorerItem = TreeExplorerItem;


/***/ }),

/***/ "./src/common/app-config.ts":
/*!**********************************!*\
  !*** ./src/common/app-config.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const status_entity_1 = __webpack_require__(/*! @entities/status.entity */ "./src/entities/status.entity.ts");
const issue_entity_1 = __webpack_require__(/*! @entities/issue.entity */ "./src/entities/issue.entity.ts");
const answer_entity_1 = __webpack_require__(/*! @entities/answer.entity */ "./src/entities/answer.entity.ts");
const question_entity_1 = __webpack_require__(/*! @entities/question.entity */ "./src/entities/question.entity.ts");
const company_entity_1 = __webpack_require__(/*! @entities/company.entity */ "./src/entities/company.entity.ts");
const project_entity_1 = __webpack_require__(/*! @entities/project.entity */ "./src/entities/project.entity.ts");
const company_membership_entity_1 = __webpack_require__(/*! @entities/company-membership.entity */ "./src/entities/company-membership.entity.ts");
const membership_request_entity_1 = __webpack_require__(/*! @entities/membership-request.entity */ "./src/entities/membership-request.entity.ts");
const project_manager_entity_1 = __webpack_require__(/*! @entities/project-manager.entity */ "./src/entities/project-manager.entity.ts");
const project_membership_entity_1 = __webpack_require__(/*! @entities/project-membership.entity */ "./src/entities/project-membership.entity.ts");
const task_assignment_entity_1 = __webpack_require__(/*! @entities/task-assignment.entity */ "./src/entities/task-assignment.entity.ts");
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
const comment_entity_1 = __webpack_require__(/*! @entities/comment.entity */ "./src/entities/comment.entity.ts");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const label_entity_1 = __webpack_require__(/*! @entities/label.entity */ "./src/entities/label.entity.ts");
const task_label_entity_1 = __webpack_require__(/*! @entities/task-label.entity */ "./src/entities/task-label.entity.ts");
const status_template_entity_1 = __webpack_require__(/*! @entities/status-template.entity */ "./src/entities/status-template.entity.ts");
const abstract_status_entity_1 = __webpack_require__(/*! @entities/abstract-status.entity */ "./src/entities/abstract-status.entity.ts");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const sub_project_entity_1 = __webpack_require__(/*! @entities/sub-project.entity */ "./src/entities/sub-project.entity.ts");
const root_project_entity_1 = __webpack_require__(/*! @entities/root-project.entity */ "./src/entities/root-project.entity.ts");
exports.dbOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "pyudb",
    entities: [
        task_entity_1.TaskEntity,
        comment_entity_1.CommentEntity,
        user_entity_1.UserEntity,
        project_entity_1.ProjectEntity,
        company_entity_1.CompanyEntity,
        question_entity_1.QuestionEntity,
        answer_entity_1.AnswerEntity,
        issue_entity_1.IssueEntity,
        status_entity_1.StatusEntity,
        company_membership_entity_1.CompanyMembershipEntity,
        membership_request_entity_1.MembershipRequestEntity,
        project_manager_entity_1.ProjectManagerEntity,
        project_membership_entity_1.ProjectMembershipEntity,
        task_assignment_entity_1.TaskAssignmentEntity,
        label_entity_1.LabelEntity,
        abstract_status_entity_1.AbstractStatusEntity,
        status_template_entity_1.StatusTemplateEntity,
        task_label_entity_1.TaskLabelEntity,
        sub_project_entity_1.SubProjectEntity,
        root_project_entity_1.RootProjectEntity
    ],
    synchronize: true,
};


/***/ }),

/***/ "./src/entities/abstract-status.entity.ts":
/*!************************************************!*\
  !*** ./src/entities/abstract-status.entity.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const status_template_entity_1 = __webpack_require__(/*! ./status-template.entity */ "./src/entities/status-template.entity.ts");
let AbstractStatusEntity = class AbstractStatusEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AbstractStatusEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], AbstractStatusEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], AbstractStatusEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], AbstractStatusEntity.prototype, "baseStatus", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], AbstractStatusEntity.prototype, "order", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], AbstractStatusEntity.prototype, "templateId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => status_template_entity_1.StatusTemplateEntity, stTemp => stTemp.statuses),
    typeorm_1.JoinColumn({ name: "templateId" }),
    __metadata("design:type", status_template_entity_1.StatusTemplateEntity)
], AbstractStatusEntity.prototype, "template", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], AbstractStatusEntity.prototype, "createdAt", void 0);
AbstractStatusEntity = __decorate([
    typeorm_1.Entity("abstract_status")
], AbstractStatusEntity);
exports.AbstractStatusEntity = AbstractStatusEntity;


/***/ }),

/***/ "./src/entities/answer.entity.ts":
/*!***************************************!*\
  !*** ./src/entities/answer.entity.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const question_entity_1 = __webpack_require__(/*! @entities/question.entity */ "./src/entities/question.entity.ts");
let AnswerEntity = class AnswerEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AnswerEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], AnswerEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], AnswerEntity.prototype, "creatorId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.answers),
    typeorm_1.JoinColumn({ name: "creatorId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], AnswerEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], AnswerEntity.prototype, "questionId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => question_entity_1.QuestionEntity, question => question.answers),
    typeorm_1.JoinColumn({ name: "questionId" }),
    __metadata("design:type", question_entity_1.QuestionEntity)
], AnswerEntity.prototype, "question", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], AnswerEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], AnswerEntity.prototype, "lastUpdated", void 0);
AnswerEntity = __decorate([
    typeorm_1.Entity("answer")
], AnswerEntity);
exports.AnswerEntity = AnswerEntity;


/***/ }),

/***/ "./src/entities/comment.entity.ts":
/*!****************************************!*\
  !*** ./src/entities/comment.entity.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
let CommentEntity = class CommentEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 400
    }),
    __metadata("design:type", String)
], CommentEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], CommentEntity.prototype, "taskId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => task_entity_1.TaskEntity, task => task.comments),
    typeorm_1.JoinColumn({ name: "taskId" }),
    __metadata("design:type", task_entity_1.TaskEntity)
], CommentEntity.prototype, "task", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], CommentEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.comments),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], CommentEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], CommentEntity.prototype, "lastUpdated", void 0);
CommentEntity = __decorate([
    typeorm_1.Entity("comment")
], CommentEntity);
exports.CommentEntity = CommentEntity;


/***/ }),

/***/ "./src/entities/company-membership.entity.ts":
/*!***************************************************!*\
  !*** ./src/entities/company-membership.entity.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const company_entity_1 = __webpack_require__(/*! @entities/company.entity */ "./src/entities/company.entity.ts");
let CompanyMembershipEntity = class CompanyMembershipEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CompanyMembershipEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], CompanyMembershipEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.memberships),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], CompanyMembershipEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], CompanyMembershipEntity.prototype, "companyId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => company_entity_1.CompanyEntity, company => company.members),
    typeorm_1.JoinColumn({ name: "companyId" }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], CompanyMembershipEntity.prototype, "company", void 0);
__decorate([
    typeorm_1.Column("datetime"),
    __metadata("design:type", Date)
], CompanyMembershipEntity.prototype, "joiningDate", void 0);
__decorate([
    typeorm_1.Column("datetime", { nullable: true }),
    __metadata("design:type", Date)
], CompanyMembershipEntity.prototype, "leavingDate", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], CompanyMembershipEntity.prototype, "status", void 0);
CompanyMembershipEntity = __decorate([
    typeorm_1.Entity("company_membership")
], CompanyMembershipEntity);
exports.CompanyMembershipEntity = CompanyMembershipEntity;


/***/ }),

/***/ "./src/entities/company.entity.ts":
/*!****************************************!*\
  !*** ./src/entities/company.entity.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const company_membership_entity_1 = __webpack_require__(/*! @entities/company-membership.entity */ "./src/entities/company-membership.entity.ts");
const membership_request_entity_1 = __webpack_require__(/*! @entities/membership-request.entity */ "./src/entities/membership-request.entity.ts");
const status_template_entity_1 = __webpack_require__(/*! ./status-template.entity */ "./src/entities/status-template.entity.ts");
const root_project_entity_1 = __webpack_require__(/*! ./root-project.entity */ "./src/entities/root-project.entity.ts");
let CompanyEntity = class CompanyEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CompanyEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(type => root_project_entity_1.RootProjectEntity, rt => rt.company),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "rootProjects", void 0);
__decorate([
    typeorm_1.OneToMany(type => company_membership_entity_1.CompanyMembershipEntity, cmem => cmem.company),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "members", void 0);
__decorate([
    typeorm_1.OneToMany(type => membership_request_entity_1.MembershipRequestEntity, msr => msr.company),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "requestsSent", void 0);
__decorate([
    typeorm_1.OneToMany(type => status_template_entity_1.StatusTemplateEntity, stTemp => stTemp.company),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "statusTemplates", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], CompanyEntity.prototype, "ownerId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.ownedCompanies),
    typeorm_1.JoinColumn({ name: "ownerId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], CompanyEntity.prototype, "owner", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], CompanyEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], CompanyEntity.prototype, "lastUpdated", void 0);
CompanyEntity = __decorate([
    typeorm_1.Entity("company")
], CompanyEntity);
exports.CompanyEntity = CompanyEntity;


/***/ }),

/***/ "./src/entities/issue.entity.ts":
/*!**************************************!*\
  !*** ./src/entities/issue.entity.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
const root_project_entity_1 = __webpack_require__(/*! ./root-project.entity */ "./src/entities/root-project.entity.ts");
let IssueEntity = class IssueEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], IssueEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], IssueEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], IssueEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.fromIssue),
    __metadata("design:type", Array)
], IssueEntity.prototype, "tasks", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], IssueEntity.prototype, "creatorId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdIssues),
    typeorm_1.JoinColumn({ name: "creatorId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], IssueEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], IssueEntity.prototype, "rootProjectId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => root_project_entity_1.RootProjectEntity, rt => rt.issues),
    typeorm_1.JoinColumn({ name: "rootProjectId" }),
    __metadata("design:type", root_project_entity_1.RootProjectEntity)
], IssueEntity.prototype, "project", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], IssueEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], IssueEntity.prototype, "lastUpdated", void 0);
IssueEntity = __decorate([
    typeorm_1.Entity("issue")
], IssueEntity);
exports.IssueEntity = IssueEntity;


/***/ }),

/***/ "./src/entities/label.entity.ts":
/*!**************************************!*\
  !*** ./src/entities/label.entity.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const task_label_entity_1 = __webpack_require__(/*! ./task-label.entity */ "./src/entities/task-label.entity.ts");
let LabelEntity = class LabelEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LabelEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 15
    }),
    __metadata("design:type", String)
], LabelEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_label_entity_1.TaskLabelEntity, tsklbl => tsklbl.label),
    __metadata("design:type", Array)
], LabelEntity.prototype, "relatedTasks", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], LabelEntity.prototype, "createdAt", void 0);
LabelEntity = __decorate([
    typeorm_1.Entity("label")
], LabelEntity);
exports.LabelEntity = LabelEntity;


/***/ }),

/***/ "./src/entities/membership-request.entity.ts":
/*!***************************************************!*\
  !*** ./src/entities/membership-request.entity.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const company_entity_1 = __webpack_require__(/*! @entities/company.entity */ "./src/entities/company.entity.ts");
let MembershipRequestEntity = class MembershipRequestEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], MembershipRequestEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], MembershipRequestEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.companyRequests),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], MembershipRequestEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], MembershipRequestEntity.prototype, "companyId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => company_entity_1.CompanyEntity, company => company.requestsSent),
    typeorm_1.JoinColumn({ name: "companyId" }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], MembershipRequestEntity.prototype, "company", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], MembershipRequestEntity.prototype, "createdAt", void 0);
MembershipRequestEntity = __decorate([
    typeorm_1.Entity("membership_request")
], MembershipRequestEntity);
exports.MembershipRequestEntity = MembershipRequestEntity;


/***/ }),

/***/ "./src/entities/project-manager.entity.ts":
/*!************************************************!*\
  !*** ./src/entities/project-manager.entity.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const root_project_entity_1 = __webpack_require__(/*! ./root-project.entity */ "./src/entities/root-project.entity.ts");
let ProjectManagerEntity = class ProjectManagerEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProjectManagerEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], ProjectManagerEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.managedProjects),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], ProjectManagerEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], ProjectManagerEntity.prototype, "rootProjectId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => root_project_entity_1.RootProjectEntity, prj => prj.managers),
    typeorm_1.JoinColumn({ name: "rootProjectId" }),
    __metadata("design:type", root_project_entity_1.RootProjectEntity)
], ProjectManagerEntity.prototype, "project", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ProjectManagerEntity.prototype, "createdAt", void 0);
ProjectManagerEntity = __decorate([
    typeorm_1.Entity("project_manager")
], ProjectManagerEntity);
exports.ProjectManagerEntity = ProjectManagerEntity;


/***/ }),

/***/ "./src/entities/project-membership.entity.ts":
/*!***************************************************!*\
  !*** ./src/entities/project-membership.entity.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const root_project_entity_1 = __webpack_require__(/*! ./root-project.entity */ "./src/entities/root-project.entity.ts");
let ProjectMembershipEntity = class ProjectMembershipEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProjectMembershipEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], ProjectMembershipEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.rootProjects),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], ProjectMembershipEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], ProjectMembershipEntity.prototype, "rootProjectId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => root_project_entity_1.RootProjectEntity, rt => rt.managers),
    typeorm_1.JoinColumn({ name: "rootProjectId" }),
    __metadata("design:type", root_project_entity_1.RootProjectEntity)
], ProjectMembershipEntity.prototype, "rootProject", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ProjectMembershipEntity.prototype, "createdAt", void 0);
ProjectMembershipEntity = __decorate([
    typeorm_1.Entity("project_membership")
], ProjectMembershipEntity);
exports.ProjectMembershipEntity = ProjectMembershipEntity;


/***/ }),

/***/ "./src/entities/project.entity.ts":
/*!****************************************!*\
  !*** ./src/entities/project.entity.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
const status_entity_1 = __webpack_require__(/*! @entities/status.entity */ "./src/entities/status.entity.ts");
const sub_project_entity_1 = __webpack_require__(/*! ./sub-project.entity */ "./src/entities/sub-project.entity.ts");
const root_project_entity_1 = __webpack_require__(/*! ./root-project.entity */ "./src/entities/root-project.entity.ts");
let ProjectEntity = class ProjectEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "tasks", void 0);
__decorate([
    typeorm_1.OneToMany(type => status_entity_1.StatusEntity, status => status.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "statuses", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "projectType", void 0);
__decorate([
    typeorm_1.OneToOne(type => sub_project_entity_1.SubProjectEntity, sb => sb.baseProject),
    __metadata("design:type", sub_project_entity_1.SubProjectEntity)
], ProjectEntity.prototype, "subProject", void 0);
__decorate([
    typeorm_1.OneToOne(type => root_project_entity_1.RootProjectEntity, rt => rt.baseProject),
    __metadata("design:type", root_project_entity_1.RootProjectEntity)
], ProjectEntity.prototype, "rootProject", void 0);
ProjectEntity = __decorate([
    typeorm_1.Entity("project")
], ProjectEntity);
exports.ProjectEntity = ProjectEntity;


/***/ }),

/***/ "./src/entities/question.entity.ts":
/*!*****************************************!*\
  !*** ./src/entities/question.entity.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const answer_entity_1 = __webpack_require__(/*! @entities/answer.entity */ "./src/entities/answer.entity.ts");
const root_project_entity_1 = __webpack_require__(/*! ./root-project.entity */ "./src/entities/root-project.entity.ts");
let QuestionEntity = class QuestionEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], QuestionEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], QuestionEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.OneToMany(type => answer_entity_1.AnswerEntity, answer => answer.question),
    __metadata("design:type", Array)
], QuestionEntity.prototype, "answers", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "creatorId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.questions),
    typeorm_1.JoinColumn({ name: "creatorId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], QuestionEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "projectId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => root_project_entity_1.RootProjectEntity, project => project.questions),
    typeorm_1.JoinColumn({ name: "projectId" }),
    __metadata("design:type", root_project_entity_1.RootProjectEntity)
], QuestionEntity.prototype, "project", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], QuestionEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], QuestionEntity.prototype, "lastUpdated", void 0);
QuestionEntity = __decorate([
    typeorm_1.Entity("question")
], QuestionEntity);
exports.QuestionEntity = QuestionEntity;


/***/ }),

/***/ "./src/entities/root-project.entity.ts":
/*!*********************************************!*\
  !*** ./src/entities/root-project.entity.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const issue_entity_1 = __webpack_require__(/*! @entities/issue.entity */ "./src/entities/issue.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const company_entity_1 = __webpack_require__(/*! @entities/company.entity */ "./src/entities/company.entity.ts");
const project_manager_entity_1 = __webpack_require__(/*! @entities/project-manager.entity */ "./src/entities/project-manager.entity.ts");
const project_membership_entity_1 = __webpack_require__(/*! @entities/project-membership.entity */ "./src/entities/project-membership.entity.ts");
const project_entity_1 = __webpack_require__(/*! ./project.entity */ "./src/entities/project.entity.ts");
const question_entity_1 = __webpack_require__(/*! ./question.entity */ "./src/entities/question.entity.ts");
let RootProjectEntity = class RootProjectEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RootProjectEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], RootProjectEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], RootProjectEntity.prototype, "baseProjectId", void 0);
__decorate([
    typeorm_1.OneToOne(type => project_entity_1.ProjectEntity, bs => bs.rootProject),
    typeorm_1.JoinColumn({ name: "baseProjectId" }),
    __metadata("design:type", project_entity_1.ProjectEntity)
], RootProjectEntity.prototype, "baseProject", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], RootProjectEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(type => issue_entity_1.IssueEntity, issue => issue.project),
    __metadata("design:type", Array)
], RootProjectEntity.prototype, "issues", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], RootProjectEntity.prototype, "companyId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => company_entity_1.CompanyEntity, company => company.rootProjects),
    typeorm_1.JoinColumn({ name: "companyId" }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], RootProjectEntity.prototype, "company", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], RootProjectEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdRootProjects),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], RootProjectEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], RootProjectEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], RootProjectEntity.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_membership_entity_1.ProjectMembershipEntity, pms => pms.rootProject),
    __metadata("design:type", Array)
], RootProjectEntity.prototype, "members", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_manager_entity_1.ProjectManagerEntity, prm => prm.project),
    __metadata("design:type", Array)
], RootProjectEntity.prototype, "managers", void 0);
__decorate([
    typeorm_1.OneToMany(type => question_entity_1.QuestionEntity, question => question.rootProject),
    __metadata("design:type", Array)
], RootProjectEntity.prototype, "questions", void 0);
RootProjectEntity = __decorate([
    typeorm_1.Entity("root_project")
], RootProjectEntity);
exports.RootProjectEntity = RootProjectEntity;


/***/ }),

/***/ "./src/entities/status-template.entity.ts":
/*!************************************************!*\
  !*** ./src/entities/status-template.entity.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const company_entity_1 = __webpack_require__(/*! ./company.entity */ "./src/entities/company.entity.ts");
const abstract_status_entity_1 = __webpack_require__(/*! ./abstract-status.entity */ "./src/entities/abstract-status.entity.ts");
let StatusTemplateEntity = class StatusTemplateEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], StatusTemplateEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], StatusTemplateEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(type => abstract_status_entity_1.AbstractStatusEntity, abst => abst.template),
    __metadata("design:type", Array)
], StatusTemplateEntity.prototype, "statuses", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], StatusTemplateEntity.prototype, "creatorId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdstatusTemplates),
    typeorm_1.JoinColumn({ name: "creatorId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], StatusTemplateEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], StatusTemplateEntity.prototype, "companyId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => company_entity_1.CompanyEntity, cmp => cmp.statusTemplates),
    typeorm_1.JoinColumn({ name: "companyId" }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], StatusTemplateEntity.prototype, "company", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], StatusTemplateEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], StatusTemplateEntity.prototype, "lastUpdated", void 0);
StatusTemplateEntity = __decorate([
    typeorm_1.Entity("status_template")
], StatusTemplateEntity);
exports.StatusTemplateEntity = StatusTemplateEntity;


/***/ }),

/***/ "./src/entities/status.entity.ts":
/*!***************************************!*\
  !*** ./src/entities/status.entity.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
const project_entity_1 = __webpack_require__(/*! @entities/project.entity */ "./src/entities/project.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
let StatusEntity = class StatusEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], StatusEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], StatusEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], StatusEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], StatusEntity.prototype, "baseStatus", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], StatusEntity.prototype, "order", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.status),
    __metadata("design:type", Array)
], StatusEntity.prototype, "tasks", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], StatusEntity.prototype, "creatorId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdStatuses),
    typeorm_1.JoinColumn({ name: "creatorId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], StatusEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], StatusEntity.prototype, "projectId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => project_entity_1.ProjectEntity, project => project.statuses),
    typeorm_1.JoinColumn({ name: "projectId" }),
    __metadata("design:type", project_entity_1.ProjectEntity)
], StatusEntity.prototype, "project", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], StatusEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], StatusEntity.prototype, "lastUpdated", void 0);
StatusEntity = __decorate([
    typeorm_1.Entity("status")
], StatusEntity);
exports.StatusEntity = StatusEntity;


/***/ }),

/***/ "./src/entities/sub-project.entity.ts":
/*!********************************************!*\
  !*** ./src/entities/sub-project.entity.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
const project_entity_1 = __webpack_require__(/*! ./project.entity */ "./src/entities/project.entity.ts");
let SubProjectEntity = class SubProjectEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SubProjectEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], SubProjectEntity.prototype, "assignedTaskId", void 0);
__decorate([
    typeorm_1.OneToOne(type => task_entity_1.TaskEntity, task => task.subProject),
    typeorm_1.JoinColumn({ name: "assignedTaskId" }),
    __metadata("design:type", task_entity_1.TaskEntity)
], SubProjectEntity.prototype, "assignedTask", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], SubProjectEntity.prototype, "baseProjectId", void 0);
__decorate([
    typeorm_1.OneToOne(type => project_entity_1.ProjectEntity, bs => bs.subProject),
    typeorm_1.JoinColumn({ name: "baseProjectId" }),
    __metadata("design:type", project_entity_1.ProjectEntity)
], SubProjectEntity.prototype, "baseProject", void 0);
SubProjectEntity = __decorate([
    typeorm_1.Entity("sub_project")
], SubProjectEntity);
exports.SubProjectEntity = SubProjectEntity;


/***/ }),

/***/ "./src/entities/task-assignment.entity.ts":
/*!************************************************!*\
  !*** ./src/entities/task-assignment.entity.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
let TaskAssignmentEntity = class TaskAssignmentEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TaskAssignmentEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskAssignmentEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.taskAssignments),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], TaskAssignmentEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskAssignmentEntity.prototype, "taskId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => task_entity_1.TaskEntity, tsk => tsk.assignees),
    typeorm_1.JoinColumn({ name: "taskId" }),
    __metadata("design:type", task_entity_1.TaskEntity)
], TaskAssignmentEntity.prototype, "task", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TaskAssignmentEntity.prototype, "createdAt", void 0);
TaskAssignmentEntity = __decorate([
    typeorm_1.Entity("task_assignment")
], TaskAssignmentEntity);
exports.TaskAssignmentEntity = TaskAssignmentEntity;


/***/ }),

/***/ "./src/entities/task-label.entity.ts":
/*!*******************************************!*\
  !*** ./src/entities/task-label.entity.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
const label_entity_1 = __webpack_require__(/*! ./label.entity */ "./src/entities/label.entity.ts");
let TaskLabelEntity = class TaskLabelEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TaskLabelEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskLabelEntity.prototype, "taskId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => task_entity_1.TaskEntity, task => task.relatedLabels),
    typeorm_1.JoinColumn({ name: "taskId" }),
    __metadata("design:type", task_entity_1.TaskEntity)
], TaskLabelEntity.prototype, "task", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskLabelEntity.prototype, "labelId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => label_entity_1.LabelEntity, lbl => lbl.relatedTasks),
    typeorm_1.JoinColumn({ name: "labelId" }),
    __metadata("design:type", task_entity_1.TaskEntity)
], TaskLabelEntity.prototype, "label", void 0);
TaskLabelEntity = __decorate([
    typeorm_1.Entity("task_label")
], TaskLabelEntity);
exports.TaskLabelEntity = TaskLabelEntity;


/***/ }),

/***/ "./src/entities/task.entity.ts":
/*!*************************************!*\
  !*** ./src/entities/task.entity.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const issue_entity_1 = __webpack_require__(/*! @entities/issue.entity */ "./src/entities/issue.entity.ts");
const project_entity_1 = __webpack_require__(/*! @entities/project.entity */ "./src/entities/project.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const comment_entity_1 = __webpack_require__(/*! @entities/comment.entity */ "./src/entities/comment.entity.ts");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const status_entity_1 = __webpack_require__(/*! @entities/status.entity */ "./src/entities/status.entity.ts");
const task_assignment_entity_1 = __webpack_require__(/*! @entities/task-assignment.entity */ "./src/entities/task-assignment.entity.ts");
const task_label_entity_1 = __webpack_require__(/*! ./task-label.entity */ "./src/entities/task-label.entity.ts");
const sub_project_entity_1 = __webpack_require__(/*! ./sub-project.entity */ "./src/entities/sub-project.entity.ts");
let TaskEntity = class TaskEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TaskEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], TaskEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], TaskEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskEntity.prototype, "priority", void 0);
__decorate([
    typeorm_1.OneToOne(type => sub_project_entity_1.SubProjectEntity, project => project.assignedTask),
    __metadata("design:type", sub_project_entity_1.SubProjectEntity)
], TaskEntity.prototype, "subProject", void 0);
__decorate([
    typeorm_1.OneToMany(type => comment_entity_1.CommentEntity, comment => comment.task),
    __metadata("design:type", Array)
], TaskEntity.prototype, "comments", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskEntity.prototype, "creatorId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdTasks),
    typeorm_1.JoinColumn({ name: "creatorId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], TaskEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskEntity.prototype, "projectId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => project_entity_1.ProjectEntity, project => project.tasks),
    typeorm_1.JoinColumn({ name: "projectId" }),
    __metadata("design:type", project_entity_1.ProjectEntity)
], TaskEntity.prototype, "project", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], TaskEntity.prototype, "statusId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => status_entity_1.StatusEntity, status => status.tasks),
    typeorm_1.JoinColumn({ name: "statusId" }),
    __metadata("design:type", status_entity_1.StatusEntity)
], TaskEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("int", { nullable: true }),
    __metadata("design:type", Number)
], TaskEntity.prototype, "fromIssueId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => issue_entity_1.IssueEntity, issue => issue.tasks),
    typeorm_1.JoinColumn({ name: "fromIssueId" }),
    __metadata("design:type", issue_entity_1.IssueEntity)
], TaskEntity.prototype, "fromIssue", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_assignment_entity_1.TaskAssignmentEntity, tsa => tsa.task),
    __metadata("design:type", Array)
], TaskEntity.prototype, "assignees", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_label_entity_1.TaskLabelEntity, tsklbl => tsklbl.task),
    __metadata("design:type", Array)
], TaskEntity.prototype, "relatedLabels", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TaskEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TaskEntity.prototype, "lastUpdated", void 0);
TaskEntity = __decorate([
    typeorm_1.Entity("task")
], TaskEntity);
exports.TaskEntity = TaskEntity;


/***/ }),

/***/ "./src/entities/user.entity.ts":
/*!*************************************!*\
  !*** ./src/entities/user.entity.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const issue_entity_1 = __webpack_require__(/*! @entities/issue.entity */ "./src/entities/issue.entity.ts");
const comment_entity_1 = __webpack_require__(/*! @entities/comment.entity */ "./src/entities/comment.entity.ts");
const question_entity_1 = __webpack_require__(/*! @entities/question.entity */ "./src/entities/question.entity.ts");
const company_entity_1 = __webpack_require__(/*! @entities/company.entity */ "./src/entities/company.entity.ts");
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const answer_entity_1 = __webpack_require__(/*! @entities/answer.entity */ "./src/entities/answer.entity.ts");
const status_entity_1 = __webpack_require__(/*! @entities/status.entity */ "./src/entities/status.entity.ts");
const project_manager_entity_1 = __webpack_require__(/*! @entities/project-manager.entity */ "./src/entities/project-manager.entity.ts");
const membership_request_entity_1 = __webpack_require__(/*! @entities/membership-request.entity */ "./src/entities/membership-request.entity.ts");
const project_membership_entity_1 = __webpack_require__(/*! @entities/project-membership.entity */ "./src/entities/project-membership.entity.ts");
const task_assignment_entity_1 = __webpack_require__(/*! @entities/task-assignment.entity */ "./src/entities/task-assignment.entity.ts");
const company_membership_entity_1 = __webpack_require__(/*! @entities/company-membership.entity */ "./src/entities/company-membership.entity.ts");
const status_template_entity_1 = __webpack_require__(/*! ./status-template.entity */ "./src/entities/status-template.entity.ts");
const root_project_entity_1 = __webpack_require__(/*! ./root-project.entity */ "./src/entities/root-project.entity.ts");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "surname", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], UserEntity.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "createdTasks", void 0);
__decorate([
    typeorm_1.OneToMany(type => root_project_entity_1.RootProjectEntity, project => project.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "createdRootProjects", void 0);
__decorate([
    typeorm_1.OneToMany(type => company_entity_1.CompanyEntity, company => company.owner),
    __metadata("design:type", Array)
], UserEntity.prototype, "ownedCompanies", void 0);
__decorate([
    typeorm_1.OneToMany(type => question_entity_1.QuestionEntity, question => question.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "questions", void 0);
__decorate([
    typeorm_1.OneToMany(type => status_template_entity_1.StatusTemplateEntity, stTemp => stTemp.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "createdstatusTemplates", void 0);
__decorate([
    typeorm_1.OneToMany(type => answer_entity_1.AnswerEntity, answer => answer.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "answers", void 0);
__decorate([
    typeorm_1.OneToMany(type => comment_entity_1.CommentEntity, comment => comment.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToMany(type => issue_entity_1.IssueEntity, issue => issue.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "createdIssues", void 0);
__decorate([
    typeorm_1.OneToMany(type => status_entity_1.StatusEntity, status => status.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "createdStatuses", void 0);
__decorate([
    typeorm_1.OneToMany(type => company_membership_entity_1.CompanyMembershipEntity, cmem => cmem.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "memberships", void 0);
__decorate([
    typeorm_1.OneToMany(type => membership_request_entity_1.MembershipRequestEntity, msr => msr.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "companyRequests", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_membership_entity_1.ProjectMembershipEntity, pms => pms.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "rootProjects", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_manager_entity_1.ProjectManagerEntity, pmn => pmn.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "managedProjects", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_assignment_entity_1.TaskAssignmentEntity, tsa => tsa.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "taskAssignments", void 0);
UserEntity = __decorate([
    typeorm_1.Entity("user")
], UserEntity);
exports.UserEntity = UserEntity;


/***/ }),

/***/ "./src/enums/base-status.enum.ts":
/*!***************************************!*\
  !*** ./src/enums/base-status.enum.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseStatus;
(function (BaseStatus) {
    BaseStatus[BaseStatus["PLANNINING"] = 0] = "PLANNINING";
    BaseStatus[BaseStatus["NOT_STARTED"] = 1] = "NOT_STARTED";
    BaseStatus[BaseStatus["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    BaseStatus[BaseStatus["FINISHED"] = 3] = "FINISHED";
})(BaseStatus = exports.BaseStatus || (exports.BaseStatus = {}));


/***/ }),

/***/ "./src/enums/company-roles.enum.ts":
/*!*****************************************!*\
  !*** ./src/enums/company-roles.enum.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CompanyRoles;
(function (CompanyRoles) {
    CompanyRoles[CompanyRoles["ADMIN"] = 0] = "ADMIN";
    CompanyRoles[CompanyRoles["MODERATOR"] = 1] = "MODERATOR";
})(CompanyRoles = exports.CompanyRoles || (exports.CompanyRoles = {}));


/***/ }),

/***/ "./src/enums/index.ts":
/*!****************************!*\
  !*** ./src/enums/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var project_auth_types_enum_1 = __webpack_require__(/*! ./project-auth-types.enum */ "./src/enums/project-auth-types.enum.ts");
exports.ProjectAuthTypes = project_auth_types_enum_1.ProjectAuthTypes;
var company_roles_enum_1 = __webpack_require__(/*! ./company-roles.enum */ "./src/enums/company-roles.enum.ts");
exports.CompanyRoles = company_roles_enum_1.CompanyRoles;
var base_status_enum_1 = __webpack_require__(/*! ./base-status.enum */ "./src/enums/base-status.enum.ts");
exports.BaseStatus = base_status_enum_1.BaseStatus;
var task_types_enum_1 = __webpack_require__(/*! ./task-types.enum */ "./src/enums/task-types.enum.ts");
exports.TaskTypes = task_types_enum_1.TaskTypes;
var task_priorities_enum_1 = __webpack_require__(/*! ./task-priorities.enum */ "./src/enums/task-priorities.enum.ts");
exports.TaskPriorities = task_priorities_enum_1.TaskPriorities;
var project_types_enum_1 = __webpack_require__(/*! ./project-types.enum */ "./src/enums/project-types.enum.ts");
exports.ProjectTypes = project_types_enum_1.ProjectTypes;


/***/ }),

/***/ "./src/enums/project-auth-types.enum.ts":
/*!**********************************************!*\
  !*** ./src/enums/project-auth-types.enum.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProjectAuthTypes;
(function (ProjectAuthTypes) {
    ProjectAuthTypes[ProjectAuthTypes["ADMIN"] = 0] = "ADMIN";
    ProjectAuthTypes[ProjectAuthTypes["MANAGER"] = 1] = "MANAGER";
    ProjectAuthTypes[ProjectAuthTypes["USER"] = 3] = "USER";
})(ProjectAuthTypes = exports.ProjectAuthTypes || (exports.ProjectAuthTypes = {}));


/***/ }),

/***/ "./src/enums/project-types.enum.ts":
/*!*****************************************!*\
  !*** ./src/enums/project-types.enum.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProjectTypes;
(function (ProjectTypes) {
    ProjectTypes[ProjectTypes["ROOT"] = 0] = "ROOT";
    ProjectTypes[ProjectTypes["SUB"] = 1] = "SUB";
})(ProjectTypes = exports.ProjectTypes || (exports.ProjectTypes = {}));


/***/ }),

/***/ "./src/enums/task-priorities.enum.ts":
/*!*******************************************!*\
  !*** ./src/enums/task-priorities.enum.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TaskPriorities;
(function (TaskPriorities) {
    TaskPriorities[TaskPriorities["EXTREMELY_LOW"] = 0] = "EXTREMELY_LOW";
    TaskPriorities[TaskPriorities["ULTRA_LOW"] = 1] = "ULTRA_LOW";
    TaskPriorities[TaskPriorities["VERY_LOW"] = 2] = "VERY_LOW";
    TaskPriorities[TaskPriorities["LOW"] = 3] = "LOW";
    TaskPriorities[TaskPriorities["MEDIUM"] = 4] = "MEDIUM";
    TaskPriorities[TaskPriorities["HIGH"] = 5] = "HIGH";
    TaskPriorities[TaskPriorities["VERY_HIGH"] = 6] = "VERY_HIGH";
    TaskPriorities[TaskPriorities["ULTRA_HIGH"] = 7] = "ULTRA_HIGH";
    TaskPriorities[TaskPriorities["EXTREMELY_HIGH"] = 8] = "EXTREMELY_HIGH";
})(TaskPriorities = exports.TaskPriorities || (exports.TaskPriorities = {}));


/***/ }),

/***/ "./src/enums/task-types.enum.ts":
/*!**************************************!*\
  !*** ./src/enums/task-types.enum.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TaskTypes;
(function (TaskTypes) {
    TaskTypes[TaskTypes["BASIC"] = 0] = "BASIC";
    TaskTypes[TaskTypes["SUBPROJECT"] = 1] = "SUBPROJECT";
})(TaskTypes = exports.TaskTypes || (exports.TaskTypes = {}));


/***/ }),

/***/ "./src/errors/app-error.ts":
/*!*********************************!*\
  !*** ./src/errors/app-error.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(name, message, status) {
        super(message);
        this.name = name;
        Error.captureStackTrace(this, this.constructor);
        this.status = status || 500;
    }
}
exports.AppError = AppError;


/***/ }),

/***/ "./src/errors/error-handler.ts":
/*!*************************************!*\
  !*** ./src/errors/error-handler.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
const app_error_1 = __webpack_require__(/*! ./app-error */ "./src/errors/app-error.ts");
var ErrorHandler;
(function (ErrorHandler) {
    function handleErrorResponses(error, res, Method = 'unknown', Controller = 'unknown') {
        let status = 500;
        let _errorMessage;
        if (helpers_1.Helpers.isJson(error.message))
            _errorMessage = JSON.parse(error.message);
        else
            _errorMessage = error.message;
        if (error instanceof app_error_1.AppError) {
            status = error.status;
        }
        console.log(`ERROR at Method: ${Method} , Controller: ${Controller}`);
        console.log('Error Name :', error.name);
        console.log('Error Message :', _errorMessage);
        console.log('Error StackTrace :', error.stack);
        return res.status(status).json({
            success: false,
            error: {
                name: error.name,
                message: _errorMessage
            }
        });
    }
    ErrorHandler.handleErrorResponses = handleErrorResponses;
})(ErrorHandler = exports.ErrorHandler || (exports.ErrorHandler = {}));


/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Helpers;
(function (Helpers) {
    function isJson(item) {
        item = typeof item !== "string"
            ? JSON.stringify(item)
            : item;
        try {
            item = JSON.parse(item);
        }
        catch (e) {
            return false;
        }
        if (typeof item === "object" && item !== null) {
            return true;
        }
        return false;
    }
    Helpers.isJson = isJson;
})(Helpers = exports.Helpers || (exports.Helpers = {}));


/***/ }),

/***/ "./src/ioc/index.ts":
/*!**************************!*\
  !*** ./src/ioc/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inject_types_1 = __webpack_require__(/*! ./inject-types */ "./src/ioc/inject-types.ts");
exports.InjectTypes = inject_types_1.InjectTypes;
var ioc_config_1 = __webpack_require__(/*! ./ioc.config */ "./src/ioc/ioc.config.ts");
exports.IOC = ioc_config_1.IOC;


/***/ }),

/***/ "./src/ioc/inject-types.ts":
/*!*********************************!*\
  !*** ./src/ioc/inject-types.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InjectTypes;
(function (InjectTypes) {
    let Repository;
    (function (Repository) {
        Repository["ANSWER"] = "AnswerRepository";
        Repository["COMMENT"] = "CommentRepository";
        Repository["COMPANY"] = "CompanyRepository";
        Repository["ISSUE"] = "IssueRepository";
        Repository["PROJECT"] = "ProjectRepository";
        Repository["QUESTION"] = "QuestionRepository";
        Repository["STATUS"] = "StatusRepository";
        Repository["TASK"] = "TaskRepository";
        Repository["USER"] = "UserRepository";
        Repository["COMPANY_MEMBERSHIP"] = "CompanyMembershipRepository";
        Repository["MEMBERSHIP_REQUEST"] = "MembershipRequestRepository";
        Repository["TASK_ASSIGNMENT"] = "TaskAssignmentRepository";
        Repository["PROJECT_MEMBERSHIP"] = "ProjectMembershipRepository";
        Repository["LABEL"] = "LabelRepository";
        Repository["TASK_LABEL"] = "TaskLabelRepository";
        Repository["ABSTRACT_STATUS"] = "AbstractStatusRepository";
        Repository["STATUS_TEMPLATE"] = "StatusTemplateRepository";
        Repository["PROJECT_MANAGER"] = "ProjectManagerRepository";
        Repository["SUB_PROJECT"] = "SubProjectRepository";
        Repository["ROOT_PROJECT"] = "RootProjectEntity";
    })(Repository = InjectTypes.Repository || (InjectTypes.Repository = {}));
    let Service;
    (function (Service) {
        Service["ANSWER"] = "AnswerService";
        Service["COMMENT"] = "CommentService";
        Service["COMPANY"] = "CompanyService";
        Service["ISSUE"] = "IssueService";
        Service["ROOTPROJECT"] = "RootProjectService";
        Service["QUESTION"] = "QuestionService";
        Service["TASK"] = "TaskService";
        Service["USER"] = "UserService";
        Service["SUB_PROJECT"] = "SubProjectService";
    })(Service = InjectTypes.Service || (InjectTypes.Service = {}));
})(InjectTypes = exports.InjectTypes || (exports.InjectTypes = {}));


/***/ }),

/***/ "./src/ioc/ioc.config.ts":
/*!*******************************!*\
  !*** ./src/ioc/ioc.config.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! module-alias/register */ "module-alias/register");
const answer_controller_1 = __webpack_require__(/*! @controllers/answer.controller */ "./src/@controllers/answer.controller.ts");
const comment_controller_1 = __webpack_require__(/*! @controllers/comment.controller */ "./src/@controllers/comment.controller.ts");
const company_controller_1 = __webpack_require__(/*! @controllers/company.controller */ "./src/@controllers/company.controller.ts");
const issue_controller_1 = __webpack_require__(/*! @controllers/issue.controller */ "./src/@controllers/issue.controller.ts");
const root_project_controller_1 = __webpack_require__(/*! @controllers/root-project.controller */ "./src/@controllers/root-project.controller.ts");
const question_controller_1 = __webpack_require__(/*! @controllers/question.controller */ "./src/@controllers/question.controller.ts");
const task_controller_1 = __webpack_require__(/*! @controllers/task.controller */ "./src/@controllers/task.controller.ts");
const user_controller_1 = __webpack_require__(/*! @controllers/user.controller */ "./src/@controllers/user.controller.ts");
const concrete_1 = __webpack_require__(/*! @repositories/concrete */ "./src/@repository/concrete/index.ts");
const concrete_2 = __webpack_require__(/*! @services/concrete */ "./src/@services/concrete/index.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const sub_project_controller_1 = __webpack_require__(/*! @controllers/sub-project.controller */ "./src/@controllers/sub-project.controller.ts");
var IOC;
(function (IOC) {
    IOC.container = new inversify_1.Container();
    function configureContainer() {
        //CONTROLLERS
        IOC.container
            .bind(answer_controller_1.AnswerController)
            .toSelf();
        IOC.container
            .bind(comment_controller_1.CommentController)
            .toSelf();
        IOC.container
            .bind(company_controller_1.CompanyController)
            .toSelf();
        IOC.container
            .bind(issue_controller_1.IssueController)
            .toSelf();
        IOC.container
            .bind(root_project_controller_1.RootProjectController)
            .toSelf();
        IOC.container
            .bind(question_controller_1.QuestionController)
            .toSelf();
        IOC.container
            .bind(task_controller_1.TaskController)
            .toSelf();
        IOC.container
            .bind(user_controller_1.UserController)
            .toSelf();
        IOC.container
            .bind(sub_project_controller_1.SubProjectController)
            .toSelf();
        // REPOSITORIES
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.ANSWER)
            .to(concrete_1.AnswerRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.COMMENT)
            .to(concrete_1.CommentRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.COMPANY)
            .to(concrete_1.CompanyRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.COMPANY_MEMBERSHIP)
            .to(concrete_1.CompanyMembershipRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.MEMBERSHIP_REQUEST)
            .to(concrete_1.MembershipRequestRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.ISSUE)
            .to(concrete_1.IssueRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.PROJECT_MEMBERSHIP)
            .to(concrete_1.ProjectMembershipRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.PROJECT)
            .to(concrete_1.ProjectRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.QUESTION)
            .to(concrete_1.QuestionRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.STATUS)
            .to(concrete_1.StatusRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.TASK)
            .to(concrete_1.TaskRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.USER)
            .to(concrete_1.UserRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.TASK_ASSIGNMENT)
            .to(concrete_1.TaskAssignmentRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.TASK_LABEL)
            .to(concrete_1.TaskLabelRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.LABEL)
            .to(concrete_1.LabelRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.STATUS_TEMPLATE)
            .to(concrete_1.StatusTemplateRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.ABSTRACT_STATUS)
            .to(concrete_1.AbstractStatusRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.PROJECT_MANAGER)
            .to(concrete_1.ProjectManagerRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.SUB_PROJECT)
            .to(concrete_1.SubProjectRepository);
        IOC.container
            .bind(_ioc_1.InjectTypes.Repository.ROOT_PROJECT)
            .to(concrete_1.RootProjectRepository);
        // SERVICES
        IOC.container
            .bind(_ioc_1.InjectTypes.Service.ANSWER)
            .to(concrete_2.AnswerService);
        IOC.container
            .bind(_ioc_1.InjectTypes.Service.COMMENT)
            .to(concrete_2.CommentService);
        IOC.container
            .bind(_ioc_1.InjectTypes.Service.COMPANY)
            .to(concrete_2.CompanyService);
        IOC.container
            .bind(_ioc_1.InjectTypes.Service.ISSUE)
            .to(concrete_2.IssueService);
        IOC.container
            .bind(_ioc_1.InjectTypes.Service.ROOTPROJECT)
            .to(concrete_2.RootProjectService);
        IOC.container
            .bind(_ioc_1.InjectTypes.Service.QUESTION)
            .to(concrete_2.QuestionService);
        IOC.container
            .bind(_ioc_1.InjectTypes.Service.TASK)
            .to(concrete_2.TaskService);
        IOC.container
            .bind(_ioc_1.InjectTypes.Service.USER)
            .to(concrete_2.UserService);
        IOC.container
            .bind(_ioc_1.InjectTypes.Service.SUB_PROJECT)
            .to(concrete_2.SubProjectService);
        return IOC.container;
    }
    IOC.configureContainer = configureContainer;
})(IOC = exports.IOC || (exports.IOC = {}));


/***/ }),

/***/ "./src/seed/index.ts":
/*!***************************!*\
  !*** ./src/seed/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const seed_1 = __webpack_require__(/*! ./seed */ "./src/seed/seed.ts");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
console.log("veritabanı seedle çalıştırıldı.");
_ioc_1.IOC.configureContainer();
_ioc_1.IOC.container.bind(seed_1.SeedDatabase)
    .toSelf();
const seedDatabase = _ioc_1.IOC.container.get(seed_1.SeedDatabase);
seedDatabase.initialize();


/***/ }),

/***/ "./src/seed/seed.ts":
/*!**************************!*\
  !*** ./src/seed/seed.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const company_entity_1 = __webpack_require__(/*! @entities/company.entity */ "./src/entities/company.entity.ts");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const project_entity_1 = __webpack_require__(/*! @entities/project.entity */ "./src/entities/project.entity.ts");
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
const faker = __webpack_require__(/*! faker */ "faker");
const status_entity_1 = __webpack_require__(/*! @entities/status.entity */ "./src/entities/status.entity.ts");
const _enums_1 = __webpack_require__(/*! @enums */ "./src/enums/index.ts");
const appConfig = __webpack_require__(/*! @common/app-config */ "./src/common/app-config.ts");
const project_membership_entity_1 = __webpack_require__(/*! @entities/project-membership.entity */ "./src/entities/project-membership.entity.ts");
const company_membership_entity_1 = __webpack_require__(/*! @entities/company-membership.entity */ "./src/entities/company-membership.entity.ts");
const status_template_entity_1 = __webpack_require__(/*! @entities/status-template.entity */ "./src/entities/status-template.entity.ts");
const abstract_status_entity_1 = __webpack_require__(/*! @entities/abstract-status.entity */ "./src/entities/abstract-status.entity.ts");
const project_manager_entity_1 = __webpack_require__(/*! @entities/project-manager.entity */ "./src/entities/project-manager.entity.ts");
const sub_project_entity_1 = __webpack_require__(/*! @entities/sub-project.entity */ "./src/entities/sub-project.entity.ts");
const root_project_entity_1 = __webpack_require__(/*! @entities/root-project.entity */ "./src/entities/root-project.entity.ts");
let SeedDatabase = class SeedDatabase {
    constructor(_userRepository, _companyRepository, _statusRepository, _projectRepository, _taskRepository, _taskLabelRepository, _labelRepository, _projectMembershipRepository, _projectManagerRepository, _statusTemplateRepository, _abstractStatusRepository, _companyMembershipRepository, _subProjectRepository, _rootProjectRepository) {
        this._userRepository = _userRepository;
        this._companyRepository = _companyRepository;
        this._statusRepository = _statusRepository;
        this._projectRepository = _projectRepository;
        this._taskRepository = _taskRepository;
        this._taskLabelRepository = _taskLabelRepository;
        this._labelRepository = _labelRepository;
        this._projectMembershipRepository = _projectMembershipRepository;
        this._projectManagerRepository = _projectManagerRepository;
        this._statusTemplateRepository = _statusTemplateRepository;
        this._abstractStatusRepository = _abstractStatusRepository;
        this._companyMembershipRepository = _companyMembershipRepository;
        this._subProjectRepository = _subProjectRepository;
        this._rootProjectRepository = _rootProjectRepository;
        this.users = [];
        this.companies = [];
        this.projects = [];
        this.tasks = [];
        this.statuses = [];
        this.taskLabels = [];
        this.labels = [];
        this.projectMemberships = [];
        this.companyMemberships = [];
        this.USERCOUNT = 10;
        this.COMPANYCOUNT = 2;
        this.PROJECTCOUNT = 3;
        this.TASKCOUNT = 15;
        this.codeSequence = 1;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("INITIALIZING...");
            let connection = yield typeorm_1.createConnection(appConfig.dbOptions);
            console.log("CONNECTED TO DB");
            try {
                yield this.addUsers();
                console.log("addUsers OK");
                yield this.addCompanies();
                console.log("addCompanies OK");
                yield this.assignUsersToCompany();
                console.log("assignUsersToCompany OK");
                yield this.addStatusTemplates();
                console.log("addStatusTemplates OK");
                yield this.addRootProjects();
                console.log("addRootProjects OK");
                yield this.assignUsersToProject();
                console.log("assignUsersToProject OK");
                yield this.addTasks();
                console.log("addTasks OK");
                yield this.addSubProjects();
                console.log("addSubProjects OK");
                // await this.addTaskTemplates();
                console.log("SEED COMPLETED");
                yield connection.close();
            }
            catch (e) {
                console.log(e);
            }
            process.exit(0);
        });
    }
    addUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.USERCOUNT; i++) {
                let user = new user_entity_1.UserEntity();
                user.name = faker.name.firstName();
                user.surname = faker.name.lastName();
                user.username = faker.internet.userName();
                user.email = faker.internet.email();
                user.password = 'Password123.';
                user.createdAt = new Date();
                user.lastUpdated = new Date();
                let created = yield this._userRepository.insert(user);
                this.users.push(created);
            }
            let grkn = new user_entity_1.UserEntity();
            grkn.name = 'gurkan';
            grkn.surname = 'demirlerli';
            grkn.username = 'gurkan30';
            grkn.email = 'gurkan@example.com';
            grkn.password = 'Password123.';
            grkn.createdAt = new Date();
            grkn.lastUpdated = new Date();
            this.grkn = yield this._userRepository.insert(grkn);
        });
    }
    addCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.COMPANYCOUNT; i++) {
                let cmp = new company_entity_1.CompanyEntity();
                cmp.name = faker.name.lastName();
                cmp.description = faker.lorem.words(4);
                cmp.ownerId = this.users[i].id;
                cmp.createdAt = new Date();
                cmp.lastUpdated = new Date();
                let created = yield this._companyRepository.insert(cmp);
                this.companies.push(created);
                this.users[i].ownedCompanies = [];
                this.users[i].ownedCompanies.push(created);
            }
            this.grkn.ownedCompanies = [];
            for (let i = 0; i < 2; i++) {
                let cmp = new company_entity_1.CompanyEntity();
                cmp.name = faker.name.lastName();
                cmp.description = faker.lorem.words(4);
                cmp.ownerId = this.grkn.id;
                cmp.createdAt = new Date();
                cmp.lastUpdated = new Date();
                let created = yield this._companyRepository.insert(cmp);
                this.companies.push(created);
                this.grkn.ownedCompanies.push(created);
            }
        });
    }
    assignUsersToCompany() {
        return __awaiter(this, void 0, void 0, function* () {
            this.grkn.ownedCompanies[0].members = [];
            for (let i = 0; i < 6; i++) {
                let cmpM = new company_membership_entity_1.CompanyMembershipEntity();
                cmpM.companyId = this.grkn.ownedCompanies[0].id;
                cmpM.joiningDate = new Date();
                cmpM.status = 1;
                cmpM.userId = this.users[i].id;
                cmpM = yield this._companyMembershipRepository.insert(cmpM);
                this.grkn.ownedCompanies[0].members.push(cmpM);
            }
        });
    }
    addStatusTemplates() {
        return __awaiter(this, void 0, void 0, function* () {
            let modST = new status_template_entity_1.StatusTemplateEntity();
            modST.companyId = this.grkn.ownedCompanies[0].id;
            modST.createdAt = new Date();
            modST.creatorId = this.grkn.id;
            modST.lastUpdated = new Date();
            modST.name = "Character Creating";
            modST = yield this._statusTemplateRepository.insert(modST);
            modST.statuses = [];
            let todo = new abstract_status_entity_1.AbstractStatusEntity();
            todo.baseStatus = _enums_1.BaseStatus.NOT_STARTED;
            todo.title = "To Do";
            todo.description = "desc";
            todo.createdAt = new Date();
            todo.order = 0;
            todo.templateId = modST.id;
            todo = yield this._abstractStatusRepository.insert(todo);
            modST.statuses.push(todo);
            let sketching = new abstract_status_entity_1.AbstractStatusEntity();
            sketching.baseStatus = _enums_1.BaseStatus.IN_PROGRESS;
            sketching.title = "Sketching";
            sketching.description = "desc";
            sketching.createdAt = new Date();
            sketching.order = 0;
            sketching.templateId = modST.id;
            sketching = yield this._abstractStatusRepository.insert(sketching);
            modST.statuses.push(sketching);
            let modeling = new abstract_status_entity_1.AbstractStatusEntity();
            modeling.baseStatus = _enums_1.BaseStatus.IN_PROGRESS;
            modeling.title = "Modeling";
            modeling.description = "desc";
            modeling.createdAt = new Date();
            modeling.order = 1;
            modeling.templateId = modST.id;
            modeling = yield this._abstractStatusRepository.insert(modeling);
            modST.statuses.push(modeling);
            let texturing = new abstract_status_entity_1.AbstractStatusEntity();
            texturing.baseStatus = _enums_1.BaseStatus.IN_PROGRESS;
            texturing.title = "Texturing";
            texturing.description = "desc";
            texturing.createdAt = new Date();
            texturing.order = 2;
            texturing.templateId = modST.id;
            texturing = yield this._abstractStatusRepository.insert(texturing);
            modST.statuses.push(texturing);
            let rigging = new abstract_status_entity_1.AbstractStatusEntity();
            rigging.baseStatus = _enums_1.BaseStatus.IN_PROGRESS;
            rigging.title = "Rigging";
            rigging.description = "desc";
            rigging.createdAt = new Date();
            rigging.order = 3;
            rigging.templateId = modST.id;
            rigging = yield this._abstractStatusRepository.insert(rigging);
            modST.statuses.push(rigging);
            let animating = new abstract_status_entity_1.AbstractStatusEntity();
            animating.baseStatus = _enums_1.BaseStatus.IN_PROGRESS;
            animating.title = "Animating";
            animating.description = "desc";
            animating.createdAt = new Date();
            animating.order = 4;
            animating.templateId = modST.id;
            animating = yield this._abstractStatusRepository.insert(animating);
            modST.statuses.push(animating);
            let done = new abstract_status_entity_1.AbstractStatusEntity();
            done.baseStatus = _enums_1.BaseStatus.FINISHED;
            done.title = "Done";
            done.description = "desc";
            done.createdAt = new Date();
            done.order = 0;
            done.templateId = modST.id;
            done = yield this._abstractStatusRepository.insert(done);
            modST.statuses.push(done);
            this.grkn.ownedCompanies[0].statusTemplates = [];
            this.grkn.ownedCompanies[0].statusTemplates.push(modST);
            let bscST = new status_template_entity_1.StatusTemplateEntity();
            bscST.companyId = this.grkn.ownedCompanies[0].id;
            bscST.createdAt = new Date();
            bscST.creatorId = this.grkn.id;
            bscST.lastUpdated = new Date();
            bscST.name = "Basic";
            bscST = yield this._statusTemplateRepository.insert(bscST);
            bscST.statuses = [];
            let td = new abstract_status_entity_1.AbstractStatusEntity();
            td.baseStatus = _enums_1.BaseStatus.NOT_STARTED;
            td.title = "To Do";
            td.description = "desc";
            td.createdAt = new Date();
            td.order = 0;
            td.templateId = bscST.id;
            td = yield this._abstractStatusRepository.insert(td);
            bscST.statuses.push(td);
            let dn = new abstract_status_entity_1.AbstractStatusEntity();
            dn.baseStatus = _enums_1.BaseStatus.FINISHED;
            dn.title = "Done";
            dn.description = "desc";
            dn.createdAt = new Date();
            dn.order = 0;
            dn.templateId = bscST.id;
            dn = yield this._abstractStatusRepository.insert(dn);
            bscST.statuses.push(dn);
            this.grkn.ownedCompanies[0].statusTemplates.push(bscST);
        });
    }
    addRootProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            this.grkn.ownedCompanies[0].rootProjects = [];
            let krP = new project_entity_1.ProjectEntity();
            krP.projectType = _enums_1.ProjectTypes.ROOT;
            krP = yield this._projectRepository.insert(krP);
            krP.statuses = [];
            krP.tasks = [];
            let krCP = new root_project_entity_1.RootProjectEntity();
            krCP.companyId = this.grkn.ownedCompanies[0].id;
            krCP.createdAt = new Date();
            krCP.description = "desc";
            krCP.lastUpdated = new Date();
            krCP.title = "Character Crating";
            krCP.userId = this.grkn.id;
            krCP.baseProjectId = krP.id;
            krCP = yield this._rootProjectRepository.insert(krCP);
            krCP.baseProject = krP;
            for (let i = 0; i < this.grkn.ownedCompanies[0].statusTemplates[0].statuses.length; i++) {
                const abs = this.grkn.ownedCompanies[0].statusTemplates[0].statuses[i];
                let st = new status_entity_1.StatusEntity();
                st.baseStatus = abs.baseStatus;
                st.createdAt = new Date();
                st.creatorId = this.grkn.id;
                st.description = "desc";
                st.lastUpdated = new Date();
                st.order = abs.order;
                st.projectId = krCP.baseProject.id;
                st.title = abs.title;
                st = yield this._statusRepository.insert(st);
                krCP.baseProject.statuses.push(st);
            }
            this.grkn.ownedCompanies[0].rootProjects.push(krCP);
        });
    }
    assignUsersToProject() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.grkn.ownedCompanies[0].members.length; i++) {
                let prM = new project_membership_entity_1.ProjectMembershipEntity();
                prM.createdAt = new Date();
                prM.rootProjectId = this.grkn.ownedCompanies[0].rootProjects[0].id;
                prM.userId = this.grkn.ownedCompanies[0].members[i].id;
                prM = yield this._projectMembershipRepository.insert(prM);
                this.grkn.ownedCompanies[0].rootProjects[0].members = [];
                this.grkn.ownedCompanies[0].rootProjects[0].members.push(prM);
            }
            this.grkn.ownedCompanies[0].rootProjects[0].managers = [];
            let prMn = new project_manager_entity_1.ProjectManagerEntity();
            prMn.createdAt = new Date();
            prMn.rootProjectId = this.grkn.ownedCompanies[0].rootProjects[0].id;
            prMn.userId = this.grkn.ownedCompanies[0].rootProjects[0].members[0].id;
            prMn = yield this._projectManagerRepository.insert(prMn);
            this.grkn.ownedCompanies[0].rootProjects[0].managers.push(prMn);
        });
    }
    addTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            this.grkn.ownedCompanies[0].rootProjects[0].baseProject.tasks = [];
            for (let i = 0; i < this.TASKCOUNT; i++) {
                let stind = Math.floor(Math.random() * (this.grkn.ownedCompanies[0].rootProjects[0].baseProject.statuses.length));
                let prio = Math.floor(Math.random() * 9);
                let tsk = new task_entity_1.TaskEntity();
                tsk.creatorId = this.grkn.id;
                tsk.title = faker.name.jobTitle();
                tsk.description = faker.lorem.words(4);
                tsk.projectId = this.grkn.ownedCompanies[0].rootProjects[0].baseProject.id;
                tsk.statusId = this.grkn.ownedCompanies[0].rootProjects[0].baseProject.statuses[stind].id;
                tsk.createdAt = new Date();
                tsk.lastUpdated = new Date();
                tsk.code = this.codeSequence;
                tsk.type = _enums_1.TaskTypes.BASIC;
                tsk.priority = prio;
                tsk = yield this._taskRepository.insert(tsk);
                this.grkn.ownedCompanies[0].rootProjects[0].baseProject.tasks.push(tsk);
                this.codeSequence++;
            }
        });
    }
    addSubProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            let stind = Math.floor(Math.random() * (this.grkn.ownedCompanies[0].rootProjects[0].baseProject.statuses.length));
            let prio = Math.floor(Math.random() * 9);
            let tsk = new task_entity_1.TaskEntity();
            tsk.creatorId = this.grkn.id;
            tsk.title = faker.name.jobTitle();
            tsk.description = faker.lorem.words(4);
            tsk.projectId = this.grkn.ownedCompanies[0].rootProjects[0].id;
            tsk.statusId = this.grkn.ownedCompanies[0].rootProjects[0].baseProject.statuses[stind].id;
            tsk.createdAt = new Date();
            tsk.lastUpdated = new Date();
            tsk.code = this.codeSequence;
            tsk.type = _enums_1.TaskTypes.SUBPROJECT;
            tsk.priority = prio;
            tsk = yield this._taskRepository.insert(tsk);
            let sbP = new project_entity_1.ProjectEntity();
            sbP.projectType = _enums_1.ProjectTypes.SUB;
            sbP = yield this._projectRepository.insert(sbP);
            sbP.statuses = [];
            sbP.tasks = [];
            let sbPr = new sub_project_entity_1.SubProjectEntity();
            sbPr.assignedTaskId = tsk.id;
            sbPr.baseProjectId = sbP.id;
            sbPr = yield this._subProjectRepository.insert(sbPr);
            sbPr.baseProject = sbP;
            for (let i = 0; i < this.grkn.ownedCompanies[0].statusTemplates[1].statuses.length; i++) {
                const abs = this.grkn.ownedCompanies[0].statusTemplates[1].statuses[i];
                let st = new status_entity_1.StatusEntity();
                st.baseStatus = abs.baseStatus;
                st.createdAt = new Date();
                st.creatorId = this.grkn.id;
                st.description = "desc";
                st.lastUpdated = new Date();
                st.order = abs.order;
                st.projectId = sbPr.baseProjectId;
                st.title = abs.title;
                st = yield this._statusRepository.insert(st);
                sbPr.baseProject.statuses.push(st);
            }
            tsk.subProject = sbPr;
            for (let i = 0; i < 5; i++) {
                let stind = Math.floor(Math.random() * (tsk.subProject.baseProject.statuses.length));
                let prio = Math.floor(Math.random() * 9);
                let sbTsk = new task_entity_1.TaskEntity();
                sbTsk.creatorId = this.grkn.id;
                sbTsk.title = faker.name.jobTitle();
                sbTsk.description = faker.lorem.words(4);
                sbTsk.projectId = tsk.subProject.baseProject.id;
                sbTsk.statusId = tsk.subProject.baseProject.statuses[stind].id;
                sbTsk.createdAt = new Date();
                sbTsk.lastUpdated = new Date();
                sbTsk.code = this.codeSequence;
                sbTsk.type = _enums_1.TaskTypes.BASIC;
                sbTsk.priority = prio;
                sbTsk = yield this._taskRepository.insert(sbTsk);
                tsk.subProject.baseProject.tasks.push(sbTsk);
                this.codeSequence++;
            }
            this.grkn.ownedCompanies[0].rootProjects[0].baseProject.tasks.push(tsk);
        });
    }
};
SeedDatabase = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.USER)),
    __param(1, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY)),
    __param(2, inversify_1.inject(_ioc_1.InjectTypes.Repository.STATUS)),
    __param(3, inversify_1.inject(_ioc_1.InjectTypes.Repository.PROJECT)),
    __param(4, inversify_1.inject(_ioc_1.InjectTypes.Repository.TASK)),
    __param(5, inversify_1.inject(_ioc_1.InjectTypes.Repository.TASK_LABEL)),
    __param(6, inversify_1.inject(_ioc_1.InjectTypes.Repository.LABEL)),
    __param(7, inversify_1.inject(_ioc_1.InjectTypes.Repository.PROJECT_MEMBERSHIP)),
    __param(8, inversify_1.inject(_ioc_1.InjectTypes.Repository.PROJECT_MANAGER)),
    __param(9, inversify_1.inject(_ioc_1.InjectTypes.Repository.STATUS_TEMPLATE)),
    __param(10, inversify_1.inject(_ioc_1.InjectTypes.Repository.ABSTRACT_STATUS)),
    __param(11, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY_MEMBERSHIP)),
    __param(12, inversify_1.inject(_ioc_1.InjectTypes.Repository.SUB_PROJECT)),
    __param(13, inversify_1.inject(_ioc_1.InjectTypes.Repository.ROOT_PROJECT)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object])
], SeedDatabase);
exports.SeedDatabase = SeedDatabase;


/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "module-alias/register":
/*!****************************************!*\
  !*** external "module-alias/register" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("module-alias/register");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ });
//# sourceMappingURL=seed.js.map