import { getManager } from "typeorm";
import { IUserRepository } from "../abstract/i-user.repository";
import { UserEntity } from "./../../entities/user.entity";
import { injectable } from "inversify";
@injectable()
export class UserRepository implements IUserRepository {

    list() {
        return getManager().getRepository(UserEntity).find();
    }

    insert(user: UserEntity) {
        return getManager().getRepository(UserEntity).save(user);
    }

    findByLogin(email: string, password: string) {
        return getManager().getRepository(UserEntity).findOne({ email: email, password: password })
    }

}