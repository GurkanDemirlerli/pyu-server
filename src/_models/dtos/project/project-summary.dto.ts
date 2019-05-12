import { UserSummaryDto } from "..";

export class ProjectSummaryDto {
    id: number;
    title: string;
    description: string;
    creator: UserSummaryDto;
}
