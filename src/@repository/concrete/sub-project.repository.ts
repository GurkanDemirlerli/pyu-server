import { RepositoryBase } from './base/repository.base';
import { ISubProjectRepository } from "../abstract/i-sub-project.repository";
import { SubProjectEntity } from "./../../entities/sub-project.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class SubProjectRepository extends RepositoryBase<SubProjectEntity> implements ISubProjectRepository {
    constructor() {
        super(
            SubProjectEntity
        );
    }
}
