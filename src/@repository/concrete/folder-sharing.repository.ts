import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IFolderSharingRepository } from "../abstract";
import { FolderSharingEntity } from "./../../entities/folder-sharing.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class FolderSharingRepository extends RepositoryBase<FolderSharingEntity> implements IFolderSharingRepository {
    constructor() {
        super(
            FolderSharingEntity
        );
    }
}