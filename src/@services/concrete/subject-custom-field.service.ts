import { ISubjectCustomFieldService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ISubjectCustomFieldRepository } from "../../@repository/abstract";
import { SubjectCustomFieldEntity } from "../../entities/subject-custom-field.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class SubjectCustomFieldService implements ISubjectCustomFieldService {

    constructor(
        @inject(InjectTypes.Repository.SUBJECT_CUSTOM_FIELD) private readonly _subjectCustomFieldRepository: ISubjectCustomFieldRepository
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

