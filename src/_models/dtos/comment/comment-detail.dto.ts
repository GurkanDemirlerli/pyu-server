import { UserSummaryDto } from "..";

export class CommentDetailDto {
    id: number;
    title: string;
    content: string;
    taskId: number;
    creator: UserSummaryDto;
}
