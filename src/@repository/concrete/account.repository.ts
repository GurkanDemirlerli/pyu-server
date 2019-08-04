import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IAccountRepository } from "../abstract";
import { AccountEntity } from "./../../entities/account.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class AccountRepository extends RepositoryBase<AccountEntity> implements IAccountRepository {
    constructor() {
        super(
            AccountEntity
        );
    }

    findByLogin(email: string, password: string) {
        return getManager().getRepository(AccountEntity).findOne({ email: email, password: password })
    }
}