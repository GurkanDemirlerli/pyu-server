import { SubjectTaskEntity } from './../entities/subject-task.entity';
import { SubjectItemEntity } from './../entities/subject-item.entity';
import { WorkspaceEntity } from './../entities/workspace.entity';
import 'reflect-metadata';
import {
  ISubjectItemRepository,
  IWorkspaceRepository,
  ISubjectTaskRepository
} from "../@repository/abstract";
import { InjectTypes } from "../ioc";
import { injectable, inject } from "inversify";
import { createConnection } from "typeorm";
import faker = require("faker");
import * as appConfig from "../common/app-config";

@injectable()
export class SeedDatabase {
  constructor(
    @inject(InjectTypes.Repository.SUBJECT_ITEM) private readonly _subjectItemRepository: ISubjectItemRepository,
    @inject(InjectTypes.Repository.SUBJECT_TASK) private readonly _subjectTaskRepository: ISubjectTaskRepository,
    @inject(InjectTypes.Repository.WORKSPACE) private readonly _workspaceRepository: IWorkspaceRepository,
  ) { }

  workspaces: WorkspaceEntity[] = [];
  subjects: SubjectItemEntity[] = [];

  public readonly WORKSPACE_COUNT = 5;

  public async initialize() {
    console.log("INITIALIZING...");
    let connection = await createConnection(appConfig);
    console.log("CONNECTED TO DB");
    try {
      await this.addWorkspaces();
      console.log("SEED COMPLETED");
      await connection.close();
    } catch (e) {
      console.log(e);
    }

    process.exit(0);
  }

  public async addWorkspaces() {
    for (let i = 0; i < this.WORKSPACE_COUNT; i++) {
      let workspaceEn = new WorkspaceEntity();
      workspaceEn.name = faker.name.lastName();
      workspaceEn.createdAt = new Date();
      let createdWs = await this._workspaceRepository.insert(workspaceEn);
      createdWs.subjects = [];
      let prevsbj: SubjectItemEntity = null;
      for (let i = 0; i < 15; i++) {
        let sbjEn = new SubjectItemEntity();
        sbjEn.createdAt = new Date();
        sbjEn.lastUpdated = new Date();
        sbjEn.name = faker.name.jobType();
        sbjEn.subjectDeleteState = 0;
        sbjEn.subjectType = 0;
        sbjEn.workspaceId = createdWs.workspaceId;
        if (prevsbj !== null) {
          sbjEn.parentId = prevsbj.subjectId;
        }
        let createdSbj = await this._subjectItemRepository.insert(sbjEn);
        prevsbj = createdSbj;
        let tskEn = new SubjectTaskEntity();
        tskEn.priority = 1;
        tskEn.subjectId = createdSbj.subjectId;

        let createdTsk = await this._subjectTaskRepository.insert(tskEn);
        createdSbj.task = createdTsk;
        createdWs.subjects.push(createdSbj);
      }
      this.workspaces.push(createdWs);
    }
  }

}
