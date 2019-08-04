import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { IAccountService } from "../@services/abstract";
import { ErrorHandler } from "../errors/error-handler";
import { InjectTypes } from "../ioc/inject-types";
import { RegisterDto, LoginDto } from "../_models/dtos";

@injectable()
export class AccountController {

    constructor(
        @inject(InjectTypes.Service.ACCOUNT) private readonly _accountService: IAccountService
    ) { }


    public async register(req: Request, res: Response, next: NextFunction) {
        let registerDto: RegisterDto = Object.assign(new RegisterDto(), req.body);
        this._accountService.register(registerDto).then((account) => {
            return res.status(200).json({
                success: true,
                data: account
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'register', 'UserController');
        })
    }

    public async login(req: Request, res: Response, next: NextFunction) {
        let loginDto: LoginDto = Object.assign(new LoginDto(), req.body);
        this._accountService.login(loginDto).then((account) => {
            return res.status(200).json({
                success: true,
                data: account
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'login', 'UserController');
        });
    }
}