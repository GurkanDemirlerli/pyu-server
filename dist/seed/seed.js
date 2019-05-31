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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_entity_1 = require("./../entities/project.entity");
const company_entity_1 = require("./../entities/company.entity");
const inversify_1 = require("inversify");
const typeorm_1 = require("typeorm");
const appConfig = require("./../common/app-config");
const faker = require("faker");
const dtos_1 = require("./../_models/dtos");
const user_entity_1 = require("./../entities/user.entity");
const status_entity_1 = require("../entities/status.entity");
const base_status_enum_1 = require("../enums/base-status.enum");
const inject_types_1 = require("./inject-types");
const task_entity_1 = require("./../entities/task.entity");
require("module-alias/register");
let SeedDatabase = class SeedDatabase {
    constructor(_userRepository, _companyRepository, _statusRepository, _projectRepository, _taskRepository) {
        this._userRepository = _userRepository;
        this._companyRepository = _companyRepository;
        this._statusRepository = _statusRepository;
        this._projectRepository = _projectRepository;
        this._taskRepository = _taskRepository;
    }
    initialize() {
        typeorm_1.createConnection(appConfig.dbOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {
            console.log(__dirname);
            console.log("Connected to DB");
            this.seed();
        })).catch(error => console.log("TypeORM connection error: ", error));
    }
    seed() {
        const USERCOUNT = 50;
        const COMPANYCOUNT = 10;
        const PROJECTCOUNT = 25;
        const TASKCOUNT = 500;
        let users = [];
        let companies = [];
        let projects = [];
        let tasks = [];
        let userPromises = [];
        let companyPromises = [];
        let projectPromises = [];
        let statusPromises = [];
        let taskPromises = [];
        let grkn;
        for (let i = 0; i < USERCOUNT; i++) {
            let usrDto = Object.assign(new dtos_1.RegisterDto(), {
                name: faker.name.firstName(),
                surname: faker.name.lastName(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: 'Password123.',
                createdAt: new Date()
            });
            let user = Object.assign(new user_entity_1.UserEntity(), usrDto);
            users.push(user);
            userPromises.push(this._userRepository.insert(users[i]));
        }
        let grknDto = Object.assign(new dtos_1.RegisterDto(), {
            name: 'gurkan',
            surname: 'demirlerli',
            username: 'gurkan30',
            email: 'gurkan@example.com',
            password: 'Password123.',
            createdAt: new Date()
        });
        grkn = Object.assign(new user_entity_1.UserEntity(), grknDto);
        users.push(grkn);
        userPromises.push(this._userRepository.insert(grkn));
        Promise.all(userPromises).then((createdUsers) => {
            console.log('Kullanicilar Eklendi');
            users = createdUsers;
            grkn = createdUsers.find(x => x.name === "gurkan");
            for (let i = 0; i < COMPANYCOUNT; i++) {
                let ind = Math.floor(Math.random() * (USERCOUNT));
                let cmp = Object.assign(new company_entity_1.CompanyEntity(), {
                    name: faker.name.lastName(),
                    description: faker.lorem.words(4),
                    ownerId: users[ind].id
                });
                companyPromises.push(this._companyRepository.insert(cmp));
            }
            let c1 = Object.assign(new company_entity_1.CompanyEntity(), {
                name: faker.name.lastName(),
                description: faker.lorem.words(4),
                ownerId: grkn.id
            });
            companyPromises.push(this._companyRepository.insert(c1));
            let c2 = Object.assign(new company_entity_1.CompanyEntity(), {
                name: faker.name.lastName(),
                description: faker.lorem.words(4),
                ownerId: grkn.id
            });
            companyPromises.push(this._companyRepository.insert(c2));
            return Promise.all(companyPromises);
        }).then((createdCompanies) => {
            console.log('Sirketler Eklendi');
            companies = createdCompanies;
            grkn.ownedCompanies = companies.filter(x => x.ownerId === grkn.id);
            for (let i = 0; i < PROJECTCOUNT; i++) {
                let ind = Math.floor(Math.random() * (COMPANYCOUNT));
                let prj = Object.assign(new project_entity_1.ProjectEntity(), {
                    userId: companies[ind].ownerId,
                    title: faker.name.jobTitle(),
                    description: faker.lorem.words(4),
                    companyId: companies[ind].id,
                });
                projectPromises.push(this._projectRepository.insert(prj));
            }
            let p1 = Object.assign(new project_entity_1.ProjectEntity(), {
                userId: grkn.id,
                title: faker.name.jobTitle(),
                description: faker.lorem.words(4),
                companyId: grkn.ownedCompanies[0]
            });
            projectPromises.push(this._projectRepository.insert(p1));
            let p2 = Object.assign(new project_entity_1.ProjectEntity(), {
                userId: grkn.id,
                title: faker.name.jobTitle(),
                description: faker.lorem.words(4),
                companyId: grkn.ownedCompanies[0].id
            });
            projectPromises.push(this._projectRepository.insert(p2));
            let p3 = Object.assign(new project_entity_1.ProjectEntity(), {
                userId: grkn.id,
                title: faker.name.jobTitle(),
                description: faker.lorem.words(4),
                companyId: grkn.ownedCompanies[1].id
            });
            projectPromises.push(this._projectRepository.insert(p3));
            return Promise.all(projectPromises);
        }).then((createdProjects) => {
            console.log('Projeler Eklendi');
            projects = createdProjects;
            for (let i = 0; i < projects.length; i++) {
                projects[i].statuses = [];
                let status0 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'Planning',
                    description: 'Proje sürecine dahil olabilecek görevler',
                    baseStatus: base_status_enum_1.BaseStatus.PLANNINING,
                    order: 0,
                    creatorId: projects[i].userId,
                    projectId: projects[i].id
                });
                let status1 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'To do',
                    description: 'Proje sürecinde olan ama henüz baslanmamis görevler',
                    baseStatus: base_status_enum_1.BaseStatus.NOT_STARTED,
                    order: 0,
                    creatorId: projects[i].userId,
                    projectId: projects[i].id
                });
                let status2 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'In Progress',
                    description: 'Yapılmakta olan görevler',
                    baseStatus: base_status_enum_1.BaseStatus.IN_PROGRESS,
                    order: 0,
                    creatorId: projects[i].userId,
                    projectId: projects[i].id
                });
                let status3 = Object.assign(new status_entity_1.StatusEntity(), {
                    title: 'Done',
                    description: 'Bitmiş görevler',
                    baseStatus: base_status_enum_1.BaseStatus.FINISHED,
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
                });
            }
            console.log("Projeler tamamen eklendi");
            grkn.ownedCompanies.map((cmp) => {
                cmp.projects = projects.filter(prj => prj.companyId === cmp.id);
            });
            for (let i = 0; i < TASKCOUNT; i++) {
                let ind = Math.floor(Math.random() * (PROJECTCOUNT));
                let stind = Math.floor(Math.random() * (3));
                let tsk = Object.assign(new task_entity_1.TaskEntity(), {
                    creatorId: projects[ind].userId,
                    title: faker.name.jobTitle(),
                    description: faker.lorem.words(4),
                    projectId: projects[ind].id,
                    statusId: projects[ind].statuses[stind]
                });
                taskPromises.push(this._taskRepository.insert(tsk));
            }
            grkn.ownedCompanies.map((cmp) => {
                cmp.projects.map((prj) => {
                    for (let i = 0; i < 5; i++) {
                        let stind = Math.floor(Math.random() * (3));
                        let tsk = Object.assign(new task_entity_1.TaskEntity(), {
                            creatorId: grkn.id,
                            title: faker.name.jobTitle(),
                            description: faker.lorem.words(4),
                            projectId: prj.id,
                            statusId: prj.statuses[stind]
                        });
                        taskPromises.push(this._taskRepository.insert(tsk));
                    }
                });
            });
            return Promise.all(taskPromises);
        }).then((createdTasks) => {
            console.log('Tasklar Eklendi');
            tasks = createdTasks;
            process.exit(0);
        }).catch((err) => {
            console.log(err);
        });
    }
};
SeedDatabase = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inject_types_1.InjectTypes.Repository.USER)),
    __param(1, inversify_1.inject(inject_types_1.InjectTypes.Repository.COMPANY)),
    __param(2, inversify_1.inject(inject_types_1.InjectTypes.Repository.STATUS)),
    __param(3, inversify_1.inject(inject_types_1.InjectTypes.Repository.PROJECT)),
    __param(4, inversify_1.inject(inject_types_1.InjectTypes.Repository.TASK)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], SeedDatabase);
exports.SeedDatabase = SeedDatabase;
