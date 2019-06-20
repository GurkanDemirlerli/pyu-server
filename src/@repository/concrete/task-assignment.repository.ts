import { RepositoryBase } from './base/repository.base';
import { ITaskAssignmentRepository } from "../abstract/i-task-assignment.repository";
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
