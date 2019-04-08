import { getManager } from "typeorm";
import { ITaskRepository } from "../abstract/i-task.repository";
import { TaskEntity } from "./../../entities/task.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class TaskRepository implements ITaskRepository {

    list() {
        return getManager().getRepository(TaskEntity).find({ relations: ["comments"] });
    }

    insert(task: TaskEntity) {
        return getManager().getRepository(TaskEntity).save(task);
    }

}