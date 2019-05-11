import { UserSummaryDto, StatusSummaryDto, ProjectSummaryDto } from "..";

export class TaskListDto {
    id: number;
    title: number;
    description: number;
    creator: UserSummaryDto;
    commentCount: number;
    project: ProjectSummaryDto;
    status: StatusSummaryDto;
    assignees: UserSummaryDto[] = [];
}
