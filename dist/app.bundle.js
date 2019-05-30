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
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst error_handler_1 = __webpack_require__(/*! @errors/error-handler */ \"./src/errors/error-handler.ts\");\r\nconst inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ \"./src/ioc/inject-types.ts\");\r\nlet AnswerController = class AnswerController {\r\n    constructor(_answerService) {\r\n        this._answerService = _answerService;\r\n    }\r\n    list(req, res, next) {\r\n        let filters = {};\r\n        this._answerService.list(filters, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'AnswerController');\r\n        });\r\n    }\r\n    insert(req, res, next) {\r\n        let ansDto = Object.assign(new dtos_1.AnswerCreateDto(), req.body);\r\n        ansDto.creatorId = req.decoded.id;\r\n        this._answerService.add(ansDto).then((createdId) => {\r\n            return this._answerService.find(createdId, req.decoded.id);\r\n        }).then((result) => {\r\n            return res.status(201).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'AnswerController');\r\n        });\r\n    }\r\n    find(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._answerService.find(id, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'AnswerController');\r\n        });\r\n    }\r\n    update(req, res, next) {\r\n        const id = req.params.id;\r\n        const ansDto = Object.assign(new dtos_1.AnswerCreateDto(), req.body);\r\n        this._answerService.update(id, ansDto, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'AnswerController');\r\n        });\r\n    }\r\n    delete(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._answerService.delete(id, req.decoded.id).then(() => {\r\n            return res.status(200).json({\r\n                success: true\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'AnswerController');\r\n        });\r\n    }\r\n};\r\nAnswerController = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.ANSWER)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], AnswerController);\r\nexports.AnswerController = AnswerController;\r\n\n\n//# sourceURL=webpack:///./src/@controllers/answer.controller.ts?");

/***/ }),

/***/ "./src/@controllers/comment.controller.ts":
/*!************************************************!*\
  !*** ./src/@controllers/comment.controller.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst error_handler_1 = __webpack_require__(/*! @errors/error-handler */ \"./src/errors/error-handler.ts\");\r\nconst inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ \"./src/ioc/inject-types.ts\");\r\nlet CommentController = class CommentController {\r\n    constructor(_commentService) {\r\n        this._commentService = _commentService;\r\n    }\r\n    list(req, res, next) {\r\n        let filters = {};\r\n        this._commentService.list(filters, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'CommentController');\r\n        });\r\n    }\r\n    insert(req, res, next) {\r\n        let cmtDto = Object.assign(new dtos_1.CommentCreateDto(), req.body);\r\n        cmtDto.userId = req.decoded.id;\r\n        this._commentService.add(cmtDto).then((createdId) => {\r\n            return this._commentService.find(createdId, req.decoded.id);\r\n        }).then((result) => {\r\n            return res.status(201).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'CommentController');\r\n        });\r\n    }\r\n    find(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._commentService.find(id, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'CommentController');\r\n        });\r\n    }\r\n    update(req, res, next) {\r\n        const id = req.params.id;\r\n        const cmtDto = Object.assign(new dtos_1.CommentCreateDto(), req.body);\r\n        this._commentService.update(id, cmtDto, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'CommentController');\r\n        });\r\n    }\r\n    delete(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._commentService.delete(id, req.decoded.id).then(() => {\r\n            return res.status(200).json({\r\n                success: true\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'CommentController');\r\n        });\r\n    }\r\n};\r\nCommentController = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.COMMENT)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], CommentController);\r\nexports.CommentController = CommentController;\r\n\n\n//# sourceURL=webpack:///./src/@controllers/comment.controller.ts?");

/***/ }),

/***/ "./src/@controllers/company.controller.ts":
/*!************************************************!*\
  !*** ./src/@controllers/company.controller.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst error_handler_1 = __webpack_require__(/*! @errors/error-handler */ \"./src/errors/error-handler.ts\");\r\nconst inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ \"./src/ioc/inject-types.ts\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nlet CompanyController = class CompanyController {\r\n    constructor(_companyService) {\r\n        this._companyService = _companyService;\r\n    }\r\n    list(req, res, next) {\r\n        let filters = {};\r\n        if (req.query.hasOwnProperty(\"owner\")) {\r\n            if (req.query.assignedTo === \"true\")\r\n                filters.owner = true;\r\n        }\r\n        this._companyService.list(filters, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'CompanyController');\r\n        });\r\n    }\r\n    insert(req, res, next) {\r\n        let cmpDto = Object.assign(new dtos_1.CompanyCreateDto(), req.body);\r\n        cmpDto.ownerId = req.decoded.id;\r\n        this._companyService.add(cmpDto).then((result) => {\r\n            return res.status(201).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'CompanyController');\r\n        });\r\n    }\r\n    find(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._companyService.find(id, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'CompanyController');\r\n        });\r\n    }\r\n    update(req, res, next) {\r\n        const id = req.params.id;\r\n        const cmpDto = Object.assign(new dtos_1.CompanyCreateDto(), req.body);\r\n        this._companyService.update(id, cmpDto, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'CompanyController');\r\n        });\r\n    }\r\n    delete(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._companyService.delete(id, req.decoded.id).then(() => {\r\n            return res.status(200).json({\r\n                success: true\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'CompanyController');\r\n        });\r\n    }\r\n    requestMembership(req, res, next) {\r\n        const id = +req.params.id;\r\n        const curDto = Object.assign(new dtos_1.CompanyUserRegisterDto(), req.body);\r\n        this._companyService.requestMembership(id, curDto, req.decoded.id).then(() => {\r\n            return res.status(200).json({\r\n                success: true\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'requestMembership', 'CompanyController');\r\n        });\r\n    }\r\n    acceptMembership(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._companyService.acceptMembership(id, req.decoded.id).then(() => {\r\n            return res.status(200).json({\r\n                success: true\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'acceptMembership', 'CompanyController');\r\n        });\r\n    }\r\n};\r\nCompanyController = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.COMPANY)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], CompanyController);\r\nexports.CompanyController = CompanyController;\r\n\n\n//# sourceURL=webpack:///./src/@controllers/company.controller.ts?");

/***/ }),

/***/ "./src/@controllers/issue.controller.ts":
/*!**********************************************!*\
  !*** ./src/@controllers/issue.controller.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst error_handler_1 = __webpack_require__(/*! @errors/error-handler */ \"./src/errors/error-handler.ts\");\r\nconst inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ \"./src/ioc/inject-types.ts\");\r\nlet IssueController = class IssueController {\r\n    constructor(_issueService) {\r\n        this._issueService = _issueService;\r\n    }\r\n    list(req, res, next) {\r\n        let filters = {};\r\n        this._issueService.list(filters, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'IssueController');\r\n        });\r\n    }\r\n    insert(req, res, next) {\r\n        let issDto = Object.assign(new dtos_1.IssueCreateDto(), req.body);\r\n        issDto.creatorId = req.decoded.id;\r\n        this._issueService.add(issDto).then((createdId) => {\r\n            return this._issueService.find(createdId, req.decoded.id);\r\n        }).then((result) => {\r\n            return res.status(201).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'IssueController');\r\n        });\r\n    }\r\n    find(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._issueService.find(id, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'IssueController');\r\n        });\r\n    }\r\n    update(req, res, next) {\r\n        const id = req.params.id;\r\n        const issDto = Object.assign(new dtos_1.IssueCreateDto(), req.body);\r\n        this._issueService.update(id, issDto, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'IssueController');\r\n        });\r\n    }\r\n    delete(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._issueService.delete(id, req.decoded.id).then(() => {\r\n            return res.status(200).json({\r\n                success: true\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'IssueController');\r\n        });\r\n    }\r\n};\r\nIssueController = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.ISSUE)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], IssueController);\r\nexports.IssueController = IssueController;\r\n\n\n//# sourceURL=webpack:///./src/@controllers/issue.controller.ts?");

/***/ }),

/***/ "./src/@controllers/project.controller.ts":
/*!************************************************!*\
  !*** ./src/@controllers/project.controller.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst error_handler_1 = __webpack_require__(/*! @errors/error-handler */ \"./src/errors/error-handler.ts\");\r\nconst inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ \"./src/ioc/inject-types.ts\");\r\nconst app_error_1 = __webpack_require__(/*! @errors/app-error */ \"./src/errors/app-error.ts\");\r\nlet ProjectController = class ProjectController {\r\n    constructor(_projectService) {\r\n        this._projectService = _projectService;\r\n    }\r\n    listByCompany(req, res, next) {\r\n        const companyId = req.params.companyId;\r\n        let filters = {};\r\n        if (req.query.hasOwnProperty(\"skip\"))\r\n            filters.skip = +req.query.skip;\r\n        if (req.query.hasOwnProperty(\"take\"))\r\n            filters.take = +req.query.take;\r\n        this._projectService.listByCompany(filters, req.decoded.id, companyId).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'ProjectController');\r\n        });\r\n    }\r\n    insert(req, res, next) {\r\n        let prjDto = Object.assign(new dtos_1.ProjectCreateDto(), req.body);\r\n        prjDto.userId = req.decoded.id;\r\n        this._projectService.add(prjDto).then((createdId) => {\r\n            // return this._projectService.find(createdId, req.decoded.id);\r\n        }).then((result) => {\r\n            return res.status(201).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'ProjectController');\r\n        });\r\n    }\r\n    find(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._projectService.find(id, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'ProjectController');\r\n        });\r\n    }\r\n    update(req, res, next) {\r\n        const id = req.params.id;\r\n        const prjDto = Object.assign(new dtos_1.ProjectCreateDto(), req.body);\r\n        this._projectService.update(id, prjDto, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'ProjectController');\r\n        });\r\n    }\r\n    delete(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._projectService.delete(id, req.decoded.id).then(() => {\r\n            return res.status(200).json({\r\n                success: true\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'ProjectController');\r\n        });\r\n    }\r\n    assignProjectManager(req, res, next) {\r\n        return error_handler_1.ErrorHandler.handleErrorResponses(new app_error_1.AppError('AppError', 'Method Not Implemented', 501), res, 'assignProjectManager', 'ProjectController');\r\n    }\r\n    start(req, res, next) {\r\n        return error_handler_1.ErrorHandler.handleErrorResponses(new app_error_1.AppError('AppError', 'Method Not Implemented', 501), res, 'start', 'ProjectController');\r\n    }\r\n    pause(req, res, next) {\r\n        return error_handler_1.ErrorHandler.handleErrorResponses(new app_error_1.AppError('AppError', 'Method Not Implemented', 501), res, 'stop', 'ProjectController');\r\n    }\r\n};\r\nProjectController = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.PROJECT)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], ProjectController);\r\nexports.ProjectController = ProjectController;\r\n\n\n//# sourceURL=webpack:///./src/@controllers/project.controller.ts?");

/***/ }),

/***/ "./src/@controllers/question.controller.ts":
/*!*************************************************!*\
  !*** ./src/@controllers/question.controller.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst error_handler_1 = __webpack_require__(/*! @errors/error-handler */ \"./src/errors/error-handler.ts\");\r\nconst inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ \"./src/ioc/inject-types.ts\");\r\nlet QuestionController = class QuestionController {\r\n    constructor(_questionService) {\r\n        this._questionService = _questionService;\r\n    }\r\n    list(req, res, next) {\r\n        let filters = {};\r\n        this._questionService.list(filters, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'QuestionController');\r\n        });\r\n    }\r\n    insert(req, res, next) {\r\n        let qstDto = Object.assign(new dtos_1.QuestionCreateDto(), req.body);\r\n        qstDto.creatorId = req.decoded.id;\r\n        this._questionService.add(qstDto).then((createdId) => {\r\n            return this._questionService.find(createdId, req.decoded.id);\r\n        }).then((result) => {\r\n            return res.status(201).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'QuestionController');\r\n        });\r\n    }\r\n    find(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._questionService.find(id, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'QuestionController');\r\n        });\r\n    }\r\n    update(req, res, next) {\r\n        const id = req.params.id;\r\n        const qstDto = Object.assign(new dtos_1.QuestionCreateDto(), req.body);\r\n        this._questionService.update(id, qstDto, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'QuestionController');\r\n        });\r\n    }\r\n    delete(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._questionService.delete(id, req.decoded.id).then(() => {\r\n            return res.status(200).json({\r\n                success: true\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'QuestionController');\r\n        });\r\n    }\r\n};\r\nQuestionController = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.TASK)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], QuestionController);\r\nexports.QuestionController = QuestionController;\r\n\n\n//# sourceURL=webpack:///./src/@controllers/question.controller.ts?");

/***/ }),

/***/ "./src/@controllers/task.controller.ts":
/*!*********************************************!*\
  !*** ./src/@controllers/task.controller.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst error_handler_1 = __webpack_require__(/*! @errors/error-handler */ \"./src/errors/error-handler.ts\");\r\nconst inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ \"./src/ioc/inject-types.ts\");\r\nconst app_error_1 = __webpack_require__(/*! @errors/app-error */ \"./src/errors/app-error.ts\");\r\nlet TaskController = class TaskController {\r\n    constructor(_taskService) {\r\n        this._taskService = _taskService;\r\n    }\r\n    list(req, res, next) {\r\n        let filters = {};\r\n        if (req.query.hasOwnProperty(\"assignedTo\"))\r\n            filters.assignedTo = +req.query.assignedTo;\r\n        if (req.query.hasOwnProperty(\"createdBy\"))\r\n            filters.createdBy = +req.query.createdBy;\r\n        if (req.query.hasOwnProperty(\"projectId\"))\r\n            filters.projectId = +req.query.projectId;\r\n        if (req.query.hasOwnProperty(\"status\"))\r\n            filters.status = +req.query.status;\r\n        if (req.query.hasOwnProperty(\"skip\"))\r\n            filters.skip = +req.query.skip;\r\n        if (req.query.hasOwnProperty(\"take\"))\r\n            filters.take = +req.query.take;\r\n        this._taskService.list(filters, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'list', 'TaskController');\r\n        });\r\n    }\r\n    insert(req, res, next) {\r\n        let tskDto = Object.assign(new dtos_1.TaskCreateDto(), req.body);\r\n        tskDto.creatorId = req.decoded.id;\r\n        this._taskService.add(tskDto).then((createdId) => {\r\n            return this._taskService.find(createdId, req.decoded.id);\r\n        }).then((result) => {\r\n            return res.status(201).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'insert', 'TaskController');\r\n        });\r\n    }\r\n    find(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._taskService.find(id, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'find', 'TaskController');\r\n        });\r\n    }\r\n    update(req, res, next) {\r\n        const id = req.params.id;\r\n        const tskDto = Object.assign(new dtos_1.TaskCreateDto(), req.body);\r\n        this._taskService.update(id, tskDto, req.decoded.id).then((result) => {\r\n            return res.status(200).json({\r\n                success: true,\r\n                data: result\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'update', 'TaskController');\r\n        });\r\n    }\r\n    delete(req, res, next) {\r\n        const id = +req.params.id;\r\n        this._taskService.delete(id, req.decoded.id).then(() => {\r\n            return res.status(200).json({\r\n                success: true\r\n            });\r\n        }).catch((error) => {\r\n            return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'delete', 'TaskController');\r\n        });\r\n    }\r\n    updateStatus(req, res, next) {\r\n        return error_handler_1.ErrorHandler.handleErrorResponses(new app_error_1.AppError('AppError', 'Method Not Implemented', 501), res, 'stop', 'ProjectController');\r\n    }\r\n};\r\nTaskController = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.TASK)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], TaskController);\r\nexports.TaskController = TaskController;\r\n\n\n//# sourceURL=webpack:///./src/@controllers/task.controller.ts?");

/***/ }),

/***/ "./src/@controllers/user.controller.ts":
/*!*********************************************!*\
  !*** ./src/@controllers/user.controller.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst error_handler_1 = __webpack_require__(/*! @errors/error-handler */ \"./src/errors/error-handler.ts\");\r\nconst inject_types_1 = __webpack_require__(/*! @ioc/inject-types */ \"./src/ioc/inject-types.ts\");\r\nlet UserController = class UserController {\r\n    constructor(_userService) {\r\n        this._userService = _userService;\r\n    }\r\n    register(req, res, next) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let registerDto = Object.assign(new dtos_1.RegisterDto(), req.body);\r\n            this._userService.register(registerDto).then((user) => {\r\n                return res.status(200).json({\r\n                    success: true,\r\n                    data: user\r\n                });\r\n            }).catch((error) => {\r\n                return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'register', 'UserController');\r\n            });\r\n        });\r\n    }\r\n    login(req, res, next) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let loginDto = Object.assign(new dtos_1.LoginDto(), req.body);\r\n            this._userService.login(loginDto).then((user) => {\r\n                return res.status(200).json({\r\n                    success: true,\r\n                    data: user\r\n                });\r\n            }).catch((error) => {\r\n                return error_handler_1.ErrorHandler.handleErrorResponses(error, res, 'login', 'UserController');\r\n            });\r\n        });\r\n    }\r\n};\r\nUserController = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Service.USER)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], UserController);\r\nexports.UserController = UserController;\r\n\n\n//# sourceURL=webpack:///./src/@controllers/user.controller.ts?");

/***/ }),

/***/ "./src/@repository/concrete/answer.repository.ts":
/*!*******************************************************!*\
  !*** ./src/@repository/concrete/answer.repository.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst repository_base_1 = __webpack_require__(/*! ./base/repository.base */ \"./src/@repository/concrete/base/repository.base.ts\");\r\nconst answer_entity_1 = __webpack_require__(/*! ./../../entities/answer.entity */ \"./src/entities/answer.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nlet AnswerRepository = class AnswerRepository extends repository_base_1.RepositoryBase {\r\n    constructor() {\r\n        super(answer_entity_1.AnswerEntity);\r\n    }\r\n};\r\nAnswerRepository = __decorate([\r\n    inversify_1.injectable(),\r\n    __metadata(\"design:paramtypes\", [])\r\n], AnswerRepository);\r\nexports.AnswerRepository = AnswerRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/answer.repository.ts?");

/***/ }),

/***/ "./src/@repository/concrete/base/repository.base.ts":
/*!**********************************************************!*\
  !*** ./src/@repository/concrete/base/repository.base.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nlet RepositoryBase = class RepositoryBase {\r\n    constructor(type) {\r\n        this.type = type;\r\n    }\r\n    list(options) {\r\n        return typeorm_1.getManager().getRepository(this.type).find(options);\r\n    }\r\n    findById(id) {\r\n        return typeorm_1.getManager().getRepository(this.type).findOne(id);\r\n    }\r\n    findOne(id, options) {\r\n        return typeorm_1.getManager().getRepository(this.type).findOne(id, options);\r\n    }\r\n    insert(model, manager = typeorm_1.getManager()) {\r\n        return manager.getRepository(this.type).save(model);\r\n    }\r\n    update(id, model, manager = typeorm_1.getManager()) {\r\n        return manager.getRepository(this.type).update(id, model);\r\n    }\r\n    delete(id, manager = typeorm_1.getManager()) {\r\n        return manager.getRepository(this.type).delete(id);\r\n    }\r\n};\r\nRepositoryBase = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.unmanaged()),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], RepositoryBase);\r\nexports.RepositoryBase = RepositoryBase;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/base/repository.base.ts?");

/***/ }),

/***/ "./src/@repository/concrete/comment.repository.ts":
/*!********************************************************!*\
  !*** ./src/@repository/concrete/comment.repository.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst comment_entity_1 = __webpack_require__(/*! ./../../entities/comment.entity */ \"./src/entities/comment.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst repository_base_1 = __webpack_require__(/*! ./base/repository.base */ \"./src/@repository/concrete/base/repository.base.ts\");\r\nlet CommentRepository = class CommentRepository extends repository_base_1.RepositoryBase {\r\n    constructor() {\r\n        super(comment_entity_1.CommentEntity);\r\n    }\r\n};\r\nCommentRepository = __decorate([\r\n    inversify_1.injectable(),\r\n    __metadata(\"design:paramtypes\", [])\r\n], CommentRepository);\r\nexports.CommentRepository = CommentRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/comment.repository.ts?");

/***/ }),

/***/ "./src/@repository/concrete/company-member.repository.ts":
/*!***************************************************************!*\
  !*** ./src/@repository/concrete/company-member.repository.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst company_member_entity_1 = __webpack_require__(/*! ./../../entities/company-member.entity */ \"./src/entities/company-member.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst repository_base_1 = __webpack_require__(/*! ./base/repository.base */ \"./src/@repository/concrete/base/repository.base.ts\");\r\nlet CompanyMemberRepository = class CompanyMemberRepository extends repository_base_1.RepositoryBase {\r\n    constructor() {\r\n        super(company_member_entity_1.CompanyMemberEntity);\r\n    }\r\n};\r\nCompanyMemberRepository = __decorate([\r\n    inversify_1.injectable(),\r\n    __metadata(\"design:paramtypes\", [])\r\n], CompanyMemberRepository);\r\nexports.CompanyMemberRepository = CompanyMemberRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/company-member.repository.ts?");

/***/ }),

/***/ "./src/@repository/concrete/company.repository.ts":
/*!********************************************************!*\
  !*** ./src/@repository/concrete/company.repository.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst repository_base_1 = __webpack_require__(/*! ./base/repository.base */ \"./src/@repository/concrete/base/repository.base.ts\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst company_entity_1 = __webpack_require__(/*! ./../../entities/company.entity */ \"./src/entities/company.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nlet CompanyRepository = class CompanyRepository extends repository_base_1.RepositoryBase {\r\n    constructor() {\r\n        super(company_entity_1.CompanyEntity);\r\n    }\r\n    listByFiltersAndUser(filters, userId) {\r\n        let query = typeorm_1.getManager().createQueryBuilder(company_entity_1.CompanyEntity, \"company\").select(\"company\")\r\n            .leftJoin(\"company.owner\", \"owner\").addSelect([\"owner.id\", \"owner.name\", \"owner.surname\", \"owner.username\"])\r\n            .where(\"owner.id =:userId\", { userId: userId })\r\n            .leftJoinAndSelect(\"company.members\", \"member\")\r\n            .leftJoin(\"member.user\", \"user\").addSelect([\"user.id\", \"user.name\", \"user.surname\", \"user.username\"])\r\n            .leftJoin(\"company.projects\", \"project\").addSelect([\"project.id\"]);\r\n        if (filters.owner === undefined)\r\n            query = query.orWhere(\"user.id =:userId\", { userId: userId });\r\n        query = query.orderBy(\"company.id\", \"DESC\");\r\n        if (filters.take !== undefined) {\r\n            query = query.take(filters.take);\r\n            if (filters.skip !== undefined)\r\n                query = query.skip(filters.skip);\r\n        }\r\n        return query.getMany();\r\n    }\r\n    findForDetails(id) {\r\n        let query = typeorm_1.getManager().createQueryBuilder(company_entity_1.CompanyEntity, \"company\").select(\"company\")\r\n            .where(\"company.id =:id\", { id: id })\r\n            .leftJoin(\"company.owner\", \"owner\").addSelect([\"owner.id\", \"owner.name\", \"owner.surname\", \"owner.username\"])\r\n            .leftJoin(\"company.users\", \"user\").addSelect([\"user.id\"])\r\n            .leftJoin(\"company.projects\", \"project\").addSelect([\"project.id\"]);\r\n        return query.getOne();\r\n    }\r\n    insertMembershipRequest(companyId, userId) {\r\n        let query = typeorm_1.getManager().createQueryBuilder().relation(company_entity_1.CompanyEntity, \"requestedUsers\").of(companyId).add(userId);\r\n        return query;\r\n    }\r\n    insertMember(companyId, userId) {\r\n        let query = typeorm_1.getManager().createQueryBuilder().relation(company_entity_1.CompanyEntity, \"users\").of(companyId).add(userId);\r\n        return query;\r\n    }\r\n};\r\nCompanyRepository = __decorate([\r\n    inversify_1.injectable(),\r\n    __metadata(\"design:paramtypes\", [])\r\n], CompanyRepository);\r\nexports.CompanyRepository = CompanyRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/company.repository.ts?");

/***/ }),

/***/ "./src/@repository/concrete/index.ts":
/*!*******************************************!*\
  !*** ./src/@repository/concrete/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar question_repository_1 = __webpack_require__(/*! ./question.repository */ \"./src/@repository/concrete/question.repository.ts\");\r\nexports.QuestionRepository = question_repository_1.QuestionRepository;\r\nvar issue_repository_1 = __webpack_require__(/*! ./issue.repository */ \"./src/@repository/concrete/issue.repository.ts\");\r\nexports.IssueRepository = issue_repository_1.IssueRepository;\r\nvar answer_repository_1 = __webpack_require__(/*! ./answer.repository */ \"./src/@repository/concrete/answer.repository.ts\");\r\nexports.AnswerRepository = answer_repository_1.AnswerRepository;\r\nvar status_repository_1 = __webpack_require__(/*! ./status.repository */ \"./src/@repository/concrete/status.repository.ts\");\r\nexports.StatusRepository = status_repository_1.StatusRepository;\r\nvar project_repository_1 = __webpack_require__(/*! ./project.repository */ \"./src/@repository/concrete/project.repository.ts\");\r\nexports.ProjectRepository = project_repository_1.ProjectRepository;\r\nvar company_repository_1 = __webpack_require__(/*! ./company.repository */ \"./src/@repository/concrete/company.repository.ts\");\r\nexports.CompanyRepository = company_repository_1.CompanyRepository;\r\nvar user_repository_1 = __webpack_require__(/*! ./user.repository */ \"./src/@repository/concrete/user.repository.ts\");\r\nexports.UserRepository = user_repository_1.UserRepository;\r\nvar comment_repository_1 = __webpack_require__(/*! ./comment.repository */ \"./src/@repository/concrete/comment.repository.ts\");\r\nexports.CommentRepository = comment_repository_1.CommentRepository;\r\nvar task_repository_1 = __webpack_require__(/*! ./task.repository */ \"./src/@repository/concrete/task.repository.ts\");\r\nexports.TaskRepository = task_repository_1.TaskRepository;\r\nvar company_member_repository_1 = __webpack_require__(/*! ./company-member.repository */ \"./src/@repository/concrete/company-member.repository.ts\");\r\nexports.CompanyMemberRepository = company_member_repository_1.CompanyMemberRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/index.ts?");

/***/ }),

/***/ "./src/@repository/concrete/issue.repository.ts":
/*!******************************************************!*\
  !*** ./src/@repository/concrete/issue.repository.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst issue_entity_1 = __webpack_require__(/*! ./../../entities/issue.entity */ \"./src/entities/issue.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst repository_base_1 = __webpack_require__(/*! ./base/repository.base */ \"./src/@repository/concrete/base/repository.base.ts\");\r\nlet IssueRepository = class IssueRepository extends repository_base_1.RepositoryBase {\r\n    constructor() {\r\n        super(issue_entity_1.IssueEntity);\r\n    }\r\n};\r\nIssueRepository = __decorate([\r\n    inversify_1.injectable(),\r\n    __metadata(\"design:paramtypes\", [])\r\n], IssueRepository);\r\nexports.IssueRepository = IssueRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/issue.repository.ts?");

/***/ }),

/***/ "./src/@repository/concrete/project.repository.ts":
/*!********************************************************!*\
  !*** ./src/@repository/concrete/project.repository.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst repository_base_1 = __webpack_require__(/*! ./base/repository.base */ \"./src/@repository/concrete/base/repository.base.ts\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst project_entity_1 = __webpack_require__(/*! ./../../entities/project.entity */ \"./src/entities/project.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nlet ProjectRepository = class ProjectRepository extends repository_base_1.RepositoryBase {\r\n    constructor() {\r\n        super(project_entity_1.ProjectEntity);\r\n    }\r\n    listByFiltersByCompany(filters, companyId) {\r\n        let query = typeorm_1.getManager().createQueryBuilder(project_entity_1.ProjectEntity, \"project\")\r\n            .leftJoinAndSelect(\"project.managers\", \"manager\")\r\n            .where(\"project.companyId =:companyId\", { companyId: companyId });\r\n        query = query.orderBy(\"project.id\", \"DESC\");\r\n        if (filters.take !== undefined) {\r\n            query = query.take(filters.take);\r\n            if (filters.skip !== undefined)\r\n                query = query.skip(filters.skip);\r\n        }\r\n        return query.orderBy(\"project.id\", \"DESC\").getMany();\r\n    }\r\n    findForDetails(id) {\r\n        let query = typeorm_1.getManager().createQueryBuilder(project_entity_1.ProjectEntity, \"project\").select([\"project.id\", \"project.title\", \"project.description\"])\r\n            .where(\"project.id =:id\", { id: id })\r\n            .leftJoin(\"project.company\", \"company\").addSelect([\"company.id\", \"company.name\", \"company.description\"])\r\n            .leftJoin(\"company.owner\", \"companyOwner\").addSelect([\"companyOwner.id\", \"companyOwner.name\", \"companyOwner.surname\", \"companyOwner.username\"])\r\n            .leftJoin(\"project.creator\", \"creator\").addSelect([\"creator.id\", \"creator.name\", \"creator.surname\", \"creator.username\"]);\r\n        return query.getOne();\r\n    }\r\n};\r\nProjectRepository = __decorate([\r\n    inversify_1.injectable(),\r\n    __metadata(\"design:paramtypes\", [])\r\n], ProjectRepository);\r\nexports.ProjectRepository = ProjectRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/project.repository.ts?");

/***/ }),

/***/ "./src/@repository/concrete/question.repository.ts":
/*!*********************************************************!*\
  !*** ./src/@repository/concrete/question.repository.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst repository_base_1 = __webpack_require__(/*! ./base/repository.base */ \"./src/@repository/concrete/base/repository.base.ts\");\r\nconst question_entity_1 = __webpack_require__(/*! ./../../entities/question.entity */ \"./src/entities/question.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nlet QuestionRepository = class QuestionRepository extends repository_base_1.RepositoryBase {\r\n    constructor() {\r\n        super(question_entity_1.QuestionEntity);\r\n    }\r\n};\r\nQuestionRepository = __decorate([\r\n    inversify_1.injectable(),\r\n    __metadata(\"design:paramtypes\", [])\r\n], QuestionRepository);\r\nexports.QuestionRepository = QuestionRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/question.repository.ts?");

/***/ }),

/***/ "./src/@repository/concrete/status.repository.ts":
/*!*******************************************************!*\
  !*** ./src/@repository/concrete/status.repository.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst repository_base_1 = __webpack_require__(/*! ./base/repository.base */ \"./src/@repository/concrete/base/repository.base.ts\");\r\nconst status_entity_1 = __webpack_require__(/*! ./../../entities/status.entity */ \"./src/entities/status.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nlet StatusRepository = class StatusRepository extends repository_base_1.RepositoryBase {\r\n    constructor() {\r\n        super(status_entity_1.StatusEntity);\r\n    }\r\n};\r\nStatusRepository = __decorate([\r\n    inversify_1.injectable(),\r\n    __metadata(\"design:paramtypes\", [])\r\n], StatusRepository);\r\nexports.StatusRepository = StatusRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/status.repository.ts?");

/***/ }),

/***/ "./src/@repository/concrete/task.repository.ts":
/*!*****************************************************!*\
  !*** ./src/@repository/concrete/task.repository.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst repository_base_1 = __webpack_require__(/*! ./base/repository.base */ \"./src/@repository/concrete/base/repository.base.ts\");\r\nconst task_entity_1 = __webpack_require__(/*! ./../../entities/task.entity */ \"./src/entities/task.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nlet TaskRepository = class TaskRepository extends repository_base_1.RepositoryBase {\r\n    constructor() {\r\n        super(task_entity_1.TaskEntity);\r\n    }\r\n    listByFilters(filters) {\r\n        let query = typeorm_1.getManager().createQueryBuilder(task_entity_1.TaskEntity, \"task\")\r\n            .leftJoinAndSelect(\"task.assignees\", \"assignee\");\r\n        if (filters.assignedTo !== undefined)\r\n            query = query.andWhere(\"assignee.id =:id\", { id: filters.assignedTo });\r\n        if (filters.projectId !== undefined)\r\n            query = query.andWhere(\"projectId =:projectId\", { projectId: filters.projectId });\r\n        if (filters.createdBy !== undefined)\r\n            query = query.andWhere(\"creatorId =:creatorId\", { creatorId: filters.createdBy });\r\n        if (filters.status !== undefined)\r\n            query = query.andWhere(\"statusId =:statusId\", { statusId: filters.status });\r\n        query = query.orderBy(\"task.id\", \"DESC\");\r\n        if (filters.take !== undefined) {\r\n            query = query.take(filters.take);\r\n            if (filters.skip !== undefined)\r\n                query = query.skip(filters.skip);\r\n        }\r\n        query = query.leftJoin(\"task.comments\", \"comment\").addSelect([\"comment.id\"]);\r\n        return query.orderBy(\"task.id\", \"DESC\").getMany();\r\n    }\r\n    findForDetails(id) {\r\n        let query = typeorm_1.getManager().createQueryBuilder(task_entity_1.TaskEntity, \"task\").select([\"task.id\", \"task.title\", \"task.description\"])\r\n            .where(\"task.id =:id\", { id: id })\r\n            .innerJoin(\"task.creator\", \"creator\").addSelect([\"creator.id\", \"creator.name\", \"creator.surname\", \"creator.username\"])\r\n            .leftJoin(\"task.assignees\", \"assignee\").addSelect([\"assignee.id\", \"assignee.name\", \"assignee.surname\", \"assignee.username\"])\r\n            .leftJoin(\"task.comments\", \"comment\").addSelect([\"comment.id\", \"comment.content\", \"comment.taskId\"])\r\n            .leftJoin(\"comment.creator\", \"commentCreator\").addSelect([\"commentCreator.id\", \"commentCreator.name\", \"commentCreator.surname\", \"commentCreator.username\"])\r\n            .leftJoin(\"task.fromIssue\", \"fromIssue\").addSelect([\"fromIssue.id\", \"fromIssue.title\", \"fromIssue.description\"])\r\n            .leftJoin(\"task.project\", \"project\").addSelect([\"project.id\", \"project.title\", \"project.description\"])\r\n            .leftJoin(\"project.creator\", \"projectCreator\").addSelect([\"projectCreator.id\", \"projectCreator.name\", \"projectCreator.surname\", \"projectCreator.username\"])\r\n            .leftJoin(\"task.status\", \"status\").addSelect([\"status.id\", \"status.title\", \"status.description\"]);\r\n        return query.getOne();\r\n    }\r\n};\r\nTaskRepository = __decorate([\r\n    inversify_1.injectable(),\r\n    __metadata(\"design:paramtypes\", [])\r\n], TaskRepository);\r\nexports.TaskRepository = TaskRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/task.repository.ts?");

/***/ }),

/***/ "./src/@repository/concrete/user.repository.ts":
/*!*****************************************************!*\
  !*** ./src/@repository/concrete/user.repository.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst user_entity_1 = __webpack_require__(/*! ./../../entities/user.entity */ \"./src/entities/user.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst repository_base_1 = __webpack_require__(/*! ./base/repository.base */ \"./src/@repository/concrete/base/repository.base.ts\");\r\nlet UserRepository = class UserRepository extends repository_base_1.RepositoryBase {\r\n    constructor() {\r\n        super(user_entity_1.UserEntity);\r\n    }\r\n    findByLogin(email, password) {\r\n        return typeorm_1.getManager().getRepository(user_entity_1.UserEntity).findOne({ email: email, password: password });\r\n    }\r\n};\r\nUserRepository = __decorate([\r\n    inversify_1.injectable(),\r\n    __metadata(\"design:paramtypes\", [])\r\n], UserRepository);\r\nexports.UserRepository = UserRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/user.repository.ts?");

/***/ }),

/***/ "./src/@repository/uow.ts":
/*!********************************!*\
  !*** ./src/@repository/uow.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nclass Uow {\r\n    constructor() {\r\n        this.qr = typeorm_1.getConnection().createQueryRunner();\r\n    }\r\n    start() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            yield this.qr.connect();\r\n            yield this.qr.startTransaction();\r\n        });\r\n    }\r\n    getManager() {\r\n        return this.qr.manager;\r\n    }\r\n    commit() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            yield this.qr.commitTransaction();\r\n        });\r\n    }\r\n    rollback() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            yield this.qr.rollbackTransaction();\r\n        });\r\n    }\r\n    release() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            yield this.qr.release();\r\n        });\r\n    }\r\n}\r\nexports.Uow = Uow;\r\n\n\n//# sourceURL=webpack:///./src/@repository/uow.ts?");

/***/ }),

/***/ "./src/@routes/answer.routes.ts":
/*!**************************************!*\
  !*** ./src/@routes/answer.routes.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst _middlewares_1 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _middlewares_2 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst answer_controller_1 = __webpack_require__(/*! @controllers/answer.controller */ \"./src/@controllers/answer.controller.ts\");\r\nclass AnswerRoutes {\r\n    static configureRoutes(app) {\r\n        const root = \"/api/answers\";\r\n        const ctrl = _ioc_1.IOC.container.get(answer_controller_1.AnswerController);\r\n        app.route(root + '/')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));\r\n        app.route(root + '/:id')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));\r\n        app.route(root + '/')\r\n            .post(_middlewares_1.validationMiddleware(dtos_1.AnswerCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));\r\n        app.route(root + '/:id')\r\n            .put(_middlewares_1.validationMiddleware(dtos_1.AnswerUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));\r\n        app.route(root + '/:id')\r\n            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));\r\n    }\r\n}\r\nexports.AnswerRoutes = AnswerRoutes;\r\n\n\n//# sourceURL=webpack:///./src/@routes/answer.routes.ts?");

/***/ }),

/***/ "./src/@routes/comment.routes.ts":
/*!***************************************!*\
  !*** ./src/@routes/comment.routes.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst _middlewares_1 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _middlewares_2 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst comment_controller_1 = __webpack_require__(/*! @controllers/comment.controller */ \"./src/@controllers/comment.controller.ts\");\r\nclass CommentRoutes {\r\n    static configureRoutes(app) {\r\n        const root = \"/api/comments\";\r\n        const ctrl = _ioc_1.IOC.container.get(comment_controller_1.CommentController);\r\n        app.route(root + '/')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));\r\n        app.route(root + '/:id')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));\r\n        app.route(root + '/')\r\n            .post(_middlewares_1.validationMiddleware(dtos_1.CommentCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));\r\n        app.route(root + '/:id')\r\n            .put(_middlewares_1.validationMiddleware(dtos_1.CommentUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));\r\n        app.route(root + '/:id')\r\n            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));\r\n    }\r\n}\r\nexports.CommentRoutes = CommentRoutes;\r\n\n\n//# sourceURL=webpack:///./src/@routes/comment.routes.ts?");

/***/ }),

/***/ "./src/@routes/company.routes.ts":
/*!***************************************!*\
  !*** ./src/@routes/company.routes.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst _middlewares_1 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _middlewares_2 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst company_controller_1 = __webpack_require__(/*! @controllers/company.controller */ \"./src/@controllers/company.controller.ts\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nclass CompanyRoutes {\r\n    static configureRoutes(app) {\r\n        const root = \"/api/companies\";\r\n        const ctrl = _ioc_1.IOC.container.get(company_controller_1.CompanyController);\r\n        app.route(root + '/')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));\r\n        app.route(root + '/:id')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));\r\n        app.route(root + '/')\r\n            .post(_middlewares_1.validationMiddleware(dtos_1.CompanyCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));\r\n        app.route(root + '/:id')\r\n            .put(_middlewares_1.validationMiddleware(dtos_1.CompanyUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));\r\n        app.route(root + '/:id')\r\n            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));\r\n        app.route(root + '/:id/requestMembership')\r\n            .post(_middlewares_1.validationMiddleware(dtos_1.CompanyUserRegisterDto), _middlewares_2.authorize, (req, res, next) => ctrl.requestMembership(req, res, next));\r\n        app.route(root + '/:id/acceptMembership')\r\n            .put(_middlewares_2.authorize, (req, res, next) => ctrl.acceptMembership(req, res, next));\r\n        //TODO declineMembership metodu ekle\r\n    }\r\n}\r\nexports.CompanyRoutes = CompanyRoutes;\r\n\n\n//# sourceURL=webpack:///./src/@routes/company.routes.ts?");

/***/ }),

/***/ "./src/@routes/index.ts":
/*!******************************!*\
  !*** ./src/@routes/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst user_routes_1 = __webpack_require__(/*! ./user.routes */ \"./src/@routes/user.routes.ts\");\r\nconst project_routes_1 = __webpack_require__(/*! ./project.routes */ \"./src/@routes/project.routes.ts\");\r\nconst company_routes_1 = __webpack_require__(/*! ./company.routes */ \"./src/@routes/company.routes.ts\");\r\nconst task_routes_1 = __webpack_require__(/*! ./task.routes */ \"./src/@routes/task.routes.ts\");\r\nconst comment_routes_1 = __webpack_require__(/*! ./comment.routes */ \"./src/@routes/comment.routes.ts\");\r\nconst question_route_1 = __webpack_require__(/*! ./question.route */ \"./src/@routes/question.route.ts\");\r\nconst answer_routes_1 = __webpack_require__(/*! ./answer.routes */ \"./src/@routes/answer.routes.ts\");\r\nconst issue_route_1 = __webpack_require__(/*! ./issue.route */ \"./src/@routes/issue.route.ts\");\r\nclass RouteBinder {\r\n    static configureRoutes(app) {\r\n        task_routes_1.TaskRoutes.configureRoutes(app);\r\n        comment_routes_1.CommentRoutes.configureRoutes(app);\r\n        user_routes_1.UserRoutes.configureRoutes(app);\r\n        company_routes_1.CompanyRoutes.configureRoutes(app);\r\n        project_routes_1.ProjectRoutes.configureRoutes(app);\r\n        question_route_1.QuestionRoutes.configureRoutes(app);\r\n        answer_routes_1.AnswerRoutes.configureRoutes(app);\r\n        issue_route_1.IssueRoutes.configureRoutes(app);\r\n    }\r\n}\r\nexports.RouteBinder = RouteBinder;\r\n\n\n//# sourceURL=webpack:///./src/@routes/index.ts?");

/***/ }),

/***/ "./src/@routes/issue.route.ts":
/*!************************************!*\
  !*** ./src/@routes/issue.route.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst _middlewares_1 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _middlewares_2 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst issue_controller_1 = __webpack_require__(/*! @controllers/issue.controller */ \"./src/@controllers/issue.controller.ts\");\r\nclass IssueRoutes {\r\n    static configureRoutes(app) {\r\n        const root = \"/api/issues\";\r\n        const ctrl = _ioc_1.IOC.container.get(issue_controller_1.IssueController);\r\n        app.route(root + '/')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));\r\n        app.route(root + '/:id')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));\r\n        app.route(root + '/')\r\n            .post(_middlewares_1.validationMiddleware(dtos_1.IssueCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));\r\n        app.route(root + '/:id')\r\n            .put(_middlewares_1.validationMiddleware(dtos_1.IssueUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));\r\n        app.route(root + '/:id')\r\n            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));\r\n    }\r\n}\r\nexports.IssueRoutes = IssueRoutes;\r\n\n\n//# sourceURL=webpack:///./src/@routes/issue.route.ts?");

/***/ }),

/***/ "./src/@routes/project.routes.ts":
/*!***************************************!*\
  !*** ./src/@routes/project.routes.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst _middlewares_1 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _middlewares_2 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst project_controller_1 = __webpack_require__(/*! @controllers/project.controller */ \"./src/@controllers/project.controller.ts\");\r\nclass ProjectRoutes {\r\n    static configureRoutes(app) {\r\n        const root = \"/api/projects\";\r\n        const ctrl = _ioc_1.IOC.container.get(project_controller_1.ProjectController);\r\n        app.route(root + '/company/:companyId')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.listByCompany(req, res, next));\r\n        app.route(root + '/:id')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));\r\n        app.route(root + '/')\r\n            .post(_middlewares_1.validationMiddleware(dtos_1.ProjectCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));\r\n        app.route(root + '/:id')\r\n            .put(_middlewares_1.validationMiddleware(dtos_1.ProjectUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));\r\n        app.route(root + '/:id')\r\n            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));\r\n        app.route(root + '/:id/assignProjectManager')\r\n            .put(_middlewares_1.validationMiddleware(dtos_1.ProjectAssignManagerDto), _middlewares_2.authorize, (req, res, next) => ctrl.assignProjectManager(req, res, next));\r\n        app.route(root + '/:id/start')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.start(req, res, next));\r\n        app.route(root + '/:id/pause')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.pause(req, res, next));\r\n    }\r\n}\r\nexports.ProjectRoutes = ProjectRoutes;\r\n\n\n//# sourceURL=webpack:///./src/@routes/project.routes.ts?");

/***/ }),

/***/ "./src/@routes/question.route.ts":
/*!***************************************!*\
  !*** ./src/@routes/question.route.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst _middlewares_1 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _middlewares_2 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst question_controller_1 = __webpack_require__(/*! @controllers/question.controller */ \"./src/@controllers/question.controller.ts\");\r\nclass QuestionRoutes {\r\n    static configureRoutes(app) {\r\n        const root = \"/api/questions\";\r\n        const ctrl = _ioc_1.IOC.container.get(question_controller_1.QuestionController);\r\n        app.route(root + '/')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));\r\n        app.route(root + '/:id')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));\r\n        app.route(root + '/')\r\n            .post(_middlewares_1.validationMiddleware(dtos_1.QuestionCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));\r\n        app.route(root + '/:id')\r\n            .put(_middlewares_1.validationMiddleware(dtos_1.QuestionUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));\r\n        app.route(root + '/:id')\r\n            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));\r\n    }\r\n}\r\nexports.QuestionRoutes = QuestionRoutes;\r\n\n\n//# sourceURL=webpack:///./src/@routes/question.route.ts?");

/***/ }),

/***/ "./src/@routes/task.routes.ts":
/*!************************************!*\
  !*** ./src/@routes/task.routes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst _middlewares_1 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _middlewares_2 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst task_controller_1 = __webpack_require__(/*! @controllers/task.controller */ \"./src/@controllers/task.controller.ts\");\r\nclass TaskRoutes {\r\n    static configureRoutes(app) {\r\n        const root = \"/api/tasks\";\r\n        const ctrl = _ioc_1.IOC.container.get(task_controller_1.TaskController);\r\n        app.route(root + '/')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.list(req, res, next));\r\n        app.route(root + '/:id')\r\n            .get(_middlewares_2.authorize, (req, res, next) => ctrl.find(req, res, next));\r\n        app.route(root + '/')\r\n            .post(_middlewares_1.validationMiddleware(dtos_1.TaskCreateDto), _middlewares_2.authorize, (req, res, next) => ctrl.insert(req, res, next));\r\n        app.route(root + '/:id')\r\n            .put(_middlewares_1.validationMiddleware(dtos_1.TaskUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.update(req, res, next));\r\n        app.route(root + '/:id')\r\n            .delete(_middlewares_2.authorize, (req, res, next) => ctrl.delete(req, res, next));\r\n        app.route(root + '/:id/updateStatus')\r\n            .put(_middlewares_1.validationMiddleware(dtos_1.TaskStatusUpdateDto), _middlewares_2.authorize, (req, res, next) => ctrl.updateStatus(req, res, next));\r\n    }\r\n}\r\nexports.TaskRoutes = TaskRoutes;\r\n\n\n//# sourceURL=webpack:///./src/@routes/task.routes.ts?");

/***/ }),

/***/ "./src/@routes/user.routes.ts":
/*!************************************!*\
  !*** ./src/@routes/user.routes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ioc_1 = __webpack_require__(/*! ../ioc */ \"./src/ioc/index.ts\");\r\nconst _middlewares_1 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst user_controller_1 = __webpack_require__(/*! @controllers/user.controller */ \"./src/@controllers/user.controller.ts\");\r\nclass UserRoutes {\r\n    static configureRoutes(app) {\r\n        const root = \"/api/users\";\r\n        const ctrl = ioc_1.IOC.container.get(user_controller_1.UserController);\r\n        app.route(root + '/register')\r\n            .post((req, res, next) => ctrl.register(req, res, next));\r\n        app.route(root + '/login')\r\n            .post(_middlewares_1.validationMiddleware(dtos_1.LoginDto), (req, res, next) => ctrl.login(req, res, next));\r\n    }\r\n}\r\nexports.UserRoutes = UserRoutes;\r\n\n\n//# sourceURL=webpack:///./src/@routes/user.routes.ts?");

/***/ }),

/***/ "./src/@services/concrete/answer.service.ts":
/*!**************************************************!*\
  !*** ./src/@services/concrete/answer.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst answer_entity_1 = __webpack_require__(/*! @entities/answer.entity */ \"./src/entities/answer.entity.ts\");\r\nconst app_error_1 = __webpack_require__(/*! @errors/app-error */ \"./src/errors/app-error.ts\");\r\nlet AnswerService = class AnswerService {\r\n    constructor(_answerRepository) {\r\n        this._answerRepository = _answerRepository;\r\n    }\r\n    add(model) {\r\n        return new Promise((resolve, reject) => {\r\n            //TODO yetkisi var mı diye kontrol et\r\n            let answerEn = Object.assign(new answer_entity_1.AnswerEntity(), model);\r\n            this._answerRepository.insert(answerEn).then((res) => {\r\n                resolve(res.id);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    list(filters, requestorId) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    find(id, requestorId) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    update(id, model, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            let oldAnswer;\r\n            let updatedAnswer;\r\n            this._answerRepository.findById(id).then((foundAnswer) => {\r\n                oldAnswer = foundAnswer;\r\n                if (!foundAnswer)\r\n                    throw new app_error_1.AppError('AppError', 'Answer not found.', 404);\r\n                //TODO yetkisi var mı diye kontrol et\r\n                updatedAnswer = Object.assign(oldAnswer, model);\r\n                return this._answerRepository.update(id, updatedAnswer);\r\n            }).then(() => {\r\n                resolve(updatedAnswer);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    delete(id, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            this._answerRepository.findById(id).then((foundAnswer) => {\r\n                if (!foundAnswer)\r\n                    throw new app_error_1.AppError('AppError', 'Answer not found.', 404);\r\n                //TODO yetkisi var mı diye kontrol et\r\n                return this._answerRepository.delete(id);\r\n            }).then(() => {\r\n                resolve();\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n};\r\nAnswerService = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.ANSWER)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], AnswerService);\r\nexports.AnswerService = AnswerService;\r\n\n\n//# sourceURL=webpack:///./src/@services/concrete/answer.service.ts?");

/***/ }),

/***/ "./src/@services/concrete/comment.service.ts":
/*!***************************************************!*\
  !*** ./src/@services/concrete/comment.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst comment_entity_1 = __webpack_require__(/*! @entities/comment.entity */ \"./src/entities/comment.entity.ts\");\r\nconst app_error_1 = __webpack_require__(/*! @errors/app-error */ \"./src/errors/app-error.ts\");\r\nlet CommentService = class CommentService {\r\n    constructor(_commentRepository) {\r\n        this._commentRepository = _commentRepository;\r\n    }\r\n    add(model) {\r\n        return new Promise((resolve, reject) => {\r\n            //TODO yetkisi var mı diye kontrol et\r\n            let commentEn = Object.assign(new comment_entity_1.CommentEntity(), model);\r\n            this._commentRepository.insert(commentEn).then((res) => {\r\n                resolve(res.id);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    list(filters, requestorId) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    find(id, requestorId) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    update(id, model, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            let oldComment;\r\n            let updatedComment;\r\n            this._commentRepository.findById(id).then((foundComment) => {\r\n                oldComment = foundComment;\r\n                if (!foundComment)\r\n                    throw new app_error_1.AppError('AppError', 'Comment not found.', 404);\r\n                //TODO yetkisi var mı diye kontrol et\r\n                updatedComment = Object.assign(oldComment, model);\r\n                return this._commentRepository.update(id, updatedComment);\r\n            }).then(() => {\r\n                resolve(updatedComment);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    delete(id, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            this._commentRepository.findById(id).then((foundComment) => {\r\n                if (!foundComment)\r\n                    throw new app_error_1.AppError('AppError', 'Comment not found.', 404);\r\n                //TODO yetkisi var mı diye kontrol et\r\n                return this._commentRepository.delete(id);\r\n            }).then(() => {\r\n                resolve();\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n};\r\nCommentService = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMMENT)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], CommentService);\r\nexports.CommentService = CommentService;\r\n\n\n//# sourceURL=webpack:///./src/@services/concrete/comment.service.ts?");

/***/ }),

/***/ "./src/@services/concrete/company.service.ts":
/*!***************************************************!*\
  !*** ./src/@services/concrete/company.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst company_entity_1 = __webpack_require__(/*! @entities/company.entity */ \"./src/entities/company.entity.ts\");\r\nconst app_error_1 = __webpack_require__(/*! @errors/app-error */ \"./src/errors/app-error.ts\");\r\nconst company_member_entity_1 = __webpack_require__(/*! @entities/company-member.entity */ \"./src/entities/company-member.entity.ts\");\r\nlet CompanyService = class CompanyService {\r\n    constructor(_companyRepository, _companyMemberRepository) {\r\n        this._companyRepository = _companyRepository;\r\n        this._companyMemberRepository = _companyMemberRepository;\r\n    }\r\n    add(model) {\r\n        return new Promise((resolve, reject) => {\r\n            let companyEn = Object.assign(new company_entity_1.CompanyEntity(), model);\r\n            this._companyRepository.insert(companyEn).then((res) => {\r\n                resolve(res.id);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    list(filters, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            let companyDtos = [];\r\n            this._companyRepository.listByFiltersAndUser(filters, requestorId).then((companies) => {\r\n                companies.map((cmp) => {\r\n                    let companyDto = Object.assign(new dtos_1.CompanyListDto(), cmp, { projects: undefined, users: undefined });\r\n                    companyDto.projectCount = cmp.projects.length;\r\n                    companyDto.userCount = cmp.members.length;\r\n                    companyDtos.push(companyDto);\r\n                });\r\n                resolve(companyDtos);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    find(id, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            let companyEntity;\r\n            this._companyRepository.findForDetails(id).then((foundCompany) => {\r\n                if (!foundCompany)\r\n                    throw new app_error_1.AppError('AppError', 'Company not found.', 404);\r\n                companyEntity = foundCompany;\r\n                //TODO bu companyiye üye mi diyo kontrol et\r\n                let companyDto = Object.assign(new dtos_1.CompanyDetailDto(), companyEntity, { projects: undefined, users: undefined });\r\n                companyDto.projectCount = companyEntity.projects.length;\r\n                companyDto.userCount = companyEntity.members.length;\r\n                resolve(companyDto);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    update(id, model, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            let oldCompany;\r\n            let updatedCompany;\r\n            this._companyRepository.findById(id).then((foundCompany) => {\r\n                oldCompany = foundCompany;\r\n                if (!foundCompany)\r\n                    throw new app_error_1.AppError('AppError', 'Company not found.', 404);\r\n                //TODO yetkisi var mı diye kontrol et\r\n                updatedCompany = Object.assign(oldCompany, model);\r\n                return this._companyRepository.update(id, updatedCompany);\r\n            }).then(() => {\r\n                resolve(updatedCompany);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    delete(id, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            this._companyRepository.findById(id).then((foundCompany) => {\r\n                if (!foundCompany)\r\n                    throw new app_error_1.AppError('AppError', 'Company not found.', 404);\r\n                //TODO yetkisi var mı diye kontrol et\r\n                return this._companyRepository.delete(id);\r\n            }).then(() => {\r\n                resolve();\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    acceptMembership(id, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            this._companyRepository.findOne(id, { relations: [\"requestedUsers\", \"members\", \"members.user\", \"owner\"] }).then((foundCompany) => {\r\n                if (!foundCompany)\r\n                    throw new app_error_1.AppError('AppError', 'Company not found.', 404);\r\n                //TODO yetki kontrol\r\n                //TODO istek varmı diye kontrol et\r\n                console.log(requestorId);\r\n                console.log(foundCompany);\r\n                if (foundCompany.requestedUsers.filter(x => x.id === requestorId).length < 1)\r\n                    throw new app_error_1.AppError('AppError', 'There is not any membership request for you from this company.', 401);\r\n                if (foundCompany.members.filter(x => x.userId == requestorId).length > 0 || foundCompany.owner.id === requestorId)\r\n                    throw new app_error_1.AppError('AppError', 'You Are Already a Member of this company.', 409);\r\n                let cMemEn = new company_member_entity_1.CompanyMemberEntity();\r\n                cMemEn.userId = requestorId;\r\n                cMemEn.companyId = id;\r\n                cMemEn.joiningDate = new Date();\r\n                cMemEn.status = 1;\r\n                return this._companyMemberRepository.insert(cMemEn);\r\n                //TODO üye eklendiğinde kabul edilen istedği sil\r\n            }).then(() => {\r\n                resolve();\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    requestMembership(id, model, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            this._companyRepository.findOne(id, { relations: [\"requestedUsers\", \"members\", \"members.user\", \"owner\"] }).then((foundCompany) => {\r\n                if (!foundCompany)\r\n                    throw new app_error_1.AppError('AppError', 'Company not found.', 404);\r\n                //TODO yetki kontrol\r\n                if (foundCompany.members.filter(x => x.userId === model.userId).length > 0 || foundCompany.owner.id === model.userId)\r\n                    throw new app_error_1.AppError('AppError', 'User Is Already a Member of this company.', 409);\r\n                if (foundCompany.requestedUsers.filter(x => x.id === model.userId).length > 0)\r\n                    throw new app_error_1.AppError('AppError', 'Your Company already sent a membership request to this user.', 409);\r\n                return this._companyRepository.insertMembershipRequest(id, model.userId);\r\n            }).then(() => {\r\n                resolve();\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    validateAuthority(companyId, userId, role) {\r\n        return new Promise((resolve, reject) => {\r\n            this._companyRepository.findOne(companyId, { relations: [\"users\", \"creator\"] }).then((foundCompany) => {\r\n                let cmp = foundCompany;\r\n                if (cmp.members.filter(x => x.userId === userId).length < 1 && cmp.owner.id !== userId)\r\n                    throw new app_error_1.AppError('AppError', 'You Are Not A Member of This Company', 403);\r\n                resolve();\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n};\r\nCompanyService = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY)),\r\n    __param(1, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY_MEMBER)),\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], CompanyService);\r\nexports.CompanyService = CompanyService;\r\n\n\n//# sourceURL=webpack:///./src/@services/concrete/company.service.ts?");

/***/ }),

/***/ "./src/@services/concrete/index.ts":
/*!*****************************************!*\
  !*** ./src/@services/concrete/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar user_service_1 = __webpack_require__(/*! ./user.service */ \"./src/@services/concrete/user.service.ts\");\r\nexports.UserService = user_service_1.UserService;\r\nvar question_service_1 = __webpack_require__(/*! ./question.service */ \"./src/@services/concrete/question.service.ts\");\r\nexports.QuestionService = question_service_1.QuestionService;\r\nvar issue_service_1 = __webpack_require__(/*! ./issue.service */ \"./src/@services/concrete/issue.service.ts\");\r\nexports.IssueService = issue_service_1.IssueService;\r\nvar comment_service_1 = __webpack_require__(/*! ./comment.service */ \"./src/@services/concrete/comment.service.ts\");\r\nexports.CommentService = comment_service_1.CommentService;\r\nvar answer_service_1 = __webpack_require__(/*! ./answer.service */ \"./src/@services/concrete/answer.service.ts\");\r\nexports.AnswerService = answer_service_1.AnswerService;\r\nvar project_service_1 = __webpack_require__(/*! ./project.service */ \"./src/@services/concrete/project.service.ts\");\r\nexports.ProjectService = project_service_1.ProjectService;\r\nvar task_service_1 = __webpack_require__(/*! ./task.service */ \"./src/@services/concrete/task.service.ts\");\r\nexports.TaskService = task_service_1.TaskService;\r\nvar company_service_1 = __webpack_require__(/*! ./company.service */ \"./src/@services/concrete/company.service.ts\");\r\nexports.CompanyService = company_service_1.CompanyService;\r\n\n\n//# sourceURL=webpack:///./src/@services/concrete/index.ts?");

/***/ }),

/***/ "./src/@services/concrete/issue.service.ts":
/*!*************************************************!*\
  !*** ./src/@services/concrete/issue.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst issue_entity_1 = __webpack_require__(/*! @entities/issue.entity */ \"./src/entities/issue.entity.ts\");\r\nconst app_error_1 = __webpack_require__(/*! @errors/app-error */ \"./src/errors/app-error.ts\");\r\nlet IssueService = class IssueService {\r\n    constructor(_issueRepository) {\r\n        this._issueRepository = _issueRepository;\r\n    }\r\n    add(model) {\r\n        return new Promise((resolve, reject) => {\r\n            //TODO yetkisi var mı diye kontrol et\r\n            let issueEn = Object.assign(new issue_entity_1.IssueEntity(), model);\r\n            this._issueRepository.insert(issueEn).then((res) => {\r\n                resolve(res.id);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    list(filters, requestorId) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    find(id, requestorId) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    update(id, model, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            let oldIssue;\r\n            let updatedIssue;\r\n            this._issueRepository.findById(id).then((foundIssue) => {\r\n                oldIssue = foundIssue;\r\n                if (!foundIssue)\r\n                    throw new app_error_1.AppError('AppError', 'Issue not found.', 404);\r\n                //TODO yetkisi var mı diye kontrol et\r\n                updatedIssue = Object.assign(oldIssue, model);\r\n                return this._issueRepository.update(id, updatedIssue);\r\n            }).then(() => {\r\n                resolve(updatedIssue);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    delete(id, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            this._issueRepository.findById(id).then((foundIssue) => {\r\n                if (!foundIssue)\r\n                    throw new app_error_1.AppError('AppError', 'Issue not found.', 404);\r\n                //TODO yetkisi var mı diye kontrol et\r\n                return this._issueRepository.delete(id);\r\n            }).then(() => {\r\n                resolve();\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n};\r\nIssueService = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.ISSUE)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], IssueService);\r\nexports.IssueService = IssueService;\r\n\n\n//# sourceURL=webpack:///./src/@services/concrete/issue.service.ts?");

/***/ }),

/***/ "./src/@services/concrete/project.service.ts":
/*!***************************************************!*\
  !*** ./src/@services/concrete/project.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst project_entity_1 = __webpack_require__(/*! @entities/project.entity */ \"./src/entities/project.entity.ts\");\r\nconst app_error_1 = __webpack_require__(/*! @errors/app-error */ \"./src/errors/app-error.ts\");\r\nconst status_entity_1 = __webpack_require__(/*! @entities/status.entity */ \"./src/entities/status.entity.ts\");\r\nconst _enums_1 = __webpack_require__(/*! @enums */ \"./src/enums/index.ts\");\r\nconst uow_1 = __webpack_require__(/*! @repositories/uow */ \"./src/@repository/uow.ts\");\r\nlet ProjectService = class ProjectService {\r\n    constructor(_projectRepository, _statusRepository, _companyRepository) {\r\n        this._projectRepository = _projectRepository;\r\n        this._statusRepository = _statusRepository;\r\n        this._companyRepository = _companyRepository;\r\n    }\r\n    add(model) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            yield this.validateAuthority(model.companyId, model.userId);\r\n            let projectEn = Object.assign(new project_entity_1.ProjectEntity(), model);\r\n            let uow = new uow_1.Uow();\r\n            yield uow.start();\r\n            try {\r\n                projectEn = yield this._projectRepository.insert(projectEn, uow.getManager());\r\n                let status0 = Object.assign(new status_entity_1.StatusEntity(), {\r\n                    title: 'Planning',\r\n                    description: 'Proje sürecine dahil olabilecek görevler',\r\n                    baseStatus: _enums_1.BaseStatus.PLANNINING,\r\n                    order: 0,\r\n                    creatorId: model.userId,\r\n                    projectId: projectEn.id\r\n                });\r\n                let status1 = Object.assign(new status_entity_1.StatusEntity(), {\r\n                    title: 'To do',\r\n                    description: 'Proje sürecinde olan ama henüz baslanmamis görevler',\r\n                    baseStatus: _enums_1.BaseStatus.NOT_STARTED,\r\n                    order: 0,\r\n                    creatorId: model.userId,\r\n                    projectId: projectEn.id\r\n                });\r\n                let status2 = Object.assign(new status_entity_1.StatusEntity(), {\r\n                    title: 'In Progress',\r\n                    description: 'Yapılmakta olan görevler',\r\n                    baseStatus: _enums_1.BaseStatus.IN_PROGRESS,\r\n                    order: 0,\r\n                    creatorId: model.userId,\r\n                    projectId: projectEn.id\r\n                });\r\n                let status3 = Object.assign(new status_entity_1.StatusEntity(), {\r\n                    title: 'Done',\r\n                    description: 'Bitmiş görevler',\r\n                    baseStatus: _enums_1.BaseStatus.FINISHED,\r\n                    order: 0,\r\n                    creatorId: model.userId,\r\n                    projectId: projectEn.id\r\n                });\r\n                yield this._statusRepository.insert(status0, uow.getManager());\r\n                yield this._statusRepository.insert(status1, uow.getManager());\r\n                yield this._statusRepository.insert(status2, uow.getManager());\r\n                yield this._statusRepository.insert(status3, uow.getManager());\r\n                yield uow.commit();\r\n            }\r\n            catch (err) {\r\n                yield uow.rollback();\r\n                throw err;\r\n            }\r\n            finally {\r\n                yield uow.release();\r\n            }\r\n            return Promise.resolve(projectEn.id);\r\n        });\r\n    }\r\n    //TODO sadece yetkisi olanlar gelsin\r\n    listByCompany(filters, requestorId, companyId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let projectDtos = [];\r\n            yield this.validateAuthority(companyId, requestorId);\r\n            let projects = yield this._projectRepository.listByFiltersByCompany(filters, companyId);\r\n            projects.map((prj) => {\r\n                let projectDto = Object.assign(new dtos_1.ProjectListDto(), prj);\r\n                projectDtos.push(projectDto);\r\n            });\r\n            return Promise.resolve(projectDtos);\r\n        });\r\n    }\r\n    find(id, requestorId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let projectEntity = yield this._projectRepository.findForDetails(id);\r\n            if (!projectEntity)\r\n                throw new app_error_1.AppError('AppError', 'Project not found.', 404);\r\n            yield this.validateAuthority(projectEntity.company.id, requestorId);\r\n            let prjDto = Object.assign(new dtos_1.ProjectDetailDto(), projectEntity);\r\n            return Promise.resolve(prjDto);\r\n        });\r\n    }\r\n    update(id, model, requestorId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let updatedProject;\r\n            let oldProject = yield this._projectRepository.findById(id);\r\n            if (!oldProject)\r\n                throw new app_error_1.AppError('AppError', 'Project not found.', 404);\r\n            yield this.validateAuthority(oldProject.companyId, requestorId);\r\n            updatedProject = Object.assign(oldProject, model);\r\n            yield this._projectRepository.update(id, updatedProject);\r\n            return Promise.resolve(updatedProject);\r\n        });\r\n    }\r\n    delete(id, requestorId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let projectEntity = yield this._projectRepository.findById(id);\r\n            if (!projectEntity)\r\n                throw new app_error_1.AppError('AppError', 'Project not found.', 404);\r\n            yield this.validateAuthority(projectEntity.companyId, requestorId);\r\n            yield this._projectRepository.delete(id);\r\n            return Promise.resolve();\r\n        });\r\n    }\r\n    // private async validateAuthority(type: ProjectAuthTypes, userId: number, companyId: number, projectId?: number): Promise<void> {\r\n    //     let cmpEn: CompanyEntity;\r\n    //     if (companyId !== null) cmpEn = await this._companyRepository.findOne(companyId, { relations: [\"users\", \"owner\"] });\r\n    //\r\n    //     //TODO company kurucusunun admin olması daha sonra değişirse burası da değişir.\r\n    //     if (type === ProjectAuthTypes.ADMIN) {\r\n    //         if (!cmpEn) throw new AppError('AppError', 'Internal Error.', 500);\r\n    //         if (cmpEn.owner.id !== userId)\r\n    //             throw new AppError('AppError', 'Yetkiniz yoktur.', 403);\r\n    //         return Promise.resolve();\r\n    //     }\r\n    //\r\n    //     let prjEn: ProjectEntity;\r\n    //     if (projectId !== null) prjEn = await this._projectRepository.findForDetails(projectId);\r\n    //\r\n    //     if (type === ProjectAuthTypes.USER) {\r\n    //         if (!prjEn) throw new AppError('AppError', 'Internal Error.', 500);\r\n    //         if (prjEn.users.filter(x => x.id === userId).length < 1 && cmpEn.owner.id !== userId)\r\n    //             throw new AppError('AppError', 'Bu topluluğun üyesi değilsiniz.', 403);\r\n    //         return Promise.resolve();\r\n    //     }\r\n    //\r\n    //     if (type === ProjectAuthTypes.MANAGER) {\r\n    //         if (!prjEn) throw new AppError('AppError', 'Internal Error.', 500);\r\n    //         if (prjEn.managers.filter(x => x.id === userId).length < 1 && cmpEn.owner.id !== userId)\r\n    //             throw new AppError('AppError', 'Yetkiniz yoktur.', 403);\r\n    //         return Promise.resolve();\r\n    //     }\r\n    //\r\n    //     throw new AppError('AppError', 'Internal Error.', 500);\r\n    //     //TODO Internal errorları düzelt.\r\n    //\r\n    // }\r\n    validateAuthority(companyId, userId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let cmpEn = yield this._companyRepository.findOne(companyId, { relations: [\"users\", \"owner\"] });\r\n            console.log(\"cmpEn : \", cmpEn);\r\n            if (cmpEn.members.filter(x => x.userId === userId).length < 1 && cmpEn.owner.id !== userId)\r\n                throw new app_error_1.AppError('AppError', 'Bu topluluğun üyesi değilsiniz.', 403);\r\n            return Promise.resolve();\r\n        });\r\n    }\r\n};\r\nProjectService = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.PROJECT)),\r\n    __param(1, inversify_1.inject(_ioc_1.InjectTypes.Repository.STATUS)),\r\n    __param(2, inversify_1.inject(_ioc_1.InjectTypes.Repository.COMPANY)),\r\n    __metadata(\"design:paramtypes\", [Object, Object, Object])\r\n], ProjectService);\r\nexports.ProjectService = ProjectService;\r\n\n\n//# sourceURL=webpack:///./src/@services/concrete/project.service.ts?");

/***/ }),

/***/ "./src/@services/concrete/question.service.ts":
/*!****************************************************!*\
  !*** ./src/@services/concrete/question.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst _ioc_1 = __webpack_require__(/*! @ioc */ \"./src/ioc/index.ts\");\r\nconst question_entity_1 = __webpack_require__(/*! @entities/question.entity */ \"./src/entities/question.entity.ts\");\r\nconst app_error_1 = __webpack_require__(/*! @errors/app-error */ \"./src/errors/app-error.ts\");\r\nlet QuestionService = class QuestionService {\r\n    constructor(_questionRepository) {\r\n        this._questionRepository = _questionRepository;\r\n    }\r\n    add(model) {\r\n        return new Promise((resolve, reject) => {\r\n            //TODO yetkisi var mı diye kontrol et\r\n            let questionEn = Object.assign(new question_entity_1.QuestionEntity(), model);\r\n            this._questionRepository.insert(questionEn).then((res) => {\r\n                resolve(res.id);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    list(filters, requestorId) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    find(id, requestorId) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    update(id, model, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            let oldQuestion;\r\n            let updatedQuestion;\r\n            this._questionRepository.findById(id).then((foundQuestion) => {\r\n                oldQuestion = foundQuestion;\r\n                if (!foundQuestion)\r\n                    throw new app_error_1.AppError('AppError', 'Question not found.', 404);\r\n                //TODO yetkisi var mı diye kontrol et\r\n                updatedQuestion = Object.assign(oldQuestion, model);\r\n                return this._questionRepository.update(id, updatedQuestion);\r\n            }).then(() => {\r\n                resolve(updatedQuestion);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    delete(id, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            this._questionRepository.findById(id).then((foundQuestion) => {\r\n                if (!foundQuestion)\r\n                    throw new app_error_1.AppError('AppError', 'Question not found.', 404);\r\n                //TODO yetkisi var mı diye kontrol et\r\n                return this._questionRepository.delete(id);\r\n            }).then(() => {\r\n                resolve();\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n};\r\nQuestionService = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(_ioc_1.InjectTypes.Repository.QUESTION)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], QuestionService);\r\nexports.QuestionService = QuestionService;\r\n\n\n//# sourceURL=webpack:///./src/@services/concrete/question.service.ts?");

/***/ }),

/***/ "./src/@services/concrete/task.service.ts":
/*!************************************************!*\
  !*** ./src/@services/concrete/task.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst ioc_1 = __webpack_require__(/*! ../../ioc */ \"./src/ioc/index.ts\");\r\nconst app_error_1 = __webpack_require__(/*! ../../errors/app-error */ \"./src/errors/app-error.ts\");\r\nconst dtos_1 = __webpack_require__(/*! @models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst base_status_enum_1 = __webpack_require__(/*! @enums/base-status.enum */ \"./src/enums/base-status.enum.ts\");\r\nconst task_entity_1 = __webpack_require__(/*! @entities/task.entity */ \"./src/entities/task.entity.ts\");\r\nlet TaskService = class TaskService {\r\n    constructor(_taskRepository, _projectRepository) {\r\n        this._taskRepository = _taskRepository;\r\n        this._projectRepository = _projectRepository;\r\n    }\r\n    add(model) {\r\n        return new Promise((resolve, reject) => {\r\n            let firstStatus;\r\n            this.validateAuthority(model.projectId, model.creatorId).then(() => {\r\n                return this._projectRepository.findOne(model.projectId, { relations: [\"statuses\"] });\r\n            }).then((res) => {\r\n                if (!res)\r\n                    throw new app_error_1.AppError('AppError', 'Böyle bir proje yok.', 404);\r\n                let prjct = res;\r\n                let plannings = prjct.statuses.filter((sts) => sts.baseStatus === base_status_enum_1.BaseStatus.PLANNINING);\r\n                //TODO task eklenirken statusId de alınsın\r\n                firstStatus = plannings[0];\r\n                for (let i = 0; i < plannings.length; i++) {\r\n                    if (plannings[i].order < firstStatus.order)\r\n                        firstStatus = plannings[i];\r\n                }\r\n                let task = Object.assign(new task_entity_1.TaskEntity(), model, { statusId: firstStatus.id });\r\n                return this._taskRepository.insert(task);\r\n            }).then((res) => {\r\n                resolve(res.id);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    list(filters, requestorId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let taskDtos = [];\r\n            yield this.validateAuthority(filters.projectId, requestorId);\r\n            let tasks = yield this._taskRepository.listByFilters(filters);\r\n            tasks.map((tsk) => {\r\n                let taskDto = Object.assign(new dtos_1.TaskListDto(), tsk, { comments: undefined });\r\n                taskDto.commentCount = tsk.comments.length;\r\n                taskDtos.push(taskDto);\r\n            });\r\n            return Promise.resolve(taskDtos);\r\n        });\r\n    }\r\n    find(id, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            let taskEntity;\r\n            this._taskRepository.findForDetails(id).then((foundTask) => {\r\n                if (!foundTask)\r\n                    throw new app_error_1.AppError('AppError', 'Task not found.', 404);\r\n                taskEntity = foundTask;\r\n                return this.validateAuthority(foundTask.project.id, requestorId);\r\n            }).then(() => {\r\n                let taskDto = Object.assign(new dtos_1.TaskDetailDto(), taskEntity);\r\n                resolve(taskDto);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    //TODO update entity donmemeli\r\n    update(id, model, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            let oldTask;\r\n            let updatedTask;\r\n            this._taskRepository.findById(id).then((foundTask) => {\r\n                oldTask = foundTask;\r\n                if (!foundTask)\r\n                    throw new app_error_1.AppError('AppError', 'Task not found.', 404);\r\n                return this.validateAuthority(foundTask.projectId, requestorId);\r\n            }).then(() => {\r\n                updatedTask = Object.assign(oldTask, model);\r\n                return this._taskRepository.update(id, updatedTask);\r\n            }).then(() => {\r\n                resolve(updatedTask);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    delete(id, requestorId) {\r\n        return new Promise((resolve, reject) => {\r\n            this._taskRepository.findById(id).then((foundTask) => {\r\n                if (!foundTask)\r\n                    throw new app_error_1.AppError('AppError', 'Task not found.', 404);\r\n                return this.validateAuthority(foundTask.projectId, requestorId);\r\n            }).then(() => {\r\n                return this._taskRepository.delete(id);\r\n            }).then(() => {\r\n                resolve();\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    validateAuthority(projectId, userId) {\r\n        return new Promise((resolve, reject) => {\r\n            this._projectRepository.findOne(projectId, { relations: [\"users\", \"creator\"] }).then((res) => {\r\n                let prjct = res;\r\n                if (prjct.users.filter(x => x.id === userId).length < 1 && prjct.creator.id !== userId)\r\n                    throw new app_error_1.AppError('AppError', 'Bu projede yetkiniz yoktur.', 403);\r\n                resolve();\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n};\r\nTaskService = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(ioc_1.InjectTypes.Repository.TASK)),\r\n    __param(1, inversify_1.inject(ioc_1.InjectTypes.Repository.PROJECT)),\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], TaskService);\r\nexports.TaskService = TaskService;\r\n//TODO task silme ve update işlemlerinde auth için başka kısıtlar da ekle şuanda projeye dahil olan herkes herhangi bir task üzerinde işlem yapabilir.\r\n\n\n//# sourceURL=webpack:///./src/@services/concrete/task.service.ts?");

/***/ }),

/***/ "./src/@services/concrete/user.service.ts":
/*!************************************************!*\
  !*** ./src/@services/concrete/user.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst ioc_1 = __webpack_require__(/*! ../../ioc */ \"./src/ioc/index.ts\");\r\nconst user_entity_1 = __webpack_require__(/*! ../../entities/user.entity */ \"./src/entities/user.entity.ts\");\r\nconst app_error_1 = __webpack_require__(/*! ../../errors/app-error */ \"./src/errors/app-error.ts\");\r\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nlet UserService = class UserService {\r\n    constructor(_userRepository) {\r\n        this._userRepository = _userRepository;\r\n    }\r\n    list(filters) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    find(id) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    update(model) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    delete(id) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    login(model) {\r\n        return new Promise((resolve, reject) => {\r\n            this._userRepository.findByLogin(model.email, model.password).then((found_user) => {\r\n                console.log(found_user);\r\n                if (!found_user) {\r\n                    throw new app_error_1.AppError('AppError', 'Wrong Username or Password.', 404);\r\n                }\r\n                console.log(\"Found User : \", found_user);\r\n                let decodedToken = {\r\n                    id: found_user.id,\r\n                    username: found_user.username,\r\n                    email: found_user.email,\r\n                    name: found_user.name,\r\n                    surname: found_user.surname\r\n                };\r\n                let token = jwt.sign(Object.assign({}, decodedToken), 'MySecret', { expiresIn: 86400000 });\r\n                let loginResult = {\r\n                    id: found_user.id,\r\n                    email: found_user.email,\r\n                    token: token\r\n                };\r\n                resolve(loginResult);\r\n            }).catch((error) => {\r\n                reject(error);\r\n            });\r\n        });\r\n    }\r\n    register(model) {\r\n        return new Promise((resolve, reject) => {\r\n            this.checkUniqueness(model.email, model.username).then(() => {\r\n                let user = Object.assign(new user_entity_1.UserEntity(), model, { createdAt: new Date });\r\n                return this._userRepository.insert(user);\r\n            }).then((res) => {\r\n                resolve(res);\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n    checkUniqueness(email, username) {\r\n        return new Promise((resolve, reject) => {\r\n            let query = {\r\n                where: [\r\n                    { email: email },\r\n                    { username: username }\r\n                ]\r\n            };\r\n            this._userRepository.list(query).then((users) => {\r\n                if (users.length > 0) {\r\n                    if (users[0].email === email)\r\n                        throw new app_error_1.AppError('AppError', 'This email is already taken', 422);\r\n                    else\r\n                        throw new app_error_1.AppError('AppError', 'This username is already taken', 422);\r\n                }\r\n                resolve();\r\n            }).catch((err) => {\r\n                reject(err);\r\n            });\r\n        });\r\n    }\r\n};\r\nUserService = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(ioc_1.InjectTypes.Repository.USER)),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], UserService);\r\nexports.UserService = UserService;\r\n\n\n//# sourceURL=webpack:///./src/@services/concrete/user.service.ts?");

/***/ }),

/***/ "./src/_models/dtos/answer/answer-create.dto.ts":
/*!******************************************************!*\
  !*** ./src/_models/dtos/answer/answer-create.dto.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass AnswerCreateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], AnswerCreateDto.prototype, \"content\", void 0);\r\n__decorate([\r\n    class_validator_1.IsNotEmpty(),\r\n    __metadata(\"design:type\", Number)\r\n], AnswerCreateDto.prototype, \"questionId\", void 0);\r\nexports.AnswerCreateDto = AnswerCreateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/answer/answer-create.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/answer/answer-detail.dto.ts":
/*!******************************************************!*\
  !*** ./src/_models/dtos/answer/answer-detail.dto.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass AnswerDetailDto {\r\n}\r\nexports.AnswerDetailDto = AnswerDetailDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/answer/answer-detail.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/answer/answer-list.dto.ts":
/*!****************************************************!*\
  !*** ./src/_models/dtos/answer/answer-list.dto.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass AnswerListDto {\r\n}\r\nexports.AnswerListDto = AnswerListDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/answer/answer-list.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/answer/answer-summary.dto.ts":
/*!*******************************************************!*\
  !*** ./src/_models/dtos/answer/answer-summary.dto.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass AnswerSummaryDto {\r\n}\r\nexports.AnswerSummaryDto = AnswerSummaryDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/answer/answer-summary.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/answer/answer-update.dto.ts":
/*!******************************************************!*\
  !*** ./src/_models/dtos/answer/answer-update.dto.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass AnswerUpdateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], AnswerUpdateDto.prototype, \"content\", void 0);\r\nexports.AnswerUpdateDto = AnswerUpdateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/answer/answer-update.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/comment/comment-create.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/comment/comment-create.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass CommentCreateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], CommentCreateDto.prototype, \"content\", void 0);\r\n__decorate([\r\n    class_validator_1.IsNotEmpty(),\r\n    __metadata(\"design:type\", Number)\r\n], CommentCreateDto.prototype, \"taskId\", void 0);\r\nexports.CommentCreateDto = CommentCreateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/comment/comment-create.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/comment/comment-detail.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/comment/comment-detail.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass CommentDetailDto {\r\n}\r\nexports.CommentDetailDto = CommentDetailDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/comment/comment-detail.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/comment/comment-list.dto.ts":
/*!******************************************************!*\
  !*** ./src/_models/dtos/comment/comment-list.dto.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass CommentListDto {\r\n}\r\nexports.CommentListDto = CommentListDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/comment/comment-list.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/comment/comment-summary.dto.ts":
/*!*********************************************************!*\
  !*** ./src/_models/dtos/comment/comment-summary.dto.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass CommentSummaryDto {\r\n}\r\nexports.CommentSummaryDto = CommentSummaryDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/comment/comment-summary.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/comment/comment-update.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/comment/comment-update.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass CommentUpdateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], CommentUpdateDto.prototype, \"content\", void 0);\r\nexports.CommentUpdateDto = CommentUpdateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/comment/comment-update.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/company/company-create.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/company/company-create.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass CompanyCreateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], CompanyCreateDto.prototype, \"name\", void 0);\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], CompanyCreateDto.prototype, \"description\", void 0);\r\nexports.CompanyCreateDto = CompanyCreateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/company/company-create.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/company/company-detail.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/company/company-detail.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass CompanyDetailDto {\r\n    constructor() {\r\n        this.userCount = 0;\r\n        this.projectCount = 0;\r\n    }\r\n}\r\nexports.CompanyDetailDto = CompanyDetailDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/company/company-detail.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/company/company-list.dto.ts":
/*!******************************************************!*\
  !*** ./src/_models/dtos/company/company-list.dto.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass CompanyListDto {\r\n    constructor() {\r\n        this.userCount = 0;\r\n        this.projectCount = 0;\r\n    }\r\n}\r\nexports.CompanyListDto = CompanyListDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/company/company-list.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/company/company-summary.dto.ts":
/*!*********************************************************!*\
  !*** ./src/_models/dtos/company/company-summary.dto.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass CompanySummaryDto {\r\n}\r\nexports.CompanySummaryDto = CompanySummaryDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/company/company-summary.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/company/company-update.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/company/company-update.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass CompanyUpdateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], CompanyUpdateDto.prototype, \"name\", void 0);\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], CompanyUpdateDto.prototype, \"description\", void 0);\r\nexports.CompanyUpdateDto = CompanyUpdateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/company/company-update.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/company/company-user-register.dto.ts":
/*!***************************************************************!*\
  !*** ./src/_models/dtos/company/company-user-register.dto.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass CompanyUserRegisterDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsNumber(),\r\n    __metadata(\"design:type\", Number)\r\n], CompanyUserRegisterDto.prototype, \"userId\", void 0);\r\nexports.CompanyUserRegisterDto = CompanyUserRegisterDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/company/company-user-register.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/index.ts":
/*!***********************************!*\
  !*** ./src/_models/dtos/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar answer_update_dto_1 = __webpack_require__(/*! ./answer/answer-update.dto */ \"./src/_models/dtos/answer/answer-update.dto.ts\");\r\nexports.AnswerUpdateDto = answer_update_dto_1.AnswerUpdateDto;\r\nvar answer_create_dto_1 = __webpack_require__(/*! ./answer/answer-create.dto */ \"./src/_models/dtos/answer/answer-create.dto.ts\");\r\nexports.AnswerCreateDto = answer_create_dto_1.AnswerCreateDto;\r\nvar answer_detail_dto_1 = __webpack_require__(/*! ./answer/answer-detail.dto */ \"./src/_models/dtos/answer/answer-detail.dto.ts\");\r\nexports.AnswerDetailDto = answer_detail_dto_1.AnswerDetailDto;\r\nvar answer_list_dto_1 = __webpack_require__(/*! ./answer/answer-list.dto */ \"./src/_models/dtos/answer/answer-list.dto.ts\");\r\nexports.AnswerListDto = answer_list_dto_1.AnswerListDto;\r\nvar answer_summary_dto_1 = __webpack_require__(/*! ./answer/answer-summary.dto */ \"./src/_models/dtos/answer/answer-summary.dto.ts\");\r\nexports.AnswerSummaryDto = answer_summary_dto_1.AnswerSummaryDto;\r\nvar comment_update_dto_1 = __webpack_require__(/*! ./comment/comment-update.dto */ \"./src/_models/dtos/comment/comment-update.dto.ts\");\r\nexports.CommentUpdateDto = comment_update_dto_1.CommentUpdateDto;\r\nvar comment_create_dto_1 = __webpack_require__(/*! ./comment/comment-create.dto */ \"./src/_models/dtos/comment/comment-create.dto.ts\");\r\nexports.CommentCreateDto = comment_create_dto_1.CommentCreateDto;\r\nvar comment_detail_dto_1 = __webpack_require__(/*! ./comment/comment-detail.dto */ \"./src/_models/dtos/comment/comment-detail.dto.ts\");\r\nexports.CommentDetailDto = comment_detail_dto_1.CommentDetailDto;\r\nvar comment_list_dto_1 = __webpack_require__(/*! ./comment/comment-list.dto */ \"./src/_models/dtos/comment/comment-list.dto.ts\");\r\nexports.CommentListDto = comment_list_dto_1.CommentListDto;\r\nvar comment_summary_dto_1 = __webpack_require__(/*! ./comment/comment-summary.dto */ \"./src/_models/dtos/comment/comment-summary.dto.ts\");\r\nexports.CommentSummaryDto = comment_summary_dto_1.CommentSummaryDto;\r\nvar task_update_dto_1 = __webpack_require__(/*! ./task/task-update.dto */ \"./src/_models/dtos/task/task-update.dto.ts\");\r\nexports.TaskUpdateDto = task_update_dto_1.TaskUpdateDto;\r\nvar task_create_dto_1 = __webpack_require__(/*! ./task/task-create.dto */ \"./src/_models/dtos/task/task-create.dto.ts\");\r\nexports.TaskCreateDto = task_create_dto_1.TaskCreateDto;\r\nvar task_detail_dto_1 = __webpack_require__(/*! ./task/task-detail.dto */ \"./src/_models/dtos/task/task-detail.dto.ts\");\r\nexports.TaskDetailDto = task_detail_dto_1.TaskDetailDto;\r\nvar task_list_dto_1 = __webpack_require__(/*! ./task/task-list.dto */ \"./src/_models/dtos/task/task-list.dto.ts\");\r\nexports.TaskListDto = task_list_dto_1.TaskListDto;\r\nvar task_summary_dto_1 = __webpack_require__(/*! ./task/task-summary.dto */ \"./src/_models/dtos/task/task-summary.dto.ts\");\r\nexports.TaskSummaryDto = task_summary_dto_1.TaskSummaryDto;\r\nvar task_status_update_dto_1 = __webpack_require__(/*! ./task/task-status-update.dto */ \"./src/_models/dtos/task/task-status-update.dto.ts\");\r\nexports.TaskStatusUpdateDto = task_status_update_dto_1.TaskStatusUpdateDto;\r\nvar company_update_dto_1 = __webpack_require__(/*! ./company/company-update.dto */ \"./src/_models/dtos/company/company-update.dto.ts\");\r\nexports.CompanyUpdateDto = company_update_dto_1.CompanyUpdateDto;\r\nvar company_create_dto_1 = __webpack_require__(/*! ./company/company-create.dto */ \"./src/_models/dtos/company/company-create.dto.ts\");\r\nexports.CompanyCreateDto = company_create_dto_1.CompanyCreateDto;\r\nvar company_detail_dto_1 = __webpack_require__(/*! ./company/company-detail.dto */ \"./src/_models/dtos/company/company-detail.dto.ts\");\r\nexports.CompanyDetailDto = company_detail_dto_1.CompanyDetailDto;\r\nvar company_list_dto_1 = __webpack_require__(/*! ./company/company-list.dto */ \"./src/_models/dtos/company/company-list.dto.ts\");\r\nexports.CompanyListDto = company_list_dto_1.CompanyListDto;\r\nvar company_summary_dto_1 = __webpack_require__(/*! ./company/company-summary.dto */ \"./src/_models/dtos/company/company-summary.dto.ts\");\r\nexports.CompanySummaryDto = company_summary_dto_1.CompanySummaryDto;\r\nvar company_user_register_dto_1 = __webpack_require__(/*! ./company/company-user-register.dto */ \"./src/_models/dtos/company/company-user-register.dto.ts\");\r\nexports.CompanyUserRegisterDto = company_user_register_dto_1.CompanyUserRegisterDto;\r\nvar issue_update_dto_1 = __webpack_require__(/*! ./issue/issue-update.dto */ \"./src/_models/dtos/issue/issue-update.dto.ts\");\r\nexports.IssueUpdateDto = issue_update_dto_1.IssueUpdateDto;\r\nvar issue_create_dto_1 = __webpack_require__(/*! ./issue/issue-create.dto */ \"./src/_models/dtos/issue/issue-create.dto.ts\");\r\nexports.IssueCreateDto = issue_create_dto_1.IssueCreateDto;\r\nvar issue_detail_dto_1 = __webpack_require__(/*! ./issue/issue-detail.dto */ \"./src/_models/dtos/issue/issue-detail.dto.ts\");\r\nexports.IssueDetailDto = issue_detail_dto_1.IssueDetailDto;\r\nvar issue_list_dto_1 = __webpack_require__(/*! ./issue/issue-list.dto */ \"./src/_models/dtos/issue/issue-list.dto.ts\");\r\nexports.IssueListDto = issue_list_dto_1.IssueListDto;\r\nvar issue_summary_dto_1 = __webpack_require__(/*! ./issue/issue-summary.dto */ \"./src/_models/dtos/issue/issue-summary.dto.ts\");\r\nexports.IssueSummaryDto = issue_summary_dto_1.IssueSummaryDto;\r\nvar project_update_dto_1 = __webpack_require__(/*! ./project/project-update.dto */ \"./src/_models/dtos/project/project-update.dto.ts\");\r\nexports.ProjectUpdateDto = project_update_dto_1.ProjectUpdateDto;\r\nvar project_create_dto_1 = __webpack_require__(/*! ./project/project-create.dto */ \"./src/_models/dtos/project/project-create.dto.ts\");\r\nexports.ProjectCreateDto = project_create_dto_1.ProjectCreateDto;\r\nvar project_detail_dto_1 = __webpack_require__(/*! ./project/project-detail.dto */ \"./src/_models/dtos/project/project-detail.dto.ts\");\r\nexports.ProjectDetailDto = project_detail_dto_1.ProjectDetailDto;\r\nvar project_list_dto_1 = __webpack_require__(/*! ./project/project-list.dto */ \"./src/_models/dtos/project/project-list.dto.ts\");\r\nexports.ProjectListDto = project_list_dto_1.ProjectListDto;\r\nvar project_summary_dto_1 = __webpack_require__(/*! ./project/project-summary.dto */ \"./src/_models/dtos/project/project-summary.dto.ts\");\r\nexports.ProjectSummaryDto = project_summary_dto_1.ProjectSummaryDto;\r\nvar project_assign_manager_dto_1 = __webpack_require__(/*! ./project/project-assign-manager.dto */ \"./src/_models/dtos/project/project-assign-manager.dto.ts\");\r\nexports.ProjectAssignManagerDto = project_assign_manager_dto_1.ProjectAssignManagerDto;\r\nvar question_update_dto_1 = __webpack_require__(/*! ./question/question-update.dto */ \"./src/_models/dtos/question/question-update.dto.ts\");\r\nexports.QuestionUpdateDto = question_update_dto_1.QuestionUpdateDto;\r\nvar question_create_dto_1 = __webpack_require__(/*! ./question/question-create.dto */ \"./src/_models/dtos/question/question-create.dto.ts\");\r\nexports.QuestionCreateDto = question_create_dto_1.QuestionCreateDto;\r\nvar question_detail_dto_1 = __webpack_require__(/*! ./question/question-detail.dto */ \"./src/_models/dtos/question/question-detail.dto.ts\");\r\nexports.QuestionDetailDto = question_detail_dto_1.QuestionDetailDto;\r\nvar question_list_dto_1 = __webpack_require__(/*! ./question/question-list.dto */ \"./src/_models/dtos/question/question-list.dto.ts\");\r\nexports.QuestionListDto = question_list_dto_1.QuestionListDto;\r\nvar question_summary_dto_1 = __webpack_require__(/*! ./question/question-summary.dto */ \"./src/_models/dtos/question/question-summary.dto.ts\");\r\nexports.QuestionSummaryDto = question_summary_dto_1.QuestionSummaryDto;\r\nvar login_dto_model_1 = __webpack_require__(/*! ./user/login.dto.model */ \"./src/_models/dtos/user/login.dto.model.ts\");\r\nexports.LoginDto = login_dto_model_1.LoginDto;\r\nvar register_dto_1 = __webpack_require__(/*! ./user/register.dto */ \"./src/_models/dtos/user/register.dto.ts\");\r\nexports.RegisterDto = register_dto_1.RegisterDto;\r\nvar user_summary_dto_1 = __webpack_require__(/*! ./user/user-summary.dto */ \"./src/_models/dtos/user/user-summary.dto.ts\");\r\nexports.UserSummaryDto = user_summary_dto_1.UserSummaryDto;\r\nvar status_summary_dto_1 = __webpack_require__(/*! ./status/status-summary.dto */ \"./src/_models/dtos/status/status-summary.dto.ts\");\r\nexports.StatusSummaryDto = status_summary_dto_1.StatusSummaryDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/index.ts?");

/***/ }),

/***/ "./src/_models/dtos/issue/issue-create.dto.ts":
/*!****************************************************!*\
  !*** ./src/_models/dtos/issue/issue-create.dto.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass IssueCreateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], IssueCreateDto.prototype, \"title\", void 0);\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], IssueCreateDto.prototype, \"description\", void 0);\r\n__decorate([\r\n    class_validator_1.IsNotEmpty(),\r\n    __metadata(\"design:type\", Number)\r\n], IssueCreateDto.prototype, \"projectId\", void 0);\r\nexports.IssueCreateDto = IssueCreateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/issue/issue-create.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/issue/issue-detail.dto.ts":
/*!****************************************************!*\
  !*** ./src/_models/dtos/issue/issue-detail.dto.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass IssueDetailDto {\r\n}\r\nexports.IssueDetailDto = IssueDetailDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/issue/issue-detail.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/issue/issue-list.dto.ts":
/*!**************************************************!*\
  !*** ./src/_models/dtos/issue/issue-list.dto.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass IssueListDto {\r\n    constructor() {\r\n        this.commentCount = 0;\r\n    }\r\n}\r\nexports.IssueListDto = IssueListDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/issue/issue-list.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/issue/issue-summary.dto.ts":
/*!*****************************************************!*\
  !*** ./src/_models/dtos/issue/issue-summary.dto.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass IssueSummaryDto {\r\n}\r\nexports.IssueSummaryDto = IssueSummaryDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/issue/issue-summary.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/issue/issue-update.dto.ts":
/*!****************************************************!*\
  !*** ./src/_models/dtos/issue/issue-update.dto.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass IssueUpdateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], IssueUpdateDto.prototype, \"title\", void 0);\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], IssueUpdateDto.prototype, \"description\", void 0);\r\nexports.IssueUpdateDto = IssueUpdateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/issue/issue-update.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/project/project-assign-manager.dto.ts":
/*!****************************************************************!*\
  !*** ./src/_models/dtos/project/project-assign-manager.dto.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass ProjectAssignManagerDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsNumber(),\r\n    __metadata(\"design:type\", Number)\r\n], ProjectAssignManagerDto.prototype, \"userId\", void 0);\r\nexports.ProjectAssignManagerDto = ProjectAssignManagerDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/project/project-assign-manager.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/project/project-create.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/project/project-create.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass ProjectCreateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], ProjectCreateDto.prototype, \"title\", void 0);\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], ProjectCreateDto.prototype, \"description\", void 0);\r\n__decorate([\r\n    class_validator_1.IsNumber(),\r\n    __metadata(\"design:type\", Number)\r\n], ProjectCreateDto.prototype, \"companyId\", void 0);\r\nexports.ProjectCreateDto = ProjectCreateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/project/project-create.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/project/project-detail.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/project/project-detail.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass ProjectDetailDto {\r\n}\r\nexports.ProjectDetailDto = ProjectDetailDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/project/project-detail.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/project/project-list.dto.ts":
/*!******************************************************!*\
  !*** ./src/_models/dtos/project/project-list.dto.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass ProjectListDto {\r\n}\r\nexports.ProjectListDto = ProjectListDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/project/project-list.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/project/project-summary.dto.ts":
/*!*********************************************************!*\
  !*** ./src/_models/dtos/project/project-summary.dto.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass ProjectSummaryDto {\r\n}\r\nexports.ProjectSummaryDto = ProjectSummaryDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/project/project-summary.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/project/project-update.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/project/project-update.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass ProjectUpdateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], ProjectUpdateDto.prototype, \"title\", void 0);\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], ProjectUpdateDto.prototype, \"description\", void 0);\r\nexports.ProjectUpdateDto = ProjectUpdateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/project/project-update.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/question/question-create.dto.ts":
/*!**********************************************************!*\
  !*** ./src/_models/dtos/question/question-create.dto.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass QuestionCreateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], QuestionCreateDto.prototype, \"title\", void 0);\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], QuestionCreateDto.prototype, \"content\", void 0);\r\n__decorate([\r\n    class_validator_1.IsNotEmpty(),\r\n    __metadata(\"design:type\", Number)\r\n], QuestionCreateDto.prototype, \"projectId\", void 0);\r\nexports.QuestionCreateDto = QuestionCreateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/question/question-create.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/question/question-detail.dto.ts":
/*!**********************************************************!*\
  !*** ./src/_models/dtos/question/question-detail.dto.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass QuestionDetailDto {\r\n}\r\nexports.QuestionDetailDto = QuestionDetailDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/question/question-detail.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/question/question-list.dto.ts":
/*!********************************************************!*\
  !*** ./src/_models/dtos/question/question-list.dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass QuestionListDto {\r\n}\r\nexports.QuestionListDto = QuestionListDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/question/question-list.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/question/question-summary.dto.ts":
/*!***********************************************************!*\
  !*** ./src/_models/dtos/question/question-summary.dto.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass QuestionSummaryDto {\r\n}\r\nexports.QuestionSummaryDto = QuestionSummaryDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/question/question-summary.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/question/question-update.dto.ts":
/*!**********************************************************!*\
  !*** ./src/_models/dtos/question/question-update.dto.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass QuestionUpdateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], QuestionUpdateDto.prototype, \"title\", void 0);\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], QuestionUpdateDto.prototype, \"content\", void 0);\r\nexports.QuestionUpdateDto = QuestionUpdateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/question/question-update.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/status/status-summary.dto.ts":
/*!*******************************************************!*\
  !*** ./src/_models/dtos/status/status-summary.dto.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass StatusSummaryDto {\r\n}\r\nexports.StatusSummaryDto = StatusSummaryDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/status/status-summary.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/task/task-create.dto.ts":
/*!**************************************************!*\
  !*** ./src/_models/dtos/task/task-create.dto.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass TaskCreateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], TaskCreateDto.prototype, \"title\", void 0);\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], TaskCreateDto.prototype, \"description\", void 0);\r\n__decorate([\r\n    class_validator_1.IsNotEmpty(),\r\n    __metadata(\"design:type\", Number)\r\n], TaskCreateDto.prototype, \"projectId\", void 0);\r\n__decorate([\r\n    class_validator_1.IsNumber(),\r\n    class_validator_1.IsOptional(),\r\n    __metadata(\"design:type\", Number)\r\n], TaskCreateDto.prototype, \"fromIssueId\", void 0);\r\nexports.TaskCreateDto = TaskCreateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/task/task-create.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/task/task-detail.dto.ts":
/*!**************************************************!*\
  !*** ./src/_models/dtos/task/task-detail.dto.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass TaskDetailDto {\r\n    constructor() {\r\n        this.comments = [];\r\n        this.assignees = [];\r\n        this.comentCount = 0;\r\n    }\r\n}\r\nexports.TaskDetailDto = TaskDetailDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/task/task-detail.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/task/task-list.dto.ts":
/*!************************************************!*\
  !*** ./src/_models/dtos/task/task-list.dto.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass TaskListDto {\r\n    constructor() {\r\n        this.assignees = [];\r\n    }\r\n}\r\nexports.TaskListDto = TaskListDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/task/task-list.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/task/task-status-update.dto.ts":
/*!*********************************************************!*\
  !*** ./src/_models/dtos/task/task-status-update.dto.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass TaskStatusUpdateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsNumber(),\r\n    __metadata(\"design:type\", String)\r\n], TaskStatusUpdateDto.prototype, \"statusId\", void 0);\r\nexports.TaskStatusUpdateDto = TaskStatusUpdateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/task/task-status-update.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/task/task-summary.dto.ts":
/*!***************************************************!*\
  !*** ./src/_models/dtos/task/task-summary.dto.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass TaskSummaryDto {\r\n    constructor() {\r\n        this.assignees = [];\r\n        this.comentCount = 0;\r\n    }\r\n}\r\nexports.TaskSummaryDto = TaskSummaryDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/task/task-summary.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/task/task-update.dto.ts":
/*!**************************************************!*\
  !*** ./src/_models/dtos/task/task-update.dto.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass TaskUpdateDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], TaskUpdateDto.prototype, \"title\", void 0);\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], TaskUpdateDto.prototype, \"description\", void 0);\r\nexports.TaskUpdateDto = TaskUpdateDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/task/task-update.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/user/login.dto.model.ts":
/*!**************************************************!*\
  !*** ./src/_models/dtos/user/login.dto.model.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass LoginDto {\r\n}\r\n__decorate([\r\n    class_validator_1.IsEmail(),\r\n    __metadata(\"design:type\", String)\r\n], LoginDto.prototype, \"email\", void 0);\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], LoginDto.prototype, \"password\", void 0);\r\nexports.LoginDto = LoginDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/user/login.dto.model.ts?");

/***/ }),

/***/ "./src/_models/dtos/user/register.dto.ts":
/*!***********************************************!*\
  !*** ./src/_models/dtos/user/register.dto.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nclass RegisterDto {\r\n}\r\n__decorate([\r\n    class_validator_1.Length(2, 20),\r\n    __metadata(\"design:type\", String)\r\n], RegisterDto.prototype, \"name\", void 0);\r\n__decorate([\r\n    class_validator_1.Length(2, 20),\r\n    __metadata(\"design:type\", String)\r\n], RegisterDto.prototype, \"surname\", void 0);\r\n__decorate([\r\n    class_validator_1.Length(5, 20),\r\n    __metadata(\"design:type\", String)\r\n], RegisterDto.prototype, \"username\", void 0);\r\n__decorate([\r\n    class_validator_1.IsEmail(),\r\n    __metadata(\"design:type\", String)\r\n], RegisterDto.prototype, \"email\", void 0);\r\n__decorate([\r\n    class_validator_1.IsString(),\r\n    __metadata(\"design:type\", String)\r\n], RegisterDto.prototype, \"password\", void 0);\r\nexports.RegisterDto = RegisterDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/user/register.dto.ts?");

/***/ }),

/***/ "./src/_models/dtos/user/user-summary.dto.ts":
/*!***************************************************!*\
  !*** ./src/_models/dtos/user/user-summary.dto.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass UserSummaryDto {\r\n}\r\nexports.UserSummaryDto = UserSummaryDto;\r\n\n\n//# sourceURL=webpack:///./src/_models/dtos/user/user-summary.dto.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\nconst compression = __webpack_require__(/*! compression */ \"compression\");\r\nconst cors = __webpack_require__(/*! cors */ \"cors\");\r\nconst errorHandler = __webpack_require__(/*! errorhandler */ \"errorhandler\");\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\nconst expressStatusMonitor = __webpack_require__(/*! express-status-monitor */ \"express-status-monitor\");\r\nconst helmet = __webpack_require__(/*! helmet */ \"helmet\");\r\nconst methodOverride = __webpack_require__(/*! method-override */ \"method-override\");\r\nconst morgan = __webpack_require__(/*! morgan */ \"morgan\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst _routes_1 = __webpack_require__(/*! ./@routes */ \"./src/@routes/index.ts\");\r\nconst ioc_1 = __webpack_require__(/*! ./ioc */ \"./src/ioc/index.ts\");\r\nconst appConfig = __webpack_require__(/*! ./common/app-config */ \"./src/common/app-config.ts\");\r\n// import { logger } from './services';\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\n/**\r\n * The server.\r\n *\r\n * @class Server\r\n */\r\nclass Server {\r\n    /**\r\n     * Bootstrap the application.\r\n     *\r\n     * @class Server\r\n     * @method bootstrap\r\n     * @static\r\n     */\r\n    static bootstrap() {\r\n        return new Server();\r\n    }\r\n    /**\r\n     * Constructor.\r\n     *\r\n     * @class Server\r\n     * @constructor\r\n     */\r\n    constructor() {\r\n        ioc_1.IOC.configureContainer();\r\n        // create expressjs application\r\n        this.app = express();\r\n        // configure application\r\n        this.config();\r\n        // add routes\r\n        _routes_1.RouteBinder.configureRoutes(this.app);\r\n    }\r\n    /**\r\n     * Configure application\r\n     *\r\n     * @class Server\r\n     * @method config\r\n     */\r\n    config() {\r\n        // add static paths\r\n        this.app.use(express.static(path.join(__dirname, 'public')));\r\n        // mount logger\r\n        // this.app.use(morgan('tiny', {\r\n        //   stream: {\r\n        //     write: (message: string) => logger.info(message.trim()),\r\n        //   },\r\n        // } as morgan.Options));\r\n        this.app.use(morgan('dev'));\r\n        // mount json form parser\r\n        this.app.use(bodyParser.json({ limit: '50mb' }));\r\n        // mount query string parser\r\n        this.app.use(bodyParser.urlencoded({\r\n            extended: true,\r\n        }));\r\n        // mount override?\r\n        this.app.use(helmet());\r\n        this.app.use(cors());\r\n        this.app.use(compression());\r\n        this.app.use(methodOverride());\r\n        this.app.use(expressStatusMonitor());\r\n        // catch 404 and forward to error handler\r\n        this.app.use((err, req, res, next) => {\r\n            err.status = 404;\r\n            next(err);\r\n        });\r\n        // error handling\r\n        this.app.use(errorHandler());\r\n        typeorm_1.createConnection(appConfig.dbOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {\r\n            console.log(__dirname);\r\n            console.log(\"SERVER STARTED\");\r\n        })).catch(error => console.log(\"TypeORM connection error: \", error));\r\n    }\r\n}\r\nexports.Server = Server;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/common/app-config.ts":
/*!**********************************!*\
  !*** ./src/common/app-config.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst status_entity_1 = __webpack_require__(/*! ./../entities/status.entity */ \"./src/entities/status.entity.ts\");\r\nconst issue_entity_1 = __webpack_require__(/*! ./../entities/issue.entity */ \"./src/entities/issue.entity.ts\");\r\nconst answer_entity_1 = __webpack_require__(/*! ./../entities/answer.entity */ \"./src/entities/answer.entity.ts\");\r\nconst question_entity_1 = __webpack_require__(/*! ./../entities/question.entity */ \"./src/entities/question.entity.ts\");\r\nconst company_entity_1 = __webpack_require__(/*! ./../entities/company.entity */ \"./src/entities/company.entity.ts\");\r\nconst project_entity_1 = __webpack_require__(/*! ./../entities/project.entity */ \"./src/entities/project.entity.ts\");\r\nconst company_member_entity_1 = __webpack_require__(/*! @entities/company-member.entity */ \"./src/entities/company-member.entity.ts\");\r\nconst entities_1 = __webpack_require__(/*! ./../entities */ \"./src/entities/index.ts\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nexports.dbOptions = {\r\n    type: \"mysql\",\r\n    host: \"localhost\",\r\n    port: 3306,\r\n    username: \"root\",\r\n    password: \"123456\",\r\n    database: \"pyudb\",\r\n    entities: [\r\n        entities_1.TaskEntity,\r\n        entities_1.CommentEntity,\r\n        entities_1.UserEntity,\r\n        project_entity_1.ProjectEntity,\r\n        company_entity_1.CompanyEntity,\r\n        question_entity_1.QuestionEntity,\r\n        answer_entity_1.AnswerEntity,\r\n        issue_entity_1.IssueEntity,\r\n        status_entity_1.StatusEntity,\r\n        company_member_entity_1.CompanyMemberEntity\r\n    ],\r\n    synchronize: true,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/app-config.ts?");

/***/ }),

/***/ "./src/entities/answer.entity.ts":
/*!***************************************!*\
  !*** ./src/entities/answer.entity.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\r\nconst question_entity_1 = __webpack_require__(/*! ./question.entity */ \"./src/entities/question.entity.ts\");\r\nlet AnswerEntity = class AnswerEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], AnswerEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], AnswerEntity.prototype, \"content\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], AnswerEntity.prototype, \"creatorId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.answers),\r\n    typeorm_1.JoinColumn({ name: \"creatorId\" }),\r\n    __metadata(\"design:type\", user_entity_1.UserEntity)\r\n], AnswerEntity.prototype, \"creator\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], AnswerEntity.prototype, \"questionId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => question_entity_1.QuestionEntity, question => question.answers),\r\n    typeorm_1.JoinColumn({ name: \"questionId\" }),\r\n    __metadata(\"design:type\", question_entity_1.QuestionEntity)\r\n], AnswerEntity.prototype, \"question\", void 0);\r\nAnswerEntity = __decorate([\r\n    typeorm_1.Entity(\"answer\")\r\n], AnswerEntity);\r\nexports.AnswerEntity = AnswerEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/answer.entity.ts?");

/***/ }),

/***/ "./src/entities/comment.entity.ts":
/*!****************************************!*\
  !*** ./src/entities/comment.entity.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst task_entity_1 = __webpack_require__(/*! ./task.entity */ \"./src/entities/task.entity.ts\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\r\nlet CommentEntity = class CommentEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], CommentEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 400\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], CommentEntity.prototype, \"content\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], CommentEntity.prototype, \"taskId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => task_entity_1.TaskEntity, task => task.comments),\r\n    typeorm_1.JoinColumn({ name: \"taskId\" }),\r\n    __metadata(\"design:type\", task_entity_1.TaskEntity)\r\n], CommentEntity.prototype, \"task\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], CommentEntity.prototype, \"userId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.comments),\r\n    typeorm_1.JoinColumn({ name: \"userId\" }),\r\n    __metadata(\"design:type\", user_entity_1.UserEntity)\r\n], CommentEntity.prototype, \"creator\", void 0);\r\nCommentEntity = __decorate([\r\n    typeorm_1.Entity(\"comment\")\r\n], CommentEntity);\r\nexports.CommentEntity = CommentEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/comment.entity.ts?");

/***/ }),

/***/ "./src/entities/company-member.entity.ts":
/*!***********************************************!*\
  !*** ./src/entities/company-member.entity.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\r\nconst company_entity_1 = __webpack_require__(/*! ./company.entity */ \"./src/entities/company.entity.ts\");\r\nlet CompanyMemberEntity = class CompanyMemberEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], CompanyMemberEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], CompanyMemberEntity.prototype, \"userId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.memberships),\r\n    typeorm_1.JoinColumn({ name: \"userId\" }),\r\n    __metadata(\"design:type\", user_entity_1.UserEntity)\r\n], CompanyMemberEntity.prototype, \"user\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], CompanyMemberEntity.prototype, \"companyId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => company_entity_1.CompanyEntity, company => company.members),\r\n    typeorm_1.JoinColumn({ name: \"companyId\" }),\r\n    __metadata(\"design:type\", company_entity_1.CompanyEntity)\r\n], CompanyMemberEntity.prototype, \"company\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"datetime\"),\r\n    __metadata(\"design:type\", Date)\r\n], CompanyMemberEntity.prototype, \"joiningDate\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"datetime\", { nullable: true }),\r\n    __metadata(\"design:type\", Date)\r\n], CompanyMemberEntity.prototype, \"leavingDate\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], CompanyMemberEntity.prototype, \"status\", void 0);\r\nCompanyMemberEntity = __decorate([\r\n    typeorm_1.Entity(\"company_member\")\r\n], CompanyMemberEntity);\r\nexports.CompanyMemberEntity = CompanyMemberEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/company-member.entity.ts?");

/***/ }),

/***/ "./src/entities/company.entity.ts":
/*!****************************************!*\
  !*** ./src/entities/company.entity.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\r\nconst project_entity_1 = __webpack_require__(/*! ./project.entity */ \"./src/entities/project.entity.ts\");\r\nconst company_member_entity_1 = __webpack_require__(/*! ./company-member.entity */ \"./src/entities/company-member.entity.ts\");\r\nlet CompanyEntity = class CompanyEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], CompanyEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], CompanyEntity.prototype, \"name\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], CompanyEntity.prototype, \"description\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => project_entity_1.ProjectEntity, project => project.company),\r\n    __metadata(\"design:type\", Array)\r\n], CompanyEntity.prototype, \"projects\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => company_member_entity_1.CompanyMemberEntity, cmem => cmem.company),\r\n    __metadata(\"design:type\", Array)\r\n], CompanyEntity.prototype, \"members\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], CompanyEntity.prototype, \"ownerId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.ownedCompanies),\r\n    typeorm_1.JoinColumn({ name: \"ownerId\" }),\r\n    __metadata(\"design:type\", user_entity_1.UserEntity)\r\n], CompanyEntity.prototype, \"owner\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => user_entity_1.UserEntity, user => user.requestedCompanies),\r\n    typeorm_1.JoinTable(),\r\n    __metadata(\"design:type\", Array)\r\n], CompanyEntity.prototype, \"requestedUsers\", void 0);\r\nCompanyEntity = __decorate([\r\n    typeorm_1.Entity(\"company\")\r\n], CompanyEntity);\r\nexports.CompanyEntity = CompanyEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/company.entity.ts?");

/***/ }),

/***/ "./src/entities/index.ts":
/*!*******************************!*\
  !*** ./src/entities/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar comment_entity_1 = __webpack_require__(/*! ./comment.entity */ \"./src/entities/comment.entity.ts\");\r\nexports.CommentEntity = comment_entity_1.CommentEntity;\r\nvar task_entity_1 = __webpack_require__(/*! ./task.entity */ \"./src/entities/task.entity.ts\");\r\nexports.TaskEntity = task_entity_1.TaskEntity;\r\nvar user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\r\nexports.UserEntity = user_entity_1.UserEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/index.ts?");

/***/ }),

/***/ "./src/entities/issue.entity.ts":
/*!**************************************!*\
  !*** ./src/entities/issue.entity.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst project_entity_1 = __webpack_require__(/*! ./project.entity */ \"./src/entities/project.entity.ts\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\r\nconst task_entity_1 = __webpack_require__(/*! ./task.entity */ \"./src/entities/task.entity.ts\");\r\nlet IssueEntity = class IssueEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], IssueEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], IssueEntity.prototype, \"title\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], IssueEntity.prototype, \"description\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.fromIssue),\r\n    __metadata(\"design:type\", Array)\r\n], IssueEntity.prototype, \"tasks\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], IssueEntity.prototype, \"creatorId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdIssues),\r\n    typeorm_1.JoinColumn({ name: \"creatorId\" }),\r\n    __metadata(\"design:type\", user_entity_1.UserEntity)\r\n], IssueEntity.prototype, \"creator\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], IssueEntity.prototype, \"projectId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => project_entity_1.ProjectEntity, project => project.issues),\r\n    typeorm_1.JoinColumn({ name: \"projectId\" }),\r\n    __metadata(\"design:type\", project_entity_1.ProjectEntity)\r\n], IssueEntity.prototype, \"project\", void 0);\r\nIssueEntity = __decorate([\r\n    typeorm_1.Entity(\"issue\")\r\n], IssueEntity);\r\nexports.IssueEntity = IssueEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/issue.entity.ts?");

/***/ }),

/***/ "./src/entities/project.entity.ts":
/*!****************************************!*\
  !*** ./src/entities/project.entity.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst issue_entity_1 = __webpack_require__(/*! ./issue.entity */ \"./src/entities/issue.entity.ts\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\r\nconst task_entity_1 = __webpack_require__(/*! ./task.entity */ \"./src/entities/task.entity.ts\");\r\nconst company_entity_1 = __webpack_require__(/*! ./company.entity */ \"./src/entities/company.entity.ts\");\r\nconst status_entity_1 = __webpack_require__(/*! ./status.entity */ \"./src/entities/status.entity.ts\");\r\nlet ProjectEntity = class ProjectEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], ProjectEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], ProjectEntity.prototype, \"title\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], ProjectEntity.prototype, \"description\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.project),\r\n    __metadata(\"design:type\", Array)\r\n], ProjectEntity.prototype, \"tasks\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => status_entity_1.StatusEntity, status => status.project),\r\n    __metadata(\"design:type\", Array)\r\n], ProjectEntity.prototype, \"statuses\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => issue_entity_1.IssueEntity, issue => issue.project),\r\n    __metadata(\"design:type\", Array)\r\n], ProjectEntity.prototype, \"issues\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], ProjectEntity.prototype, \"companyId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => company_entity_1.CompanyEntity, company => company.projects),\r\n    typeorm_1.JoinColumn({ name: \"companyId\" }),\r\n    __metadata(\"design:type\", company_entity_1.CompanyEntity)\r\n], ProjectEntity.prototype, \"company\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], ProjectEntity.prototype, \"userId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdProjects),\r\n    typeorm_1.JoinColumn({ name: \"userId\" }),\r\n    __metadata(\"design:type\", user_entity_1.UserEntity)\r\n], ProjectEntity.prototype, \"creator\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => user_entity_1.UserEntity, user => user.projects),\r\n    typeorm_1.JoinTable(),\r\n    __metadata(\"design:type\", Array)\r\n], ProjectEntity.prototype, \"users\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => user_entity_1.UserEntity, user => user.managedProjects),\r\n    typeorm_1.JoinTable(),\r\n    __metadata(\"design:type\", Array)\r\n], ProjectEntity.prototype, \"managers\", void 0);\r\nProjectEntity = __decorate([\r\n    typeorm_1.Entity(\"project\")\r\n], ProjectEntity);\r\nexports.ProjectEntity = ProjectEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/project.entity.ts?");

/***/ }),

/***/ "./src/entities/question.entity.ts":
/*!*****************************************!*\
  !*** ./src/entities/question.entity.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst project_entity_1 = __webpack_require__(/*! ./project.entity */ \"./src/entities/project.entity.ts\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\r\nconst answer_entity_1 = __webpack_require__(/*! ./answer.entity */ \"./src/entities/answer.entity.ts\");\r\nlet QuestionEntity = class QuestionEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], QuestionEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], QuestionEntity.prototype, \"title\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], QuestionEntity.prototype, \"content\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => answer_entity_1.AnswerEntity, answer => answer.question),\r\n    __metadata(\"design:type\", Array)\r\n], QuestionEntity.prototype, \"answers\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], QuestionEntity.prototype, \"creatorId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.questions),\r\n    typeorm_1.JoinColumn({ name: \"creatorId\" }),\r\n    __metadata(\"design:type\", user_entity_1.UserEntity)\r\n], QuestionEntity.prototype, \"creator\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], QuestionEntity.prototype, \"projectId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => project_entity_1.ProjectEntity, project => project.tasks),\r\n    typeorm_1.JoinColumn({ name: \"projectId\" }),\r\n    __metadata(\"design:type\", project_entity_1.ProjectEntity)\r\n], QuestionEntity.prototype, \"project\", void 0);\r\nQuestionEntity = __decorate([\r\n    typeorm_1.Entity(\"question\")\r\n], QuestionEntity);\r\nexports.QuestionEntity = QuestionEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/question.entity.ts?");

/***/ }),

/***/ "./src/entities/status.entity.ts":
/*!***************************************!*\
  !*** ./src/entities/status.entity.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst task_entity_1 = __webpack_require__(/*! ./task.entity */ \"./src/entities/task.entity.ts\");\r\nconst project_entity_1 = __webpack_require__(/*! ./project.entity */ \"./src/entities/project.entity.ts\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\r\nlet StatusEntity = class StatusEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], StatusEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], StatusEntity.prototype, \"title\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], StatusEntity.prototype, \"description\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], StatusEntity.prototype, \"baseStatus\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], StatusEntity.prototype, \"order\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.status),\r\n    __metadata(\"design:type\", Array)\r\n], StatusEntity.prototype, \"tasks\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], StatusEntity.prototype, \"creatorId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdStatuses),\r\n    typeorm_1.JoinColumn({ name: \"creatorId\" }),\r\n    __metadata(\"design:type\", user_entity_1.UserEntity)\r\n], StatusEntity.prototype, \"creator\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], StatusEntity.prototype, \"projectId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => project_entity_1.ProjectEntity, project => project.statuses),\r\n    typeorm_1.JoinColumn({ name: \"projectId\" }),\r\n    __metadata(\"design:type\", project_entity_1.ProjectEntity)\r\n], StatusEntity.prototype, \"project\", void 0);\r\nStatusEntity = __decorate([\r\n    typeorm_1.Entity(\"status\")\r\n], StatusEntity);\r\nexports.StatusEntity = StatusEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/status.entity.ts?");

/***/ }),

/***/ "./src/entities/task.entity.ts":
/*!*************************************!*\
  !*** ./src/entities/task.entity.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst issue_entity_1 = __webpack_require__(/*! ./issue.entity */ \"./src/entities/issue.entity.ts\");\r\nconst project_entity_1 = __webpack_require__(/*! ./project.entity */ \"./src/entities/project.entity.ts\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst comment_entity_1 = __webpack_require__(/*! ./comment.entity */ \"./src/entities/comment.entity.ts\");\r\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\r\nconst status_entity_1 = __webpack_require__(/*! ./status.entity */ \"./src/entities/status.entity.ts\");\r\nlet TaskEntity = class TaskEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], TaskEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], TaskEntity.prototype, \"title\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], TaskEntity.prototype, \"description\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => comment_entity_1.CommentEntity, comment => comment.task),\r\n    __metadata(\"design:type\", Array)\r\n], TaskEntity.prototype, \"comments\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], TaskEntity.prototype, \"creatorId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdTasks),\r\n    typeorm_1.JoinColumn({ name: \"creatorId\" }),\r\n    __metadata(\"design:type\", user_entity_1.UserEntity)\r\n], TaskEntity.prototype, \"creator\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], TaskEntity.prototype, \"projectId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => project_entity_1.ProjectEntity, project => project.tasks),\r\n    typeorm_1.JoinColumn({ name: \"projectId\" }),\r\n    __metadata(\"design:type\", project_entity_1.ProjectEntity)\r\n], TaskEntity.prototype, \"project\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], TaskEntity.prototype, \"statusId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => status_entity_1.StatusEntity, status => status.tasks),\r\n    typeorm_1.JoinColumn({ name: \"statusId\" }),\r\n    __metadata(\"design:type\", status_entity_1.StatusEntity)\r\n], TaskEntity.prototype, \"status\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\", { nullable: true }),\r\n    __metadata(\"design:type\", Number)\r\n], TaskEntity.prototype, \"fromIssueId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => issue_entity_1.IssueEntity, issue => issue.tasks),\r\n    typeorm_1.JoinColumn({ name: \"fromIssueId\" }),\r\n    __metadata(\"design:type\", issue_entity_1.IssueEntity)\r\n], TaskEntity.prototype, \"fromIssue\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => user_entity_1.UserEntity, user => user.assignedTasks),\r\n    typeorm_1.JoinTable(),\r\n    __metadata(\"design:type\", Array)\r\n], TaskEntity.prototype, \"assignees\", void 0);\r\nTaskEntity = __decorate([\r\n    typeorm_1.Entity(\"task\")\r\n], TaskEntity);\r\nexports.TaskEntity = TaskEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/task.entity.ts?");

/***/ }),

/***/ "./src/entities/user.entity.ts":
/*!*************************************!*\
  !*** ./src/entities/user.entity.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst issue_entity_1 = __webpack_require__(/*! ./issue.entity */ \"./src/entities/issue.entity.ts\");\r\nconst comment_entity_1 = __webpack_require__(/*! ./comment.entity */ \"./src/entities/comment.entity.ts\");\r\nconst question_entity_1 = __webpack_require__(/*! ./question.entity */ \"./src/entities/question.entity.ts\");\r\nconst company_entity_1 = __webpack_require__(/*! ./company.entity */ \"./src/entities/company.entity.ts\");\r\nconst task_entity_1 = __webpack_require__(/*! ./task.entity */ \"./src/entities/task.entity.ts\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst project_entity_1 = __webpack_require__(/*! ./project.entity */ \"./src/entities/project.entity.ts\");\r\nconst answer_entity_1 = __webpack_require__(/*! ./answer.entity */ \"./src/entities/answer.entity.ts\");\r\nconst status_entity_1 = __webpack_require__(/*! ./status.entity */ \"./src/entities/status.entity.ts\");\r\nconst company_member_entity_1 = __webpack_require__(/*! ./company-member.entity */ \"./src/entities/company-member.entity.ts\");\r\nlet UserEntity = class UserEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], UserEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], UserEntity.prototype, \"name\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], UserEntity.prototype, \"surname\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], UserEntity.prototype, \"username\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], UserEntity.prototype, \"email\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], UserEntity.prototype, \"password\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(),\r\n    __metadata(\"design:type\", Date)\r\n], UserEntity.prototype, \"createdAt\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"createdTasks\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => project_entity_1.ProjectEntity, project => project.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"createdProjects\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => company_member_entity_1.CompanyMemberEntity, cmem => cmem.user),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"memberships\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => company_entity_1.CompanyEntity, company => company.owner),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"ownedCompanies\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => question_entity_1.QuestionEntity, question => question.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"questions\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => answer_entity_1.AnswerEntity, answer => answer.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"answers\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => comment_entity_1.CommentEntity, comment => comment.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"comments\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => issue_entity_1.IssueEntity, issue => issue.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"createdIssues\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => status_entity_1.StatusEntity, status => status.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"createdStatuses\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => project_entity_1.ProjectEntity, project => project.users),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"projects\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => task_entity_1.TaskEntity, task => task.assignees),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"assignedTasks\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => company_entity_1.CompanyEntity, company => company.requestedUsers),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"requestedCompanies\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => project_entity_1.ProjectEntity, project => project.managers),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"managedProjects\", void 0);\r\nUserEntity = __decorate([\r\n    typeorm_1.Entity(\"user\")\r\n], UserEntity);\r\nexports.UserEntity = UserEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/user.entity.ts?");

/***/ }),

/***/ "./src/enums/base-status.enum.ts":
/*!***************************************!*\
  !*** ./src/enums/base-status.enum.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar BaseStatus;\r\n(function (BaseStatus) {\r\n    BaseStatus[BaseStatus[\"PLANNINING\"] = 0] = \"PLANNINING\";\r\n    BaseStatus[BaseStatus[\"NOT_STARTED\"] = 1] = \"NOT_STARTED\";\r\n    BaseStatus[BaseStatus[\"IN_PROGRESS\"] = 2] = \"IN_PROGRESS\";\r\n    BaseStatus[BaseStatus[\"FINISHED\"] = 3] = \"FINISHED\";\r\n})(BaseStatus = exports.BaseStatus || (exports.BaseStatus = {}));\r\n\n\n//# sourceURL=webpack:///./src/enums/base-status.enum.ts?");

/***/ }),

/***/ "./src/enums/company-roles.enum.ts":
/*!*****************************************!*\
  !*** ./src/enums/company-roles.enum.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CompanyRoles;\r\n(function (CompanyRoles) {\r\n    CompanyRoles[CompanyRoles[\"ADMIN\"] = 0] = \"ADMIN\";\r\n    CompanyRoles[CompanyRoles[\"MODERATOR\"] = 1] = \"MODERATOR\";\r\n})(CompanyRoles = exports.CompanyRoles || (exports.CompanyRoles = {}));\r\n\n\n//# sourceURL=webpack:///./src/enums/company-roles.enum.ts?");

/***/ }),

/***/ "./src/enums/index.ts":
/*!****************************!*\
  !*** ./src/enums/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar project_auth_types_enum_1 = __webpack_require__(/*! ./project-auth-types.enum */ \"./src/enums/project-auth-types.enum.ts\");\r\nexports.ProjectAuthTypes = project_auth_types_enum_1.ProjectAuthTypes;\r\nvar company_roles_enum_1 = __webpack_require__(/*! ./company-roles.enum */ \"./src/enums/company-roles.enum.ts\");\r\nexports.CompanyRoles = company_roles_enum_1.CompanyRoles;\r\nvar base_status_enum_1 = __webpack_require__(/*! ./base-status.enum */ \"./src/enums/base-status.enum.ts\");\r\nexports.BaseStatus = base_status_enum_1.BaseStatus;\r\n\n\n//# sourceURL=webpack:///./src/enums/index.ts?");

/***/ }),

/***/ "./src/enums/project-auth-types.enum.ts":
/*!**********************************************!*\
  !*** ./src/enums/project-auth-types.enum.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ProjectAuthTypes;\r\n(function (ProjectAuthTypes) {\r\n    ProjectAuthTypes[ProjectAuthTypes[\"ADMIN\"] = 0] = \"ADMIN\";\r\n    ProjectAuthTypes[ProjectAuthTypes[\"MANAGER\"] = 1] = \"MANAGER\";\r\n    ProjectAuthTypes[ProjectAuthTypes[\"USER\"] = 3] = \"USER\";\r\n})(ProjectAuthTypes = exports.ProjectAuthTypes || (exports.ProjectAuthTypes = {}));\r\n\n\n//# sourceURL=webpack:///./src/enums/project-auth-types.enum.ts?");

/***/ }),

/***/ "./src/errors/app-error.ts":
/*!*********************************!*\
  !*** ./src/errors/app-error.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass AppError extends Error {\r\n    constructor(name, message, status) {\r\n        super(message);\r\n        this.name = name;\r\n        Error.captureStackTrace(this, this.constructor);\r\n        this.status = status || 500;\r\n    }\r\n}\r\nexports.AppError = AppError;\r\n\n\n//# sourceURL=webpack:///./src/errors/app-error.ts?");

/***/ }),

/***/ "./src/errors/error-handler.ts":
/*!*************************************!*\
  !*** ./src/errors/error-handler.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst helpers_1 = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.ts\");\r\nconst app_error_1 = __webpack_require__(/*! ./app-error */ \"./src/errors/app-error.ts\");\r\nvar ErrorHandler;\r\n(function (ErrorHandler) {\r\n    function handleErrorResponses(error, res, Method = 'unknown', Controller = 'unknown') {\r\n        let status = 500;\r\n        let _errorMessage;\r\n        if (helpers_1.Helpers.isJson(error.message))\r\n            _errorMessage = JSON.parse(error.message);\r\n        else\r\n            _errorMessage = error.message;\r\n        if (error instanceof app_error_1.AppError) {\r\n            status = error.status;\r\n        }\r\n        console.log(`ERROR at Method: ${Method} , Controller: ${Controller}`);\r\n        console.log('Error Name :', error.name);\r\n        console.log('Error Message :', _errorMessage);\r\n        console.log('Error StackTrace :', error.stack);\r\n        return res.status(status).json({\r\n            success: false,\r\n            error: {\r\n                name: error.name,\r\n                message: _errorMessage\r\n            }\r\n        });\r\n    }\r\n    ErrorHandler.handleErrorResponses = handleErrorResponses;\r\n})(ErrorHandler = exports.ErrorHandler || (exports.ErrorHandler = {}));\r\n\n\n//# sourceURL=webpack:///./src/errors/error-handler.ts?");

/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Helpers;\r\n(function (Helpers) {\r\n    function isJson(item) {\r\n        item = typeof item !== \"string\"\r\n            ? JSON.stringify(item)\r\n            : item;\r\n        try {\r\n            item = JSON.parse(item);\r\n        }\r\n        catch (e) {\r\n            return false;\r\n        }\r\n        if (typeof item === \"object\" && item !== null) {\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    Helpers.isJson = isJson;\r\n})(Helpers = exports.Helpers || (exports.Helpers = {}));\r\n\n\n//# sourceURL=webpack:///./src/helpers/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst config = __webpack_require__(/*! config */ \"config\");\r\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst swaggerUi = __webpack_require__(/*! swagger-ui-express */ \"swagger-ui-express\");\r\nconst swaggerDocument = __webpack_require__(/*! ./swagger.json */ \"./src/swagger.json\");\r\nexports.app = app_1.Server.bootstrap().app;\r\nexports.server = exports.app.listen(config.get('port'), () => {\r\n    exports.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/ioc/index.ts":
/*!**************************!*\
  !*** ./src/ioc/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar inject_types_1 = __webpack_require__(/*! ./inject-types */ \"./src/ioc/inject-types.ts\");\r\nexports.InjectTypes = inject_types_1.InjectTypes;\r\nvar ioc_config_1 = __webpack_require__(/*! ./ioc.config */ \"./src/ioc/ioc.config.ts\");\r\nexports.IOC = ioc_config_1.IOC;\r\n\n\n//# sourceURL=webpack:///./src/ioc/index.ts?");

/***/ }),

/***/ "./src/ioc/inject-types.ts":
/*!*********************************!*\
  !*** ./src/ioc/inject-types.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar InjectTypes;\r\n(function (InjectTypes) {\r\n    let Repository;\r\n    (function (Repository) {\r\n        Repository[\"ANSWER\"] = \"AnswerRepository\";\r\n        Repository[\"COMMENT\"] = \"CommentRepository\";\r\n        Repository[\"COMPANY\"] = \"CompanyRepository\";\r\n        Repository[\"ISSUE\"] = \"IssueRepository\";\r\n        Repository[\"PROJECT\"] = \"ProjectRepository\";\r\n        Repository[\"QUESTION\"] = \"QuestionRepository\";\r\n        Repository[\"STATUS\"] = \"StatusRepository\";\r\n        Repository[\"TASK\"] = \"TaskRepository\";\r\n        Repository[\"USER\"] = \"UserRepository\";\r\n        Repository[\"COMPANY_MEMBER\"] = \"CompanyMemberRepository\";\r\n    })(Repository = InjectTypes.Repository || (InjectTypes.Repository = {}));\r\n    let Service;\r\n    (function (Service) {\r\n        Service[\"ANSWER\"] = \"AnswerService\";\r\n        Service[\"COMMENT\"] = \"CommentService\";\r\n        Service[\"COMPANY\"] = \"CompanyService\";\r\n        Service[\"ISSUE\"] = \"IssueService\";\r\n        Service[\"PROJECT\"] = \"ProjectService\";\r\n        Service[\"QUESTION\"] = \"QuestionService\";\r\n        Service[\"TASK\"] = \"TaskService\";\r\n        Service[\"USER\"] = \"UserService\";\r\n    })(Service = InjectTypes.Service || (InjectTypes.Service = {}));\r\n})(InjectTypes = exports.InjectTypes || (exports.InjectTypes = {}));\r\n\n\n//# sourceURL=webpack:///./src/ioc/inject-types.ts?");

/***/ }),

/***/ "./src/ioc/ioc.config.ts":
/*!*******************************!*\
  !*** ./src/ioc/ioc.config.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst answer_controller_1 = __webpack_require__(/*! ../@controllers/answer.controller */ \"./src/@controllers/answer.controller.ts\");\r\nconst comment_controller_1 = __webpack_require__(/*! ../@controllers/comment.controller */ \"./src/@controllers/comment.controller.ts\");\r\nconst company_controller_1 = __webpack_require__(/*! ../@controllers/company.controller */ \"./src/@controllers/company.controller.ts\");\r\nconst issue_controller_1 = __webpack_require__(/*! ../@controllers/issue.controller */ \"./src/@controllers/issue.controller.ts\");\r\nconst project_controller_1 = __webpack_require__(/*! ../@controllers/project.controller */ \"./src/@controllers/project.controller.ts\");\r\nconst question_controller_1 = __webpack_require__(/*! ../@controllers/question.controller */ \"./src/@controllers/question.controller.ts\");\r\nconst task_controller_1 = __webpack_require__(/*! ../@controllers/task.controller */ \"./src/@controllers/task.controller.ts\");\r\nconst user_controller_1 = __webpack_require__(/*! ../@controllers/user.controller */ \"./src/@controllers/user.controller.ts\");\r\nconst concrete_1 = __webpack_require__(/*! ./../@repository/concrete */ \"./src/@repository/concrete/index.ts\");\r\nconst concrete_2 = __webpack_require__(/*! ./../@services/concrete */ \"./src/@services/concrete/index.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst inject_types_1 = __webpack_require__(/*! ./inject-types */ \"./src/ioc/inject-types.ts\");\r\nvar IOC;\r\n(function (IOC) {\r\n    IOC.container = new inversify_1.Container();\r\n    function configureContainer() {\r\n        //CONTROLLERS\r\n        IOC.container\r\n            .bind(answer_controller_1.AnswerController)\r\n            .toSelf();\r\n        IOC.container\r\n            .bind(comment_controller_1.CommentController)\r\n            .toSelf();\r\n        IOC.container\r\n            .bind(company_controller_1.CompanyController)\r\n            .toSelf();\r\n        IOC.container\r\n            .bind(issue_controller_1.IssueController)\r\n            .toSelf();\r\n        IOC.container\r\n            .bind(project_controller_1.ProjectController)\r\n            .toSelf();\r\n        IOC.container\r\n            .bind(question_controller_1.QuestionController)\r\n            .toSelf();\r\n        IOC.container\r\n            .bind(task_controller_1.TaskController)\r\n            .toSelf();\r\n        IOC.container\r\n            .bind(user_controller_1.UserController)\r\n            .toSelf();\r\n        // REPOSITORIES\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.ANSWER)\r\n            .to(concrete_1.AnswerRepository);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.COMMENT)\r\n            .to(concrete_1.CommentRepository);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.COMPANY)\r\n            .to(concrete_1.CompanyRepository);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.COMPANY_MEMBER)\r\n            .to(concrete_1.CompanyMemberRepository);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.ISSUE)\r\n            .to(concrete_1.IssueRepository);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.PROJECT)\r\n            .to(concrete_1.ProjectRepository);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.QUESTION)\r\n            .to(concrete_1.QuestionRepository);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.STATUS)\r\n            .to(concrete_1.StatusRepository);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.TASK)\r\n            .to(concrete_1.TaskRepository);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.USER)\r\n            .to(concrete_1.UserRepository);\r\n        // SERVICES\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Service.ANSWER)\r\n            .to(concrete_2.AnswerService);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Service.COMMENT)\r\n            .to(concrete_2.CommentService);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Service.COMPANY)\r\n            .to(concrete_2.CompanyService);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Service.ISSUE)\r\n            .to(concrete_2.IssueService);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Service.PROJECT)\r\n            .to(concrete_2.ProjectService);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Service.QUESTION)\r\n            .to(concrete_2.QuestionService);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Service.TASK)\r\n            .to(concrete_2.TaskService);\r\n        IOC.container\r\n            .bind(inject_types_1.InjectTypes.Service.USER)\r\n            .to(concrete_2.UserService);\r\n        return IOC.container;\r\n    }\r\n    IOC.configureContainer = configureContainer;\r\n})(IOC = exports.IOC || (exports.IOC = {}));\r\n\n\n//# sourceURL=webpack:///./src/ioc/ioc.config.ts?");

/***/ }),

/***/ "./src/middlewares/authorize.middleware.ts":
/*!*************************************************!*\
  !*** ./src/middlewares/authorize.middleware.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nfunction authorize(req, res, next) {\r\n    let token = req.get('Authorization') || undefined;\r\n    if (token !== undefined) {\r\n        jsonwebtoken_1.verify(token, 'MySecret', (err, decoded) => {\r\n            if (err) {\r\n                console.log('UnAuthorized Access');\r\n                return res.status(403).json({\r\n                    message: 'Error: Your token has expired',\r\n                    success: false\r\n                });\r\n            }\r\n            else {\r\n                req.decoded = decoded;\r\n                next();\r\n            }\r\n        });\r\n    }\r\n    else {\r\n        return res.status(403).json({\r\n            message: 'Error: You need to authenticate to access this part of the API',\r\n            success: false\r\n        });\r\n    }\r\n}\r\nexports.authorize = authorize;\r\n\n\n//# sourceURL=webpack:///./src/middlewares/authorize.middleware.ts?");

/***/ }),

/***/ "./src/middlewares/index.ts":
/*!**********************************!*\
  !*** ./src/middlewares/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar authorize_middleware_1 = __webpack_require__(/*! ./authorize.middleware */ \"./src/middlewares/authorize.middleware.ts\");\r\nexports.authorize = authorize_middleware_1.authorize;\r\nvar validation_middleware_1 = __webpack_require__(/*! ./validation.middleware */ \"./src/middlewares/validation.middleware.ts\");\r\nexports.validationMiddleware = validation_middleware_1.validationMiddleware;\r\n\n\n//# sourceURL=webpack:///./src/middlewares/index.ts?");

/***/ }),

/***/ "./src/middlewares/validation.middleware.ts":
/*!**************************************************!*\
  !*** ./src/middlewares/validation.middleware.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst class_transformer_1 = __webpack_require__(/*! class-transformer */ \"class-transformer\");\r\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\r\nfunction validationMiddleware(type, skipMissingProperties = false) {\r\n    return (req, res, next) => {\r\n        class_validator_1.validate(class_transformer_1.plainToClass(type, req.body), { skipMissingProperties })\r\n            .then((errors) => {\r\n            if (errors.length > 0) {\r\n                const message = errors.map((error) => Object.values(error.constraints)).join(', ');\r\n                return res.status(422).json({\r\n                    message: message,\r\n                    success: false\r\n                });\r\n            }\r\n            else {\r\n                next();\r\n            }\r\n        });\r\n    };\r\n}\r\nexports.validationMiddleware = validationMiddleware;\r\n\n\n//# sourceURL=webpack:///./src/middlewares/validation.middleware.ts?");

/***/ }),

/***/ "./src/swagger.json":
/*!**************************!*\
  !*** ./src/swagger.json ***!
  \**************************/
/*! exports provided: swagger, info, host, basePath, tags, schemes, paths, securityDefinitions, definitions, externalDocs, default */
/***/ (function(module) {

eval("module.exports = {\"swagger\":\"2.0\",\"info\":{\"description\":\"Api Doc\",\"version\":\"1.0.0\",\"title\":\"Swagger PYU\",\"contact\":{\"email\":\"apiteam@pyu.com\"}},\"host\":\"localhost:3000\",\"basePath\":\"/api\",\"tags\":[{\"name\":\"tasks\",\"description\":\"Everything about your Tasks\"},{\"name\":\"comment\",\"description\":\"Access to Petstore orders\"},{\"name\":\"user\",\"description\":\"Operations about user\"}],\"schemes\":[\"https\",\"http\"],\"paths\":{\"/tasks\":{\"post\":{\"tags\":[\"tasks\"],\"summary\":\"Add a new task to the project\",\"description\":\"\",\"operationId\":\"addTask\",\"consumes\":[\"application/json\",\"application/xml\"],\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"Task object that needs to be added to the project\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/Task\"}}],\"responses\":{\"200\":{\"description\":\"successful operation\",\"schema\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Pet\"}}},\"405\":{\"description\":\"Invalid input\"}}},\"put\":{\"tags\":[\"pet\"],\"summary\":\"Update an existing pet\",\"description\":\"\",\"operationId\":\"updatePet\",\"consumes\":[\"application/json\",\"application/xml\"],\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"Pet object that needs to be added to the store\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/Pet\"}}],\"responses\":{\"400\":{\"description\":\"Invalid ID supplied\"},\"404\":{\"description\":\"Pet not found\"},\"405\":{\"description\":\"Validation exception\"}},\"security\":[{\"petstore_auth\":[\"write:pets\",\"read:pets\"]}]}},\"/pet/findByStatus\":{\"get\":{\"tags\":[\"pet\"],\"summary\":\"Finds Pets by status\",\"description\":\"Multiple status values can be provided with comma separated strings\",\"operationId\":\"findPetsByStatus\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"name\":\"status\",\"in\":\"query\",\"description\":\"Status values that need to be considered for filter\",\"required\":true,\"type\":\"array\",\"items\":{\"type\":\"string\",\"enum\":[\"available\",\"pending\",\"sold\"],\"default\":\"available\"},\"collectionFormat\":\"multi\"}],\"responses\":{\"200\":{\"description\":\"successful operation\",\"schema\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Pet\"}}},\"400\":{\"description\":\"Invalid status value\"}},\"security\":[{\"petstore_auth\":[\"write:pets\",\"read:pets\"]}]}},\"/pet/findByTags\":{\"get\":{\"tags\":[\"pet\"],\"summary\":\"Finds Pets by tags\",\"description\":\"Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.\",\"operationId\":\"findPetsByTags\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"name\":\"tags\",\"in\":\"query\",\"description\":\"Tags to filter by\",\"required\":true,\"type\":\"array\",\"items\":{\"type\":\"string\"},\"collectionFormat\":\"multi\"}],\"responses\":{\"200\":{\"description\":\"successful operation\",\"schema\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Pet\"}}},\"400\":{\"description\":\"Invalid tag value\"}},\"security\":[{\"petstore_auth\":[\"write:pets\",\"read:pets\"]}],\"deprecated\":true}},\"/pet/{petId}\":{\"get\":{\"tags\":[\"pet\"],\"summary\":\"Find pet by ID\",\"description\":\"Returns a single pet\",\"operationId\":\"getPetById\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"name\":\"petId\",\"in\":\"path\",\"description\":\"ID of pet to return\",\"required\":true,\"type\":\"integer\",\"format\":\"int64\"}],\"responses\":{\"200\":{\"description\":\"successful operation\",\"schema\":{\"$ref\":\"#/definitions/Pet\"}},\"400\":{\"description\":\"Invalid ID supplied\"},\"404\":{\"description\":\"Pet not found\"}},\"security\":[{\"api_key\":[]}]},\"post\":{\"tags\":[\"pet\"],\"summary\":\"Updates a pet in the store with form data\",\"description\":\"\",\"operationId\":\"updatePetWithForm\",\"consumes\":[\"application/x-www-form-urlencoded\"],\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"name\":\"petId\",\"in\":\"path\",\"description\":\"ID of pet that needs to be updated\",\"required\":true,\"type\":\"integer\",\"format\":\"int64\"},{\"name\":\"name\",\"in\":\"formData\",\"description\":\"Updated name of the pet\",\"required\":false,\"type\":\"string\"},{\"name\":\"status\",\"in\":\"formData\",\"description\":\"Updated status of the pet\",\"required\":false,\"type\":\"string\"}],\"responses\":{\"405\":{\"description\":\"Invalid input\"}},\"security\":[{\"petstore_auth\":[\"write:pets\",\"read:pets\"]}]},\"delete\":{\"tags\":[\"pet\"],\"summary\":\"Deletes a pet\",\"description\":\"\",\"operationId\":\"deletePet\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"name\":\"api_key\",\"in\":\"header\",\"required\":false,\"type\":\"string\"},{\"name\":\"petId\",\"in\":\"path\",\"description\":\"Pet id to delete\",\"required\":true,\"type\":\"integer\",\"format\":\"int64\"}],\"responses\":{\"400\":{\"description\":\"Invalid ID supplied\"},\"404\":{\"description\":\"Pet not found\"}},\"security\":[{\"petstore_auth\":[\"write:pets\",\"read:pets\"]}]}},\"/pet/{petId}/uploadImage\":{\"post\":{\"tags\":[\"pet\"],\"summary\":\"uploads an image\",\"description\":\"\",\"operationId\":\"uploadFile\",\"consumes\":[\"multipart/form-data\"],\"produces\":[\"application/json\"],\"parameters\":[{\"name\":\"petId\",\"in\":\"path\",\"description\":\"ID of pet to update\",\"required\":true,\"type\":\"integer\",\"format\":\"int64\"},{\"name\":\"additionalMetadata\",\"in\":\"formData\",\"description\":\"Additional data to pass to server\",\"required\":false,\"type\":\"string\"},{\"name\":\"file\",\"in\":\"formData\",\"description\":\"file to upload\",\"required\":false,\"type\":\"file\"}],\"responses\":{\"200\":{\"description\":\"successful operation\",\"schema\":{\"$ref\":\"#/definitions/ApiResponse\"}}},\"security\":[{\"petstore_auth\":[\"write:pets\",\"read:pets\"]}]}},\"/store/inventory\":{\"get\":{\"tags\":[\"store\"],\"summary\":\"Returns pet inventories by status\",\"description\":\"Returns a map of status codes to quantities\",\"operationId\":\"getInventory\",\"produces\":[\"application/json\"],\"parameters\":[],\"responses\":{\"200\":{\"description\":\"successful operation\",\"schema\":{\"type\":\"object\",\"additionalProperties\":{\"type\":\"integer\",\"format\":\"int32\"}}}},\"security\":[{\"api_key\":[]}]}},\"/store/order\":{\"post\":{\"tags\":[\"store\"],\"summary\":\"Place an order for a pet\",\"description\":\"\",\"operationId\":\"placeOrder\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"order placed for purchasing the pet\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/Order\"}}],\"responses\":{\"200\":{\"description\":\"successful operation\",\"schema\":{\"$ref\":\"#/definitions/Order\"}},\"400\":{\"description\":\"Invalid Order\"}}}},\"/store/order/{orderId}\":{\"get\":{\"tags\":[\"store\"],\"summary\":\"Find purchase order by ID\",\"description\":\"For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions\",\"operationId\":\"getOrderById\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"name\":\"orderId\",\"in\":\"path\",\"description\":\"ID of pet that needs to be fetched\",\"required\":true,\"type\":\"integer\",\"maximum\":10,\"minimum\":1,\"format\":\"int64\"}],\"responses\":{\"200\":{\"description\":\"successful operation\",\"schema\":{\"$ref\":\"#/definitions/Order\"}},\"400\":{\"description\":\"Invalid ID supplied\"},\"404\":{\"description\":\"Order not found\"}}},\"delete\":{\"tags\":[\"store\"],\"summary\":\"Delete purchase order by ID\",\"description\":\"For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors\",\"operationId\":\"deleteOrder\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"name\":\"orderId\",\"in\":\"path\",\"description\":\"ID of the order that needs to be deleted\",\"required\":true,\"type\":\"integer\",\"minimum\":1,\"format\":\"int64\"}],\"responses\":{\"400\":{\"description\":\"Invalid ID supplied\"},\"404\":{\"description\":\"Order not found\"}}}},\"/user\":{\"post\":{\"tags\":[\"user\"],\"summary\":\"Create user\",\"description\":\"This can only be done by the logged in user.\",\"operationId\":\"createUser\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"Created user object\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/User\"}}],\"responses\":{\"default\":{\"description\":\"successful operation\"}}}},\"/user/createWithArray\":{\"post\":{\"tags\":[\"user\"],\"summary\":\"Creates list of users with given input array\",\"description\":\"\",\"operationId\":\"createUsersWithArrayInput\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"List of user object\",\"required\":true,\"schema\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/User\"}}}],\"responses\":{\"default\":{\"description\":\"successful operation\"}}}},\"/user/createWithList\":{\"post\":{\"tags\":[\"user\"],\"summary\":\"Creates list of users with given input array\",\"description\":\"\",\"operationId\":\"createUsersWithListInput\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"List of user object\",\"required\":true,\"schema\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/User\"}}}],\"responses\":{\"default\":{\"description\":\"successful operation\"}}}},\"/user/login\":{\"get\":{\"tags\":[\"user\"],\"summary\":\"Logs user into the system\",\"description\":\"\",\"operationId\":\"loginUser\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"name\":\"username\",\"in\":\"query\",\"description\":\"The user name for login\",\"required\":true,\"type\":\"string\"},{\"name\":\"password\",\"in\":\"query\",\"description\":\"The password for login in clear text\",\"required\":true,\"type\":\"string\"}],\"responses\":{\"200\":{\"description\":\"successful operation\",\"schema\":{\"type\":\"string\"},\"headers\":{\"X-Rate-Limit\":{\"type\":\"integer\",\"format\":\"int32\",\"description\":\"calls per hour allowed by the user\"},\"X-Expires-After\":{\"type\":\"string\",\"format\":\"date-time\",\"description\":\"date in UTC when token expires\"}}},\"400\":{\"description\":\"Invalid username/password supplied\"}}}},\"/user/logout\":{\"get\":{\"tags\":[\"user\"],\"summary\":\"Logs out current logged in user session\",\"description\":\"\",\"operationId\":\"logoutUser\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[],\"responses\":{\"default\":{\"description\":\"successful operation\"}}}},\"/user/{username}\":{\"get\":{\"tags\":[\"user\"],\"summary\":\"Get user by user name\",\"description\":\"\",\"operationId\":\"getUserByName\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"name\":\"username\",\"in\":\"path\",\"description\":\"The name that needs to be fetched. Use user1 for testing. \",\"required\":true,\"type\":\"string\"}],\"responses\":{\"200\":{\"description\":\"successful operation\",\"schema\":{\"$ref\":\"#/definitions/User\"}},\"400\":{\"description\":\"Invalid username supplied\"},\"404\":{\"description\":\"User not found\"}}},\"put\":{\"tags\":[\"user\"],\"summary\":\"Updated user\",\"description\":\"This can only be done by the logged in user.\",\"operationId\":\"updateUser\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"name\":\"username\",\"in\":\"path\",\"description\":\"name that need to be updated\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"body\",\"description\":\"Updated user object\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/User\"}}],\"responses\":{\"400\":{\"description\":\"Invalid user supplied\"},\"404\":{\"description\":\"User not found\"}}},\"delete\":{\"tags\":[\"user\"],\"summary\":\"Delete user\",\"description\":\"This can only be done by the logged in user.\",\"operationId\":\"deleteUser\",\"produces\":[\"application/xml\",\"application/json\"],\"parameters\":[{\"name\":\"username\",\"in\":\"path\",\"description\":\"The name that needs to be deleted\",\"required\":true,\"type\":\"string\"}],\"responses\":{\"400\":{\"description\":\"Invalid username supplied\"},\"404\":{\"description\":\"User not found\"}}}}},\"securityDefinitions\":{\"petstore_auth\":{\"type\":\"oauth2\",\"authorizationUrl\":\"http://petstore.swagger.io/oauth/dialog\",\"flow\":\"implicit\",\"scopes\":{\"write:pets\":\"modify pets in your account\",\"read:pets\":\"read your pets\"}},\"api_key\":{\"type\":\"apiKey\",\"name\":\"api_key\",\"in\":\"header\"}},\"definitions\":{\"Task\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"}}},\"Order\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"integer\",\"format\":\"int64\"},\"petId\":{\"type\":\"integer\",\"format\":\"int64\"},\"quantity\":{\"type\":\"integer\",\"format\":\"int32\"},\"shipDate\":{\"type\":\"string\",\"format\":\"date-time\"},\"status\":{\"type\":\"string\",\"description\":\"Order Status\",\"enum\":[\"placed\",\"approved\",\"delivered\"]},\"complete\":{\"type\":\"boolean\",\"default\":false}},\"xml\":{\"name\":\"Order\"}},\"Category\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"integer\",\"format\":\"int64\"},\"name\":{\"type\":\"string\"}},\"xml\":{\"name\":\"Category\"}},\"User\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"integer\",\"format\":\"int64\"},\"username\":{\"type\":\"string\"},\"firstName\":{\"type\":\"string\"},\"lastName\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"password\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"userStatus\":{\"type\":\"integer\",\"format\":\"int32\",\"description\":\"User Status\"}},\"xml\":{\"name\":\"User\"}},\"Tag\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"integer\",\"format\":\"int64\"},\"name\":{\"type\":\"string\"}},\"xml\":{\"name\":\"Tag\"}},\"Pet\":{\"type\":\"object\",\"required\":[\"name\",\"photoUrls\"],\"properties\":{\"id\":{\"type\":\"integer\",\"format\":\"int64\"},\"category\":{\"$ref\":\"#/definitions/Category\"},\"name\":{\"type\":\"string\",\"example\":\"doggie\"},\"photoUrls\":{\"type\":\"array\",\"xml\":{\"name\":\"photoUrl\",\"wrapped\":true},\"items\":{\"type\":\"string\"}},\"tags\":{\"type\":\"array\",\"xml\":{\"name\":\"tag\",\"wrapped\":true},\"items\":{\"$ref\":\"#/definitions/Tag\"}},\"status\":{\"type\":\"string\",\"description\":\"pet status in the store\",\"enum\":[\"available\",\"pending\",\"sold\"]}},\"xml\":{\"name\":\"Pet\"}},\"ApiResponse\":{\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"integer\",\"format\":\"int32\"},\"type\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}}}},\"externalDocs\":{\"description\":\"Find out more about Swagger\",\"url\":\"http://swagger.io\"}};\n\n//# sourceURL=webpack:///./src/swagger.json?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"class-transformer\");\n\n//# sourceURL=webpack:///external_%22class-transformer%22?");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"class-validator\");\n\n//# sourceURL=webpack:///external_%22class-validator%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"config\");\n\n//# sourceURL=webpack:///external_%22config%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"errorhandler\");\n\n//# sourceURL=webpack:///external_%22errorhandler%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-status-monitor":
/*!*****************************************!*\
  !*** external "express-status-monitor" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-status-monitor\");\n\n//# sourceURL=webpack:///external_%22express-status-monitor%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"inversify\");\n\n//# sourceURL=webpack:///external_%22inversify%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "method-override":
/*!**********************************!*\
  !*** external "method-override" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"method-override\");\n\n//# sourceURL=webpack:///external_%22method-override%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reflect-metadata\");\n\n//# sourceURL=webpack:///external_%22reflect-metadata%22?");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swagger-ui-express\");\n\n//# sourceURL=webpack:///external_%22swagger-ui-express%22?");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"typeorm\");\n\n//# sourceURL=webpack:///external_%22typeorm%22?");

/***/ })

/******/ });