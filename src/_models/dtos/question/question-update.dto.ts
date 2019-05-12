import { IsString } from 'class-validator';

export class QuestionUpdateDto {

    @IsString()
    public title: string;

    @IsString()
    public content: string;

}
