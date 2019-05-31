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
