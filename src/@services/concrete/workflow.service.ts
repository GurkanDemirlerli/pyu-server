import { SubjectFolderEntity } from 'src/entities/subject-folder.entity';
import { IWorkflowService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IWorkflowRepository, ISubjectFolderRepository } from "../../@repository/abstract";
import { WorkflowEntity } from "../../entities/workflow.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class WorkflowService implements IWorkflowService {


    constructor(
        @inject(InjectTypes.Repository.WORKFLOW) private readonly _workflowRepository: IWorkflowRepository,
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

    async getActiveWorkflow(folderId: number, requestorId: number): Promise<any> {
        let fldEn: SubjectFolderEntity = await this._subjectFolderRepository.findOne(folderId, {});
        if (!fldEn) throw new AppError('AppError', 'Folder not found.', 404);
        let wspEn: WorkflowEntity = await this._workflowRepository.findOne(fldEn.workflowId, { relations: ["statuses"] });
        if (!wspEn) throw new AppError('AppError', 'Workflow not found.', 404);
        return Promise.resolve(wspEn);
    }
}

