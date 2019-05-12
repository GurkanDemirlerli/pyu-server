import { IsString } from 'class-validator';

export class ProjectUpdateDto {

    @IsString()
    public title: string;

    @IsString()
    public description: string;

}
