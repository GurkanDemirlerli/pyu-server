import 'reflect-metadata';
import {
  IUserRepository,
  ICompanyRepository,
  IProjectRepository,
  IStatusRepository,
  ITaskRepository,
  ITaskLabelRepository,
  ILabelRepository,
  IProjectMembershipRepository,
  IAbstractStatusRepository,
  IStatusTemplateRepository,
  ICompanyMembershipRepository,
  IProjectManagerRepository
} from "../@repository/abstract";
import { InjectTypes } from "../ioc";
import { injectable, inject } from "inversify";
import { createConnection } from "typeorm";
import { CompanyEntity } from "../entities/company.entity";
import { UserEntity } from "../entities/user.entity";
import { ProjectEntity } from "../entities/project.entity";
import { TaskEntity } from "../entities/task.entity";
import faker = require("faker");
import { StatusEntity } from "../entities/status.entity";
import { BaseStatus} from "../enums";
import * as appConfig from "../common/app-config";
import { ProjectMembershipEntity } from '../entities/project-membership.entity';
import { TaskLabelEntity } from '../entities/task-label.entity';
import { CompanyMembershipEntity } from '../entities/company-membership.entity';
import { StatusTemplateEntity } from '../entities/status-template.entity';
import { AbstractStatusEntity } from '../entities/abstract-status.entity';
import { ProjectManagerEntity } from '../entities/project-manager.entity';


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
    @inject(InjectTypes.Repository.PROJECT_MANAGER) private readonly _projectManagerRepository: IProjectManagerRepository,
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
    let connection = await createConnection(appConfig);
    console.log("CONNECTED TO DB");
    try {
      await this.addUsers();
      console.log("addUsers OK");
      await this.addCompanies();
      console.log("addCompanies OK");
      await this.assignUsersToCompany();
      console.log("assignUsersToCompany OK");
      await this.addStatusTemplates();
      console.log("addStatusTemplates OK");
      await this.addProjects();
      console.log("addProject OK");
      await this.assignUsersToProject();
      console.log("assignUsersToProject OK");
      await this.addTasks();
      console.log("addTasks OK");
      // await this.addSubProjects();
      // console.log("addSubProjects OK");
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

    let bscST = new StatusTemplateEntity();
    bscST.companyId = this.grkn.ownedCompanies[0].id;
    bscST.createdAt = new Date();
    bscST.creatorId = this.grkn.id;
    bscST.lastUpdated = new Date();
    bscST.name = "Basic";
    bscST = await this._statusTemplateRepository.insert(bscST);
    bscST.statuses = [];

    let td = new AbstractStatusEntity();
    td.baseStatus = BaseStatus.NOT_STARTED;
    td.title = "To Do";
    td.description = "desc";
    td.createdAt = new Date();
    td.order = 0;
    td.templateId = bscST.id;
    td = await this._abstractStatusRepository.insert(td);
    bscST.statuses.push(td);

    let ip = new AbstractStatusEntity();
    ip.baseStatus = BaseStatus.IN_PROGRESS;
    ip.title = "In Progress";
    ip.description = "desc";
    ip.createdAt = new Date();
    ip.order = 0;
    ip.templateId = bscST.id;
    ip = await this._abstractStatusRepository.insert(ip);
    bscST.statuses.push(ip);

    let dn = new AbstractStatusEntity();
    dn.baseStatus = BaseStatus.FINISHED;
    dn.title = "Done";
    dn.description = "desc";
    dn.createdAt = new Date();
    dn.order = 0;
    dn.templateId = bscST.id;
    dn = await this._abstractStatusRepository.insert(dn);
    bscST.statuses.push(dn);

    this.grkn.ownedCompanies[0].statusTemplates.push(bscST);

  }

  public async addProjects() {
    let lv0_pA = new ProjectEntity();
    lv0_pA.companyId = this.grkn.ownedCompanies[0].id;
    lv0_pA.createdAt = new Date();
    lv0_pA.creatorId = this.grkn.id;
    lv0_pA.description = faker.lorem.words(4);
    lv0_pA.lastUpdated = new Date();
    lv0_pA.prefix = 'PRE';
    lv0_pA.title = faker.lorem.words(2);

    lv0_pA.statuses = [];
    lv0_pA.tasks = [];
    lv0_pA = await this._projectRepository.insert(lv0_pA);

    for (let i = 0; i < this.grkn.ownedCompanies[0].statusTemplates[0].statuses.length; i++) {
      const abs = this.grkn.ownedCompanies[0].statusTemplates[0].statuses[i];
      let st = new StatusEntity();
      st.baseStatus = abs.baseStatus;
      st.createdAt = new Date();
      st.creatorId = this.grkn.id;
      st.description = "desc";
      st.lastUpdated = new Date();
      st.order = abs.order;
      st.projectId = lv0_pA.id;
      st.title = abs.title;
      st = await this._statusRepository.insert(st);
      lv0_pA.statuses.push(st);
    }

    this.grkn.ownedCompanies[0].projects = [];
    this.grkn.ownedCompanies[0].projects.push(lv0_pA);


    let lv1_pA_1 = new ProjectEntity();
    lv1_pA_1.companyId = this.grkn.ownedCompanies[0].id;
    lv1_pA_1.createdAt = new Date();
    lv1_pA_1.creatorId = this.grkn.id;
    lv1_pA_1.description = faker.lorem.words(4);
    lv1_pA_1.lastUpdated = new Date();
    lv1_pA_1.prefix = 'PRE';
    lv1_pA_1.title = faker.lorem.words(2);
    lv1_pA_1.parentId = lv0_pA.id;
    lv1_pA_1.statuses = [];
    lv1_pA_1.tasks = [];
    lv1_pA_1 = await this._projectRepository.insert(lv1_pA_1);

    for (let i = 0; i < this.grkn.ownedCompanies[0].statusTemplates[1].statuses.length; i++) {
      const abs = this.grkn.ownedCompanies[0].statusTemplates[1].statuses[i];
      let st = new StatusEntity();
      st.baseStatus = abs.baseStatus;
      st.createdAt = new Date();
      st.creatorId = this.grkn.id;
      st.description = "desc";
      st.lastUpdated = new Date();
      st.order = abs.order;
      st.projectId = lv1_pA_1.id;
      st.title = abs.title;
      st = await this._statusRepository.insert(st);
      lv1_pA_1.statuses.push(st);
    }

    this.grkn.ownedCompanies[0].projects.push(lv1_pA_1);
    this.grkn.ownedCompanies[0].projects[0].children = [];

    this.grkn.ownedCompanies[0].projects[0].children.push(lv1_pA_1);


    let lv1_pA_2 = new ProjectEntity();
    lv1_pA_2.companyId = this.grkn.ownedCompanies[0].id;
    lv1_pA_2.createdAt = new Date();
    lv1_pA_2.creatorId = this.grkn.id;
    lv1_pA_2.description = faker.lorem.words(4);
    lv1_pA_2.lastUpdated = new Date();
    lv1_pA_2.prefix = 'PRE';
    lv1_pA_2.title = faker.lorem.words(2);
    lv1_pA_2.parentId = lv0_pA.id;
    lv1_pA_2.statuses = [];
    lv1_pA_2.tasks = [];
    lv1_pA_2 = await this._projectRepository.insert(lv1_pA_2);

    for (let i = 0; i < this.grkn.ownedCompanies[0].statusTemplates[1].statuses.length; i++) {
      const abs = this.grkn.ownedCompanies[0].statusTemplates[1].statuses[i];
      let st = new StatusEntity();
      st.baseStatus = abs.baseStatus;
      st.createdAt = new Date();
      st.creatorId = this.grkn.id;
      st.description = "desc";
      st.lastUpdated = new Date();
      st.order = abs.order;
      st.projectId = lv1_pA_2.id;
      st.title = abs.title;
      st = await this._statusRepository.insert(st);
      lv1_pA_2.statuses.push(st);
    }

    this.grkn.ownedCompanies[0].projects.push(lv1_pA_2);
    this.grkn.ownedCompanies[0].projects[0].children.push(lv1_pA_2);

    let lv1_pA_3 = new ProjectEntity();
    lv1_pA_3.companyId = this.grkn.ownedCompanies[0].id;
    lv1_pA_3.createdAt = new Date();
    lv1_pA_3.creatorId = this.grkn.id;
    lv1_pA_3.description = faker.lorem.words(4);
    lv1_pA_3.lastUpdated = new Date();
    lv1_pA_3.prefix = 'PRE';
    lv1_pA_3.title = faker.lorem.words(2);
    lv1_pA_3.parentId = lv0_pA.id;
    lv1_pA_3.statuses = [];
    lv1_pA_3.tasks = [];
    lv1_pA_3 = await this._projectRepository.insert(lv1_pA_3);

    for (let i = 0; i < this.grkn.ownedCompanies[0].statusTemplates[1].statuses.length; i++) {
      const abs = this.grkn.ownedCompanies[0].statusTemplates[1].statuses[i];
      let st = new StatusEntity();
      st.baseStatus = abs.baseStatus;
      st.createdAt = new Date();
      st.creatorId = this.grkn.id;
      st.description = "desc";
      st.lastUpdated = new Date();
      st.order = abs.order;
      st.projectId = lv1_pA_3.id;
      st.title = abs.title;
      st = await this._statusRepository.insert(st);
      lv1_pA_3.statuses.push(st);
    }

    this.grkn.ownedCompanies[0].projects.push(lv1_pA_3);
    this.grkn.ownedCompanies[0].projects[0].children.push(lv1_pA_3);

    let lv2_pA_1_1 = new ProjectEntity();
    lv2_pA_1_1.companyId = this.grkn.ownedCompanies[0].id;
    lv2_pA_1_1.createdAt = new Date();
    lv2_pA_1_1.creatorId = this.grkn.id;
    lv2_pA_1_1.description = faker.lorem.words(4);
    lv2_pA_1_1.lastUpdated = new Date();
    lv2_pA_1_1.prefix = 'PRE';
    lv2_pA_1_1.title = faker.lorem.words(2);
    lv2_pA_1_1.parentId = lv1_pA_1.id;
    lv2_pA_1_1.statuses = [];
    lv2_pA_1_1.tasks = [];
    lv2_pA_1_1 = await this._projectRepository.insert(lv2_pA_1_1);

    for (let i = 0; i < this.grkn.ownedCompanies[0].statusTemplates[1].statuses.length; i++) {
      const abs = this.grkn.ownedCompanies[0].statusTemplates[1].statuses[i];
      let st = new StatusEntity();
      st.baseStatus = abs.baseStatus;
      st.createdAt = new Date();
      st.creatorId = this.grkn.id;
      st.description = "desc";
      st.lastUpdated = new Date();
      st.order = abs.order;
      st.projectId = lv2_pA_1_1.id;
      st.title = abs.title;
      st = await this._statusRepository.insert(st);
      lv2_pA_1_1.statuses.push(st);
    }

    this.grkn.ownedCompanies[0].projects.push(lv2_pA_1_1);
    this.grkn.ownedCompanies[0].projects[0].children[0].children = [];
    this.grkn.ownedCompanies[0].projects[0].children[0].children.push(lv2_pA_1_1);
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
      tsk.priority = prio;
      tsk = await this._taskRepository.insert(tsk);
      this.grkn.ownedCompanies[0].projects[0].tasks.push(tsk);
      this.codeSequence++;
    }

    let projects = this.grkn.ownedCompanies[0].projects;

    for (let i = 0; i < projects.length; i++) {
      let project = projects[i];
      if (project.id === 1) continue;
      for (let i = 0; i < 10; i++) {
        let stind = Math.floor(Math.random() * (project.statuses.length));
        let prio = Math.floor(Math.random() * 9);
        let tsk = new TaskEntity();
        tsk.creatorId = this.grkn.id;
        tsk.title = faker.name.jobTitle();
        tsk.description = faker.lorem.words(4);
        tsk.projectId = project.id;
        tsk.statusId = project.statuses[stind].id;
        tsk.createdAt = new Date();
        tsk.lastUpdated = new Date();
        tsk.code = this.codeSequence;
        tsk.priority = prio;
        tsk = await this._taskRepository.insert(tsk);
        project.tasks.push(tsk);
        this.codeSequence++;
      }
    }
  }

  // public async addSubProjects() {
  //   let stind = Math.floor(Math.random() * (this.grkn.ownedCompanies[0].projects[0].baseProject.statuses.length));
  //   let prio = Math.floor(Math.random() * 9);
  //
  //   let tsk = new TaskEntity();
  //   tsk.creatorId = this.grkn.id;
  //   tsk.title = faker.name.jobTitle();
  //   tsk.description = faker.lorem.words(4);
  //   tsk.projectId = this.grkn.ownedCompanies[0].projects[0].id;
  //   tsk.statusId = this.grkn.ownedCompanies[0].projects[0].baseProject.statuses[stind].id;
  //   tsk.createdAt = new Date();
  //   tsk.lastUpdated = new Date();
  //   tsk.code = this.codeSequence;
  //   tsk.type = TaskTypes.SUBPROJECT;
  //   tsk.priority = prio;
  //
  //   tsk = await this._taskRepository.insert(tsk);
  //
  //   let sbP = new ProjectEntity();
  //   sbP.projectType = ProjectTypes.SUB;
  //   sbP = await this._projectRepository.insert(sbP);
  //   sbP.statuses = [];
  //   sbP.tasks = [];
  //
  //   let sbPr = new SubProjectEntity();
  //   sbPr.assignedTaskId = tsk.id;
  //   sbPr.baseProjectId = sbP.id;
  //   sbPr = await this._subProjectRepository.insert(sbPr);
  //   sbPr.baseProject = sbP;
  //
  //   for (let i = 0; i < this.grkn.ownedCompanies[0].statusTemplates[1].statuses.length; i++) {
  //     const abs = this.grkn.ownedCompanies[0].statusTemplates[1].statuses[i];
  //     let st = new StatusEntity();
  //     st.baseStatus = abs.baseStatus;
  //     st.createdAt = new Date();
  //     st.creatorId = this.grkn.id;
  //     st.description = "desc";
  //     st.lastUpdated = new Date();
  //     st.order = abs.order;
  //     st.projectId = sbPr.baseProjectId;
  //     st.title = abs.title;
  //     st = await this._statusRepository.insert(st);
  //     sbPr.baseProject.statuses.push(st);
  //   }
  //
  //   tsk.subProject = sbPr;
  //
  //   for (let i = 0; i < 5; i++) {
  //     let stind = Math.floor(Math.random() * (tsk.subProject.baseProject.statuses.length));
  //     let prio = Math.floor(Math.random() * 9);
  //     let sbTsk = new TaskEntity();
  //     sbTsk.creatorId = this.grkn.id;
  //     sbTsk.title = faker.name.jobTitle();
  //     sbTsk.description = faker.lorem.words(4);
  //     sbTsk.projectId = tsk.subProject.baseProject.id;
  //     sbTsk.statusId = tsk.subProject.baseProject.statuses[stind].id;
  //     sbTsk.createdAt = new Date();
  //     sbTsk.lastUpdated = new Date();
  //     sbTsk.code = this.codeSequence;
  //     sbTsk.type = TaskTypes.BASIC;
  //     sbTsk.priority = prio;
  //     sbTsk = await this._taskRepository.insert(sbTsk);
  //     tsk.subProject.baseProject.tasks.push(sbTsk);
  //     this.codeSequence++;
  //   }
  //   this.grkn.ownedCompanies[0].rootProjects[0].baseProject.tasks.push(tsk);
  // }

}
