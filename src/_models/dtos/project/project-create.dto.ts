import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class ProjectCreateDto {

  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsString()
  public prefix: string;

  @IsNumber()
  public companyId: number;

  // @IsNumber()
  public parentId: number;

  // @IsNumber()
  public statusId: number;

  @IsNumber()
  public templateId: number;

  public members: number[]

  public creatorId: number;

}

//TODO validationları düzelt
