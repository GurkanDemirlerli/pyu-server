import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IWorkflowRepository } from "../abstract";
import { WorkflowEntity } from "./../../entities/workflow.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class WorkflowRepository extends RepositoryBase<WorkflowEntity> implements IWorkflowRepository {
    constructor() {
        super(
            WorkflowEntity
        );
    }
}