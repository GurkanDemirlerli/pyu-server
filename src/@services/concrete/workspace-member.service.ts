import { IWorkspaceMemberService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IWorkspaceMemberRepository } from "../../@repository/abstract";
import { WorkspaceMemberEntity } from "../../entities/workspace-member.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class WorkspaceMemberService implements IWorkspaceMemberService {


    constructor(
        @inject(InjectTypes.Repository.WORKSPACE_MEMBER) private readonly _workspaceMemberRepository: IWorkspaceMemberRepository
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

    async getWorkspaceMembers(workspaceId: number, requestorId: number): Promise<any> {
        let mbEn = await this._workspaceMemberRepository.list({ where: { workspaceId: workspaceId }, relations: ["user", "user.account", "group"] });
        // let wspDtos = [];
        // mbEn.map((x) => {
        //     wspDtos.push(x.workspaceMember.workspace);
        // });
        return Promise.resolve(mbEn);
    }
}

