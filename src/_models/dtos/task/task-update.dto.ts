import { IsString } from 'class-validator';

export class TaskUpdateDto {

  @IsString()
  public title: string;

  @IsString()
  public description: string;

}
