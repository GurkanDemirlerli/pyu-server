import 'reflect-metadata';
import { IUserRepository, ICompanyRepository, IProjectRepository, IStatusRepository, ITaskRepository, ITaskLabelRepository, ILabelRepository, IProjectMembershipRepository } from "@repositories/abstract";
import { InjectTypes } from "@ioc";
import { injectable, inject } from "inversify";
import { createConnection } from "typeorm";
import { CompanyEntity } from "@entities/company.entity";
import { UserEntity } from "@entities/user.entity";
import { ProjectEntity } from "@entities/project.entity";
import { TaskEntity } from "@entities/task.entity";
import { RegisterDto } from "@models/dtos";
import faker = require("faker");
import { StatusEntity } from "@entities/status.entity";
import { BaseStatus, TaskTypes } from "@enums";
import * as appConfig from "@common/app-config";
import { ProjectMembershipEntity } from '@entities/project-membership.entity';

@injectable()
export class SeedDatabase {
  constructor(
    @inject(InjectTypes.Repository.USER) private readonly _userRepository: IUserRepository,
    @inject(InjectTypes.Repository.COMPANY) private readonly _companyRepository: ICompanyRepository,
    @inject(InjectTypes.Repository.STATUS) private readonly _statusRepository: IStatusRepository,
    @inject(InjectTypes.Repository.PROJECT) private readonly _projectRepository: IProjectRepository,
    @inject(InjectTypes.Repository.TASK) private readonly _taskRepository: ITaskRepository,
    @inject(InjectTypes.Repository.TASK_LABEL) private readonly _taskLabelRepository: ITaskLabelRepository,
    @inject(InjectTypes.Repository.LABEL) private readonly _labelRepository: ILabelRepository,
    @inject(InjectTypes.Repository.PROJECT_MEMBERSHIP) private readonly _projectMembershipRepository: IProjectMembershipRepository,



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
    const TASKCOUNT = 500;
    let users: UserEntity[] = [];
    let companies: CompanyEntity[] = [];
    let projects: ProjectEntity[] = [];
    let tasks: TaskEntity[] = [];

    let userPromises = [];
    let companyPromises = [];
    let projectPromises = [];
    let statusPromises = [];
    let taskPromises = [];
    let pmPromises = [];
    let grkn: UserEntity;

    for (let i = 0; i < USERCOUNT; i++) {
      let usrDto: RegisterDto = Object.assign(new RegisterDto(), {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: 'Password123.',
        createdAt: new Date(),
        lastUpdated: new Date()
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
      createdAt: new Date(),
      lastUpdated: new Date()
    });
    grkn = Object.assign(new UserEntity(), grknDto);
    users.push(grkn);
    userPromises.push(this._userRepository.insert(grkn));

    Promise.all(userPromises).then((createdUsers) => {
      console.log('Kullanicilar Eklendi');
      users = createdUsers;

      grkn = createdUsers.find(x => x.name === "gurkan");

      for (let i = 0; i < COMPANYCOUNT; i++) {
        let ind = Math.floor(Math.random() * (USERCOUNT));
        let cmp: CompanyEntity = Object.assign(new CompanyEntity(), {
          name: faker.name.lastName(),
          description: faker.lorem.words(4),
          ownerId: users[ind].id,
          createdAt: new Date(),
          lastUpdated: new Date()
        });
        companyPromises.push(this._companyRepository.insert(cmp));
      }

      let c1: CompanyEntity = Object.assign(new CompanyEntity(), {
        name: faker.name.lastName(),
        description: faker.lorem.words(4),
        ownerId: grkn.id,
        createdAt: new Date(),
        lastUpdated: new Date()
      });
      companyPromises.push(this._companyRepository.insert(c1));

      let c2: CompanyEntity = Object.assign(new CompanyEntity(), {
        name: faker.name.lastName(),
        description: faker.lorem.words(4),
        ownerId: grkn.id,
        createdAt: new Date(),
        lastUpdated: new Date()
      });
      companyPromises.push(this._companyRepository.insert(c2));
      return Promise.all(companyPromises);
    }).then((createdCompanies) => {
      console.log('Sirketler Eklendi');

      companies = createdCompanies;
      grkn.ownedCompanies = companies.filter(x => x.ownerId === grkn.id);

      for (let i = 0; i < PROJECTCOUNT; i++) {
        let ind = Math.floor(Math.random() * (COMPANYCOUNT));
        let prj: ProjectEntity = Object.assign(new ProjectEntity(), {
          userId: companies[ind].ownerId,
          title: faker.name.jobTitle(),
          description: faker.lorem.words(4),
          companyId: companies[ind].id,
          createdAt: new Date(),
          lastUpdated: new Date(),
          isSubProject: false
        });
        projectPromises.push(this._projectRepository.insert(prj));
      }

      let p1: ProjectEntity = Object.assign(new ProjectEntity(), {
        userId: grkn.id,
        title: faker.name.jobTitle(),
        description: faker.lorem.words(4),
        companyId: grkn.ownedCompanies[0],
        createdAt: new Date(),
        lastUpdated: new Date(),
        isSubProject: false

      });
      projectPromises.push(this._projectRepository.insert(p1));

      let p2: ProjectEntity = Object.assign(new ProjectEntity(), {
        userId: grkn.id,
        title: faker.name.jobTitle(),
        description: faker.lorem.words(4),
        companyId: grkn.ownedCompanies[0].id,
        createdAt: new Date(),
        lastUpdated: new Date(),
        isSubProject: false

      });
      projectPromises.push(this._projectRepository.insert(p2));

      let p3: ProjectEntity = Object.assign(new ProjectEntity(), {
        userId: grkn.id,
        title: faker.name.jobTitle(),
        description: faker.lorem.words(4),
        companyId: grkn.ownedCompanies[1].id,
        createdAt: new Date(),
        lastUpdated: new Date(),
        isSubProject: false

      });
      projectPromises.push(this._projectRepository.insert(p3));

      return Promise.all(projectPromises);
    }).then((createdProjects) => {
      console.log('Projeler Eklendi');

      projects = createdProjects;

      for (let i = 0; i < projects.length; i++) {
        projects[i].statuses = [];
        let status0: StatusEntity = Object.assign(new StatusEntity(), {
          title: 'Planning',
          description: 'Proje sürecine dahil olabilecek görevler',
          baseStatus: BaseStatus.PLANNINING,
          order: 0,
          creatorId: projects[i].userId,
          projectId: projects[i].id,
          createdAt: new Date(),
          lastUpdated: new Date()
        });
        let status1: StatusEntity = Object.assign(new StatusEntity(), {
          title: 'To do',
          description: 'Proje sürecinde olan ama henüz baslanmamis görevler',
          baseStatus: BaseStatus.NOT_STARTED,
          order: 0,
          creatorId: projects[i].userId,
          projectId: projects[i].id,
          createdAt: new Date(),
          lastUpdated: new Date()
        });
        let status2: StatusEntity = Object.assign(new StatusEntity(), {
          title: 'In Progress',
          description: 'Yapılmakta olan görevler',
          baseStatus: BaseStatus.IN_PROGRESS,
          order: 0,
          creatorId: projects[i].userId,
          projectId: projects[i].id,
          createdAt: new Date(),
          lastUpdated: new Date()
        });
        let status3: StatusEntity = Object.assign(new StatusEntity(), {
          title: 'Done',
          description: 'Bitmiş görevler',
          baseStatus: BaseStatus.FINISHED,
          order: 0,
          creatorId: projects[i].userId,
          projectId: projects[i].id,
          createdAt: new Date(),
          lastUpdated: new Date()
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

      grkn.ownedCompanies.map((cmp) => {
        cmp.projects = projects.filter(prj => prj.companyId === cmp.id);
      });
      let code = 1;
      for (let i = 0; i < TASKCOUNT; i++) {
        let ind = Math.floor(Math.random() * (PROJECTCOUNT));
        let prio = Math.floor(Math.random() * 9);
        let stind = Math.floor(Math.random() * (3));
        let tsk: TaskEntity = Object.assign(new TaskEntity(), {
          creatorId: projects[ind].userId,
          title: faker.name.jobTitle(),
          description: faker.lorem.words(4),
          projectId: projects[ind].id,
          statusId: projects[ind].statuses[stind],
          createdAt: new Date(),
          lastUpdated: new Date(),
          code: code,
          type: TaskTypes.BASIC,
          priority: prio

        });
        code++;
        taskPromises.push(this._taskRepository.insert(tsk));
      }

      grkn.ownedCompanies.map((cmp) => {
        cmp.projects.map((prj) => {
          let code = 1;
          for (let i = 0; i < 5; i++) {
            let prio = Math.floor(Math.random() * 9);
            let stind = Math.floor(Math.random() * (3));
            let tsk: TaskEntity = Object.assign(new TaskEntity(), {
              creatorId: grkn.id,
              title: faker.name.jobTitle(),
              description: faker.lorem.words(4),
              projectId: prj.id,
              statusId: prj.statuses[stind],
              createdAt: new Date(),
              lastUpdated: new Date(),
              code: code,
              type: TaskTypes.BASIC,
              priority: prio
            });
            code++;
            taskPromises.push(this._taskRepository.insert(tsk));
          }
        });
      });

      return Promise.all(taskPromises);
    }).then((createdTasks) => {
      console.log('Tasklar Eklendi');
      tasks = createdTasks;


      grkn.ownedCompanies.map((cmp) => {
        cmp.projects.map((prj) => {
          for (let i = 0; i < 10; i++) {
            let pmEn: ProjectMembershipEntity = new ProjectMembershipEntity();
            pmEn.createdAt = new Date();
            pmEn.projectId = prj.id;
            pmEn.userId = users[i].id;
            pmPromises.push(this._projectMembershipRepository.insert(pmEn));
          }
        });
      });

      return Promise.all(pmPromises);
    }).then((createdprMbs) => {


      process.exit(0);
    }).catch((err) => {
      console.log(err);
    })


  }
}
