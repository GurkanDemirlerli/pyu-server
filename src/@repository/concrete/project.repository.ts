import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IProjectRepository } from "../abstract/i-project.repository";
import { ProjectEntity } from "./../../entities/project.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class ProjectRepository extends RepositoryBase<ProjectEntity> implements IProjectRepository {
    constructor() {
        super(
            ProjectEntity
        );
    }
}