import { AnswerCreateDto } from './../../_models/dtos/answer/answer-create.dto';
import { AnswerFilter } from './../../_models/filters/answer-filter';
export interface IAnswerService {
    add(model: AnswerCreateDto);
    list(filters: AnswerFilter);
    find(id: number);
    update(model);
    delete(id:number);
}