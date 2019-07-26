import { IWorkspaceGroupUserService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IWorkspaceGroupUserRepository } from "../../@repository/abstract";
import { WorkspaceGroupUserEntity } from "../../entities/workspace-group-user.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class WorkspaceGroupUserService implements IWorkspaceGroupUserService {

    constructor(
        @inject(InjectTypes.Repository.WORKSPACE_GROUP_USER) private readonly _workspaceGroupUserRepository: IWorkspaceGroupUserRepository
    ) { }

    add(model: any): Promise<number> {
        throw new Error("Method not implemented.");
    }
    list(filters: any, requestorId: number): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    update(id: number, model: any, requestorId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: number, requestorId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async find(id: number, requestorId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

