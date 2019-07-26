import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IGroupRepository } from "../abstract";
import { GroupEntity } from "./../../entities/group.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class GroupRepository extends RepositoryBase<GroupEntity> implements IGroupRepository {
    constructor() {
        super(
            GroupEntity
        );
    }
}