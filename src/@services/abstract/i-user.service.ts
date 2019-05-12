import { RegisterDto, LoginDto } from "@models/dtos";
import { UserFilter } from "@models/filters";

export interface IUserService {
    register(model: RegisterDto);
    list(filters: UserFilter);
    find(id: number);
    update(model);
    delete(id: number);
    login(model: LoginDto);
}
