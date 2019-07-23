import { IWorkspaceService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IWorkspaceRepository } from "../../@repository/abstract";
import { WorkspaceEntity } from "../../entities/workspace.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class WorkspaceService implements IWorkspaceService {

    constructor(
        @inject(InjectTypes.Repository.WORKSPACE) private readonly _workspaceRepository: IWorkspaceRepository
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
        let sbjEn: WorkspaceEntity = await this._workspaceRepository.findOne(id, { });
        if (!sbjEn) throw new AppError('AppError', 'Task not found.', 404);
        return Promise.resolve(sbjEn);
    }
}

