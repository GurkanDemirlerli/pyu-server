import { UserSummaryDto } from "..";

export class IssueSummaryDto {
    id: number;
    title: string;
    description: string;
    creator: UserSummaryDto;
}
