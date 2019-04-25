import { IUserRepository } from "../../@repository/abstract/i-user.repository";
import { injectable, inject } from "inversify";
import { IUserService } from "../abstract/i-user.service";
import { InjectTypes } from "../../ioc";
import { UserEntity } from "../../entities/user.entity";
import { LoginDto } from "../../_models/dtos/user/login.dto.model";
import { RegisterDto } from "../../_models/dtos/user/register.dto";
import { DecodedTokenModel } from "../../_models/decoded-token.model";
import { AppError } from "../../errors/app-error";
import * as jwt from 'jsonwebtoken';
@injectable()
export class UserService implements IUserService {

    constructor(
        @inject(InjectTypes.Repository.USER) private readonly _userRepository: IUserRepository
    ) { }

    public list(filters) {
        throw new Error("Method not implemented.");
    }
    public find(id: number) {
        throw new Error("Method not implemented.");
    }
    public update(model: any) {
        throw new Error("Method not implemented.");
    }
    public delete(id: number) {
        throw new Error("Method not implemented.");
    }

    public login(model: LoginDto): Promise<any> {
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

    public register(model: RegisterDto) {
        return new Promise<any>((resolve, reject) => {
            this.checkUniqueness(model.email, model.username).then(() => {
                let user: UserEntity = Object.assign(new UserEntity(), model, { createdAt: new Date });
                return this._userRepository.insert(user);
            }).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    private checkUniqueness(email: string, username: string): Promise<void> {
        return new Promise<any>((resolve, reject) => {
            let query = {
                where: [
                    { email: email },
                    { username: username }
                ]
            }
            this._userRepository.list(query).then((users) => {
                if (users.length > 0) {
                    if (users[0].email === email)
                        throw new AppError('AppError', 'This email is already taken', 422);
                    else
                        throw new AppError('AppError', 'This username is already taken', 422);
                }
                resolve();
            }).catch((err) => {
                reject(err);
            })
        });
    }

}