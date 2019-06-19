import { UserSummaryDto, CommentSummaryDto, ProjectSummaryDto, StatusSummaryDto, IssueSummaryDto } from "@models/dtos";

export class TaskDetailDto {
    id: number;
    title: string;
    description: string;
    creator: UserSummaryDto;
    comments: CommentSummaryDto[] = [];
    project: ProjectSummaryDto;
    status: StatusSummaryDto;
    fromIssue: IssueSummaryDto;
    assignees: UserSummaryDto[] = [];
    commentCount: number = 0;
}
