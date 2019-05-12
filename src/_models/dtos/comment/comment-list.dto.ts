import { UserSummaryDto } from "..";

export class CommentListDto {
    id: number;
    title: string;
    content: string;
    taskId: number;
    creator: UserSummaryDto;
}
