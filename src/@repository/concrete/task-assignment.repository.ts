import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ITaskAssignmentRepository } from "../abstract";
import { TaskAssignmentEntity } from "./../../entities/task-assignment.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class TaskAssignmentRepository extends RepositoryBase<TaskAssignmentEntity> implements ITaskAssignmentRepository {
    constructor() {
        super(
            TaskAssignmentEntity
        );
    }
}