import { UserSummaryDto } from "..";
import { TaskSummaryDto } from "../task/task-summary.dto";

export class IssueDetailDto {
    id: number;
    title: string;
    description: string;
    tasks: TaskSummaryDto;
    creator: UserSummaryDto;
    //TODO yorumlar
}
