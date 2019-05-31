import { IQuestionService } from "@services/abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "@ioc";
import { IQuestionRepository } from "@repositories/abstract";
import { QuestionCreateDto, QuestionListDto, QuestionDetailDto, QuestionUpdateDto } from "@models/dtos";
import { QuestionEntity } from "@entities/question.entity";
import { QuestionFilter } from "@models/filters";
import { AppError } from "@errors/app-error";

@injectable()
export class QuestionService implements IQuestionService {

    constructor(
        @inject(InjectTypes.Repository.QUESTION) private readonly _questionRepository: IQuestionRepository
    ) { }
    add(model: QuestionCreateDto): Promise<number> {
        return new Promise<any>((resolve, reject) => {
            //TODO yetkisi var mı diye kontrol et
            let questionEn: QuestionEntity = Object.assign(new QuestionEntity(), model);
            this._questionRepository.insert(questionEn).then((res) => {
                resolve(res.id);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    list(filters: QuestionFilter, requestorId: number): Promise<QuestionListDto[]> {
        throw new Error("Method not implemented.");
    }

    find(id: number, requestorId: number): Promise<QuestionDetailDto> {
        throw new Error("Method not implemented.");
    }

    update(id: number, model: QuestionUpdateDto, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            let oldQuestion: QuestionEntity;
            let updatedQuestion: QuestionEntity;
            this._questionRepository.findById(id).then((foundQuestion) => {
                oldQuestion = foundQuestion;
                if (!foundQuestion) throw new AppError('AppError', 'Question not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                updatedQuestion = Object.assign(oldQuestion, model);
                return this._questionRepository.update(id, updatedQuestion);
            }).then(() => {
                resolve(updatedQuestion);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    delete(id: number, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            this._questionRepository.findById(id).then((foundQuestion) => {
                if (!foundQuestion) throw new AppError('AppError', 'Question not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                return this._questionRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }


    //TODO Auth fonksiyonu yaz

}
