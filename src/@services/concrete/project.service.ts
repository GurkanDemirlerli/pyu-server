import { StatusEntity } from './../../entities/status.entity';
import { IProjectRepository } from "../../@repository/abstract/i-project.repository";
import { injectable, inject } from "inversify";
import { IProjectService } from "../abstract/i-project.service";
import { InjectTypes } from "../../ioc";
import { ProjectEntity } from "../../entities/project.entity";
import { ProjectCreateDto } from "../../_models/dtos/project/project-create.dto";
import { IStatusRepository } from "../../@repository/abstract";
import { BaseStatus } from '../../enums/base-status.enum';

@injectable()
export class ProjectService implements IProjectService {

    constructor(
        @inject(InjectTypes.Repository.PROJECT) private readonly _projectRepository: IProjectRepository,
        @inject(InjectTypes.Repository.STATUS) private readonly _statusRepository: IStatusRepository
    ) { }

    add(model: ProjectCreateDto) {
        return new Promise<any>((resolve, reject) => {
            let project: ProjectEntity = Object.assign(new ProjectEntity(), model);
            this._projectRepository.insert(project).then((prj) => {
                return this.fillDefaultStatuses(prj);
            }).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    list(filters) {
        throw new Error("Method not implemented.");
    }
    find(id: number) {
        throw new Error("Method not implemented.");
    }
    update(model: any) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }
    
    //Bu işlemi daha sonra atomik yap
    private fillDefaultStatuses(project: ProjectEntity) {
        return new Promise<any>((resolve, reject) => {
            let promises = [];
            let status0: StatusEntity = Object.assign(new StatusEntity(), {
                title: 'Planning',
                description: 'Proje sürecine dahil olabilecek görevler',
                baseStatus: BaseStatus.PLANNINING,
                order: 0,
                creatorId: project.userId,
                projectId: project.id
            });
            let status1: StatusEntity = Object.assign(new StatusEntity(), {
                title: 'To do',
                description: 'Proje sürecinde olan ama henüz baslanmamis görevler',
                baseStatus: BaseStatus.NOT_STARTED,
                order: 0,
                creatorId: project.userId,
                projectId: project.id
            });
            let status2: StatusEntity = Object.assign(new StatusEntity(), {
                title: 'In Progress',
                description: 'Yapılmakta olan görevler',
                baseStatus: BaseStatus.IN_PROGRESS,
                order: 0,
                creatorId: project.userId,
                projectId: project.id
            });
            let status3: StatusEntity = Object.assign(new StatusEntity(), {
                title: 'Done',
                description: 'Bitmiş görevler',
                baseStatus: BaseStatus.FINISHED,
                order: 0,
                creatorId: project.userId,
                projectId: project.id
            });
            promises.push(this._statusRepository.insert(status0));
            promises.push(this._statusRepository.insert(status1));
            promises.push(this._statusRepository.insert(status2));
            promises.push(this._statusRepository.insert(status3));

            Promise.all(promises).then((res) => {
                resolve();
            }).catch((err) => {
                reject(err);
            })
        });

    }


}