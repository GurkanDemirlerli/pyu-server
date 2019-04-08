import { IAuthService } from './../@services/abstract/i-auth.service';
import 'reflect-metadata';
import { LoginDto } from './../_models';
import { injectable, inject } from 'inversify';
import { InjectTypes } from '../ioc';
import { validate } from 'class-validator';
import { AppError } from '../errors/app-error';
import { ErrorHandler } from '../errors/error-handler';

import {
    Request,
    Response,
    NextFunction
} from 'express';

import { UserEntity } from "../entities";
import { IUserRepository } from './../@repository/abstract';

@injectable()
export class UserController {

    constructor(
        @inject(InjectTypes.Repository.USER) private readonly _userRepository: IUserRepository,
        @inject(InjectTypes.Service.AUTH) private readonly _authService: IAuthService
    ) { }

    public async register(req: Request, res: Response, next: NextFunction) {
        let usr = new UserEntity();
        usr.email = req.body.email;
        usr.name = req.body.name;
        usr.password = req.body.password;
        usr.surname = req.body.surname;
        usr.username = req.body.username;
        this._userRepository.insert(usr).then((created_user) => {
            return res.status(201).json({
                success: true,
                data: created_user
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'register', 'AuthController');
        });
    }

    public async login(req: Request, res: Response, next: NextFunction) {
        let loginDto: LoginDto = new LoginDto();
        loginDto.email = req.body.email;
        loginDto.password = req.body.password;
        this._authService.login(loginDto).then((user) => {
            return res.status(200).json({
                success: true,
                data: user
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'login', 'AuthController');
        });
    }
}

