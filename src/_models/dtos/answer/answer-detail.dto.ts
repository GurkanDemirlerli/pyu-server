import { UserSummaryDto } from "..";

export class AnswerDetailDto {
    id: number;
    title: string;
    content: string;
    questionId:number;
    creator: UserSummaryDto;
}
