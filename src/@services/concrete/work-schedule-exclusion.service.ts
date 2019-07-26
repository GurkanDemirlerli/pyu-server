import { IWorkScheduleExclusionService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IWorkScheduleExclusionRepository } from "../../@repository/abstract";
import { WorkScheduleExclusionEntity } from "../../entities/work-schedule-exclusion.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class WorkScheduleExclusionService implements IWorkScheduleExclusionService {

    constructor(
        @inject(InjectTypes.Repository.WORK_SCHEDULE_EXCLUSION) private readonly _workScheduleExclusionRepository: IWorkScheduleExclusionRepository
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

