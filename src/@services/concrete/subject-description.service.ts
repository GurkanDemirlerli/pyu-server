import { ISubjectDescriptionService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ISubjectDescriptionRepository } from "../../@repository/abstract";
import { SubjectDescriptionEntity } from "../../entities/subject-description.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class SubjectDescriptionService implements ISubjectDescriptionService {

    constructor(
        @inject(InjectTypes.Repository.SUBJECT_DESCRIPTION) private readonly _subjectDescriptionRepository: ISubjectDescriptionRepository
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

