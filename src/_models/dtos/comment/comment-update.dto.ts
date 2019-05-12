import { IsString } from 'class-validator';

export class CommentUpdateDto {

    @IsString()
    public content: string;
}
