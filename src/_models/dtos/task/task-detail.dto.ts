import { UserSummaryDto, CommentSummaryDto, ProjectSummaryDto, StatusSummaryDto, IssueSummaryDto } from "@models/dtos";

export class TaskDetailDto {
    id: number;
    title: number;
    description: number;
    creator: UserSummaryDto;
    comments: CommentSummaryDto[] = [];
    project: ProjectSummaryDto;
    status: StatusSummaryDto;
    fromIssue: IssueSummaryDto;
    assignees: UserSummaryDto[] = [];
    comentCount: number = 0;
}
