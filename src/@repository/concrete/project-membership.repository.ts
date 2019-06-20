import { RepositoryBase } from './base/repository.base';
import { IProjectMembershipRepository } from "../abstract/i-project-membership.repository";
import { ProjectMembershipEntity } from "./../../entities/project-membership.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class ProjectMembershipRepository extends RepositoryBase<ProjectMembershipEntity> implements IProjectMembershipRepository {
    constructor() {
        super(
            ProjectMembershipEntity
        );
    }
}
