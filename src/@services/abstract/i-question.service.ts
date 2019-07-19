import { QuestionCreateDto, QuestionUpdateDto, QuestionDetailDto, QuestionListDto } from "../../_models/dtos";
import { QuestionFilter } from "../../_models/filters";
import { QuestionEntity } from "../../entities/question.entity";

export interface IQuestionService {
    add(model: QuestionCreateDto): Promise<number>;
    list(filters: QuestionFilter, requestorId: number): Promise<QuestionListDto[]>;
    find(id: number, requestorId: number): Promise<QuestionDetailDto>;
    update(id: number, model: QuestionUpdateDto, requestorId: number): Promise<QuestionEntity>;
    delete(id: number, requestorId: number): Promise<void>;
}
