import { RepositoryBase } from './base/repository.base';
import { IStatusTemplateRepository } from "../abstract/i-status-template.repository";
import { StatusTemplateEntity } from "./../../entities/status-template.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class StatusTemplateRepository extends RepositoryBase<StatusTemplateEntity> implements IStatusTemplateRepository {
    constructor() {
        super(
            StatusTemplateEntity
        );
    }
}
