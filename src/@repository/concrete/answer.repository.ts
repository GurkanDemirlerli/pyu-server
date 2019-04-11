import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IAnswerRepository } from "../abstract/i-answer.repository";
import { AnswerEntity } from "./../../entities/answer.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class AnswerRepository extends RepositoryBase<AnswerEntity> implements IAnswerRepository {
    constructor() {
        super(
            AnswerEntity
        );
    }
}