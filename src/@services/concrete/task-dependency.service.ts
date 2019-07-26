import { ITaskDependencyService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ITaskDependencyRepository } from "../../@repository/abstract";
import { TaskDependencyEntity } from "../../entities/task-dependency.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class TaskDependencyService implements ITaskDependencyService {

    constructor(
        @inject(InjectTypes.Repository.TASK_DEPENDENCY) private readonly _taskDependencyRepository: ITaskDependencyRepository
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

