import { IsString } from 'class-validator';

export class CommentUpdateDto {

    @IsString()
    public title: string;

    @IsString()
    public content: string;
}
