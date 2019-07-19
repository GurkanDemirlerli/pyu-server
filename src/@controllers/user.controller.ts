import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { RegisterDto, LoginDto } from "../_models/dtos";
import { IUserService } from "../@services/abstract";
import { ErrorHandler } from "../errors/error-handler";
import { InjectTypes } from "../ioc/inject-types";

@injectable()
export class UserController {

    constructor(
        @inject(InjectTypes.Service.USER) private readonly _userService: IUserService
    ) { }

    public async register(req: Request, res: Response, next: NextFunction) {
        let registerDto: RegisterDto = Object.assign(new RegisterDto(), req.body);
        this._userService.register(registerDto).then((user) => {
            return res.status(200).json({
                success: true,
                data: user
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'register', 'UserController');
        })
    }

    public async login(req: Request, res: Response, next: NextFunction) {
        // return res.status(200).json({
        //     success: true,
        //     data: "safasfs"
        // });
        let loginDto: LoginDto = Object.assign(new LoginDto(), req.body);
        this._userService.login(loginDto).then((user) => {
            return res.status(200).json({
                success: true,
                data: user
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'login', 'UserController');
        });
    }
}
