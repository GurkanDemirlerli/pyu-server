import { IQuestionRepository } from "../../@repository/abstract/i-question.repository";
import { IProjectRepository } from "../../@repository/abstract/i-project.repository";
import { injectable, inject } from "inversify";
import { IQuestionService } from "../abstract/i-question.service";
import { InjectTypes } from "../../ioc";
import { QuestionEntity } from "../../entities/question.entity";
import { QuestionCreateDto } from "../../_models/dtos/question/question-create.dto";
import { AppError } from '../../errors/app-error';

@injectable()
export class QuestionService implements IQuestionService {

    constructor(
        @inject(InjectTypes.Repository.QUESTION) private readonly _questionRepository: IQuestionRepository,
        @inject(InjectTypes.Repository.PROJECT) private readonly _projectRepository: IProjectRepository,

    ) { }

    add(model: QuestionCreateDto) {
        return new Promise<any>((resolve, reject) => {
            this.validateAuthority(model.projectId, model.creatorId).then(() => {
                let question: QuestionEntity = Object.assign(new QuestionEntity(), model);
                return this._questionRepository.insert(question);
            }).then((res) => {
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

    private validateAuthority(projectId, userId): Promise<void> {
        return new Promise<any>((resolve, reject) => {
            this._projectRepository.findOne(projectId, { relations: ["users", "creator"] }).then((res) => {
                let prjct = res;
                if (prjct.users.filter(x => x.id === userId).length < 1 && prjct.creator.id !== userId) {
                    throw new AppError(
                        'AppError',
                        'Bu projede yetkiniz yoktur.',
                        403
                    );
                }
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }


}
