import { RegisterDto, LoginDto } from "../../_models/dtos";

export interface IAccountService {
    register(model: RegisterDto);
    login(model: LoginDto);
}