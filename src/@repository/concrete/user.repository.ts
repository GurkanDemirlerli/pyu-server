import { getManager } from "typeorm";
import { IUserRepository } from "../abstract/i-user.repository";
import { UserEntity } from "./../../entities/user.entity";
import { injectable } from "inversify";
import { RepositoryBase } from "./base/repository.base";
@injectable()
export class UserRepository extends RepositoryBase<UserEntity> implements IUserRepository {
    constructor() {
        super(
            UserEntity
        );
    }
    findByLogin(email: string, password: string) {
        return getManager().getRepository(UserEntity).findOne({ email: email, password: password })
    }

}