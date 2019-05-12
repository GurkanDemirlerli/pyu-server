import { IProjectService } from "@services/abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "@ioc";
import { IProjectRepository } from "@repositories/abstract";
import { ProjectCreateDto, ProjectListDto, ProjectDetailDto, ProjectUpdateDto } from "@models/dtos";
import { ProjectEntity } from "@entities/project.entity";
import { ProjectFilter } from "@models/filters";
import { AppError } from "@errors/app-error";

@injectable()
export class ProjectService implements IProjectService {

    constructor(
        @inject(InjectTypes.Repository.PROJECT) private readonly _projectRepository: IProjectRepository
    ) { }

    add(model: ProjectCreateDto): Promise<number> {
        return new Promise<any>((resolve, reject) => {
            //TODO yetkisi var mı diye kontrol et
            let projectEn: ProjectEntity = Object.assign(new ProjectEntity(), model);
            this._projectRepository.insert(projectEn).then((res) => {
                resolve(res.id);
            }).catch((err) => {
                reject(err);
            });
        });
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
