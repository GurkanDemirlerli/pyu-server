import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IWorkScheduleRepository } from "../abstract";
import { WorkScheduleEntity } from "./../../entities/work-schedule.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class WorkScheduleRepository extends RepositoryBase<WorkScheduleEntity> implements IWorkScheduleRepository {
    constructor() {
        super(
            WorkScheduleEntity
        );
    }
}