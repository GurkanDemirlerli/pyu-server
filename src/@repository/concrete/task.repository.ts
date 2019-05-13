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

    listByFilters(filters: TaskFilter): Promise<TaskEntity[]> {
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
        query = query.leftJoin("task.comments", "comment").addSelect(["comment.id"])
        return query.orderBy("task.id", "DESC").getMany();
    }

    findForDetails(id: number): Promise<TaskEntity> {
        let query = getManager().createQueryBuilder(TaskEntity, "task").select(["task.id", "task.title", "task.description"])
            .where("task.id =:id", { id: id })
            .innerJoin("task.creator", "creator").addSelect(["creator.id", "creator.name", "creator.surname", "creator.username"])
            .leftJoin("task.assignees", "assignee").addSelect(["assignee.id", "assignee.name", "assignee.surname", "assignee.username"])
            .leftJoin("task.comments", "comment").addSelect(["comment.id", "comment.content", "comment.taskId"])
            .leftJoin("comment.creator", "commentCreator").addSelect(["commentCreator.id", "commentCreator.name", "commentCreator.surname", "commentCreator.username"])
            .leftJoin("task.fromIssue", "fromIssue").addSelect(["fromIssue.id", "fromIssue.title", "fromIssue.description"])
            .leftJoin("task.project", "project").addSelect(["project.id", "project.title", "project.description"])
            .leftJoin("project.creator", "projectCreator").addSelect(["projectCreator.id", "projectCreator.name", "projectCreator.surname", "projectCreator.username"])
            .leftJoin("task.status", "status").addSelect(["status.id", "status.title", "status.description"])

        return query.getOne();
    }

}
