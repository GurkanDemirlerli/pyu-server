import { UserSummaryDto } from "..";

export class QuestionDetailDto {
    id: number;
    title: string;
    content: string;
    creator: UserSummaryDto;
    answerCount: number;
    projectId: number;
}
