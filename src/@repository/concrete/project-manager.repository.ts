import { RepositoryBase } from './base/repository.base';
import { IProjectManagerRepository } from "../abstract/i-project-manager.repository";
import { ProjectManagerEntity } from "./../../entities/project-manager.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class ProjectManagerRepository extends RepositoryBase<ProjectManagerEntity> implements IProjectManagerRepository {
    constructor() {
        super(
            ProjectManagerEntity
        );
    }
}
