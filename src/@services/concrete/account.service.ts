import { IAccountService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { IAccountRepository } from "../../@repository/abstract";
import { AccountEntity } from "../../entities/account.entity";
import { AppError } from "../../errors/app-error";
import { DecodedTokenModel } from "../../_models/decoded-token.model";
import { RegisterDto, LoginDto } from "src/_models/dtos";
import * as jwt from 'jsonwebtoken';
@injectable()
export class AccountService implements IAccountService {

    constructor(
        @inject(InjectTypes.Repository.ACCOUNT) private readonly _accountRepository: IAccountRepository
    ) { }

    public login(model: LoginDto): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this._accountRepository.findByLogin(model.email, model.password).then((found_account) => {
                console.log(found_account);
                if (!found_account) {
                    throw new AppError(
                        'AppError',
                        'Wrong Username or Password.',
                        404
                    );
                }
                console.log("Found User : ", found_account);
                let decodedToken: DecodedTokenModel = {
                    id: found_account.id,
                    email: found_account.email,
                    firstname: found_account.name,
                    lastname: found_account.surname
                }
                let token = jwt.sign({
                    ...decodedToken
                }, 'MySecret', { expiresIn: 86400000 });
                let loginResult: any = {
                    id: found_account.id,
                    email: found_account.email,
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
            this.checkUniqueness(model.email).then(() => {
                let account: AccountEntity = Object.assign(new AccountEntity(), model, { createdAt: new Date });
                return this._accountRepository.insert(account);
            }).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    private checkUniqueness(email: string): Promise<void> {
        return new Promise<any>((resolve, reject) => {
            let query = {
                where: [
                    { email: email }
                ]
            }
            this._accountRepository.list(query).then((accounts) => {
                if (accounts.length > 0) {
                    if (accounts[0].email === email)
                        throw new AppError('AppError', 'This email is already taken', 422);
                }
                resolve();
            }).catch((err) => {
                reject(err);
            })
        });
    }
}

