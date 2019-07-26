import { IWorkspaceUserService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IWorkspaceUserRepository } from "../../@repository/abstract";
import { WorkspaceUserEntity } from "../../entities/workspace-user.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class WorkspaceUserService implements IWorkspaceUserService {

    constructor(
        @inject(InjectTypes.Repository.WORKSPACE_USER) private readonly _workspaceUserRepository: IWorkspaceUserRepository
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

