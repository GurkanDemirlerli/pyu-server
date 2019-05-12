import { UserSummaryDto, StatusSummaryDto, ProjectSummaryDto } from "..";

export class TaskListDto {
    id: number;
    title: string;
    description: string;
    creator: UserSummaryDto;
    commentCount: number;
    project: ProjectSummaryDto;
    status: StatusSummaryDto;
    assignees: UserSummaryDto[] = [];
}
