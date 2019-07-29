"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workspace_user_controller_1 = require("./../@controllers/workspace-user.controller");
const workspace_member_controller_1 = require("./../@controllers/workspace-member.controller");
const workspace_group_user_controller_1 = require("./../@controllers/workspace-group-user.controller");
const workflow_controller_1 = require("./../@controllers/workflow.controller");
const workflow_status_controller_1 = require("./../@controllers/workflow-status.controller");
const work_schedule_controller_1 = require("./../@controllers/work-schedule.controller");
const work_schedule_week_controller_1 = require("./../@controllers/work-schedule-week.controller");
const work_schedule_exclusion_controller_1 = require("./../@controllers/work-schedule-exclusion.controller");
const task_dependency_controller_1 = require("./../@controllers/task-dependency.controller");
const task_assignment_controller_1 = require("./../@controllers/task-assignment.controller");
const subject_project_controller_1 = require("./../@controllers/subject-project.controller");
const subject_folder_controller_1 = require("./../@controllers/subject-folder.controller");
const subject_domain_controller_1 = require("./../@controllers/subject-domain.controller");
const subject_description_controller_1 = require("./../@controllers/subject-description.controller");
const subject_custom_field_controller_1 = require("./../@controllers/subject-custom-field.controller");
const subject_comment_content_controller_1 = require("./../@controllers/subject-comment-content.controller");
const subject_comment_controller_1 = require("./../@controllers/subject-comment.controller");
const group_controller_1 = require("./../@controllers/group.controller");
const folder_sharing_controller_1 = require("./../@controllers/folder-sharing.controller");
const folder_role_controller_1 = require("./../@controllers/folder-role.controller");
const custom_field_controller_1 = require("./../@controllers/custom-field.controller");
const account_controller_1 = require("./../@controllers/account.controller");
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
        //#region CONTROLLERS
        IOC.container
            .bind(account_controller_1.AccountController)
            .toSelf();
        IOC.container
            .bind(custom_field_controller_1.CustomFieldController)
            .toSelf();
        IOC.container
            .bind(folder_role_controller_1.FolderRoleController)
            .toSelf();
        IOC.container
            .bind(folder_sharing_controller_1.FolderSharingController)
            .toSelf();
        IOC.container
            .bind(group_controller_1.GroupController)
            .toSelf();
        IOC.container
            .bind(subject_comment_content_controller_1.SubjectCommentContentController)
            .toSelf();
        IOC.container
            .bind(subject_comment_controller_1.SubjectCommentController)
            .toSelf();
        IOC.container
            .bind(subject_custom_field_controller_1.SubjectCustomFieldController)
            .toSelf();
        IOC.container
            .bind(subject_description_controller_1.SubjectDescriptionController)
            .toSelf();
        IOC.container
            .bind(subject_domain_controller_1.SubjectDomainController)
            .toSelf();
        IOC.container
            .bind(subject_folder_controller_1.SubjectFolderController)
            .toSelf();
        IOC.container
            .bind(subject_item_controller_1.SubjectItemController)
            .toSelf();
        IOC.container
            .bind(subject_project_controller_1.SubjectProjectController)
            .toSelf();
        IOC.container
            .bind(subject_task_controller_1.SubjectTaskController)
            .toSelf();
        IOC.container
            .bind(task_assignment_controller_1.TaskAssignmentController)
            .toSelf();
        IOC.container
            .bind(task_dependency_controller_1.TaskDependencyController)
            .toSelf();
        IOC.container
            .bind(work_schedule_exclusion_controller_1.WorkScheduleExclusionController)
            .toSelf();
        IOC.container
            .bind(work_schedule_week_controller_1.WorkScheduleWeekController)
            .toSelf();
        IOC.container
            .bind(work_schedule_controller_1.WorkScheduleController)
            .toSelf();
        IOC.container
            .bind(workflow_status_controller_1.WorkflowStatusController)
            .toSelf();
        IOC.container
            .bind(workflow_controller_1.WorkflowController)
            .toSelf();
        IOC.container
            .bind(workspace_group_user_controller_1.WorkspaceGroupUserController)
            .toSelf();
        IOC.container
            .bind(workspace_member_controller_1.WorkspaceMemberController)
            .toSelf();
        IOC.container
            .bind(workspace_user_controller_1.WorkspaceUserController)
            .toSelf();
        IOC.container
            .bind(workspace_controller_1.WorkspaceController)
            .toSelf();
        //#endregion
        //#region REPOSITORIES
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.ACCOUNT)
            .to(concrete_1.AccountRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.CUSTOM_FIELD)
            .to(concrete_1.CustomFieldRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.FOLDER_ROLE)
            .to(concrete_1.FolderRoleRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.FOLDER_SHARING)
            .to(concrete_1.FolderSharingRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.GROUP)
            .to(concrete_1.GroupRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.SUBJECT_COMMENT_CONTENT)
            .to(concrete_1.SubjectCommentContentRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.SUBJECT_COMMENT)
            .to(concrete_1.SubjectCommentRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.SUBJECT_CUSTOM_FIELD)
            .to(concrete_1.SubjectCustomFieldRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.SUBJECT_DESCRIPTION)
            .to(concrete_1.SubjectDescriptionRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.SUBJECT_DOMAIN)
            .to(concrete_1.SubjectDomainRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.SUBJECT_FOLDER)
            .to(concrete_1.SubjectFolderRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.SUBJECT_ITEM)
            .to(concrete_1.SubjectItemRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.SUBJECT_PROJECT)
            .to(concrete_1.SubjectProjectRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.SUBJECT_TASK)
            .to(concrete_1.SubjectTaskRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.TASK_ASSIGNMENT)
            .to(concrete_1.TaskAssignmentRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.TASK_DEPENDENCY)
            .to(concrete_1.TaskDependencyRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.WORK_SCHEDULE_EXCLUSION)
            .to(concrete_1.WorkScheduleExclusionRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.WORK_SCHEDULE_WEEK)
            .to(concrete_1.WorkScheduleWeekRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.WORK_SCHEDULE)
            .to(concrete_1.WorkScheduleRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.WORKFLOW_STATUS)
            .to(concrete_1.WorkflowStatusRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.WORKFLOW)
            .to(concrete_1.WorkflowRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.WORKSPACE_GROUP_USER)
            .to(concrete_1.WorkspaceGroupUserRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.WORKSPACE_MEMBER)
            .to(concrete_1.WorkspaceMemberRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.WORKSPACE_USER)
            .to(concrete_1.WorkspaceUserRepository);
        IOC.container
            .bind(inject_types_1.InjectTypes.Repository.WORKSPACE)
            .to(concrete_1.WorkspaceRepository);
        //#endregion
        //#region SERVICES
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.ACCOUNT)
            .to(concrete_2.AccountService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.CUSTOM_FIELD)
            .to(concrete_2.CustomFieldService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.FOLDER_ROLE)
            .to(concrete_2.FolderRoleService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.FOLDER_SHARING)
            .to(concrete_2.FolderSharingService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.GROUP)
            .to(concrete_2.GroupService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.SUBJECT_COMMENT_CONTENT)
            .to(concrete_2.SubjectCommentContentService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.SUBJECT_COMMENT)
            .to(concrete_2.SubjectCommentService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.SUBJECT_CUSTOM_FIELD)
            .to(concrete_2.SubjectCustomFieldService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.SUBJECT_DESCRIPTION)
            .to(concrete_2.SubjectDescriptionService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.SUBJECT_DOMAIN)
            .to(concrete_2.SubjectDomainService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.SUBJECT_FOLDER)
            .to(concrete_2.SubjectFolderService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.SUBJECT_ITEM)
            .to(concrete_2.SubjectItemService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.SUBJECT_PROJECT)
            .to(concrete_2.SubjectProjectService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.SUBJECT_TASK)
            .to(concrete_2.SubjectTaskService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.TASK_ASSIGNMENT)
            .to(concrete_2.TaskAssignmentService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.TASK_DEPENDENCY)
            .to(concrete_2.TaskDependencyService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.WORK_SCHEDULE_EXCLUSION)
            .to(concrete_2.WorkScheduleExclusionService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.WORK_SCHEDULE_WEEK)
            .to(concrete_2.WorkScheduleWeekService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.WORK_SCHEDULE)
            .to(concrete_2.WorkScheduleService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.WORKFLOW_STATUS)
            .to(concrete_2.WorkflowStatusService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.WORKFLOW)
            .to(concrete_2.WorkflowService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.WORKSPACE_GROUP_USER)
            .to(concrete_2.WorkspaceGroupUserService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.WORKSPACE_MEMBER)
            .to(concrete_2.WorkspaceMemberService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.WORKSPACE_USER)
            .to(concrete_2.WorkspaceUserService);
        IOC.container
            .bind(inject_types_1.InjectTypes.Service.WORKSPACE)
            .to(concrete_2.WorkspaceService);
        //#endregion
        return IOC.container;
    }
    IOC.configureContainer = configureContainer;
})(IOC = exports.IOC || (exports.IOC = {}));
//# sourceMappingURL=ioc.config.js.map