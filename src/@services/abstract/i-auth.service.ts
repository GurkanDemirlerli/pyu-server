import { LoginDto } from "../../_models/dtos";

export interface IAuthService {
    // register(model: RegisterRequestModel): Promise<RegisterResultModel>;
    login(model: LoginDto): Promise<any>;
}