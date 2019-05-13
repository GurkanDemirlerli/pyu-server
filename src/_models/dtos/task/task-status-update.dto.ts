import { IsNumber } from "class-validator";

export class TaskStatusUpdateDto {
    @IsNumber()
    public statusId: string;
}
