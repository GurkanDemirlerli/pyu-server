import { UserSummaryDto } from "..";

export class IssueListDto {
    id: number;
    title: string;
    description: string;
    creator: UserSummaryDto;
    commentCount: number = 0;
}
