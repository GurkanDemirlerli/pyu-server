import { IQuestionRepository } from "../../@repository/abstract/i-question.repository";
import { injectable, inject } from "inversify";
import { IQuestionService } from "../abstract/i-question.service";
import { InjectTypes } from "../../ioc";
import { QuestionEntity } from "../../entities/question.entity";
import { QuestionCreateDto } from "../../_models/dtos/question/question-create.dto";

@injectable()
export class QuestionService implements IQuestionService {

    constructor(
        @inject(InjectTypes.Repository.QUESTION) private readonly _questionRepository: IQuestionRepository
    ) { }

    add(model: QuestionCreateDto) {
        return new Promise<any>((resolve, reject) => {
            let question: QuestionEntity = Object.assign(new QuestionEntity(), model);
            this._questionRepository.insert(question).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    list(filters) {
        throw new Error("Method not implemented.");
    }
    find(id: number) {
        throw new Error("Method not implemented.");
    }
    update(model: any) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }



}