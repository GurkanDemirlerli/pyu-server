import { IsString, IsInt, IsNotEmpty, IsNumber, IsDate, IsArray, IsDateString } from 'class-validator';

export class ProjectCreateDto {

  @IsString()
  public name: string;

  @IsNumber()
  public parentId: number;

  @IsDateString()
  public startDate: Date;

  @IsDateString()
  public dueDate: Date;

  @IsArray()
  public sharings: any[];

}

//TODO validationları düzelt
