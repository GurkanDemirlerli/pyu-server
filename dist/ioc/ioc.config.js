"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const answer_controller_1 = require("../@controllers/answer.controller");
const comment_controller_1 = require("../@controllers/comment.controller");
const company_controller_1 = require("../@controllers/company.controller");
const issue_controller_1 = require("../@controllers/issue.controller");
const project_controller_1 = require("../@controllers/project.controller");
const question_controller_1 = require("../@controllers/question.controller");
const task_controller_1 = require("../@controllers/task.controller");
const user_controller_1 = require("../@controllers/user.controller");
const concrete_1 = require("./../@repository/concrete");
const concrete_2 = require("./../@services/concrete");
const inversify_1 = require("inversify");
require("reflect-metadata");
const inject_types_1 = require("./inject-types");
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
            .bind(inject_types_1.InjectTypes.Repository.ANSWER)
            .to(concrete_1.AnswerRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.COMMENT)
            .to(concrete_1.CommentRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.COMPANY)
            .to(concrete_1.CompanyRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.COMPANY_MEMBERSHIP)
            .to(concrete_1.CompanyMembershipRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.ISSUE)
            .to(concrete_1.IssueRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.PROJECT)
            .to(concrete_1.ProjectRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.QUESTION)
            .to(concrete_1.QuestionRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.STATUS)
            .to(concrete_1.StatusRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.TASK)
            .to(concrete_1.TaskRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.USER)
            .to(concrete_1.UserRepository);
        // SERVICES
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.ANSWER)
            .to(concrete_2.AnswerService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.COMMENT)
            .to(concrete_2.CommentService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.COMPANY)
            .to(concrete_2.CompanyService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.ISSUE)
            .to(concrete_2.IssueService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.PROJECT)
            .to(concrete_2.ProjectService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.QUESTION)
            .to(concrete_2.QuestionService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.TASK)
            .to(concrete_2.TaskService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.USER)
            .to(concrete_2.UserService);
        return IOC.container;
    }
    IOC.configureContainer = configureContainer;
})(IOC = exports.IOC || (exports.IOC = {}));
