import { UserSummaryDto } from "..";

export class AnswerListDto {
    id: number;
    title: string;
    content: string;
    questionId:number;
    creator: UserSummaryDto;
}
