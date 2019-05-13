import { IsNumber } from "class-validator";

export class CompanyUserRegisterDto {

    @IsNumber()
    userId: number;
}
