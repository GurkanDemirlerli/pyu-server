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
        task_assignment_entity_1.TaskAssignmentEntity
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

/***/ "./src/seed/container.ts":
/*!*******************************!*\
  !*** ./src/seed/container.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const seed_1 = __webpack_require__(/*! ./seed */ "./src/seed/seed.ts");
const concrete_1 = __webpack_require__(/*! @repositories/concrete */ "./src/@repository/concrete/index.ts");
const inject_types_1 = __webpack_require__(/*! ./inject-types */ "./src/seed/inject-types.ts");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var DBIOC;
(function (DBIOC) {
    DBIOC.container = new inversify_1.Container();
    function configureContainer() {
        DBIOC.container
            .bind(seed_1.SeedDatabase)
            .toSelf();
        DBIOC.container
            .bind(inject_types_1.InjectTypes.Repository.ANSWER)
            .to(concrete_1.AnswerRepository);
        DBIOC.container
            .bind(inject_types_1.InjectTypes.Repository.COMMENT)
            .to(concrete_1.CommentRepository);
        DBIOC.container
            .bind(inject_types_1.InjectTypes.Repository.COMPANY)
            .to(concrete_1.CompanyRepository);
        DBIOC.container
            .bind(inject_types_1.InjectTypes.Repository.ISSUE)
            .to(concrete_1.IssueRepository);
        DBIOC.container
            .bind(inject_types_1.InjectTypes.Repository.PROJECT)
            .to(concrete_1.ProjectRepository);
        DBIOC.container
            .bind(inject_types_1.InjectTypes.Repository.QUESTION)
            .to(concrete_1.QuestionRepository);
        DBIOC.container
            .bind(inject_types_1.InjectTypes.Repository.STATUS)
            .to(concrete_1.StatusRepository);
        DBIOC.container
            .bind(inject_types_1.InjectTypes.Repository.TASK)
            .to(concrete_1.TaskRepository);
        DBIOC.container
            .bind(inject_types_1.InjectTypes.Repository.USER)
            .to(concrete_1.UserRepository);
        return DBIOC.container;
    }
    DBIOC.configureContainer = configureContainer;
})(DBIOC = exports.DBIOC || (exports.DBIOC = {}));


/***/ }),

/***/ "./src/seed/index.ts":
/*!***************************!*\
  !*** ./src/seed/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const seed_1 = __webpack_require__(/*! ./seed */ "./src/seed/seed.ts");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const container_1 = __webpack_require__(/*! ./container */ "./src/seed/container.ts");
console.log("veritabanı seedle çalıştırıldı.");
container_1.DBIOC.configureContainer();
const seedDatabase = container_1.DBIOC.container.get(seed_1.SeedDatabase);
seedDatabase.initialize();


/***/ }),

/***/ "./src/seed/inject-types.ts":
/*!**********************************!*\
  !*** ./src/seed/inject-types.ts ***!
  \**********************************/
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

/***/ "./src/seed/seed.ts":
/*!**************************!*\
  !*** ./src/seed/seed.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
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
const project_entity_1 = __webpack_require__(/*! ./../entities/project.entity */ "./src/entities/project.entity.ts");
const company_entity_1 = __webpack_require__(/*! ./../entities/company.entity */ "./src/entities/company.entity.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const appConfig = __webpack_require__(/*! ./../common/app-config */ "./src/common/app-config.ts");
const faker = __webpack_require__(/*! faker */ "faker");
const dtos_1 = __webpack_require__(/*! ./../_models/dtos */ "./src/_models/dtos/index.ts");
const user_entity_1 = __webpack_require__(/*! ./../entities/user.entity */ "./src/entities/user.entity.ts");
const status_entity_1 = __webpack_require__(/*! ../entities/status.entity */ "./src/entities/status.entity.ts");
const base_status_enum_1 = __webpack_require__(/*! ../enums/base-status.enum */ "./src/enums/base-status.enum.ts");
const inject_types_1 = __webpack_require__(/*! ./inject-types */ "./src/seed/inject-types.ts");
const task_entity_1 = __webpack_require__(/*! ./../entities/task.entity */ "./src/entities/task.entity.ts");
__webpack_require__(/*! module-alias/register */ "module-alias/register");
let SeedDatabase = class SeedDatabase {
    constructor(_userRepository, _companyRepository, _statusRepository, _projectRepository, _taskRepository) {
        this._userRepository = _userRepository;
        this._companyRepository = _companyRepository;
        this._statusRepository = _statusRepository;
        this._projectRepository = _projectRepository;
        this._taskRepository = _taskRepository;
    }
    initialize() {
        typeorm_1.createConnection(appConfig.dbOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {
            console.log(__dirname);
            console.log("Connected to DB");
            this.seed();
        })).catch(error => console.log("TypeORM connection error: ", error));
    }
    seed() {
        const USERCOUNT = 50;
        const COMPANYCOUNT = 10;
        const PROJECTCOUNT = 25;
        const TASKCOUNT = 500;
        let users = [];
        let companies = [];
        let projects = [];
        let tasks = [];
        let userPromises = [];
        let companyPromises = [];
        let projectPromises = [];
        let statusPromises = [];
        let taskPromises = [];
        let grkn;
        for (let i = 0; i < USERCOUNT; i++) {
            let usrDto = Object.assign(new dtos_1.RegisterDto(), {
                name: faker.name.firstName(),
                surname: faker.name.lastName(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: 'Password123.',
                createdAt: new Date()
            });
            let user = Object.assign(new user_entity_1.UserEntity(), usrDto);
            users.push(user);
            userPromises.push(this._userRepository.insert(users[i]));
        }
        let grknDto = Object.assign(new dtos_1.RegisterDto(), {
            name: 'gurkan',
            surname: 'demirlerli',
            username: 'gurkan30',
            email: 'gurkan@example.com',
            password: 'Password123.',
            createdAt: new Date()
        });
        grkn = Object.assign(new user_entity_1.UserEntity(), grknDto);
        users.push(grkn);
        userPromises.push(this._userRepository.insert(grkn));
        Promise.all(userPromises).then((createdUsers) => {
            console.log('Kullanicilar Eklendi');
            users = createdUsers;
            grkn = createdUsers.find(x => x.name === "gurkan");
            for (let i = 0; i < COMPANYCOUNT; i++) {
                let ind = Math.floor(Math.random() * (USERCOUNT));
                let cmp = Object.assign(new company_entity_1.CompanyEntity(), {
                    name: faker.name.lastName(),
                    description: faker.lorem.words(4),
                    ownerId: users[ind].id
                });
                companyPromises.push(this._companyRepository.insert(cmp));
            }
            let c1 = Object.assign(new company_entity_1.CompanyEntity(), {
                name: faker.name.lastName(),
                description: faker.lorem.words(4),
                ownerId: grkn.id
            });
            companyPromises.push(this._companyRepository.insert(c1));
            let c2 = Object.assign(new company_entity_1.CompanyEntity(), {
                name: faker.name.lastName(),
                description: faker.lorem.words(4),
                ownerId: grkn.id
            });
            companyPromises.push(this._companyRepository.insert(c2));
            return Promise.all(companyPromises);
        }).then((createdCompanies) => {
            console.log('Sirketler Eklendi');
            companies = createdCompanies;
            grkn.ownedCompanies = companies.filter(x => x.ownerId === grkn.id);
            for (let i = 0; i < PROJECTCOUNT; i++) {
                let ind = Math.floor(Math.random() * (COMPANYCOUNT));
                let prj = Object.assign(new project_entity_1.ProjectEntity(), {
                    userId: companies[ind].ownerId,
                    title: faker.name.jobTitle(),
                    description: faker.lorem.words(4),
                    companyId: companies[ind].id,
                });
                projectPromises.push(this._projectRepository.insert(prj));
            }
            let p1 = Object.assign(new project_entity_1.ProjectEntity(), {
                userId: grkn.id,
                title: faker.name.jobTitle(),
                description: faker.lorem.words(4),
                companyId: grkn.ownedCompanies[0]
            });
            projectPromises.push(this._projectRepository.insert(p1));
            let p2 = Object.assign(new project_entity_1.ProjectEntity(), {
                userId: grkn.id,
                title: faker.name.jobTitle(),
                description: faker.lorem.words(4),
                companyId: grkn.ownedCompanies[0].id
            });
            projectPromises.push(this._projectRepository.insert(p2));
            let p3 = Object.assign(new project_entity_1.ProjectEntity(), {
                userId: grkn.id,
                title: faker.name.jobTitle(),
                description: faker.lorem.words(4),
                companyId: grkn.ownedCompanies[1].id
            });
            projectPromises.push(this._projectRepository.insert(p3));
            return Promise.all(projectPromises);
        }).then((createdProjects) => {
            console.log('Projeler Eklendi');
            projects = createdProjects;
            for (let i = 0; i < projects.length; i++) {
                projects[i].statuses = [];
                let status0 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'Planning',
                    description: 'Proje sürecine dahil olabilecek görevler',
                    baseStatus: base_status_enum_1.BaseStatus.PLANNINING,
                    order: 0,
                    creatorId: projects[i].userId,
                    projectId: projects[i].id
                });
                let status1 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'To do',
                    description: 'Proje sürecinde olan ama henüz baslanmamis görevler',
                    baseStatus: base_status_enum_1.BaseStatus.NOT_STARTED,
                    order: 0,
                    creatorId: projects[i].userId,
                    projectId: projects[i].id
                });
                let status2 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'In Progress',
                    description: 'Yapılmakta olan görevler',
                    baseStatus: base_status_enum_1.BaseStatus.IN_PROGRESS,
                    order: 0,
                    creatorId: projects[i].userId,
                    projectId: projects[i].id
                });
                let status3 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'Done',
                    description: 'Bitmiş görevler',
                    baseStatus: base_status_enum_1.BaseStatus.FINISHED,
                    order: 0,
                    creatorId: projects[i].userId,
                    projectId: projects[i].id
                });
                statusPromises.push(this._statusRepository.insert(status0));
                statusPromises.push(this._statusRepository.insert(status1));
                statusPromises.push(this._statusRepository.insert(status2));
                statusPromises.push(this._statusRepository.insert(status3));
            }
            return Promise.all(statusPromises);
        }).then((statuses) => {
            console.log('Durumlar Eklendi');
            for (let i = 0; i < statuses.length; i++) {
                const st = statuses[i];
                projects.map((prj) => {
                    if (st.projectId === prj.id) {
                        prj.statuses.push(st);
                    }
                });
            }
            console.log("Projeler tamamen eklendi");
            grkn.ownedCompanies.map((cmp) => {
                cmp.projects = projects.filter(prj => prj.companyId === cmp.id);
            });
            for (let i = 0; i < TASKCOUNT; i++) {
                let ind = Math.floor(Math.random() * (PROJECTCOUNT));
                let stind = Math.floor(Math.random() * (3));
                let tsk = Object.assign(new task_entity_1.TaskEntity(), {
                    creatorId: projects[ind].userId,
                    title: faker.name.jobTitle(),
                    description: faker.lorem.words(4),
                    projectId: projects[ind].id,
                    statusId: projects[ind].statuses[stind]
                });
                taskPromises.push(this._taskRepository.insert(tsk));
            }
            grkn.ownedCompanies.map((cmp) => {
                cmp.projects.map((prj) => {
                    for (let i = 0; i < 5; i++) {
                        let stind = Math.floor(Math.random() * (3));
                        let tsk = Object.assign(new task_entity_1.TaskEntity(), {
                            creatorId: grkn.id,
                            title: faker.name.jobTitle(),
                            description: faker.lorem.words(4),
                            projectId: prj.id,
                            statusId: prj.statuses[stind]
                        });
                        taskPromises.push(this._taskRepository.insert(tsk));
                    }
                });
            });
            return Promise.all(taskPromises);
        }).then((createdTasks) => {
            console.log('Tasklar Eklendi');
            tasks = createdTasks;
            process.exit(0);
        }).catch((err) => {
            console.log(err);
        });
    }
};
SeedDatabase = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Repository.USER)),
    __param(1, inversify_1.inject(inject_types_1.InjectTypes.Repository.COMPANY)),
    __param(2, inversify_1.inject(inject_types_1.InjectTypes.Repository.STATUS)),
    __param(3, inversify_1.inject(inject_types_1.InjectTypes.Repository.PROJECT)),
    __param(4, inversify_1.inject(inject_types_1.InjectTypes.Repository.TASK)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], SeedDatabase);
exports.SeedDatabase = SeedDatabase;

/* WEBPACK VAR INJECTION */}.call(this, "/"))

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