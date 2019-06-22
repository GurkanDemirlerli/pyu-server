import { RepositoryBase } from './base/repository.base';
import { IAbstractStatusRepository } from "../abstract/i-abstract-status.repository";
import { AbstractStatusEntity } from "./../../entities/abstract-status.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class AbstractStatusRepository extends RepositoryBase<AbstractStatusEntity> implements IAbstractStatusRepository {
    constructor() {
        super(
            AbstractStatusEntity
        );
    }
}
