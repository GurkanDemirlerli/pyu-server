import { IWorkScheduleWeekService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IWorkScheduleWeekRepository } from "../../@repository/abstract";
import { WorkScheduleWeekEntity } from "../../entities/work-schedule-week.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class WorkScheduleWeekService implements IWorkScheduleWeekService {

    constructor(
        @inject(InjectTypes.Repository.WORK_SCHEDULE_WEEK) private readonly _workScheduleWeekRepository: IWorkScheduleWeekRepository
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

