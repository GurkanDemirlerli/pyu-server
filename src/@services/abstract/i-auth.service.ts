import { LoginDto } from "../../_models";

export interface IAuthService {
    // register(model: RegisterRequestModel): Promise<RegisterResultModel>;
    login(model: LoginDto): Promise<any>;
}