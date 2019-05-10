import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class TaskCreateDto {

    @IsString()
    public title: string;

    @IsString()
    public description: string;

    @IsNotEmpty()
    public projectId: number;

    @IsNumber()
    public fromIssueId: number;

    public creatorId: number;

    // public statusId: number;

}
