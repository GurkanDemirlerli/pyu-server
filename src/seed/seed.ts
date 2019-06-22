import 'reflect-metadata';
import { IUserRepository, ICompanyRepository, IProjectRepository, IStatusRepository, ITaskRepository, ITaskLabelRepository, ILabelRepository, IProjectMembershipRepository, IAbstractStatusRepository, IStatusTemplateRepository, ICompanyMembershipRepository } from "@repositories/abstract";
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
import { TaskLabelEntity } from '@entities/task-label.entity';
import { CompanyMembershipEntity } from '@entities/company-membership.entity';
import { StatusTemplateEntity } from '@entities/status-template.entity';
import { AbstractStatusEntity } from '@entities/abstract-status.entity';
import { ProjectManagerEntity } from '@entities/project-manager.entity';

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
    @inject(InjectTypes.Repository.PROJECT_MANAGER) private readonly _projectManagerRepository: IProjectMembershipRepository,
    @inject(InjectTypes.Repository.STATUS_TEMPLATE) private readonly _statusTemplateRepository: IStatusTemplateRepository,
    @inject(InjectTypes.Repository.ABSTRACT_STATUS) private readonly _abstractStatusRepository: IAbstractStatusRepository,
    @inject(InjectTypes.Repository.COMPANY_MEMBERSHIP) private readonly _companyMembershipRepository: ICompanyMembershipRepository,


  ) { }
  users: UserEntity[] = [];
  companies: CompanyEntity[] = [];
  projects: ProjectEntity[] = [];
  tasks: TaskEntity[] = [];
  statuses: StatusEntity[] = [];
  taskLabels: TaskLabelEntity[] = [];
  labels: TaskLabelEntity[] = [];
  projectMemberships: ProjectMembershipEntity[] = [];
  companyMemberships: CompanyMembershipEntity[] = [];

  public readonly USERCOUNT = 10;
  public readonly COMPANYCOUNT = 2;
  public readonly PROJECTCOUNT = 3;
  public readonly TASKCOUNT = 15;

  public codeSequence = 1;

  grkn: UserEntity;

  public async initialize() {
    console.log("INITIALIZING...");
    let connection = await createConnection(appConfig.dbOptions);
    console.log("CONNECTED TO DB");
    try {
      await this.addUsers();
      await this.addCompanies();
      await this.assignUsersToCompany();
      await this.addStatusTemplates();
      await this.addProjects();
      await this.assignUsersToProject();
      await this.addTasks();
      // await this.addSubProjects();
      // await this.addTasksToSubProjects();
      // await this.addTaskTemplates();
      console.log("SEED COMPLETED");
      await connection.close();
    } catch (e) {
      console.log(e);
    }

    process.exit(0);
  }

  public async addUsers() {
    for (let i = 0; i < this.USERCOUNT; i++) {
      let user = new UserEntity();
      user.name = faker.name.firstName();
      user.surname = faker.name.lastName();
      user.username = faker.internet.userName();
      user.email = faker.internet.email();
      user.password = 'Password123.';
      user.createdAt = new Date();
      user.lastUpdated = new Date();
      let created = await this._userRepository.insert(user);
      this.users.push(created);
    }
    let grkn = new UserEntity();
    grkn.name = 'gurkan';
    grkn.surname = 'demirlerli';
    grkn.username = 'gurkan30';
    grkn.email = 'gurkan@example.com';
    grkn.password = 'Password123.';
    grkn.createdAt = new Date();
    grkn.lastUpdated = new Date();
    this.grkn = await this._userRepository.insert(grkn);
  }

  public async addCompanies() {
    for (let i = 0; i < this.COMPANYCOUNT; i++) {
      let cmp = new CompanyEntity();
      cmp.name = faker.name.lastName();
      cmp.description = faker.lorem.words(4);
      cmp.ownerId = this.users[i].id;
      cmp.createdAt = new Date();
      cmp.lastUpdated = new Date();
      let created = await this._companyRepository.insert(cmp);
      this.companies.push(created);
      this.users[i].ownedCompanies = [];
      this.users[i].ownedCompanies.push(created);
    }

    this.grkn.ownedCompanies = [];
    for (let i = 0; i < 2; i++) {
      let cmp = new CompanyEntity();
      cmp.name = faker.name.lastName();
      cmp.description = faker.lorem.words(4);
      cmp.ownerId = this.grkn.id;
      cmp.createdAt = new Date();
      cmp.lastUpdated = new Date();
      let created = await this._companyRepository.insert(cmp);
      this.companies.push(created);
      this.grkn.ownedCompanies.push(created);
    }
  }

  public async assignUsersToCompany() {
    this.grkn.ownedCompanies[0].members = [];
    for (let i = 0; i < 6; i++) {
      let cmpM = new CompanyMembershipEntity();
      cmpM.companyId = this.grkn.ownedCompanies[0].id;
      cmpM.joiningDate = new Date();
      cmpM.status = 1;
      cmpM.userId = this.users[i].id;
      cmpM = await this._companyMembershipRepository.insert(cmpM);
      this.grkn.ownedCompanies[0].members.push(cmpM);
    }
  }

  public async addStatusTemplates() {
    let modST = new StatusTemplateEntity();
    modST.companyId = this.grkn.ownedCompanies[0].id;
    modST.createdAt = new Date();
    modST.creatorId = this.grkn.id;
    modST.lastUpdated = new Date();
    modST.name = "Character Creating";
    modST = await this._statusTemplateRepository.insert(modST);
    modST.statuses = [];

    let todo = new AbstractStatusEntity();
    todo.baseStatus = BaseStatus.NOT_STARTED;
    todo.title = "To Do";
    todo.description = "desc";
    todo.createdAt = new Date();
    todo.order = 0;
    todo.templateId = modST.id;
    todo = await this._abstractStatusRepository.insert(todo);
    modST.statuses.push(todo);

    let sketching = new AbstractStatusEntity();
    sketching.baseStatus = BaseStatus.IN_PROGRESS;
    sketching.title = "Sketching";
    sketching.description = "desc";
    sketching.createdAt = new Date();
    sketching.order = 0;
    sketching.templateId = modST.id;
    sketching = await this._abstractStatusRepository.insert(sketching);
    modST.statuses.push(sketching);

    let modeling = new AbstractStatusEntity();
    modeling.baseStatus = BaseStatus.IN_PROGRESS;
    modeling.title = "Modeling";
    modeling.description = "desc";
    modeling.createdAt = new Date();
    modeling.order = 1;
    modeling.templateId = modST.id;
    modeling = await this._abstractStatusRepository.insert(modeling);
    modST.statuses.push(modeling);

    let texturing = new AbstractStatusEntity();
    texturing.baseStatus = BaseStatus.IN_PROGRESS;
    texturing.title = "Texturing";
    texturing.description = "desc";
    texturing.createdAt = new Date();
    texturing.order = 2;
    texturing.templateId = modST.id;
    texturing = await this._abstractStatusRepository.insert(texturing);
    modST.statuses.push(texturing);

    let rigging = new AbstractStatusEntity();
    rigging.baseStatus = BaseStatus.IN_PROGRESS;
    rigging.title = "Rigging";
    rigging.description = "desc";
    rigging.createdAt = new Date();
    rigging.order = 3;
    rigging.templateId = modST.id;
    rigging = await this._abstractStatusRepository.insert(rigging);
    modST.statuses.push(rigging);

    let animating = new AbstractStatusEntity();
    animating.baseStatus = BaseStatus.IN_PROGRESS;
    animating.title = "Animating";
    animating.description = "desc";
    animating.createdAt = new Date();
    animating.order = 4;
    animating.templateId = modST.id;
    animating = await this._abstractStatusRepository.insert(animating);
    modST.statuses.push(animating);

    let done = new AbstractStatusEntity();
    done.baseStatus = BaseStatus.FINISHED;
    done.title = "Done";
    done.description = "desc";
    done.createdAt = new Date();
    done.order = 0;
    done.templateId = modST.id;
    done = await this._abstractStatusRepository.insert(done);
    modST.statuses.push(done);
    this.grkn.ownedCompanies[0].statusTemplates = [];
    this.grkn.ownedCompanies[0].statusTemplates.push(modST);
  }

  public async addProjects() {
    this.grkn.ownedCompanies[0].projects = [];
    let krCP = new ProjectEntity();
    krCP.companyId = this.grkn.ownedCompanies[0].id;
    krCP.createdAt = new Date();
    krCP.description = "desc";
    krCP.lastUpdated = new Date();
    krCP.title = "Character Crating";
    krCP.userId = this.grkn.id;
    krCP = await this._projectRepository.insert(krCP);
    krCP.statuses = [];

    for (let i = 0; i < this.grkn.ownedCompanies[0].statusTemplates[0].statuses.length; i++) {
      const abs = this.grkn.ownedCompanies[0].statusTemplates[0].statuses[i];
      let st = new StatusEntity();
      st.baseStatus = abs.baseStatus;
      st.createdAt = new Date();
      st.creatorId = this.grkn.id;
      st.description = "desc";
      st.lastUpdated = new Date();
      st.order = abs.order;
      st.projectId = krCP.id;
      st.title = abs.title;
      st = await this._statusRepository.insert(st);
      krCP.statuses.push(st);
    }
    this.grkn.ownedCompanies[0].projects.push(krCP);
  }

  public async assignUsersToProject() {
    for (let i = 0; i < this.grkn.ownedCompanies[0].members.length; i++) {
      let prM = new ProjectMembershipEntity();
      prM.createdAt = new Date();
      prM.projectId = this.grkn.ownedCompanies[0].projects[0].id;
      prM.userId = this.grkn.ownedCompanies[0].members[i].id;
      prM = await this._projectMembershipRepository.insert(prM);
      this.grkn.ownedCompanies[0].projects[0].members = [];
      this.grkn.ownedCompanies[0].projects[0].members.push(prM);
    }

    this.grkn.ownedCompanies[0].projects[0].managers = [];
    let prMn = new ProjectManagerEntity();
    prMn.createdAt = new Date();
    prMn.projectId = this.grkn.ownedCompanies[0].projects[0].id;
    prMn.userId = this.grkn.ownedCompanies[0].projects[0].members[0].id;
    prMn = await this._projectManagerRepository.insert(prMn);
    this.grkn.ownedCompanies[0].projects[0].managers.push(prMn);
  }

  public async addTasks() {
    this.grkn.ownedCompanies[0].projects[0].tasks = [];
    for (let i = 0; i < this.TASKCOUNT; i++) {
      let stind = Math.floor(Math.random() * (this.grkn.ownedCompanies[0].projects[0].statuses.length));
      let prio = Math.floor(Math.random() * 9);
      let tsk = new TaskEntity();
      tsk.creatorId = this.grkn.id;
      tsk.title = faker.name.jobTitle();
      tsk.description = faker.lorem.words(4);
      tsk.projectId = this.grkn.ownedCompanies[0].projects[0].id;
      tsk.statusId = this.grkn.ownedCompanies[0].projects[0].statuses[stind].id;
      tsk.createdAt = new Date();
      tsk.lastUpdated = new Date();
      tsk.code = this.codeSequence;
      tsk.type = TaskTypes.BASIC;
      tsk.priority = prio;
      tsk = await this._taskRepository.insert(tsk);
      this.grkn.ownedCompanies[0].projects[0].tasks.push(tsk);
      this.codeSequence++;
    }
  }

  public async addSubProjects(){
    let stind = Math.floor(Math.random() * (this.grkn.ownedCompanies[0].projects[0].statuses.length));
    let prio = Math.floor(Math.random() * 9);

    let sbPr = new ProjectEntity();
    // sbpr.

    let tsk = new TaskEntity();
    tsk.creatorId = this.grkn.id;
    tsk.title = faker.name.jobTitle();
    tsk.description = faker.lorem.words(4);
    tsk.projectId = this.grkn.ownedCompanies[0].projects[0].id;
    tsk.statusId = this.grkn.ownedCompanies[0].projects[0].statuses[stind].id;
    tsk.createdAt = new Date();
    tsk.lastUpdated = new Date();
    tsk.code = this.codeSequence;
    tsk.type = TaskTypes.SUBPROJECT;
    tsk.priority = prio;
    // tsk.subProjectId
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
