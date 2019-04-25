import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CommentCreateDto {

    @IsString()
    public title: string;

    @IsString()
    public content: string;

    @IsNotEmpty()
    public taskId: number;

    public creatorId: number;

}