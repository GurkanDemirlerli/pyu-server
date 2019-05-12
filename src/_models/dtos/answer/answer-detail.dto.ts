import { UserSummaryDto } from "..";

export class AnswerDetailDto {
    id: number;
    content: string;
    questionId:number;
    creator: UserSummaryDto;
}
