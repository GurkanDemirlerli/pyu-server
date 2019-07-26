import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ICustomFieldRepository } from "../abstract";
import { CustomFieldEntity } from "./../../entities/custom-field.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class CustomFieldRepository extends RepositoryBase<CustomFieldEntity> implements ICustomFieldRepository {
    constructor() {
        super(
            CustomFieldEntity
        );
    }
}