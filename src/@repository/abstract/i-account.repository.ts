import { AccountEntity } from "./../../entities/account.entity";
import { IRepositoryBase } from "./base/i-repository.base";

export interface IAccountRepository extends IRepositoryBase<AccountEntity> {
    findByLogin(email: string, password: string);
}