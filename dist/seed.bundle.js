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
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nlet RepositoryBase = class RepositoryBase {\r\n    constructor(type) {\r\n        this.type = type;\r\n    }\r\n    list(options) {\r\n        return typeorm_1.getManager().getRepository(this.type).find(options);\r\n    }\r\n    findById(id) {\r\n        return typeorm_1.getManager().getRepository(this.type).findOne(id);\r\n    }\r\n    findOne(id, options) {\r\n        return typeorm_1.getManager().getRepository(this.type).findOne(id, options);\r\n    }\r\n    insert(model) {\r\n        return typeorm_1.getManager().getRepository(this.type).save(model);\r\n    }\r\n    update(id, model) {\r\n        return typeorm_1.getManager().getRepository(this.type).update(id, model);\r\n    }\r\n    delete(id) {\r\n        return typeorm_1.getManager().getRepository(this.type).delete(id);\r\n    }\r\n};\r\nRepositoryBase = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.unmanaged()),\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], RepositoryBase);\r\nexports.RepositoryBase = RepositoryBase;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/base/repository.base.ts?");

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

/***/ "./src/@repository/concrete/company.repository.ts":
/*!********************************************************!*\
  !*** ./src/@repository/concrete/company.repository.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst repository_base_1 = __webpack_require__(/*! ./base/repository.base */ \"./src/@repository/concrete/base/repository.base.ts\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst company_entity_1 = __webpack_require__(/*! ./../../entities/company.entity */ \"./src/entities/company.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nlet CompanyRepository = class CompanyRepository extends repository_base_1.RepositoryBase {\r\n    constructor() {\r\n        super(company_entity_1.CompanyEntity);\r\n    }\r\n    listByFiltersAndUser(filters, userId) {\r\n        let query = typeorm_1.getManager().createQueryBuilder(company_entity_1.CompanyEntity, \"company\").select(\"company\")\r\n            .leftJoin(\"company.owner\", \"owner\").addSelect([\"owner.id\", \"owner.name\", \"owner.surname\", \"owner.username\"])\r\n            .where(\"owner.id =:userId\", { userId: userId })\r\n            .leftJoin(\"company.users\", \"user\").addSelect([\"user.id\"])\r\n            .leftJoin(\"company.projects\", \"project\").addSelect([\"project.id\"]);\r\n        if (filters.owner === undefined)\r\n            query = query.orWhere(\"user.id =:userId\", { userId: userId });\r\n        query = query.orderBy(\"company.id\", \"DESC\");\r\n        if (filters.take !== undefined) {\r\n            query = query.take(filters.take);\r\n            if (filters.skip !== undefined)\r\n                query = query.skip(filters.skip);\r\n        }\r\n        return query.getMany();\r\n    }\r\n    findForDetails(id) {\r\n        let query = typeorm_1.getManager().createQueryBuilder(company_entity_1.CompanyEntity, \"company\").select(\"company\")\r\n            .where(\"company.id =:id\", { id: id })\r\n            .leftJoin(\"company.owner\", \"owner\").addSelect([\"owner.id\", \"owner.name\", \"owner.surname\", \"owner.username\"])\r\n            .leftJoin(\"company.users\", \"user\").addSelect([\"user.id\"])\r\n            .leftJoin(\"company.projects\", \"project\").addSelect([\"project.id\"]);\r\n        return query.getOne();\r\n    }\r\n    insertMembershipRequest(companyId, userId) {\r\n        let query = typeorm_1.getManager().createQueryBuilder().relation(company_entity_1.CompanyEntity, \"requestedUsers\").of(companyId).add(userId);\r\n        return query;\r\n    }\r\n    insertMember(companyId, userId) {\r\n        let query = typeorm_1.getManager().createQueryBuilder().relation(company_entity_1.CompanyEntity, \"users\").of(companyId).add(userId);\r\n        return query;\r\n    }\r\n};\r\nCompanyRepository = __decorate([\r\n    inversify_1.injectable(),\r\n    __metadata(\"design:paramtypes\", [])\r\n], CompanyRepository);\r\nexports.CompanyRepository = CompanyRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/company.repository.ts?");

/***/ }),

/***/ "./src/@repository/concrete/index.ts":
/*!*******************************************!*\
  !*** ./src/@repository/concrete/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar question_repository_1 = __webpack_require__(/*! ./question.repository */ \"./src/@repository/concrete/question.repository.ts\");\r\nexports.QuestionRepository = question_repository_1.QuestionRepository;\r\nvar issue_repository_1 = __webpack_require__(/*! ./issue.repository */ \"./src/@repository/concrete/issue.repository.ts\");\r\nexports.IssueRepository = issue_repository_1.IssueRepository;\r\nvar answer_repository_1 = __webpack_require__(/*! ./answer.repository */ \"./src/@repository/concrete/answer.repository.ts\");\r\nexports.AnswerRepository = answer_repository_1.AnswerRepository;\r\nvar status_repository_1 = __webpack_require__(/*! ./status.repository */ \"./src/@repository/concrete/status.repository.ts\");\r\nexports.StatusRepository = status_repository_1.StatusRepository;\r\nvar project_repository_1 = __webpack_require__(/*! ./project.repository */ \"./src/@repository/concrete/project.repository.ts\");\r\nexports.ProjectRepository = project_repository_1.ProjectRepository;\r\nvar company_repository_1 = __webpack_require__(/*! ./company.repository */ \"./src/@repository/concrete/company.repository.ts\");\r\nexports.CompanyRepository = company_repository_1.CompanyRepository;\r\nvar user_repository_1 = __webpack_require__(/*! ./user.repository */ \"./src/@repository/concrete/user.repository.ts\");\r\nexports.UserRepository = user_repository_1.UserRepository;\r\nvar comment_repository_1 = __webpack_require__(/*! ./comment.repository */ \"./src/@repository/concrete/comment.repository.ts\");\r\nexports.CommentRepository = comment_repository_1.CommentRepository;\r\nvar task_repository_1 = __webpack_require__(/*! ./task.repository */ \"./src/@repository/concrete/task.repository.ts\");\r\nexports.TaskRepository = task_repository_1.TaskRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/index.ts?");

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
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst repository_base_1 = __webpack_require__(/*! ./base/repository.base */ \"./src/@repository/concrete/base/repository.base.ts\");\r\nconst project_entity_1 = __webpack_require__(/*! ./../../entities/project.entity */ \"./src/entities/project.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nlet ProjectRepository = class ProjectRepository extends repository_base_1.RepositoryBase {\r\n    constructor() {\r\n        super(project_entity_1.ProjectEntity);\r\n    }\r\n};\r\nProjectRepository = __decorate([\r\n    inversify_1.injectable(),\r\n    __metadata(\"design:paramtypes\", [])\r\n], ProjectRepository);\r\nexports.ProjectRepository = ProjectRepository;\r\n\n\n//# sourceURL=webpack:///./src/@repository/concrete/project.repository.ts?");

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

/***/ "./src/common/app-config.ts":
/*!**********************************!*\
  !*** ./src/common/app-config.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst status_entity_1 = __webpack_require__(/*! ./../entities/status.entity */ \"./src/entities/status.entity.ts\");\r\nconst issue_entity_1 = __webpack_require__(/*! ./../entities/issue.entity */ \"./src/entities/issue.entity.ts\");\r\nconst answer_entity_1 = __webpack_require__(/*! ./../entities/answer.entity */ \"./src/entities/answer.entity.ts\");\r\nconst question_entity_1 = __webpack_require__(/*! ./../entities/question.entity */ \"./src/entities/question.entity.ts\");\r\nconst company_entity_1 = __webpack_require__(/*! ./../entities/company.entity */ \"./src/entities/company.entity.ts\");\r\nconst project_entity_1 = __webpack_require__(/*! ./../entities/project.entity */ \"./src/entities/project.entity.ts\");\r\nconst entities_1 = __webpack_require__(/*! ./../entities */ \"./src/entities/index.ts\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nexports.dbOptions = {\r\n    type: \"mysql\",\r\n    host: \"localhost\",\r\n    port: 3306,\r\n    username: \"root\",\r\n    password: \"123456\",\r\n    database: \"pyudb\",\r\n    entities: [\r\n        entities_1.TaskEntity,\r\n        entities_1.CommentEntity,\r\n        entities_1.UserEntity,\r\n        project_entity_1.ProjectEntity,\r\n        company_entity_1.CompanyEntity,\r\n        question_entity_1.QuestionEntity,\r\n        answer_entity_1.AnswerEntity,\r\n        issue_entity_1.IssueEntity,\r\n        status_entity_1.StatusEntity\r\n    ],\r\n    synchronize: true,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/app-config.ts?");

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

/***/ "./src/entities/company.entity.ts":
/*!****************************************!*\
  !*** ./src/entities/company.entity.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\r\nconst project_entity_1 = __webpack_require__(/*! ./project.entity */ \"./src/entities/project.entity.ts\");\r\nlet CompanyEntity = class CompanyEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], CompanyEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], CompanyEntity.prototype, \"name\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], CompanyEntity.prototype, \"description\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => project_entity_1.ProjectEntity, project => project.company),\r\n    __metadata(\"design:type\", Array)\r\n], CompanyEntity.prototype, \"projects\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], CompanyEntity.prototype, \"ownerId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.ownedCompanies),\r\n    typeorm_1.JoinColumn({ name: \"ownerId\" }),\r\n    __metadata(\"design:type\", user_entity_1.UserEntity)\r\n], CompanyEntity.prototype, \"owner\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => user_entity_1.UserEntity, user => user.companies),\r\n    typeorm_1.JoinTable(),\r\n    __metadata(\"design:type\", Array)\r\n], CompanyEntity.prototype, \"users\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => user_entity_1.UserEntity, user => user.requestedCompanies),\r\n    typeorm_1.JoinTable(),\r\n    __metadata(\"design:type\", Array)\r\n], CompanyEntity.prototype, \"requestedUsers\", void 0);\r\nCompanyEntity = __decorate([\r\n    typeorm_1.Entity(\"company\")\r\n], CompanyEntity);\r\nexports.CompanyEntity = CompanyEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/company.entity.ts?");

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
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst issue_entity_1 = __webpack_require__(/*! ./issue.entity */ \"./src/entities/issue.entity.ts\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\r\nconst task_entity_1 = __webpack_require__(/*! ./task.entity */ \"./src/entities/task.entity.ts\");\r\nconst company_entity_1 = __webpack_require__(/*! ./company.entity */ \"./src/entities/company.entity.ts\");\r\nconst status_entity_1 = __webpack_require__(/*! ./status.entity */ \"./src/entities/status.entity.ts\");\r\nlet ProjectEntity = class ProjectEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], ProjectEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], ProjectEntity.prototype, \"title\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], ProjectEntity.prototype, \"description\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.project),\r\n    __metadata(\"design:type\", Array)\r\n], ProjectEntity.prototype, \"tasks\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => status_entity_1.StatusEntity, status => status.project),\r\n    __metadata(\"design:type\", Array)\r\n], ProjectEntity.prototype, \"statuses\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => issue_entity_1.IssueEntity, issue => issue.project),\r\n    __metadata(\"design:type\", Array)\r\n], ProjectEntity.prototype, \"issues\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], ProjectEntity.prototype, \"companyId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => company_entity_1.CompanyEntity, company => company.projects),\r\n    typeorm_1.JoinColumn({ name: \"companyId\" }),\r\n    __metadata(\"design:type\", company_entity_1.CompanyEntity)\r\n], ProjectEntity.prototype, \"company\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\"),\r\n    __metadata(\"design:type\", Number)\r\n], ProjectEntity.prototype, \"userId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.createdProjects),\r\n    typeorm_1.JoinColumn({ name: \"userId\" }),\r\n    __metadata(\"design:type\", user_entity_1.UserEntity)\r\n], ProjectEntity.prototype, \"creator\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => user_entity_1.UserEntity, user => user.projects),\r\n    typeorm_1.JoinTable(),\r\n    __metadata(\"design:type\", Array)\r\n], ProjectEntity.prototype, \"users\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(\"int\", { nullable: true }),\r\n    __metadata(\"design:type\", Number)\r\n], ProjectEntity.prototype, \"managerId\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.managedProjects),\r\n    typeorm_1.JoinColumn({ name: \"managerId\" }),\r\n    __metadata(\"design:type\", user_entity_1.UserEntity)\r\n], ProjectEntity.prototype, \"manager\", void 0);\r\nProjectEntity = __decorate([\r\n    typeorm_1.Entity(\"project\")\r\n], ProjectEntity);\r\nexports.ProjectEntity = ProjectEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/project.entity.ts?");

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
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst issue_entity_1 = __webpack_require__(/*! ./issue.entity */ \"./src/entities/issue.entity.ts\");\r\nconst comment_entity_1 = __webpack_require__(/*! ./comment.entity */ \"./src/entities/comment.entity.ts\");\r\nconst question_entity_1 = __webpack_require__(/*! ./question.entity */ \"./src/entities/question.entity.ts\");\r\nconst company_entity_1 = __webpack_require__(/*! ./company.entity */ \"./src/entities/company.entity.ts\");\r\nconst task_entity_1 = __webpack_require__(/*! ./task.entity */ \"./src/entities/task.entity.ts\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst project_entity_1 = __webpack_require__(/*! ./project.entity */ \"./src/entities/project.entity.ts\");\r\nconst answer_entity_1 = __webpack_require__(/*! ./answer.entity */ \"./src/entities/answer.entity.ts\");\r\nconst status_entity_1 = __webpack_require__(/*! ./status.entity */ \"./src/entities/status.entity.ts\");\r\nlet UserEntity = class UserEntity {\r\n};\r\n__decorate([\r\n    typeorm_1.PrimaryGeneratedColumn(),\r\n    __metadata(\"design:type\", Number)\r\n], UserEntity.prototype, \"id\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], UserEntity.prototype, \"name\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], UserEntity.prototype, \"surname\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], UserEntity.prototype, \"username\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], UserEntity.prototype, \"email\", void 0);\r\n__decorate([\r\n    typeorm_1.Column({\r\n        length: 100\r\n    }),\r\n    __metadata(\"design:type\", String)\r\n], UserEntity.prototype, \"password\", void 0);\r\n__decorate([\r\n    typeorm_1.Column(),\r\n    __metadata(\"design:type\", Date)\r\n], UserEntity.prototype, \"createdAt\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, task => task.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"createdTasks\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => project_entity_1.ProjectEntity, project => project.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"createdProjects\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => project_entity_1.ProjectEntity, project => project.manager),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"managedProjects\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => company_entity_1.CompanyEntity, company => company.owner),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"ownedCompanies\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => question_entity_1.QuestionEntity, question => question.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"questions\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => answer_entity_1.AnswerEntity, answer => answer.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"answers\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => comment_entity_1.CommentEntity, comment => comment.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"comments\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => issue_entity_1.IssueEntity, issue => issue.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"createdIssues\", void 0);\r\n__decorate([\r\n    typeorm_1.OneToMany(type => status_entity_1.StatusEntity, status => status.creator),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"createdStatuses\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => project_entity_1.ProjectEntity, project => project.users),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"projects\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => company_entity_1.CompanyEntity, company => company.users),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"companies\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => task_entity_1.TaskEntity, task => task.assignees),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"assignedTasks\", void 0);\r\n__decorate([\r\n    typeorm_1.ManyToMany(type => company_entity_1.CompanyEntity, company => company.requestedUsers),\r\n    __metadata(\"design:type\", Array)\r\n], UserEntity.prototype, \"requestedCompanies\", void 0);\r\nUserEntity = __decorate([\r\n    typeorm_1.Entity(\"user\")\r\n], UserEntity);\r\nexports.UserEntity = UserEntity;\r\n\n\n//# sourceURL=webpack:///./src/entities/user.entity.ts?");

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

/***/ "./src/seed/container.ts":
/*!*******************************!*\
  !*** ./src/seed/container.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst seed_1 = __webpack_require__(/*! ./seed */ \"./src/seed/seed.ts\");\r\nconst concrete_1 = __webpack_require__(/*! @repositories/concrete */ \"./src/@repository/concrete/index.ts\");\r\nconst inject_types_1 = __webpack_require__(/*! ./inject-types */ \"./src/seed/inject-types.ts\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nvar DBIOC;\r\n(function (DBIOC) {\r\n    DBIOC.container = new inversify_1.Container();\r\n    function configureContainer() {\r\n        DBIOC.container\r\n            .bind(seed_1.SeedDatabase)\r\n            .toSelf();\r\n        DBIOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.ANSWER)\r\n            .to(concrete_1.AnswerRepository);\r\n        DBIOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.COMMENT)\r\n            .to(concrete_1.CommentRepository);\r\n        DBIOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.COMPANY)\r\n            .to(concrete_1.CompanyRepository);\r\n        DBIOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.ISSUE)\r\n            .to(concrete_1.IssueRepository);\r\n        DBIOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.PROJECT)\r\n            .to(concrete_1.ProjectRepository);\r\n        DBIOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.QUESTION)\r\n            .to(concrete_1.QuestionRepository);\r\n        DBIOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.STATUS)\r\n            .to(concrete_1.StatusRepository);\r\n        DBIOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.TASK)\r\n            .to(concrete_1.TaskRepository);\r\n        DBIOC.container\r\n            .bind(inject_types_1.InjectTypes.Repository.USER)\r\n            .to(concrete_1.UserRepository);\r\n        return DBIOC.container;\r\n    }\r\n    DBIOC.configureContainer = configureContainer;\r\n})(DBIOC = exports.DBIOC || (exports.DBIOC = {}));\r\n\n\n//# sourceURL=webpack:///./src/seed/container.ts?");

/***/ }),

/***/ "./src/seed/index.ts":
/*!***************************!*\
  !*** ./src/seed/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst seed_1 = __webpack_require__(/*! ./seed */ \"./src/seed/seed.ts\");\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst container_1 = __webpack_require__(/*! ./container */ \"./src/seed/container.ts\");\r\nconsole.log(\"veritabanı seedle çalıştırıldı.\");\r\ncontainer_1.DBIOC.configureContainer();\r\nconst seedDatabase = container_1.DBIOC.container.get(seed_1.SeedDatabase);\r\nseedDatabase.initialize();\r\n\n\n//# sourceURL=webpack:///./src/seed/index.ts?");

/***/ }),

/***/ "./src/seed/inject-types.ts":
/*!**********************************!*\
  !*** ./src/seed/inject-types.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar InjectTypes;\r\n(function (InjectTypes) {\r\n    let Repository;\r\n    (function (Repository) {\r\n        Repository[\"ANSWER\"] = \"AnswerRepository\";\r\n        Repository[\"COMMENT\"] = \"CommentRepository\";\r\n        Repository[\"COMPANY\"] = \"CompanyRepository\";\r\n        Repository[\"ISSUE\"] = \"IssueRepository\";\r\n        Repository[\"PROJECT\"] = \"ProjectRepository\";\r\n        Repository[\"QUESTION\"] = \"QuestionRepository\";\r\n        Repository[\"STATUS\"] = \"StatusRepository\";\r\n        Repository[\"TASK\"] = \"TaskRepository\";\r\n        Repository[\"USER\"] = \"UserRepository\";\r\n    })(Repository = InjectTypes.Repository || (InjectTypes.Repository = {}));\r\n    let Service;\r\n    (function (Service) {\r\n        Service[\"ANSWER\"] = \"AnswerService\";\r\n        Service[\"COMMENT\"] = \"CommentService\";\r\n        Service[\"COMPANY\"] = \"CompanyService\";\r\n        Service[\"ISSUE\"] = \"IssueService\";\r\n        Service[\"PROJECT\"] = \"ProjectService\";\r\n        Service[\"QUESTION\"] = \"QuestionService\";\r\n        Service[\"TASK\"] = \"TaskService\";\r\n        Service[\"USER\"] = \"UserService\";\r\n    })(Service = InjectTypes.Service || (InjectTypes.Service = {}));\r\n})(InjectTypes = exports.InjectTypes || (exports.InjectTypes = {}));\r\n\n\n//# sourceURL=webpack:///./src/seed/inject-types.ts?");

/***/ }),

/***/ "./src/seed/seed.ts":
/*!**************************!*\
  !*** ./src/seed/seed.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst project_entity_1 = __webpack_require__(/*! ./../entities/project.entity */ \"./src/entities/project.entity.ts\");\r\nconst company_entity_1 = __webpack_require__(/*! ./../entities/company.entity */ \"./src/entities/company.entity.ts\");\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst appConfig = __webpack_require__(/*! ./../common/app-config */ \"./src/common/app-config.ts\");\r\nconst faker = __webpack_require__(/*! faker */ \"faker\");\r\nconst dtos_1 = __webpack_require__(/*! ./../_models/dtos */ \"./src/_models/dtos/index.ts\");\r\nconst user_entity_1 = __webpack_require__(/*! ./../entities/user.entity */ \"./src/entities/user.entity.ts\");\r\nconst status_entity_1 = __webpack_require__(/*! ../entities/status.entity */ \"./src/entities/status.entity.ts\");\r\nconst base_status_enum_1 = __webpack_require__(/*! ../enums/base-status.enum */ \"./src/enums/base-status.enum.ts\");\r\nconst inject_types_1 = __webpack_require__(/*! ./inject-types */ \"./src/seed/inject-types.ts\");\r\nconst task_entity_1 = __webpack_require__(/*! ./../entities/task.entity */ \"./src/entities/task.entity.ts\");\r\nlet SeedDatabase = class SeedDatabase {\r\n    constructor(_userRepository, _companyRepository, _statusRepository, _projectRepository, _taskRepository) {\r\n        this._userRepository = _userRepository;\r\n        this._companyRepository = _companyRepository;\r\n        this._statusRepository = _statusRepository;\r\n        this._projectRepository = _projectRepository;\r\n        this._taskRepository = _taskRepository;\r\n    }\r\n    initialize() {\r\n        typeorm_1.createConnection(appConfig.dbOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {\r\n            console.log(__dirname);\r\n            console.log(\"Connected to DB\");\r\n            this.seed();\r\n        })).catch(error => console.log(\"TypeORM connection error: \", error));\r\n    }\r\n    seed() {\r\n        const USERCOUNT = 50;\r\n        const COMPANYCOUNT = 10;\r\n        const PROJECTCOUNT = 25;\r\n        const TASKCOUNT = 500;\r\n        let users = [];\r\n        let companies = [];\r\n        let projects = [];\r\n        let tasks = [];\r\n        let userPromises = [];\r\n        let companyPromises = [];\r\n        let projectPromises = [];\r\n        let statusPromises = [];\r\n        let taskPromises = [];\r\n        let grkn;\r\n        for (let i = 0; i < USERCOUNT; i++) {\r\n            let usrDto = Object.assign(new dtos_1.RegisterDto(), {\r\n                name: faker.name.firstName(),\r\n                surname: faker.name.lastName(),\r\n                username: faker.internet.userName(),\r\n                email: faker.internet.email(),\r\n                password: 'Password123.',\r\n                createdAt: new Date()\r\n            });\r\n            let user = Object.assign(new user_entity_1.UserEntity(), usrDto);\r\n            users.push(user);\r\n            userPromises.push(this._userRepository.insert(users[i]));\r\n        }\r\n        let grknDto = Object.assign(new dtos_1.RegisterDto(), {\r\n            name: 'gurkan',\r\n            surname: 'demirlerli',\r\n            username: 'gurkan30',\r\n            email: 'gurkan@example.com',\r\n            password: 'Password123.',\r\n            createdAt: new Date()\r\n        });\r\n        grkn = Object.assign(new user_entity_1.UserEntity(), grknDto);\r\n        users.push(grkn);\r\n        userPromises.push(this._userRepository.insert(grkn));\r\n        Promise.all(userPromises).then((createdUsers) => {\r\n            console.log('Kullanicilar Eklendi');\r\n            users = createdUsers;\r\n            grkn = createdUsers.find(x => x.name === \"gurkan\");\r\n            for (let i = 0; i < COMPANYCOUNT; i++) {\r\n                let ind = Math.floor(Math.random() * (USERCOUNT));\r\n                let cmp = Object.assign(new company_entity_1.CompanyEntity(), {\r\n                    name: faker.name.lastName(),\r\n                    description: faker.lorem.words(4),\r\n                    ownerId: users[ind].id\r\n                });\r\n                companyPromises.push(this._companyRepository.insert(cmp));\r\n            }\r\n            let c1 = Object.assign(new company_entity_1.CompanyEntity(), {\r\n                name: faker.name.lastName(),\r\n                description: faker.lorem.words(4),\r\n                ownerId: grkn.id\r\n            });\r\n            companyPromises.push(this._companyRepository.insert(c1));\r\n            let c2 = Object.assign(new company_entity_1.CompanyEntity(), {\r\n                name: faker.name.lastName(),\r\n                description: faker.lorem.words(4),\r\n                ownerId: grkn.id\r\n            });\r\n            companyPromises.push(this._companyRepository.insert(c2));\r\n            return Promise.all(companyPromises);\r\n        }).then((createdCompanies) => {\r\n            console.log('Sirketler Eklendi');\r\n            companies = createdCompanies;\r\n            grkn.companies = companies.filter(x => x.ownerId === grkn.id);\r\n            for (let i = 0; i < PROJECTCOUNT; i++) {\r\n                let ind = Math.floor(Math.random() * (COMPANYCOUNT));\r\n                let prj = Object.assign(new project_entity_1.ProjectEntity(), {\r\n                    userId: companies[ind].ownerId,\r\n                    title: faker.name.jobTitle(),\r\n                    description: faker.lorem.words(4),\r\n                    companyId: companies[ind].id,\r\n                });\r\n                projectPromises.push(this._projectRepository.insert(prj));\r\n            }\r\n            let p1 = Object.assign(new project_entity_1.ProjectEntity(), {\r\n                userId: grkn.id,\r\n                title: faker.name.jobTitle(),\r\n                description: faker.lorem.words(4),\r\n                companyId: grkn.companies[0]\r\n            });\r\n            projectPromises.push(this._projectRepository.insert(p1));\r\n            let p2 = Object.assign(new project_entity_1.ProjectEntity(), {\r\n                userId: grkn.id,\r\n                title: faker.name.jobTitle(),\r\n                description: faker.lorem.words(4),\r\n                companyId: grkn.companies[0].id\r\n            });\r\n            projectPromises.push(this._projectRepository.insert(p2));\r\n            let p3 = Object.assign(new project_entity_1.ProjectEntity(), {\r\n                userId: grkn.id,\r\n                title: faker.name.jobTitle(),\r\n                description: faker.lorem.words(4),\r\n                companyId: grkn.companies[1].id\r\n            });\r\n            projectPromises.push(this._projectRepository.insert(p3));\r\n            return Promise.all(projectPromises);\r\n        }).then((createdProjects) => {\r\n            console.log('Projeler Eklendi');\r\n            projects = createdProjects;\r\n            for (let i = 0; i < projects.length; i++) {\r\n                projects[i].statuses = [];\r\n                let status0 = Object.assign(new status_entity_1.StatusEntity(), {\r\n                    title: 'Planning',\r\n                    description: 'Proje sürecine dahil olabilecek görevler',\r\n                    baseStatus: base_status_enum_1.BaseStatus.PLANNINING,\r\n                    order: 0,\r\n                    creatorId: projects[i].userId,\r\n                    projectId: projects[i].id\r\n                });\r\n                let status1 = Object.assign(new status_entity_1.StatusEntity(), {\r\n                    title: 'To do',\r\n                    description: 'Proje sürecinde olan ama henüz baslanmamis görevler',\r\n                    baseStatus: base_status_enum_1.BaseStatus.NOT_STARTED,\r\n                    order: 0,\r\n                    creatorId: projects[i].userId,\r\n                    projectId: projects[i].id\r\n                });\r\n                let status2 = Object.assign(new status_entity_1.StatusEntity(), {\r\n                    title: 'In Progress',\r\n                    description: 'Yapılmakta olan görevler',\r\n                    baseStatus: base_status_enum_1.BaseStatus.IN_PROGRESS,\r\n                    order: 0,\r\n                    creatorId: projects[i].userId,\r\n                    projectId: projects[i].id\r\n                });\r\n                let status3 = Object.assign(new status_entity_1.StatusEntity(), {\r\n                    title: 'Done',\r\n                    description: 'Bitmiş görevler',\r\n                    baseStatus: base_status_enum_1.BaseStatus.FINISHED,\r\n                    order: 0,\r\n                    creatorId: projects[i].userId,\r\n                    projectId: projects[i].id\r\n                });\r\n                statusPromises.push(this._statusRepository.insert(status0));\r\n                statusPromises.push(this._statusRepository.insert(status1));\r\n                statusPromises.push(this._statusRepository.insert(status2));\r\n                statusPromises.push(this._statusRepository.insert(status3));\r\n            }\r\n            return Promise.all(statusPromises);\r\n        }).then((statuses) => {\r\n            console.log('Durumlar Eklendi');\r\n            for (let i = 0; i < statuses.length; i++) {\r\n                const st = statuses[i];\r\n                projects.map((prj) => {\r\n                    if (st.projectId === prj.id) {\r\n                        prj.statuses.push(st);\r\n                    }\r\n                });\r\n            }\r\n            console.log(\"Projeler tamamen eklendi\");\r\n            grkn.companies.map((cmp) => {\r\n                cmp.projects = projects.filter(prj => prj.companyId === cmp.id);\r\n            });\r\n            for (let i = 0; i < TASKCOUNT; i++) {\r\n                let ind = Math.floor(Math.random() * (PROJECTCOUNT));\r\n                let stind = Math.floor(Math.random() * (3));\r\n                let tsk = Object.assign(new task_entity_1.TaskEntity(), {\r\n                    creatorId: projects[ind].userId,\r\n                    title: faker.name.jobTitle(),\r\n                    description: faker.lorem.words(4),\r\n                    projectId: projects[ind].id,\r\n                    statusId: projects[ind].statuses[stind]\r\n                });\r\n                taskPromises.push(this._taskRepository.insert(tsk));\r\n            }\r\n            grkn.companies.map((cmp) => {\r\n                cmp.projects.map((prj) => {\r\n                    for (let i = 0; i < 5; i++) {\r\n                        let stind = Math.floor(Math.random() * (3));\r\n                        let tsk = Object.assign(new task_entity_1.TaskEntity(), {\r\n                            creatorId: grkn.id,\r\n                            title: faker.name.jobTitle(),\r\n                            description: faker.lorem.words(4),\r\n                            projectId: prj.id,\r\n                            statusId: prj.statuses[stind]\r\n                        });\r\n                        taskPromises.push(this._taskRepository.insert(tsk));\r\n                    }\r\n                });\r\n            });\r\n            return Promise.all(taskPromises);\r\n        }).then((createdTasks) => {\r\n            console.log('Tasklar Eklendi');\r\n            tasks = createdTasks;\r\n            process.exit(0);\r\n        }).catch((err) => {\r\n            console.log(err);\r\n        });\r\n    }\r\n};\r\nSeedDatabase = __decorate([\r\n    inversify_1.injectable(),\r\n    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Repository.USER)),\r\n    __param(1, inversify_1.inject(inject_types_1.InjectTypes.Repository.COMPANY)),\r\n    __param(2, inversify_1.inject(inject_types_1.InjectTypes.Repository.STATUS)),\r\n    __param(3, inversify_1.inject(inject_types_1.InjectTypes.Repository.PROJECT)),\r\n    __param(4, inversify_1.inject(inject_types_1.InjectTypes.Repository.TASK)),\r\n    __metadata(\"design:paramtypes\", [Object, Object, Object, Object, Object])\r\n], SeedDatabase);\r\nexports.SeedDatabase = SeedDatabase;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/seed/seed.ts?");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"class-validator\");\n\n//# sourceURL=webpack:///external_%22class-validator%22?");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"faker\");\n\n//# sourceURL=webpack:///external_%22faker%22?");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"inversify\");\n\n//# sourceURL=webpack:///external_%22inversify%22?");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reflect-metadata\");\n\n//# sourceURL=webpack:///external_%22reflect-metadata%22?");

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