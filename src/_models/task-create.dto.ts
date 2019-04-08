import { IsString, IsInt } from 'class-validator';

export class TaskCreateDto {

    @IsString()
    public title: string;

    @IsString()
    public description: string;

    public creatorId: number;
}