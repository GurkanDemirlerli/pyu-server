import { IsNumber } from "class-validator";

export class ProjectUserRegisterDto {
    @IsNumber()
    userId: number;
}
