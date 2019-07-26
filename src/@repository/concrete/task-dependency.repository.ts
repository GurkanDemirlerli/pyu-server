import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ITaskDependencyRepository } from "../abstract";
import { TaskDependencyEntity } from "./../../entities/task-dependency.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class TaskDependencyRepository extends RepositoryBase<TaskDependencyEntity> implements ITaskDependencyRepository {
    constructor() {
        super(
            TaskDependencyEntity
        );
    }
}