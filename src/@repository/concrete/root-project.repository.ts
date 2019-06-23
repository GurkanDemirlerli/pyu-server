import { RepositoryBase } from './base/repository.base';
import { IRootProjectRepository } from "../abstract/i-root-project.repository";
import { RootProjectEntity } from "./../../entities/root-project.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class RootProjectRepository extends RepositoryBase<RootProjectEntity> implements IRootProjectRepository {
    constructor() {
        super(
            RootProjectEntity
        );
    }
}
