import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IWorkspaceRepository } from "../abstract/i-workspace.repository";
import { WorkspaceEntity } from "./../../entities/workspace.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class WorkspaceRepository extends RepositoryBase<WorkspaceEntity> implements IWorkspaceRepository {
    constructor() {
        super(
            WorkspaceEntity
        );
    }
}