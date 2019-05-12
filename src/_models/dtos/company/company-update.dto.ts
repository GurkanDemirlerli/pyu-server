import { IsString } from 'class-validator';

export class CompanyUpdateDto {

    @IsString()
    public name: string;

    @IsString()
    public description: string;

}
