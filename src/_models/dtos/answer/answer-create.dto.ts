import { IsString, IsNotEmpty } from 'class-validator';

export class AnswerCreateDto {

    @IsString()
    public content: string;

    @IsNotEmpty()
    public questionId: number;

    public creatorId: number;

}
