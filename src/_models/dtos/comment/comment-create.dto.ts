import { IsString, IsNotEmpty } from 'class-validator';

export class CommentCreateDto {

    @IsString()
    public content: string;

    @IsNotEmpty()
    public taskId: number;

    public userId: number;

}
