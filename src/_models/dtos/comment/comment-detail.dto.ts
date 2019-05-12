import { UserSummaryDto } from "..";

export class CommentDetailDto {
    id: number;
    content: string;
    taskId: number;
    creator: UserSummaryDto;
}
