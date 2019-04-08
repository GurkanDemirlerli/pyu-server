import { UserEntity } from "./../../entities/user.entity";

export interface IUserRepository {
    list();
    insert(user: UserEntity);
    findByLogin(email: string, password: string);
}