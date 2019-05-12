import { UserSummaryDto } from "..";

export class QuestionListDto {
    id: number;
    title: string;
    content: string;
    creator: UserSummaryDto;
    answerCount: number;
    projectId: number;
}
