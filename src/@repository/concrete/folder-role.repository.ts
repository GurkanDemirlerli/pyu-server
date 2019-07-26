import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IFolderRoleRepository } from "../abstract";
import { FolderRoleEntity } from "./../../entities/folder-role.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class FolderRoleRepository extends RepositoryBase<FolderRoleEntity> implements IFolderRoleRepository {
    constructor() {
        super(
            FolderRoleEntity
        );
    }
}