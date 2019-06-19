import { IsString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class TaskCreateDto {

  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsNotEmpty()
  public projectId: number;

  @IsNotEmpty()
  public statusId: number;

  @IsNumber()
  @IsOptional()
  public fromIssueId: number;

  public creatorId: number;

  // public statusId: number;

}
