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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/seed/dropDatabase.ts");
/******/ })
/************************************************************************/
/******/ ({

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
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TaskLabelEntity.prototype, "createdAt", void 0);
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

/***/ "./src/seed/dropDatabase.ts":
/*!**********************************!*\
  !*** ./src/seed/dropDatabase.ts ***!
  \**********************************/
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
const appConfig = __webpack_require__(/*! ./../common/app-config */ "./src/common/app-config.ts");
console.log("Veritabanı sil Çalıştırıldı.");
const config = Object.assign(appConfig.dbOptions, { synchronize: undefined });
typeorm_1.createConnection(config).then((connection) => __awaiter(this, void 0, void 0, function* () {
    connection.dropDatabase().then(() => {
        console.log("Veritabanı silindi.");
        process.exit(0);
    });
})).catch((error) => {
    console.log("TypeORM connection error: ", error);
    process.exit(1);
});


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
//# sourceMappingURL=dropdb.js.map