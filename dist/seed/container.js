"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const seed_1 = require("./seed");
const concrete_1 = require("@repositories/concrete");
const inject_types_1 = require("./inject-types");
require("reflect-metadata");
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
