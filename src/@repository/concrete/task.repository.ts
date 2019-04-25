import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ITaskRepository } from "../abstract/i-task.repository";
import { TaskEntity } from "./../../entities/task.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class TaskRepository extends RepositoryBase<TaskEntity> implements ITaskRepository {
    constructor() {
        super(
            TaskEntity
        );
    }

}