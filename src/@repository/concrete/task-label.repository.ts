import { RepositoryBase } from './base/repository.base';
import { ITaskLabelRepository } from "../abstract/i-task-label.repository";
import { TaskLabelEntity } from "./../../entities/task-label.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class TaskLabelRepository extends RepositoryBase<TaskLabelEntity> implements ITaskLabelRepository {
    constructor() {
        super(
            TaskLabelEntity
        );
    }
}
