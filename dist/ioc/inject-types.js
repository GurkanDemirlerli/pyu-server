"use strict";
// export module InjectTypes {
//   export enum Repository {
//     ANSWER = 'AnswerRepository',
//     COMMENT = 'CommentRepository',
//     COMPANY = 'CompanyRepository',
//     ISSUE = 'IssueRepository',
//     PROJECT = 'ProjectRepository',
//     QUESTION = 'QuestionRepository',
//     STATUS = 'StatusRepository',
//     TASK = 'TaskRepository',
//     USER = 'UserRepository',
//     COMPANY_MEMBERSHIP = 'CompanyMembershipRepository',
//     MEMBERSHIP_REQUEST = 'MembershipRequestRepository',
//     TASK_ASSIGNMENT = 'TaskAssignmentRepository',
//     PROJECT_MEMBERSHIP = 'ProjectMembershipRepository',
//     LABEL = 'LabelRepository',
//     TASK_LABEL = 'TaskLabelRepository',
//     ABSTRACT_STATUS = 'AbstractStatusRepository',
//     STATUS_TEMPLATE = 'StatusTemplateRepository',
//     PROJECT_MANAGER = 'ProjectManagerRepository',
//   }
Object.defineProperty(exports, "__esModule", { value: true });
//   export enum Service {
//     ANSWER = 'AnswerService',
//     COMMENT = 'CommentService',
//     COMPANY = 'CompanyService',
//     ISSUE = 'IssueService',
//     QUESTION = 'QuestionService',
//     TASK = 'TaskService',
//     USER = 'UserService',
//     PROJECT = 'ProjectService'
//   }
// }
var InjectTypes;
(function (InjectTypes) {
    let Repository;
    (function (Repository) {
        Repository["SUBJECT_ITEM"] = "SubjectItemRepository";
        Repository["SUBJECT_TASK"] = "SubjectTaskRepository";
        Repository["WORKSPACE"] = "WorkspaceRepository";
    })(Repository = InjectTypes.Repository || (InjectTypes.Repository = {}));
    let Service;
    (function (Service) {
        Service["SUBJECT_ITEM"] = "SubjectItemService";
        Service["SUBJECT_TASK"] = "SubjectTaskService";
        Service["WORKSPACE"] = "WorkspaceService";
    })(Service = InjectTypes.Service || (InjectTypes.Service = {}));
})(InjectTypes = exports.InjectTypes || (exports.InjectTypes = {}));
//# sourceMappingURL=inject-types.js.map