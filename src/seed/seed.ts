import { ProjectEntity } from './../entities/project.entity';
import { CompanyEntity } from './../entities/company.entity';
import { CompanyCreateDto } from './../_models/dtos/company/company-create.dto';
import { injectable, inject } from "inversify";
import { createConnection } from "typeorm";
import * as appConfig from "./../common/app-config";
import { InjectTypes } from './../ioc/inject-types';
import { ITaskRepository, IUserRepository, ICommentRepository, ICompanyRepository, IStatusRepository, IProjectRepository } from "./../@repository/abstract";
import * as faker from 'faker';
import { RegisterDto } from "./../_models/dtos";
import { UserEntity } from "./../entities/user.entity";
import { StatusEntity } from '../entities/status.entity';
import { BaseStatus } from '../enums/base-status.enum';

@injectable()
export class SeedDatabase {
    constructor(
        @inject(InjectTypes.Repository.COMMENT) private readonly _commentRepository: ICommentRepository,
        @inject(InjectTypes.Repository.TASK) private readonly _taskRepository: ITaskRepository,
        @inject(InjectTypes.Repository.USER) private readonly _userRepository: IUserRepository,
        @inject(InjectTypes.Repository.COMPANY) private readonly _companyRepository: ICompanyRepository,
        @inject(InjectTypes.Repository.STATUS) private readonly _statusRepository: IStatusRepository,
        @inject(InjectTypes.Repository.PROJECT) private readonly _projectRepository: IProjectRepository,

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
        const COMPANYCOUNT = 10;
        const PROJECTCOUNT = 25;
        let users: UserEntity[] = [];
        let companies: CompanyEntity[] = [];
        let projects: ProjectEntity[] = [];

        let userPromises = [];
        let companyPromises = [];
        let projectPromises = [];
        let statusPromises = [];
        let grkn: UserEntity;

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
            userPromises.push(this._userRepository.insert(users[i]));
        }

        let grknDto: RegisterDto = Object.assign(new RegisterDto(), {
            name: 'gurkan',
            surname: 'demirlerli',
            username: 'gurkan30',
            email: 'gurkan@example.com',
            password: 'Password123.',
            createdAt: new Date()
        });
        grkn = Object.assign(new UserEntity(), grknDto);
        users.push(grkn);
        userPromises.push(this._userRepository.insert(grkn));

        Promise.all(userPromises).then((createdUsers) => {
            console.log('Kullanicilar Eklendi');
            console.log(createdUsers);
            users = createdUsers;
            for (let i = 0; i < COMPANYCOUNT; i++) {
                let ind = Math.floor(Math.random() * (USERCOUNT));
                let cmp: CompanyEntity = Object.assign(new CompanyEntity(), {
                    name: faker.name.lastName(),
                    description: faker.lorem.words(4),
                    ownerId: users[ind].id
                });
                companyPromises.push(this._companyRepository.insert(cmp));
            }

            let c1: CompanyEntity = Object.assign(new CompanyEntity(), {
                name: faker.name.lastName(),
                description: faker.lorem.words(4),
                ownerId: grkn.id
            });
            companyPromises.push(this._companyRepository.insert(c1));

            let c2: CompanyEntity = Object.assign(new CompanyEntity(), {
                name: faker.name.lastName(),
                description: faker.lorem.words(4),
                ownerId: grkn.id
            });
            companyPromises.push(this._companyRepository.insert(c2));
            return Promise.all(companyPromises);
        }).then((createdCompanies) => {
            console.log('Sirketler Eklendi');
            console.log(createdCompanies);

            companies = createdCompanies;
            for (let i = 0; i < PROJECTCOUNT; i++) {
                let ind = Math.floor(Math.random() * (COMPANYCOUNT));
                console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",companies[ind].ownerId);
                let prj: ProjectEntity = Object.assign(new ProjectEntity(), {
                    userId: companies[ind].ownerId,
                    title: faker.name.jobTitle(),
                    description: faker.lorem.words(4),
                    companyId: companies[ind].id,
                });
                projectPromises.push(this._projectRepository.insert(prj));
            }
            return Promise.all(projectPromises);
        }).then((createdProjects) => {
            console.log('Projeler Eklendi');
            // console.log(createdProjects);

            projects = createdProjects;

            for (let i = 0; i < projects.length; i++) {
                projects[i].statuses = [];
                let status0: StatusEntity = Object.assign(new StatusEntity(), {
                    title: 'Planning',
                    description: 'Proje sürecine dahil olabilecek görevler',
                    baseStatus: BaseStatus.PLANNINING,
                    order: 0,
                    creatorId: projects[i].userId,
                    projectId: projects[i].id
                });
                let status1: StatusEntity = Object.assign(new StatusEntity(), {
                    title: 'To do',
                    description: 'Proje sürecinde olan ama henüz baslanmamis görevler',
                    baseStatus: BaseStatus.NOT_STARTED,
                    order: 0,
                    creatorId: projects[i].userId,
                    projectId: projects[i].id
                });
                let status2: StatusEntity = Object.assign(new StatusEntity(), {
                    title: 'In Progress',
                    description: 'Yapılmakta olan görevler',
                    baseStatus: BaseStatus.IN_PROGRESS,
                    order: 0,
                    creatorId: projects[i].userId,
                    projectId: projects[i].id
                });
                let status3: StatusEntity = Object.assign(new StatusEntity(), {
                    title: 'Done',
                    description: 'Bitmiş görevler',
                    baseStatus: BaseStatus.FINISHED,
                    order: 0,
                    creatorId: projects[i].userId,
                    projectId: projects[i].id
                });
                statusPromises.push(this._statusRepository.insert(status0));
                statusPromises.push(this._statusRepository.insert(status1));
                statusPromises.push(this._statusRepository.insert(status2));
                statusPromises.push(this._statusRepository.insert(status3));
            }

            return Promise.all(statusPromises);
        }).then((statuses) => {
            console.log('Durumlar Eklendi');

            for (let i = 0; i < statuses.length; i++) {
                const st = statuses[i];
                projects.map((prj) => {
                    if (st.projectId === prj.id) {
                        prj.statuses.push(st);
                    }
                })
            }
            console.log("Projeler tamamen eklendi");
            console.log(projects);

        }).catch((err) => {
            console.log(err);
        })


    }
}