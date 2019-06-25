import { IsNumber, IsString } from "class-validator";

export class AbstractStatusCreateDto {
  @IsNumber()
  public baseStatus: number;

  @IsNumber()
  public order: number;

  @IsString()
  public title: string;

  @IsString()
  public description: string;
}
