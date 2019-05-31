"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const ioc_1 = require("../../ioc");
const user_entity_1 = require("../../entities/user.entity");
const app_error_1 = require("../../errors/app-error");
const jwt = require("jsonwebtoken");
let UserService = class UserService {
    constructor(_userRepository) {
        this._userRepository = _userRepository;
    }
    list(filters) {
        throw new Error("Method not implemented.");
    }
    find(id) {
        throw new Error("Method not implemented.");
    }
    update(model) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    login(model) {
        return new Promise((resolve, reject) => {
            this._userRepository.findByLogin(model.email, model.password).then((found_user) => {
                console.log(found_user);
                if (!found_user) {
                    throw new app_error_1.AppError('AppError', 'Wrong Username or Password.', 404);
                }
                console.log("Found User : ", found_user);
                let decodedToken = {
                    id: found_user.id,
                    username: found_user.username,
                    email: found_user.email,
                    name: found_user.name,
                    surname: found_user.surname
                };
                let token = jwt.sign(Object.assign({}, decodedToken), 'MySecret', { expiresIn: 86400000 });
                let loginResult = {
                    id: found_user.id,
                    email: found_user.email,
                    token: token
                };
                resolve(loginResult);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    register(model) {
        return new Promise((resolve, reject) => {
            this.checkUniqueness(model.email, model.username).then(() => {
                let user = Object.assign(new user_entity_1.UserEntity(), model, { createdAt: new Date });
                return this._userRepository.insert(user);
            }).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    checkUniqueness(email, username) {
        return new Promise((resolve, reject) => {
            let query = {
                where: [
                    { email: email },
                    { username: username }
                ]
            };
            this._userRepository.list(query).then((users) => {
                if (users.length > 0) {
                    if (users[0].email === email)
                        throw new app_error_1.AppError('AppError', 'This email is already taken', 422);
                    else
                        throw new app_error_1.AppError('AppError', 'This username is already taken', 422);
                }
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
};
UserService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_1.InjectTypes.Repository.USER)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
