import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class IssueCreateDto {

    @IsString()
    public title: string;

    @IsString()
    public description: string;

    @IsNotEmpty()
    public projectId: number;

    public creatorId: number;

}