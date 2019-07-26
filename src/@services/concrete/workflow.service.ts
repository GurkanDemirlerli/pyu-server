import { IWorkflowService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IWorkflowRepository } from "../../@repository/abstract";
import { WorkflowEntity } from "../../entities/workflow.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class WorkflowService implements IWorkflowService {

    constructor(
        @inject(InjectTypes.Repository.WORKFLOW) private readonly _workflowRepository: IWorkflowRepository
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

