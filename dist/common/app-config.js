"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status_entity_1 = require("./../entities/status.entity");
const issue_entity_1 = require("./../entities/issue.entity");
const answer_entity_1 = require("./../entities/answer.entity");
const question_entity_1 = require("./../entities/question.entity");
const company_entity_1 = require("./../entities/company.entity");
const project_entity_1 = require("./../entities/project.entity");
const company_membership_entity_1 = require("@entities/company-membership.entity");
const membership_request_entity_1 = require("@entities/membership-request.entity");
const project_manager_entity_1 = require("@entities/project-manager.entity");
const project_membership_entity_1 = require("@entities/project-membership.entity");
const task_assignment_entity_1 = require("@entities/task-assignment.entity");
const entities_1 = require("./../entities");
require("reflect-metadata");
exports.dbOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "pyudb",
    entities: [
        entities_1.TaskEntity,
        entities_1.CommentEntity,
        entities_1.UserEntity,
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
