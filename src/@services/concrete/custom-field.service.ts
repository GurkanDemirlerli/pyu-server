import { ICustomFieldService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ICustomFieldRepository } from "../../@repository/abstract";
import { CustomFieldEntity } from "../../entities/custom-field.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class CustomFieldService implements ICustomFieldService {

    constructor(
        @inject(InjectTypes.Repository.CUSTOM_FIELD) private readonly _customFieldRepository: ICustomFieldRepository
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

