import { UserSummaryDto } from "..";

export class CommentSummaryDto {
    id: number;
    content: string;
    taskId: number;
    creator: UserSummaryDto;
}
