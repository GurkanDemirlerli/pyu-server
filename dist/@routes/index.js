"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = require("./user.routes");
const project_routes_1 = require("./project.routes");
const company_routes_1 = require("./company.routes");
const task_routes_1 = require("./task.routes");
const comment_routes_1 = require("./comment.routes");
const question_route_1 = require("./question.route");
const answer_routes_1 = require("./answer.routes");
const issue_route_1 = require("./issue.route");
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
