import { UserSummaryDto } from "..";

export class CommentListDto {
    id: number;
    content: string;
    taskId: number;
    creator: UserSummaryDto;
}
