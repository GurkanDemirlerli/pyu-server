import { IProjectService } from "@services/abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "@ioc";
import { IProjectRepository, IStatusRepository } from "@repositories/abstract";
import { ProjectCreateDto, ProjectListDto, ProjectDetailDto, ProjectUpdateDto } from "@models/dtos";
import { ProjectEntity } from "@entities/project.entity";
import { ProjectFilter } from "@models/filters";
import { AppError } from "@errors/app-error";
import { getManager, getConnection } from "typeorm";
import { StatusEntity } from "@entities/status.entity";
import { BaseStatus } from "@enums";
import { Uow } from "@repositories/uow";

@injectable()
export class ProjectService implements IProjectService {

    constructor(
        @inject(InjectTypes.Repository.PROJECT) private readonly _projectRepository: IProjectRepository,
        @inject(InjectTypes.Repository.STATUS) private readonly _statusRepository: IStatusRepository

    ) { }

    async add(model: ProjectCreateDto): Promise<number> {
        //TODO yetkisi var mı diye kontrol et
        let projectEn: ProjectEntity = Object.assign(new ProjectEntity(), model);
        let uow = new Uow();
        await uow.start();
        try {
            projectEn = await this._projectRepository.insert(projectEn, uow.getManager());
            let status: StatusEntity = Object.assign(new StatusEntity(), {
                title: 'In Progress',
                description: 'Atomic Gorev',
                baseStatus: BaseStatus.IN_PROGRESS,
                order: 0,
                creatorId: model.userId,
                projectId: projectEn.id
            });
            await this._statusRepository.insert(status, uow.getManager());
            await uow.commit();
        } catch (err) {
            await uow.rollback();
            throw err;
        } finally {
            await uow.release();
        }
        return Promise.resolve(projectEn.id);
    }

    list(filters: ProjectFilter, requestorId: number): Promise<ProjectListDto[]> {
        throw new Error("Method not implemented.");
    }

    find(id: number, requestorId: number): Promise<ProjectDetailDto> {
        throw new Error("Method not implemented.");
    }

    update(id: number, model: ProjectUpdateDto, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            let oldProject: ProjectEntity;
            let updatedProject: ProjectEntity;
            this._projectRepository.findById(id).then((foundProject) => {
                oldProject = foundProject;
                if (!foundProject) throw new AppError('AppError', 'Project not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                updatedProject = Object.assign(oldProject, model);
                return this._projectRepository.update(id, updatedProject);
            }).then(() => {
                resolve(updatedProject);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    delete(id: number, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            this._projectRepository.findById(id).then((foundProject) => {
                if (!foundProject) throw new AppError('AppError', 'Project not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                return this._projectRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }


    //TODO Auth fonksiyonu yaz

}
