import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class RootProjectCreateDto {

    @IsString()
    public title: string;

    @IsString()
    public description: string;

    @IsNumber()
    public companyId: number;

    public userId: number;

}
