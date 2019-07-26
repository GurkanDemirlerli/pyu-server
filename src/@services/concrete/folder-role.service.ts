import { IFolderRoleService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IFolderRoleRepository } from "../../@repository/abstract";
import { FolderRoleEntity } from "../../entities/folder-role.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class FolderRoleService implements IFolderRoleService {

    constructor(
        @inject(InjectTypes.Repository.FOLDER_ROLE) private readonly _folderRoleRepository: IFolderRoleRepository
    ) { }

    add(model: any): Promise<number> {
        throw new Error("Method not implemented.");
    }
    list(filters: any, requestorId: number): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    update(id: number, model: any, requestorId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: number, requestorId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async find(id: number, requestorId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

