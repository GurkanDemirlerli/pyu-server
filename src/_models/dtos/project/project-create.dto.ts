import { IsString, IsInt, IsNotEmpty, IsNumber, IsDate, IsArray } from 'class-validator';

export class ProjectCreateDto {

  @IsString()
  public name: string;

  @IsNumber()
  public parentId: number;

  @IsDate()
  public startDate: Date;

  @IsDate()
  public dueDate: Date;

  @IsArray()
  public sharings: any[];

  @IsNumber()
  public workspaceId: number;

  @IsNumber()
  public workflowId: number;

  @IsNumber()
  public defaultWorkflowStatusId: number;

}

//TODO validationları düzelt
