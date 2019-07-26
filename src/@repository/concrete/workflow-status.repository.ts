import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IWorkflowStatusRepository } from "../abstract";
import { WorkflowStatusEntity } from "./../../entities/workflow-status.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class WorkflowStatusRepository extends RepositoryBase<WorkflowStatusEntity> implements IWorkflowStatusRepository {
    constructor() {
        super(
            WorkflowStatusEntity
        );
    }
}