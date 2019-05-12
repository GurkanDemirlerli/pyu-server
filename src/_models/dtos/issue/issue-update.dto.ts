import { IsString } from 'class-validator';

export class IssueUpdateDto {

    @IsString()
    public title: string;

    @IsString()
    public description: string;

}
