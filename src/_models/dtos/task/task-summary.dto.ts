import { UserSummaryDto, ProjectSummaryDto, StatusSummaryDto } from "..";

export class TaskSummaryDto {
    id: number;
    title: string;
    description: string;
    creator: UserSummaryDto;
    project: ProjectSummaryDto;
    status: StatusSummaryDto;
    assignees: UserSummaryDto[] = [];
    comentCount: number = 0;
}
