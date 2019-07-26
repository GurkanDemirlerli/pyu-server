import { IWorkflowStatusService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IWorkflowStatusRepository } from "../../@repository/abstract";
import { WorkflowStatusEntity } from "../../entities/workflow-status.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class WorkflowStatusService implements IWorkflowStatusService {

    constructor(
        @inject(InjectTypes.Repository.WORKFLOW_STATUS) private readonly _workflowStatusRepository: IWorkflowStatusRepository
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

