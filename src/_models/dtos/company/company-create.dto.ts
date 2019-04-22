import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CompanyCreateDto {

    @IsString()
    public name: string;

    @IsString()
    public description: string;

    public ownerId: number;

}