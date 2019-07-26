import { WorkspaceUserRoutes } from './workspace-user.routes';
import { WorkspaceMemberRoutes } from './workspace-member.routes';
import { WorkspaceGroupUserRoutes } from './workspace-group-user.routes';
import { WorkflowRoutes } from './workflow.routes';
import { WorkflowStatusRoutes } from './workflow-status.routes';
import { WorkScheduleRoutes } from './work-schedule.routes';
import { WorkScheduleWeekRoutes } from './work-schedule-week.routes';
import { WorkScheduleExclusionRoutes } from './work-schedule-exclusion.routes';
import { TaskDependencyRoutes } from './task-dependency.routes';
import { TaskAssignmentRoutes } from './task-assignment.routes';
import { SubjectProjectRoutes } from './subject-project.routes';
import { SubjectFolderRoutes } from './subject-folder.routes';
import { SubjectDomainRoutes } from './subject-domain.routes';
import { SubjectDescriptionRoutes } from './subject-description.routes';
import { SubjectCustomFieldRoutes } from './subject-custom-field.routes';
import { SubjectCommentContentRoutes } from './subject-comment-content.routes';
import { SubjectCommentRoutes } from './subject-comment.routes';
import { GroupRoutes } from './group.routes';
import { FolderSharingRoutes } from './folder-sharing.routes';
import { FolderRoleRoutes } from './folder-role.routes';
import { CustomFieldRoutes } from './custom-field.routes';
import { AccountRoutes } from './account.routes';
import { SubjectItemRoutes } from './subject-item.routes';
import { SubjectTaskRoutes } from './subject-task.routes';
import { WorkspaceRoutes } from './workspace.routes';

import * as express from 'express';


export class RouteBinder {
  public static configureRoutes(app: express.Application): void {
    AccountRoutes.configureRoutes(app);
    CustomFieldRoutes.configureRoutes(app);
    FolderRoleRoutes.configureRoutes(app);
    FolderSharingRoutes.configureRoutes(app);
    GroupRoutes.configureRoutes(app);
    SubjectCommentContentRoutes.configureRoutes(app);
    SubjectCommentRoutes.configureRoutes(app);
    SubjectCustomFieldRoutes.configureRoutes(app);
    SubjectDescriptionRoutes.configureRoutes(app);
    SubjectDomainRoutes.configureRoutes(app);
    SubjectFolderRoutes.configureRoutes(app);
    SubjectItemRoutes.configureRoutes(app);
    SubjectProjectRoutes.configureRoutes(app);
    SubjectTaskRoutes.configureRoutes(app);
    TaskAssignmentRoutes.configureRoutes(app);
    TaskDependencyRoutes.configureRoutes(app);
    WorkScheduleExclusionRoutes.configureRoutes(app);
    WorkScheduleWeekRoutes.configureRoutes(app);
    WorkScheduleRoutes.configureRoutes(app);
    WorkflowStatusRoutes.configureRoutes(app);
    WorkflowRoutes.configureRoutes(app);
    WorkspaceGroupUserRoutes.configureRoutes(app);
    WorkspaceMemberRoutes.configureRoutes(app);
    WorkspaceUserRoutes.configureRoutes(app);
    WorkspaceRoutes.configureRoutes(app);
  }
}
