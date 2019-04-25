import { injectable, inject } from 'inversify';
import { InjectTypes } from '../../ioc';
import { AppError } from '../../errors/app-error';
import 'reflect-metadata';

import { IAuthService } from '../abstract';
import {
    LoginDto, RegisterDto
} from "../../_models/dtos";
import {
    IUserRepository
} from '../../@repository/abstract';
import {
    UserEntity
} from '../../entities';

import * as jwt from 'jsonwebtoken';
import { DecodedTokenModel } from '../../_models/decoded-token.model';


@injectable()
export class AuthService implements IAuthService {


    constructor(
        @inject(InjectTypes.Repository.USER) private readonly _userRepository: IUserRepository
    ) { }

    login(model: LoginDto): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this._userRepository.findByLogin(model.email, model.password).then((found_user) => {
                console.log(found_user);
                if (!found_user) {
                    throw new AppError(
                        'AppError',
                        'Wrong Username or Password.',
                        404
                    );
                }
                console.log("Found User : ", found_user);
                let decodedToken: DecodedTokenModel = {
                    id: found_user.id,
                    username: found_user.username,
                    email: found_user.email,
                    name: found_user.name,
                    surname: found_user.surname
                }
                let token = jwt.sign({
                    ...decodedToken
                }, 'MySecret', { expiresIn: 86400000 });
                let loginResult: any = {
                    id: found_user.id,
                    email: found_user.email,
                    token: token
                }

                resolve(loginResult);
            }).catch((error) => {
                reject(error)
            });
        })
    }


    // register(model: RegisterDto) {
    //     return new Promise<any>((resolve, reject) => {
    //         let user: UserEntity = Object.assign(new UserEntity(), model);
    //         this._userRepository.insert(user).then((res) => {
    //             resolve(res);
    //         }).catch((err) => {
    //             reject(err);
    //         });
    //     });
    // }


}