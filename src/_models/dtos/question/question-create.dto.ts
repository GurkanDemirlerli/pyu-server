import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class QuestionCreateDto {

    @IsString()
    public title: string;

    @IsString()
    public content: string;

    @IsNotEmpty()
    public projectId: number;

    public creatorId: number;

}