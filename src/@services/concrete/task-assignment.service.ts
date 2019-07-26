import { ITaskAssignmentService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ITaskAssignmentRepository } from "../../@repository/abstract";
import { TaskAssignmentEntity } from "../../entities/task-assignment.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class TaskAssignmentService implements ITaskAssignmentService {

    constructor(
        @inject(InjectTypes.Repository.TASK_ASSIGNMENT) private readonly _taskAssignmentRepository: ITaskAssignmentRepository
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

