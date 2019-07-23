"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subject_item_controller_1 = require("./../@controllers/subject-item.controller");
const subject_task_controller_1 = require("./../@controllers/subject-task.controller");
const workspace_controller_1 = require("./../@controllers/workspace.controller");
const concrete_1 = require("../@repository/concrete");
const concrete_2 = require("../@services/concrete");
const inversify_1 = require("inversify");
require("reflect-metadata");
const inject_types_1 = require("./inject-types");
var IOC;
(function (IOC) {
    IOC.container = new inversify_1.Container();
    function configureContainer() {
        IOC.container
            .bind(workspace_controller_1.WorkspaceController)
            .toSelf();
        IOC.container
            .bind(subject_task_controller_1.SubjectTaskController)
            .toSelf();
        IOC.container
            .bind(subject_item_controller_1.SubjectItemController)
            .toSelf();
        // container
        //   .bind<AnswerController>(AnswerController)
        //   .toSelf();
        //CONTROLLERS
        // container
        //   .bind<AnswerController>(AnswerController)
        //   .toSelf();
        // container
        //   .bind<CommentController>(CommentController)
        //   .toSelf();
        // container
        //   .bind<CompanyController>(CompanyController)
        //   .toSelf();
        // container
        //   .bind<IssueController>(IssueController)
        //   .toSelf();
        // container
        //   .bind<ProjectController>(ProjectController)
        //   .toSelf();
        // container
        //   .bind<QuestionController>(QuestionController)
        //   .toSelf();
        // container
        //   .bind<TaskController>(TaskController)
        //   .toSelf();
        // container
        //   .bind<UserController>(UserController)
        //   .toSelf();
        // // REPOSITORIES
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.SUBJECT_ITEM)
            .to(concrete_1.SubjectItemRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.SUBJECT_TASK)
            .to(concrete_1.SubjectTaskRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.WORKSPACE)
            .to(concrete_1.WorkspaceRepository);
        // container
        //   .bind<IAnswerRepository>(InjectTypes.Repository.ANSWER)
        //   .to(AnswerRepository);
        // container
        //   .bind<ICommentRepository>(InjectTypes.Repository.COMMENT)
        //   .to(CommentRepository);
        // container
        //   .bind<ICompanyRepository>(InjectTypes.Repository.COMPANY)
        //   .to(CompanyRepository);
        // container
        //   .bind<ICompanyMembershipRepository>(InjectTypes.Repository.COMPANY_MEMBERSHIP)
        //   .to(CompanyMembershipRepository);
        // container
        //   .bind<IMembershipRequestRepository>(InjectTypes.Repository.MEMBERSHIP_REQUEST)
        //   .to(MembershipRequestRepository);
        // container
        //   .bind<IIssueRepository>(InjectTypes.Repository.ISSUE)
        //   .to(IssueRepository);
        // container
        //   .bind<IProjectMembershipRepository>(InjectTypes.Repository.PROJECT_MEMBERSHIP)
        //   .to(ProjectMembershipRepository);
        // container
        //   .bind<IProjectRepository>(InjectTypes.Repository.PROJECT)
        //   .to(ProjectRepository);
        // container
        //   .bind<IQuestionRepository>(InjectTypes.Repository.QUESTION)
        //   .to(QuestionRepository);
        // container
        //   .bind<IStatusRepository>(InjectTypes.Repository.STATUS)
        //   .to(StatusRepository);
        // container
        //   .bind<ITaskRepository>(InjectTypes.Repository.TASK)
        //   .to(TaskRepository);
        // container
        //   .bind<IUserRepository>(InjectTypes.Repository.USER)
        //   .to(UserRepository);
        // container
        //   .bind<ITaskAssignmentRepository>(InjectTypes.Repository.TASK_ASSIGNMENT)
        //   .to(TaskAssignmentRepository)
        // container
        //   .bind<ITaskLabelRepository>(InjectTypes.Repository.TASK_LABEL)
        //   .to(TaskLabelRepository)
        // container
        //   .bind<ILabelRepository>(InjectTypes.Repository.LABEL)
        //   .to(LabelRepository)
        // container
        //   .bind<IStatusTemplateRepository>(InjectTypes.Repository.STATUS_TEMPLATE)
        //   .to(StatusTemplateRepository)
        // container
        //   .bind<IAbstractStatusRepository>(InjectTypes.Repository.ABSTRACT_STATUS)
        //   .to(AbstractStatusRepository)
        // container
        //   .bind<IProjectManagerRepository>(InjectTypes.Repository.PROJECT_MANAGER)
        //   .to(ProjectManagerRepository)
        // // SERVICES
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.WORKSPACE)
            .to(concrete_2.WorkspaceService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.SUBJECT_TASK)
            .to(concrete_2.SubjectTaskService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.SUBJECT_ITEM)
            .to(concrete_2.SubjectItemService);
        // container
        //   .bind<IAnswerService>(InjectTypes.Service.ANSWER)
        //   .to(AnswerService);
        // container
        //   .bind<ICommentService>(InjectTypes.Service.COMMENT)
        //   .to(CommentService);
        // container
        //   .bind<ICompanyService>(InjectTypes.Service.COMPANY)
        //   .to(CompanyService);
        // container
        //   .bind<IIssueService>(InjectTypes.Service.ISSUE)
        //   .to(IssueService);
        // container
        //   .bind<IProjectService>(InjectTypes.Service.PROJECT)
        //   .to(ProjectService);
        // container
        //   .bind<IQuestionService>(InjectTypes.Service.QUESTION)
        //   .to(QuestionService);
        // container
        //   .bind<ITaskService>(InjectTypes.Service.TASK)
        //   .to(TaskService);
        // container
        //   .bind<IUserService>(InjectTypes.Service.USER)
        //   .to(UserService);
        return IOC.container;
    }
    IOC.configureContainer = configureContainer;
})(IOC = exports.IOC || (exports.IOC = {}));
//# sourceMappingURL=ioc.config.js.map