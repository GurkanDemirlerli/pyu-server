import { IAnswerRepository } from "../../@repository/abstract/i-answer.repository";
import { injectable, inject } from "inversify";
import { IAnswerService } from "../abstract/i-answer.service";
import { InjectTypes } from "../../ioc";
import { AnswerEntity } from "../../entities/answer.entity";
import { AnswerCreateDto } from "../../_models/dtos/answer/answer-create.dto";

@injectable()
export class AnswerService implements IAnswerService {

    constructor(
        @inject(InjectTypes.Repository.ANSWER) private readonly _answerRepository: IAnswerRepository
    ) { }

    add(model: AnswerCreateDto) {
        return new Promise<any>((resolve, reject) => {
            let answer: AnswerEntity = Object.assign(new AnswerEntity(), model);
            this._answerRepository.insert(answer).then((res) => {
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