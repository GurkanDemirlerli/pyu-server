import { ISubjectProjectService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ISubjectProjectRepository } from "../../@repository/abstract";
import { SubjectProjectEntity } from "../../entities/subject-project.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class SubjectProjectService implements ISubjectProjectService {

    constructor(
        @inject(InjectTypes.Repository.SUBJECT_PROJECT) private readonly _subjectProjectRepository: ISubjectProjectRepository
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

