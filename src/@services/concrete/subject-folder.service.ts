import { ISubjectFolderService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ISubjectFolderRepository } from "../../@repository/abstract";
import { SubjectFolderEntity } from "../../entities/subject-folder.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class SubjectFolderService implements ISubjectFolderService {

    constructor(
        @inject(InjectTypes.Repository.SUBJECT_FOLDER) private readonly _subjectFolderRepository: ISubjectFolderRepository
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

