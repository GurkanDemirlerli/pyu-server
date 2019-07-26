import { IGroupService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IGroupRepository } from "../../@repository/abstract";
import { GroupEntity } from "../../entities/group.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class GroupService implements IGroupService {

    constructor(
        @inject(InjectTypes.Repository.GROUP) private readonly _groupRepository: IGroupRepository
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

