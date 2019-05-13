import { IsNumber } from "class-validator";

export class ProjectAssignManagerDto {

    @IsNumber()
    userId: number;
}
