import { UserSummaryDto } from "..";

export class QuestionSummaryDto {
    id: number;
    title: string;
    content: string;
    creator: UserSummaryDto;
    answerCount: number;
    projectId: number;
}
