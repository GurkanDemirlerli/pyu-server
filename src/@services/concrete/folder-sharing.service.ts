import { IFolderSharingService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IFolderSharingRepository } from "../../@repository/abstract";
import { FolderSharingEntity } from "../../entities/folder-sharing.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class FolderSharingService implements IFolderSharingService {

    constructor(
        @inject(InjectTypes.Repository.FOLDER_SHARING) private readonly _folderSharingRepository: IFolderSharingRepository
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

