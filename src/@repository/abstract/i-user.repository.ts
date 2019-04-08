import { UserEntity } from "./../../entities/user.entity";

export interface IUserRepository {
    list();
    insert(task: UserEntity);
    findByLogin(email: string, password: string);
}