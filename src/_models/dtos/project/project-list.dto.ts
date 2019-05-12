import { UserSummaryDto } from "..";
import { CompanySummaryDto } from "../company/company-summary.dto";

export class ProjectListDto {
    id: number;
    title: string;
    description: string;
    company: CompanySummaryDto;
    creator: UserSummaryDto;
    userCount: number;
    taskCount: number;
    issueCount: number;
}
