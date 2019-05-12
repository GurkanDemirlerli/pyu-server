import { IsString } from 'class-validator';

export class AnswerUpdateDto {

    @IsString()
    public content: string;

}
