import { RepositoryBase } from './base/repository.base';
import { ITaskRepository } from "../abstract/i-task.repository";
import { TaskEntity } from "./../../entities/task.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
import { getManager } from 'typeorm';
import { TaskFilter } from '@models/filters/task-filter';
@injectable()
export class TaskRepository extends RepositoryBase<TaskEntity> implements ITaskRepository {
    constructor() {
        super(
            TaskEntity
        );
    }

    find(filters: TaskFilter): Promise<TaskEntity[]> {
        let query = getManager().createQueryBuilder(TaskEntity, "task")
            .leftJoinAndSelect("task.assignees", "assignee");

        if (filters.assignedTo !== undefined) query = query.andWhere("assignee.id =:id", { id: filters.assignedTo });
        if (filters.projectId !== undefined) query = query.andWhere("projectId =:projectId", { projectId: filters.projectId });
        if (filters.createdBy !== undefined) query = query.andWhere("creatorId =:creatorId", { creatorId: filters.createdBy });
        if (filters.status !== undefined) query = query.andWhere("statusId =:statusId", { statusId: filters.status });

        query = query.orderBy("task.id", "DESC");
        if (filters.take !== undefined) {
            query = query.take(filters.take);
            if (filters.skip !== undefined) query = query.skip(filters.skip);
        }

        return query.orderBy("task.id", "DESC").getMany();
    }

}
