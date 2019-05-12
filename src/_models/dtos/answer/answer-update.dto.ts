import { IsString } from 'class-validator';

export class AnswerUpdateDto {

    @IsString()
    public title: string;

    @IsString()
    public content: string;

}
