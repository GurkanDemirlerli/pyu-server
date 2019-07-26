import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IWorkspaceMemberRepository } from "../abstract";
import { WorkspaceMemberEntity } from "./../../entities/workspace-member.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class WorkspaceMemberRepository extends RepositoryBase<WorkspaceMemberEntity> implements IWorkspaceMemberRepository {
    constructor() {
        super(
            WorkspaceMemberEntity
        );
    }
}