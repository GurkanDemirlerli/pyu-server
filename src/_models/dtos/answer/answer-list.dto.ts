import { UserSummaryDto } from "..";

export class AnswerListDto {
    id: number;
    content: string;
    questionId:number;
    creator: UserSummaryDto;
}
