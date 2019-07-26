import { IAccountService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IAccountRepository } from "../../@repository/abstract";
import { AccountEntity } from "../../entities/account.entity";
import { AppError } from "../../errors/app-error";

@injectable()
export class AccountService implements IAccountService {

    constructor(
        @inject(InjectTypes.Repository.ACCOUNT) private readonly _accountRepository: IAccountRepository
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

