import { AnswerCreateDto, AnswerUpdateDto, AnswerDetailDto, AnswerListDto } from "@models/dtos";
import { AnswerFilter } from "@models/filters";
import { AnswerEntity } from "@entities/answer.entity";

export interface IAnswerService {
    add(model: AnswerCreateDto): Promise<number>;
    list(filters: AnswerFilter, requestorId: number): Promise<AnswerListDto[]>;
    find(id: number, requestorId: number): Promise<AnswerDetailDto>;
    update(id: number, model: AnswerUpdateDto, requestorId: number): Promise<AnswerEntity>;
    delete(id: number, requestorId: number): Promise<void>;
}
