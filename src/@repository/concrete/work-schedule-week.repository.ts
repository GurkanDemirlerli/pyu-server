import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IWorkScheduleWeekRepository } from "../abstract";
import { WorkScheduleWeekEntity } from "./../../entities/work-schedule-week.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class WorkScheduleWeekRepository extends RepositoryBase<WorkScheduleWeekEntity> implements IWorkScheduleWeekRepository {
    constructor() {
        super(
            WorkScheduleWeekEntity
        );
    }
}