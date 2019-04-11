import { UserEntity } from "./../../entities/user.entity";
import { IRepositoryBase } from "./base/i-repository.base";

export interface IUserRepository extends IRepositoryBase<UserEntity> {
    findByLogin(email: string, password: string);
}