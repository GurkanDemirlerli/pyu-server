import { QuestionCreateDto } from './../../_models/dtos/question/question-create.dto';
import { QuestionFilter } from './../../_models/filters/question-filter';
export interface IQuestionService {
    add(model: QuestionCreateDto);
    list(filters: QuestionFilter);
    find(id: number);
    update(model);
    delete(id:number);
}