import { ISubjectCommentContentService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ISubjectCommentContentRepository } from "../../@repository/abstract";
import { SubjectCommentContentEntity } from "../../entities/subject-comment-content.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class SubjectCommentContentService implements ISubjectCommentContentService {

    constructor(
        @inject(InjectTypes.Repository.SUBJECT_COMMENT_CONTENT) private readonly _subjectCommentContentRepository: ISubjectCommentContentRepository
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

