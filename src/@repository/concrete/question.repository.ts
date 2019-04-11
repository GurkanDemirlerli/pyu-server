import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IQuestionRepository } from "../abstract/i-question.repository";
import { QuestionEntity } from "./../../entities/question.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class QuestionRepository extends RepositoryBase<QuestionEntity> implements IQuestionRepository {
    constructor() {
        super(
            QuestionEntity
        );
    }
}