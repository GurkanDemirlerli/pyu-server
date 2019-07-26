import { ISubjectCommentService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ISubjectCommentRepository } from "../../@repository/abstract";
import { SubjectCommentEntity } from "../../entities/subject-comment.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class SubjectCommentService implements ISubjectCommentService {

    constructor(
        @inject(InjectTypes.Repository.SUBJECT_COMMENT) private readonly _subjectCommentRepository: ISubjectCommentRepository
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

