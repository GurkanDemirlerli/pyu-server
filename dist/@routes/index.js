"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workspace_user_routes_1 = require("./workspace-user.routes");
const workspace_member_routes_1 = require("./workspace-member.routes");
const workspace_group_user_routes_1 = require("./workspace-group-user.routes");
const workflow_routes_1 = require("./workflow.routes");
const workflow_status_routes_1 = require("./workflow-status.routes");
const work_schedule_routes_1 = require("./work-schedule.routes");
const work_schedule_week_routes_1 = require("./work-schedule-week.routes");
const work_schedule_exclusion_routes_1 = require("./work-schedule-exclusion.routes");
const task_dependency_routes_1 = require("./task-dependency.routes");
const task_assignment_routes_1 = require("./task-assignment.routes");
const subject_project_routes_1 = require("./subject-project.routes");
const subject_folder_routes_1 = require("./subject-folder.routes");
const subject_domain_routes_1 = require("./subject-domain.routes");
const subject_description_routes_1 = require("./subject-description.routes");
const subject_custom_field_routes_1 = require("./subject-custom-field.routes");
const subject_comment_content_routes_1 = require("./subject-comment-content.routes");
const subject_comment_routes_1 = require("./subject-comment.routes");
const group_routes_1 = require("./group.routes");
const folder_sharing_routes_1 = require("./folder-sharing.routes");
const folder_role_routes_1 = require("./folder-role.routes");
const custom_field_routes_1 = require("./custom-field.routes");
const account_routes_1 = require("./account.routes");
const subject_item_routes_1 = require("./subject-item.routes");
const subject_task_routes_1 = require("./subject-task.routes");
const workspace_routes_1 = require("./workspace.routes");
class RouteBinder {
    static configureRoutes(app) {
        account_routes_1.AccountRoutes.configureRoutes(app);
        custom_field_routes_1.CustomFieldRoutes.configureRoutes(app);
        folder_role_routes_1.FolderRoleRoutes.configureRoutes(app);
        folder_sharing_routes_1.FolderSharingRoutes.configureRoutes(app);
        group_routes_1.GroupRoutes.configureRoutes(app);
        subject_comment_content_routes_1.SubjectCommentContentRoutes.configureRoutes(app);
        subject_comment_routes_1.SubjectCommentRoutes.configureRoutes(app);
        subject_custom_field_routes_1.SubjectCustomFieldRoutes.configureRoutes(app);
        subject_description_routes_1.SubjectDescriptionRoutes.configureRoutes(app);
        subject_domain_routes_1.SubjectDomainRoutes.configureRoutes(app);
        subject_folder_routes_1.SubjectFolderRoutes.configureRoutes(app);
        subject_item_routes_1.SubjectItemRoutes.configureRoutes(app);
        subject_project_routes_1.SubjectProjectRoutes.configureRoutes(app);
        subject_task_routes_1.SubjectTaskRoutes.configureRoutes(app);
        task_assignment_routes_1.TaskAssignmentRoutes.configureRoutes(app);
        task_dependency_routes_1.TaskDependencyRoutes.configureRoutes(app);
        work_schedule_exclusion_routes_1.WorkScheduleExclusionRoutes.configureRoutes(app);
        work_schedule_week_routes_1.WorkScheduleWeekRoutes.configureRoutes(app);
        work_schedule_routes_1.WorkScheduleRoutes.configureRoutes(app);
        workflow_status_routes_1.WorkflowStatusRoutes.configureRoutes(app);
        workflow_routes_1.WorkflowRoutes.configureRoutes(app);
        workspace_group_user_routes_1.WorkspaceGroupUserRoutes.configureRoutes(app);
        workspace_member_routes_1.WorkspaceMemberRoutes.configureRoutes(app);
        workspace_user_routes_1.WorkspaceUserRoutes.configureRoutes(app);
        workspace_routes_1.WorkspaceRoutes.configureRoutes(app);
    }
}
exports.RouteBinder = RouteBinder;
//# sourceMappingURL=index.js.map