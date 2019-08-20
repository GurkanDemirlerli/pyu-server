import { ISubjectTaskService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ISubjectTaskRepository } from "../../@repository/abstract";
import { SubjectTaskEntity } from "../../entities/subject-task.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class SubjectTaskService implements ISubjectTaskService {


    constructor(
        @inject(InjectTypes.Repository.SUBJECT_TASK) private readonly _subjectTaskRepository: ISubjectTaskRepository
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
        let sbjEn: SubjectTaskEntity = await this._subjectTaskRepository.findOne(id, { relations: ["subject"] });
        if (!sbjEn) throw new AppError('AppError', 'Task not found.', 404);
        return Promise.resolve(sbjEn);
    }

    async updateStatus(subjectId: number, model: any, requestorId: number): Promise<void> {
        let updatedSubject: SubjectTaskEntity;
        let oldSubject: SubjectTaskEntity = await this._subjectTaskRepository.findById(subjectId);
        if (!oldSubject) throw new AppError('AppError', 'Subject not found.', 404);
        updatedSubject = Object.assign(oldSubject, { statusId: model.statusId });
        await this._subjectTaskRepository.update(subjectId, updatedSubject);
        return Promise.resolve();
    }
}

