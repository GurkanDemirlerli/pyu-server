import { UserSummaryDto } from "..";

export class AnswerSummaryDto {
    id: number;
    content: string;
    questionId:number;
    creator: UserSummaryDto;
}
