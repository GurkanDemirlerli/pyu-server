import { RegisterDto } from './../../_models/dtos/user/register.dto';
import { LoginDto } from "_models/dtos/user/login.dto.model";
import { UserFilter } from './../../_models/filters/user-filter';

export interface IUserService {
    register(model: RegisterDto);
    list(filters: UserFilter);
    find(id: number);
    update(model);
    delete(id: number);
    login(model: LoginDto);
}