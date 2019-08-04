import { ISubjectDomainService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ISubjectDomainRepository, ISubjectItemRepository } from "../../@repository/abstract";
import { SubjectDomainEntity } from "../../entities/subject-domain.entity";
import { AppError } from "../../errors/app-error";
import { SubjectTypes } from "src/enums";

@injectable()
export class SubjectDomainService implements ISubjectDomainService {

    constructor(
        @inject(InjectTypes.Repository.SUBJECT_DOMAIN) private readonly _subjectDomainRepository: ISubjectDomainRepository,
        @inject(InjectTypes.Repository.SUBJECT_ITEM) private readonly _subjectItemRepository: ISubjectItemRepository
    ) { }

    async add(model: any): Promise<number> {
        throw new Error("Method not implemented.");
    }
    async list(filters: any, requestorId: number): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    async update(id: number, model: any, requestorId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async delete(id: number, requestorId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async find(id: number, requestorId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getActiveDomains(workspaceId: number, requestorId: number) {
        let domainEns = await this._subjectItemRepository.list({ where: { workspaceId: workspaceId,subjectType:SubjectTypes.DOMAIN }, relations: ["folder", "folder.domain"] });
        return Promise.resolve(domainEns);
    }
}

