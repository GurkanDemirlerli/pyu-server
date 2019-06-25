import { IsString, IsNumber, ValidateNested, IsArray } from "class-validator";
import { AbstractStatusCreateDto } from "../abstract-status/abstract-status-create.dto";
import { Type } from "class-transformer";

export class AddStatusTemplateDto {
  @IsString()
  public name: string;

  @IsNumber()
  public companyId: number;

  public creatorId: number;

  // @ValidateNested()
  // @Type(type => AbstractStatusCreateDto)
  // @IsArray()
  public statuses: AbstractStatusCreateDto[];

}
