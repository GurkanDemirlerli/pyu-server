import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IWorkspaceGroupUserRepository } from "../abstract";
import { WorkspaceGroupUserEntity } from "./../../entities/workspace-group-user.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class WorkspaceGroupUserRepository extends RepositoryBase<WorkspaceGroupUserEntity> implements IWorkspaceGroupUserRepository {
    constructor() {
        super(
            WorkspaceGroupUserEntity
        );
    }
}