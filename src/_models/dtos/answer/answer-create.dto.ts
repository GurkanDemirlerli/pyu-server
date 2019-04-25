import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class AnswerCreateDto {

    @IsString()
    public title: string;

    @IsString()
    public content: string;

    @IsNotEmpty()
    public questionId: number;

    public creatorId: number;

}