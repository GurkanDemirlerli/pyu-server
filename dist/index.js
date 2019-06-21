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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
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

/***/ "./src/@controllers/project.controller.ts":
/*!************************************************!*\
  !*** ./src/@controllers/project.controller.ts ***!
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
const app_error_1 = __webpack_require__(/*! @errors/app-error */ "./src/errors/app-error.ts");
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
            return this._projectService.find(createdId, req.decoded.id);
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
    getMembers(req, res, next) {
        const id = +req.params.id;
        this._projectService.getMembers(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'getMembers', 'ProjectController');
        });
    }
    addMember(req, res, next) {
        const id = +req.params.id;
        let prjRgDto = Object.assign(new dtos_1.ProjectUserRegisterDto(), req.body);
        this._projectService.addMember(id, prjRgDto).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error) => {
            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'addMember', 'ProjectController');
        });
    }
};
ProjectController = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.PROJECT)),
    __metadata("design:paramtypes", [Object])
], ProjectController);
exports.ProjectController = ProjectController;


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
            query = query.andWhere("assignee.id =:id", { id: filters.assignedTo });
        if (filters.projectId !== undefined)
            query = query.andWhere("projectId =:projectId", { projectId: filters.projectId });
        if (filters.createdBy !== undefined)
            query = query.andWhere("creatorId =:creatorId", { creatorId: filters.createdBy });
        if (filters.status !== undefined)
            query = query.andWhere("statusId =:statusId", { statusId: filters.status });
        query = query.orderBy("task.id", "DESC");
        if (filters.take !== undefined) {
            query = query.take(filters.take);
            if (filters.skip !== undefined)
                query = query.skip(filters.skip);
        }
        query = query.leftJoin("task.comments", "comment").addSelect(["comment.id"]);
        return query.orderBy("task.id", "DESC").getMany();
    }
    findForDetails(id) {
        let query = typeorm_1.getManager().createQueryBuilder(task_entity_1.TaskEntity, "task").select(["task.id", "task.title", "task.description"])
            .where("task.id =:id", { id: id })
            .innerJoin("task.creator", "creator").addSelect(["creator.id", "creator.name", "creator.surname", "creator.username"])
            .leftJoinAndSelect("task.assignees", "assignment")
            .leftJoin("assignment.user", "assignee").addSelect(["assignee.id", "assignee.name", "assignee.surname", "assignee.username"])
            .leftJoin("task.comments", "comment").addSelect(["comment.id", "comment.content", "comment.taskId"])
            .leftJoin("comment.creator", "commentCreator").addSelect(["commentCreator.id", "commentCreator.name", "commentCreator.surname", "commentCreator.username"])
            .leftJoin("task.fromIssue", "fromIssue").addSelect(["fromIssue.id", "fromIssue.title", "fromIssue.description"])
            .leftJoin("task.project", "project").addSelect(["project.id", "project.title", "project.description"])
            .leftJoin("project.creator", "projectCreator").addSelect(["projectCreator.id", "projectCreator.name", "projectCreator.surname", "projectCreator.username"])
            .leftJoin("task.status", "status").addSelect(["status.id", "status.title", "status.description"]);
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

/***/ "./src/@routes/answer.routes.ts":
/*!**************************************!*\
  !*** ./src/@routes/answer.routes.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const _middlewares_1 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _middlewares_2 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const answer_controller_1 = __webpack_require__(/*! @controllers/answer.controller */ "./src/@controllers/answer.controller.ts");
class AnswerRoutes {
    static configureRoutes(app) {
        const root = "/api/answers";
        const ctrl = _ioc_1.IOC.container.get(answer_controller_1.AnswerController);
        app.route(root + '/')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));
        app.route(root + '/:id')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post(_middlewares_1.validationMiddleware(dtos_1.AnswerCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put(_middlewares_1.validationMiddleware(dtos_1.AnswerUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));
    }
}
exports.AnswerRoutes = AnswerRoutes;


/***/ }),

/***/ "./src/@routes/comment.routes.ts":
/*!***************************************!*\
  !*** ./src/@routes/comment.routes.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const _middlewares_1 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _middlewares_2 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const comment_controller_1 = __webpack_require__(/*! @controllers/comment.controller */ "./src/@controllers/comment.controller.ts");
class CommentRoutes {
    static configureRoutes(app) {
        const root = "/api/comments";
        const ctrl = _ioc_1.IOC.container.get(comment_controller_1.CommentController);
        app.route(root + '/')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));
        app.route(root + '/:id')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post(_middlewares_1.validationMiddleware(dtos_1.CommentCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put(_middlewares_1.validationMiddleware(dtos_1.CommentUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));
    }
}
exports.CommentRoutes = CommentRoutes;


/***/ }),

/***/ "./src/@routes/company.routes.ts":
/*!***************************************!*\
  !*** ./src/@routes/company.routes.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const _middlewares_1 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _middlewares_2 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const company_controller_1 = __webpack_require__(/*! @controllers/company.controller */ "./src/@controllers/company.controller.ts");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
class CompanyRoutes {
    static configureRoutes(app) {
        const root = "/api/companies";
        const ctrl = _ioc_1.IOC.container.get(company_controller_1.CompanyController);
        app.route(root + '/')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));
        app.route(root + '/:id')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post(_middlewares_1.validationMiddleware(dtos_1.CompanyCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put(_middlewares_1.validationMiddleware(dtos_1.CompanyUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));
        //TODO asagidaki 2 fonksiyon duzenlenecek baska controllere eklenecek
        app.route(root + '/:id/requestMembership')
            .post(_middlewares_1.validationMiddleware(dtos_1.CompanyUserRegisterDto), _middlewares_2.authorize, (req, res, next) => ctrl.requestMembership(req, res, next));
        app.route(root + '/:id/acceptMembership')
            .put(_middlewares_2.authorize, (req, res, next) => ctrl.acceptMembership(req, res, next));
        //TODO declineMembership metodu ekle
    }
}
exports.CompanyRoutes = CompanyRoutes;


/***/ }),

/***/ "./src/@routes/index.ts":
/*!******************************!*\
  !*** ./src/@routes/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = __webpack_require__(/*! ./user.routes */ "./src/@routes/user.routes.ts");
const project_routes_1 = __webpack_require__(/*! ./project.routes */ "./src/@routes/project.routes.ts");
const company_routes_1 = __webpack_require__(/*! ./company.routes */ "./src/@routes/company.routes.ts");
const task_routes_1 = __webpack_require__(/*! ./task.routes */ "./src/@routes/task.routes.ts");
const comment_routes_1 = __webpack_require__(/*! ./comment.routes */ "./src/@routes/comment.routes.ts");
const question_route_1 = __webpack_require__(/*! ./question.route */ "./src/@routes/question.route.ts");
const answer_routes_1 = __webpack_require__(/*! ./answer.routes */ "./src/@routes/answer.routes.ts");
const issue_route_1 = __webpack_require__(/*! ./issue.route */ "./src/@routes/issue.route.ts");
class RouteBinder {
    static configureRoutes(app) {
        task_routes_1.TaskRoutes.configureRoutes(app);
        comment_routes_1.CommentRoutes.configureRoutes(app);
        user_routes_1.UserRoutes.configureRoutes(app);
        company_routes_1.CompanyRoutes.configureRoutes(app);
        project_routes_1.ProjectRoutes.configureRoutes(app);
        question_route_1.QuestionRoutes.configureRoutes(app);
        answer_routes_1.AnswerRoutes.configureRoutes(app);
        issue_route_1.IssueRoutes.configureRoutes(app);
    }
}
exports.RouteBinder = RouteBinder;


/***/ }),

/***/ "./src/@routes/issue.route.ts":
/*!************************************!*\
  !*** ./src/@routes/issue.route.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const _middlewares_1 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _middlewares_2 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const issue_controller_1 = __webpack_require__(/*! @controllers/issue.controller */ "./src/@controllers/issue.controller.ts");
class IssueRoutes {
    static configureRoutes(app) {
        const root = "/api/issues";
        const ctrl = _ioc_1.IOC.container.get(issue_controller_1.IssueController);
        app.route(root + '/')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));
        app.route(root + '/:id')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post(_middlewares_1.validationMiddleware(dtos_1.IssueCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put(_middlewares_1.validationMiddleware(dtos_1.IssueUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));
    }
}
exports.IssueRoutes = IssueRoutes;


/***/ }),

/***/ "./src/@routes/project.routes.ts":
/*!***************************************!*\
  !*** ./src/@routes/project.routes.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const _middlewares_1 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _middlewares_2 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const project_controller_1 = __webpack_require__(/*! @controllers/project.controller */ "./src/@controllers/project.controller.ts");
class ProjectRoutes {
    static configureRoutes(app) {
        const root = "/api/projects";
        const ctrl = _ioc_1.IOC.container.get(project_controller_1.ProjectController);
        //verilen companyId'ye gore projeleri getirir
        app.route(root + '/company/:companyId')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.listByCompany(req, res, next));
        app.route(root + '/:id')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post(_middlewares_1.validationMiddleware(dtos_1.ProjectCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put(_middlewares_1.validationMiddleware(dtos_1.ProjectUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));
        app.route(root + '/:id/assignProjectManager')
            .put(_middlewares_1.validationMiddleware(dtos_1.ProjectAssignManagerDto), _middlewares_2.authorize, (req, res, next) => ctrl.assignProjectManager(req, res, next));
        app.route(root + '/:id/addMember')
            .post(_middlewares_1.validationMiddleware(dtos_1.ProjectAssignManagerDto), _middlewares_2.authorize, (req, res, next) => ctrl.addMember(req, res, next));
        app.route(root + '/:id/members')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.getMembers(req, res, next));
        app.route(root + '/:id/start')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.start(req, res, next));
        app.route(root + '/:id/pause')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.pause(req, res, next));
    }
}
exports.ProjectRoutes = ProjectRoutes;


/***/ }),

/***/ "./src/@routes/question.route.ts":
/*!***************************************!*\
  !*** ./src/@routes/question.route.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const _middlewares_1 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _middlewares_2 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const question_controller_1 = __webpack_require__(/*! @controllers/question.controller */ "./src/@controllers/question.controller.ts");
class QuestionRoutes {
    static configureRoutes(app) {
        const root = "/api/questions";
        const ctrl = _ioc_1.IOC.container.get(question_controller_1.QuestionController);
        app.route(root + '/')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));
        app.route(root + '/:id')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post(_middlewares_1.validationMiddleware(dtos_1.QuestionCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put(_middlewares_1.validationMiddleware(dtos_1.QuestionUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));
    }
}
exports.QuestionRoutes = QuestionRoutes;


/***/ }),

/***/ "./src/@routes/task.routes.ts":
/*!************************************!*\
  !*** ./src/@routes/task.routes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const _middlewares_1 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _middlewares_2 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const task_controller_1 = __webpack_require__(/*! @controllers/task.controller */ "./src/@controllers/task.controller.ts");
class TaskRoutes {
    static configureRoutes(app) {
        const root = "/api/tasks";
        const ctrl = _ioc_1.IOC.container.get(task_controller_1.TaskController);
        app.route(root + '/')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));
        app.route(root + '/:id')
            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post(_middlewares_1.validationMiddleware(dtos_1.TaskCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put(_middlewares_1.validationMiddleware(dtos_1.TaskUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));
        app.route(root + '/:id/updateStatus')
            .put(_middlewares_1.validationMiddleware(dtos_1.TaskStatusUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.updateStatus(req, res, next));
    }
}
exports.TaskRoutes = TaskRoutes;


/***/ }),

/***/ "./src/@routes/user.routes.ts":
/*!************************************!*\
  !*** ./src/@routes/user.routes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ioc_1 = __webpack_require__(/*! ../ioc */ "./src/ioc/index.ts");
const _middlewares_1 = __webpack_require__(/*! @middlewares */ "./src/middlewares/index.ts");
const dtos_1 = __webpack_require__(/*! @models/dtos */ "./src/_models/dtos/index.ts");
const user_controller_1 = __webpack_require__(/*! @controllers/user.controller */ "./src/@controllers/user.controller.ts");
class UserRoutes {
    static configureRoutes(app) {
        const root = "/api/users";
        const ctrl = ioc_1.IOC.container.get(user_controller_1.UserController);
        app.route(root + '/register')
            .post((req, res, next) => ctrl.register(req, res, next));
        app.route(root + '/login')
            .post(_middlewares_1.validationMiddleware(dtos_1.LoginDto), (req, res, next) => ctrl.login(req, res, next));
    }
}
exports.UserRoutes = UserRoutes;


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
let CompanyService = class CompanyService {
    constructor(_companyRepository, _companyMembershipRepository, _membershipRequestRepository) {
        this._companyRepository = _companyRepository;
        this._companyMembershipRepository = _companyMembershipRepository;
        this._membershipRequestRepository = _membershipRequestRepository;
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
                let companyDto = Object.assign(new dtos_1.CompanyListDto(), cmp, { projects: undefined, users: undefined });
                companyDto.projectCount = cmp.projects.length;
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
            companyDto.projectCount = companyEn.projects.length;
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
            cMemEn.status = 1; // enum yapılacak kullanıcı topluluğun aktif üyesiyse 1 topluluktan atılırsa başka değer
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
};
CompanyService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY)),
    __param(1, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY_MEMBERSHIP)),
    __param(2, inversify_1.inject(_ioc_1.InjectTypes.Repository.MEMBERSHIP_REQUEST)),
    __metadata("design:paramtypes", [Object, Object, Object])
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
var project_service_1 = __webpack_require__(/*! ./project.service */ "./src/@services/concrete/project.service.ts");
exports.ProjectService = project_service_1.ProjectService;
var task_service_1 = __webpack_require__(/*! ./task.service */ "./src/@services/concrete/task.service.ts");
exports.TaskService = task_service_1.TaskService;
var company_service_1 = __webpack_require__(/*! ./company.service */ "./src/@services/concrete/company.service.ts");
exports.CompanyService = company_service_1.CompanyService;


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

/***/ "./src/@services/concrete/project.service.ts":
/*!***************************************************!*\
  !*** ./src/@services/concrete/project.service.ts ***!
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
const project_entity_1 = __webpack_require__(/*! @entities/project.entity */ "./src/entities/project.entity.ts");
const app_error_1 = __webpack_require__(/*! @errors/app-error */ "./src/errors/app-error.ts");
const status_entity_1 = __webpack_require__(/*! @entities/status.entity */ "./src/entities/status.entity.ts");
const _enums_1 = __webpack_require__(/*! @enums */ "./src/enums/index.ts");
const uow_1 = __webpack_require__(/*! @repositories/uow */ "./src/@repository/uow.ts");
const project_membership_entity_1 = __webpack_require__(/*! @entities/project-membership.entity */ "./src/entities/project-membership.entity.ts");
let ProjectService = class ProjectService {
    constructor(_projectRepository, _statusRepository, _companyRepository, _companyMembershipRepository, _projectMembershipRepository) {
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
            if (companyEn.ownerId !== model.userId)
                throw new app_error_1.AppError('AppError', 'You can not add a new project to company which is not yours', 403);
            let projectEn = Object.assign(new project_entity_1.ProjectEntity(), model);
            projectEn.createdAt = new Date();
            projectEn.lastUpdated = new Date();
            let uow = new uow_1.Uow();
            yield uow.start();
            try {
                projectEn = yield this._projectRepository.insert(projectEn, uow.getManager());
                let status0 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'Planning',
                    description: 'Proje sürecine dahil olabilecek görevler',
                    baseStatus: _enums_1.BaseStatus.PLANNINING,
                    order: 0,
                    creatorId: model.userId,
                    projectId: projectEn.id,
                    createdAt: new Date(),
                    lastUpdated: new Date()
                });
                let status1 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'To do',
                    description: 'Proje sürecinde olan ama henüz baslanmamis görevler',
                    baseStatus: _enums_1.BaseStatus.NOT_STARTED,
                    order: 0,
                    creatorId: model.userId,
                    projectId: projectEn.id,
                    createdAt: new Date(),
                    lastUpdated: new Date()
                });
                let status2 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'In Progress',
                    description: 'Yapılmakta olan görevler',
                    baseStatus: _enums_1.BaseStatus.IN_PROGRESS,
                    order: 0,
                    creatorId: model.userId,
                    projectId: projectEn.id,
                    createdAt: new Date(),
                    lastUpdated: new Date()
                });
                let status3 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'Done',
                    description: 'Bitmiş görevler',
                    baseStatus: _enums_1.BaseStatus.FINISHED,
                    order: 0,
                    creatorId: model.userId,
                    projectId: projectEn.id,
                    createdAt: new Date(),
                    lastUpdated: new Date()
                });
                yield this._statusRepository.insert(status0, uow.getManager());
                yield this._statusRepository.insert(status1, uow.getManager());
                yield this._statusRepository.insert(status2, uow.getManager());
                yield this._statusRepository.insert(status3, uow.getManager());
                yield uow.commit();
            }
            catch (err) {
                yield uow.rollback();
                throw err;
            }
            finally {
                yield uow.release();
            }
            return Promise.resolve(projectEn.id);
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
            let projectEntity = yield this._projectRepository.findForDetails(id);
            if (!projectEntity)
                throw new app_error_1.AppError('AppError', 'Project not found.', 404);
            const memberEn = yield this._companyMembershipRepository.findOne(null, { where: { userId: requestorId, companyId: projectEntity.company.id } });
            if (!memberEn && projectEntity.company.owner.id !== requestorId)
                throw new app_error_1.AppError('AppError', 'You are not part of this company', 403);
            let prjDto = Object.assign(new dtos_1.ProjectDetailDto(), projectEntity);
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
            prjMbshipEn.projectId = id;
            prjMbshipEn.createdAt = new Date();
            yield this._projectMembershipRepository.insert(prjMbshipEn);
            return Promise.resolve();
        });
    }
};
ProjectService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.PROJECT)),
    __param(1, inversify_1.inject(_ioc_1.InjectTypes.Repository.STATUS)),
    __param(2, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY)),
    __param(3, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY_MEMBERSHIP)),
    __param(4, inversify_1.inject(_ioc_1.InjectTypes.Repository.PROJECT_MEMBERSHIP)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], ProjectService);
exports.ProjectService = ProjectService;


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
            let inserted = yield this._taskRepository.insert(taskEn);
            console.log(inserted);
            yield this.assignMembers(inserted.id, model.assignees);
            return Promise.resolve(inserted.id);
        });
    }
    //TODO bu idye sahip kişiler gerçenten taskın ait olduğu projenin üyesi mi kontrol et
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
    list(filters, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let taskDtos = [];
            // await this.validateAuthority(filters.projectId, requestorId);
            let tasks = yield this._taskRepository.listByFilters(filters);
            tasks.map((tsk) => {
                let taskDto = Object.assign(new dtos_1.TaskListDto(), tsk, { comments: undefined });
                taskDto.commentCount = tsk.comments.length;
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
                return this.validateAuthority(foundTask.projectId, requestorId);
            }).then(() => {
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
                return this.validateAuthority(foundTask.projectId, requestorId);
            }).then(() => {
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
    validateAuthority(projectId, userId) {
        return new Promise((resolve, reject) => {
            this._projectRepository.findOne(projectId, { relations: ["users", "creator"] }).then((res) => {
                let prjct = res;
                if (prjct.members.filter(x => x.userId === userId).length < 1 && prjct.creator.id !== userId)
                    throw new app_error_1.AppError('AppError', 'Bu projede yetkiniz yoktur.', 403);
                resolve();
            }).catch((err) => {
                reject(err);
            });
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
var project_create_dto_1 = __webpack_require__(/*! ./project/project-create.dto */ "./src/_models/dtos/project/project-create.dto.ts");
exports.ProjectCreateDto = project_create_dto_1.ProjectCreateDto;
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

/***/ "./src/_models/dtos/project/project-create.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/project/project-create.dto.ts ***!
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
class ProjectCreateDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], ProjectCreateDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], ProjectCreateDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], ProjectCreateDto.prototype, "companyId", void 0);
exports.ProjectCreateDto = ProjectCreateDto;


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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
const compression = __webpack_require__(/*! compression */ "compression");
const cors = __webpack_require__(/*! cors */ "cors");
const errorHandler = __webpack_require__(/*! errorhandler */ "errorhandler");
const express = __webpack_require__(/*! express */ "express");
const expressStatusMonitor = __webpack_require__(/*! express-status-monitor */ "express-status-monitor");
const helmet = __webpack_require__(/*! helmet */ "helmet");
const methodOverride = __webpack_require__(/*! method-override */ "method-override");
const morgan = __webpack_require__(/*! morgan */ "morgan");
const path = __webpack_require__(/*! path */ "path");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const _routes_1 = __webpack_require__(/*! @routes */ "./src/@routes/index.ts");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
const appConfig = __webpack_require__(/*! @common/app-config */ "./src/common/app-config.ts");
// import { logger } from './services';
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/**
 * The server.
 *
 * @class Server
 */
class Server {
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     */
    static bootstrap() {
        return new Server();
    }
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        _ioc_1.IOC.configureContainer();
        // create expressjs application
        this.app = express();
        // configure application
        this.config();
        // add routes
        _routes_1.RouteBinder.configureRoutes(this.app);
    }
    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    config() {
        // add static paths
        this.app.use(express.static(path.join(__dirname, 'public')));
        // mount logger
        // this.app.use(morgan('tiny', {
        //   stream: {
        //     write: (message: string) => logger.info(message.trim()),
        //   },
        // } as morgan.Options));
        this.app.use(morgan('dev'));
        // mount json form parser
        this.app.use(bodyParser.json({ limit: '50mb' }));
        // mount query string parser
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
        // mount override?
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(methodOverride());
        this.app.use(expressStatusMonitor());
        // catch 404 and forward to error handler
        this.app.use((err, req, res, next) => {
            err.status = 404;
            next(err);
        });
        // error handling
        this.app.use(errorHandler());
        typeorm_1.createConnection(appConfig.dbOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {
            console.log("SERVER STARTED");
        })).catch(error => console.log("TypeORM connection error: ", error));
    }
}
exports.Server = Server;

/* WEBPACK VAR INJECTION */}.call(this, "/"))

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
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
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
        task_label_entity_1.TaskLabelEntity
    ],
    synchronize: true,
};


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
const project_entity_1 = __webpack_require__(/*! @entities/project.entity */ "./src/entities/project.entity.ts");
const company_membership_entity_1 = __webpack_require__(/*! @entities/company-membership.entity */ "./src/entities/company-membership.entity.ts");
const membership_request_entity_1 = __webpack_require__(/*! @entities/membership-request.entity */ "./src/entities/membership-request.entity.ts");
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
    typeorm_1.OneToMany(type => project_entity_1.ProjectEntity, project => project.company),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "projects", void 0);
__decorate([
    typeorm_1.OneToMany(type => company_membership_entity_1.CompanyMembershipEntity, cmem => cmem.company),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "members", void 0);
__decorate([
    typeorm_1.OneToMany(type => membership_request_entity_1.MembershipRequestEntity, msr => msr.company),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "requestsSent", void 0);
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
const project_entity_1 = __webpack_require__(/*! @entities/project.entity */ "./src/entities/project.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
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
], IssueEntity.prototype, "projectId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => project_entity_1.ProjectEntity, project => project.issues),
    typeorm_1.JoinColumn({ name: "projectId" }),
    __metadata("design:type", project_entity_1.ProjectEntity)
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
const project_entity_1 = __webpack_require__(/*! @entities/project.entity */ "./src/entities/project.entity.ts");
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
], ProjectManagerEntity.prototype, "projectId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => project_entity_1.ProjectEntity, prj => prj.managers),
    typeorm_1.JoinColumn({ name: "projectId" }),
    __metadata("design:type", project_entity_1.ProjectEntity)
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
const project_entity_1 = __webpack_require__(/*! @entities/project.entity */ "./src/entities/project.entity.ts");
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
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.projects),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], ProjectMembershipEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], ProjectMembershipEntity.prototype, "projectId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => project_entity_1.ProjectEntity, prj => prj.managers),
    typeorm_1.JoinColumn({ name: "projectId" }),
    __metadata("design:type", project_entity_1.ProjectEntity)
], ProjectMembershipEntity.prototype, "project", void 0);
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
const issue_entity_1 = __webpack_require__(/*! @entities/issue.entity */ "./src/entities/issue.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const task_entity_1 = __webpack_require__(/*! @entities/task.entity */ "./src/entities/task.entity.ts");
const company_entity_1 = __webpack_require__(/*! @entities/company.entity */ "./src/entities/company.entity.ts");
const status_entity_1 = __webpack_require__(/*! @entities/status.entity */ "./src/entities/status.entity.ts");
const project_manager_entity_1 = __webpack_require__(/*! @entities/project-manager.entity */ "./src/entities/project-manager.entity.ts");
const project_membership_entity_1 = __webpack_require__(/*! @entities/project-membership.entity */ "./src/entities/project-membership.entity.ts");
let ProjectEntity = class ProjectEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], ProjectEntity.prototype, "isSubProject", void 0);
__decorate([
    typeorm_1.OneToOne(type => task_entity_1.TaskEntity, task => task.subProject),
    __metadata("design:type", task_entity_1.TaskEntity)
], ProjectEntity.prototype, "assignedTask", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "tasks", void 0);
__decorate([
    typeorm_1.OneToMany(type => status_entity_1.StatusEntity, status => status.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "statuses", void 0);
__decorate([
    typeorm_1.OneToMany(type => issue_entity_1.IssueEntity, issue => issue.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "issues", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "companyId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => company_entity_1.CompanyEntity, company => company.projects),
    typeorm_1.JoinColumn({ name: "companyId" }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], ProjectEntity.prototype, "company", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdProjects),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], ProjectEntity.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ProjectEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ProjectEntity.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_membership_entity_1.ProjectMembershipEntity, pms => pms.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "members", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_manager_entity_1.ProjectManagerEntity, prm => prm.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "managers", void 0);
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
const project_entity_1 = __webpack_require__(/*! @entities/project.entity */ "./src/entities/project.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @entities/user.entity */ "./src/entities/user.entity.ts");
const answer_entity_1 = __webpack_require__(/*! @entities/answer.entity */ "./src/entities/answer.entity.ts");
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
    typeorm_1.ManyToOne(type => project_entity_1.ProjectEntity, project => project.tasks),
    typeorm_1.JoinColumn({ name: "projectId" }),
    __metadata("design:type", project_entity_1.ProjectEntity)
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
    typeorm_1.Column("int", { nullable: true }),
    __metadata("design:type", Number)
], TaskEntity.prototype, "subProjectId", void 0);
__decorate([
    typeorm_1.OneToOne(type => project_entity_1.ProjectEntity, project => project.assignedTask),
    typeorm_1.JoinColumn({ name: "subProjectId" }),
    __metadata("design:type", project_entity_1.ProjectEntity)
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
const project_entity_1 = __webpack_require__(/*! @entities/project.entity */ "./src/entities/project.entity.ts");
const answer_entity_1 = __webpack_require__(/*! @entities/answer.entity */ "./src/entities/answer.entity.ts");
const status_entity_1 = __webpack_require__(/*! @entities/status.entity */ "./src/entities/status.entity.ts");
const project_manager_entity_1 = __webpack_require__(/*! @entities/project-manager.entity */ "./src/entities/project-manager.entity.ts");
const membership_request_entity_1 = __webpack_require__(/*! @entities/membership-request.entity */ "./src/entities/membership-request.entity.ts");
const project_membership_entity_1 = __webpack_require__(/*! @entities/project-membership.entity */ "./src/entities/project-membership.entity.ts");
const task_assignment_entity_1 = __webpack_require__(/*! @entities/task-assignment.entity */ "./src/entities/task-assignment.entity.ts");
const company_membership_entity_1 = __webpack_require__(/*! @entities/company-membership.entity */ "./src/entities/company-membership.entity.ts");
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
    typeorm_1.OneToMany(type => project_entity_1.ProjectEntity, project => project.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "createdProjects", void 0);
__decorate([
    typeorm_1.OneToMany(type => company_entity_1.CompanyEntity, company => company.owner),
    __metadata("design:type", Array)
], UserEntity.prototype, "ownedCompanies", void 0);
__decorate([
    typeorm_1.OneToMany(type => question_entity_1.QuestionEntity, question => question.creator),
    __metadata("design:type", Array)
], UserEntity.prototype, "questions", void 0);
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
], UserEntity.prototype, "projects", void 0);
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
console.log("Starting...");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const config = __webpack_require__(/*! config */ "config");
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
// const swaggerUi = require('swagger-ui-express');
// import * as swaggerDocument from './swagger.json';
exports.app = app_1.Server.bootstrap().app;
exports.server = exports.app.listen(config.get('port'), () => {
});


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
    })(Repository = InjectTypes.Repository || (InjectTypes.Repository = {}));
    let Service;
    (function (Service) {
        Service["ANSWER"] = "AnswerService";
        Service["COMMENT"] = "CommentService";
        Service["COMPANY"] = "CompanyService";
        Service["ISSUE"] = "IssueService";
        Service["PROJECT"] = "ProjectService";
        Service["QUESTION"] = "QuestionService";
        Service["TASK"] = "TaskService";
        Service["USER"] = "UserService";
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
const project_controller_1 = __webpack_require__(/*! @controllers/project.controller */ "./src/@controllers/project.controller.ts");
const question_controller_1 = __webpack_require__(/*! @controllers/question.controller */ "./src/@controllers/question.controller.ts");
const task_controller_1 = __webpack_require__(/*! @controllers/task.controller */ "./src/@controllers/task.controller.ts");
const user_controller_1 = __webpack_require__(/*! @controllers/user.controller */ "./src/@controllers/user.controller.ts");
const concrete_1 = __webpack_require__(/*! @repositories/concrete */ "./src/@repository/concrete/index.ts");
const concrete_2 = __webpack_require__(/*! @services/concrete */ "./src/@services/concrete/index.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const _ioc_1 = __webpack_require__(/*! @ioc */ "./src/ioc/index.ts");
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
            .bind(project_controller_1.ProjectController)
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
            .bind(_ioc_1.InjectTypes.Service.PROJECT)
            .to(concrete_2.ProjectService);
        IOC.container
            .bind(_ioc_1.InjectTypes.Service.QUESTION)
            .to(concrete_2.QuestionService);
        IOC.container
            .bind(_ioc_1.InjectTypes.Service.TASK)
            .to(concrete_2.TaskService);
        IOC.container
            .bind(_ioc_1.InjectTypes.Service.USER)
            .to(concrete_2.UserService);
        return IOC.container;
    }
    IOC.configureContainer = configureContainer;
})(IOC = exports.IOC || (exports.IOC = {}));


/***/ }),

/***/ "./src/middlewares/authorize.middleware.ts":
/*!*************************************************!*\
  !*** ./src/middlewares/authorize.middleware.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
function authorize(req, res, next) {
    let token = req.get('Authorization') || undefined;
    if (token !== undefined) {
        jsonwebtoken_1.verify(token, 'MySecret', (err, decoded) => {
            if (err) {
                console.log('UnAuthorized Access');
                return res.status(403).json({
                    message: 'Error: Your token has expired',
                    success: false
                });
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        return res.status(403).json({
            message: 'Error: You need to authenticate to access this part of the API',
            success: false
        });
    }
}
exports.authorize = authorize;


/***/ }),

/***/ "./src/middlewares/index.ts":
/*!**********************************!*\
  !*** ./src/middlewares/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var authorize_middleware_1 = __webpack_require__(/*! ./authorize.middleware */ "./src/middlewares/authorize.middleware.ts");
exports.authorize = authorize_middleware_1.authorize;
var validation_middleware_1 = __webpack_require__(/*! ./validation.middleware */ "./src/middlewares/validation.middleware.ts");
exports.validationMiddleware = validation_middleware_1.validationMiddleware;


/***/ }),

/***/ "./src/middlewares/validation.middleware.ts":
/*!**************************************************!*\
  !*** ./src/middlewares/validation.middleware.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
function validationMiddleware(type, skipMissingProperties = false) {
    return (req, res, next) => {
        class_validator_1.validate(class_transformer_1.plainToClass(type, req.body), { skipMissingProperties })
            .then((errors) => {
            if (errors.length > 0) {
                const message = errors.map((error) => Object.values(error.constraints)).join(', ');
                return res.status(422).json({
                    message: message,
                    success: false
                });
            }
            else {
                next();
            }
        });
    };
}
exports.validationMiddleware = validationMiddleware;


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-status-monitor":
/*!*****************************************!*\
  !*** external "express-status-monitor" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-status-monitor");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

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

/***/ "method-override":
/*!**********************************!*\
  !*** external "method-override" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),

/***/ "module-alias/register":
/*!****************************************!*\
  !*** external "module-alias/register" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("module-alias/register");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

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
//# sourceMappingURL=index.js.map