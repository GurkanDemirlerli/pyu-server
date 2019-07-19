import { RegisterDto, LoginDto } from "../../_models/dtos";
import { UserFilter } from "../../_models/filters";

export interface IUserService {
    register(model: RegisterDto);
    list(filters: UserFilter);
    find(id: number);
    update(model);
    delete(id: number);
    login(model: LoginDto);
}
