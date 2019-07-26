import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IWorkspaceUserRepository } from "../abstract";
import { WorkspaceUserEntity } from "./../../entities/workspace-user.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class WorkspaceUserRepository extends RepositoryBase<WorkspaceUserEntity> implements IWorkspaceUserRepository {
    constructor() {
        super(
            WorkspaceUserEntity
        );
    }
}