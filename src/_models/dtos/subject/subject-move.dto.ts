import { IsNumber } from 'class-validator';

export class SubjectMoveDto {
    @IsNumber()
    parentId: number;
    @IsNumber()
    childId: number;
}
