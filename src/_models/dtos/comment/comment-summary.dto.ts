import { UserSummaryDto } from "..";

export class CommentSummaryDto {
    id: number;
    title: string;
    content: string;
    taskId: number;
    creator: UserSummaryDto;
}
