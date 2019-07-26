import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IWorkScheduleExclusionRepository } from "../abstract";
import { WorkScheduleExclusionEntity } from "./../../entities/work-schedule-exclusion.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class WorkScheduleExclusionRepository extends RepositoryBase<WorkScheduleExclusionEntity> implements IWorkScheduleExclusionRepository {
    constructor() {
        super(
            WorkScheduleExclusionEntity
        );
    }
}