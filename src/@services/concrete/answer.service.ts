import { IAnswerService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IAnswerRepository } from "../../@repository/abstract";
import { AnswerCreateDto, AnswerListDto, AnswerDetailDto, AnswerUpdateDto } from "../../_models/dtos";
import { AnswerEntity } from "../../entities/answer.entity";
import { AnswerFilter } from "../../_models/filters";
import { AppError } from "../../errors/app-error";

@injectable()
export class AnswerService implements IAnswerService {

    constructor(
        @inject(InjectTypes.Repository.ANSWER) private readonly _answerRepository: IAnswerRepository
    ) { }

    add(model: AnswerCreateDto): Promise<number> {
        return new Promise<any>((resolve, reject) => {
            //TODO yetkisi var mı diye kontrol et
            let answerEn: AnswerEntity = Object.assign(new AnswerEntity(), model);
            this._answerRepository.insert(answerEn).then((res) => {
                resolve(res.id);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    list(filters: AnswerFilter, requestorId: number): Promise<AnswerListDto[]> {
        throw new Error("Method not implemented.");
    }

    find(id: number, requestorId: number): Promise<AnswerDetailDto> {
        throw new Error("Method not implemented.");
    }

    update(id: number, model: AnswerUpdateDto, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            let oldAnswer: AnswerEntity;
            let updatedAnswer: AnswerEntity;
            this._answerRepository.findById(id).then((foundAnswer) => {
                oldAnswer = foundAnswer;
                if (!foundAnswer) throw new AppError('AppError', 'Answer not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                updatedAnswer = Object.assign(oldAnswer, model);
                return this._answerRepository.update(id, updatedAnswer);
            }).then(() => {
                resolve(updatedAnswer);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    delete(id: number, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            this._answerRepository.findById(id).then((foundAnswer) => {
                if (!foundAnswer) throw new AppError('AppError', 'Answer not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                return this._answerRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }


    //TODO Auth fonksiyonu yaz

}
