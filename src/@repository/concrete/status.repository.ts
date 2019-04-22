import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IStatusRepository } from "../abstract/i-status.repository";
import { StatusEntity } from "./../../entities/status.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class StatusRepository extends RepositoryBase<StatusEntity> implements IStatusRepository {
    constructor() {
        super(
            StatusEntity
        );
    }
}