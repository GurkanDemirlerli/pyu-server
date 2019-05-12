import { UserSummaryDto } from "..";

export class AnswerSummaryDto {
    id: number;
    title: string;
    content: string;
    questionId:number;
    creator: UserSummaryDto;
}
