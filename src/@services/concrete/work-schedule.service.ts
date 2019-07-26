import { IWorkScheduleService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IWorkScheduleRepository } from "../../@repository/abstract";
import { WorkScheduleEntity } from "../../entities/work-schedule.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class WorkScheduleService implements IWorkScheduleService {

    constructor(
        @inject(InjectTypes.Repository.WORK_SCHEDULE) private readonly _workScheduleRepository: IWorkScheduleRepository
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

