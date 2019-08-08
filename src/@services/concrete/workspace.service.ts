import { WorkspaceUserRepository } from './../../@repository/concrete/workspace-user.repository';
import { IWorkspaceService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IWorkspaceRepository, IWorkspaceUserRepository } from "../../@repository/abstract";
import { WorkspaceEntity } from "../../entities/workspace.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class WorkspaceService implements IWorkspaceService {

    constructor(
        @inject(InjectTypes.Repository.WORKSPACE) private readonly _workspaceRepository: IWorkspaceRepository,
        @inject(InjectTypes.Repository.WORKSPACE_USER) private readonly _workspaceUserRepository: IWorkspaceUserRepository

    ) { }

    add(model: any): Promise<number> {
        throw new Error("Method not implemented.");
    }
    async list(filters: any, requestorId: number): Promise<any[]> {
        let wspEns = await this._workspaceUserRepository.list({ where: { accountId: requestorId }, relations: ["workspaceMember", "workspaceMember.workspace"] });
        let wspDtos = [];
        wspEns.map((x) => {
            wspDtos.push(x.workspaceMember.workspace);
        });
        return Promise.resolve(wspDtos);
    }
    update(id: number, model: any, requestorId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: number, requestorId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async find(id: number, requestorId: number): Promise<any> {
        let wspEn: WorkspaceEntity = await this._workspaceRepository.findOne(id, {});
        if (!wspEn) throw new AppError('AppError', 'Workspace not found.', 404);
        return Promise.resolve(wspEn);
    }
}
