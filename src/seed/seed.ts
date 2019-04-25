import { injectable, inject } from "inversify";
import { createConnection } from "typeorm";
import * as appConfig from "./../common/app-config";
import { InjectTypes } from './../ioc/inject-types';
import { ITaskRepository, IUserRepository, ICommentRepository } from "./../@repository/abstract";
import * as faker from 'faker';
import { RegisterDto } from "./../_models/dtos";
import { UserEntity } from "./../entities/user.entity";

@injectable()
export class SeedDatabase {
    constructor(
        @inject(InjectTypes.Repository.COMMENT) private readonly _commentRepository: ICommentRepository,
        @inject(InjectTypes.Repository.TASK) private readonly _taskRepository: ITaskRepository,
        @inject(InjectTypes.Repository.USER) private readonly _userRepository: IUserRepository,
    ) { }

    public initialize() {
        createConnection(appConfig.dbOptions).then(async connection => {
            console.log(__dirname);
            console.log("Connected to DB");
            this.seed();
        }).catch(error => console.log("TypeORM connection error: ", error));
    }

    public seed() {
        const USERCOUNT = 50;
        let users = [];
        let promises = [];

        for (let i = 0; i < USERCOUNT; i++) {
            let usrDto: RegisterDto = Object.assign(new RegisterDto(), {
                name: faker.name.firstName(),
                surname: faker.name.lastName(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: 'Password123.',
                createdAt: new Date()
            });
            let user: UserEntity = Object.assign(new UserEntity(), usrDto);
            users.push(user);
            promises.push(this._userRepository.insert(users[i]));
        }

        let grknDto: RegisterDto = Object.assign(new RegisterDto(),{
            name: 'gurkan',
            surname: 'demirlerli',
            username: 'gurkan30',
            email: 'gurkan@example.com',
            password: 'Password123.',
            createdAt: new Date()
        });
        let grkn: UserEntity = Object.assign(new UserEntity(),grknDto);
        users.push(grkn);
        promises.push(this._userRepository.insert(grkn));

        Promise.all(promises).then((createdUsers) => {
            console.log('Kullanicilar Eklendi');
            console.log(createdUsers);
        });
    }
}