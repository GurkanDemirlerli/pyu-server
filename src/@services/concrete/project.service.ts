import { IProjectService } from "@services/abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "@ioc";
import { IProjectRepository, IStatusRepository, ICompanyRepository } from "@repositories/abstract";
import { ProjectCreateDto, ProjectListDto, ProjectDetailDto, ProjectUpdateDto } from "@models/dtos";
import { ProjectEntity } from "@entities/project.entity";
import { ProjectFilter } from "@models/filters";
import { AppError } from "@errors/app-error";
import { StatusEntity } from "@entities/status.entity";
import { BaseStatus } from "@enums";
import { Uow } from "@repositories/uow";

@injectable()
export class ProjectService implements IProjectService {

    constructor(
        @inject(InjectTypes.Repository.PROJECT) private readonly _projectRepository: IProjectRepository,
        @inject(InjectTypes.Repository.STATUS) private readonly _statusRepository: IStatusRepository,
        @inject(InjectTypes.Repository.COMPANY) private readonly _companyRepository: ICompanyRepository,


    ) { }

    async add(model: ProjectCreateDto): Promise<number> {
        await this.validateAuthority(model.companyId, model.userId);
        let projectEn: ProjectEntity = Object.assign(new ProjectEntity(), model);
        let uow = new Uow();
        await uow.start();
        try {
            projectEn = await this._projectRepository.insert(projectEn, uow.getManager());
            let status0: StatusEntity = Object.assign(new StatusEntity(), {
                title: 'Planning',
                description: 'Proje sürecine dahil olabilecek görevler',
                baseStatus: BaseStatus.PLANNINING,
                order: 0,
                creatorId: model.userId,
                projectId: projectEn.id
            });
            let status1: StatusEntity = Object.assign(new StatusEntity(), {
                title: 'To do',
                description: 'Proje sürecinde olan ama henüz baslanmamis görevler',
                baseStatus: BaseStatus.NOT_STARTED,
                order: 0,
                creatorId: model.userId,
                projectId: projectEn.id
            });
            let status2: StatusEntity = Object.assign(new StatusEntity(), {
                title: 'In Progress',
                description: 'Yapılmakta olan görevler',
                baseStatus: BaseStatus.IN_PROGRESS,
                order: 0,
                creatorId: model.userId,
                projectId: projectEn.id
            });
            let status3: StatusEntity = Object.assign(new StatusEntity(), {
                title: 'Done',
                description: 'Bitmiş görevler',
                baseStatus: BaseStatus.FINISHED,
                order: 0,
                creatorId: model.userId,
                projectId: projectEn.id
            });
            await this._statusRepository.insert(status0, uow.getManager());
            await this._statusRepository.insert(status1, uow.getManager());
            await this._statusRepository.insert(status2, uow.getManager());
            await this._statusRepository.insert(status3, uow.getManager());

            await uow.commit();
        } catch (err) {
            await uow.rollback();
            throw err;
        } finally {
            await uow.release();
        }
        return Promise.resolve(projectEn.id);
    }

    //TODO sadece yetkisi olanlar gelsin
    async listByCompany(filters: ProjectFilter, requestorId: number, companyId: number): Promise<ProjectListDto[]> {
        let projectDtos: ProjectListDto[] = [];
        await this.validateAuthority(companyId, requestorId);
        let projects = await this._projectRepository.listByFiltersByCompany(filters, companyId);
        projects.map((prj) => {
            let projectDto = Object.assign(new ProjectListDto(), prj);
            projectDtos.push(projectDto);
        });
        return Promise.resolve(projectDtos);
    }

    async find(id: number, requestorId: number): Promise<ProjectDetailDto> {
        let projectEntity = await this._projectRepository.findForDetails(id);
        if (!projectEntity) throw new AppError('AppError', 'Project not found.', 404);
        await this.validateAuthority(projectEntity.company.id, requestorId);
        let prjDto: ProjectDetailDto = Object.assign(new ProjectDetailDto(), projectEntity);
        return Promise.resolve(prjDto);
    }

    async update(id: number, model: ProjectUpdateDto, requestorId: number) {
        let updatedProject: ProjectEntity;
        let oldProject: ProjectEntity = await this._projectRepository.findById(id);
        if (!oldProject) throw new AppError('AppError', 'Project not found.', 404);
        await this.validateAuthority(oldProject.companyId, requestorId);
        updatedProject = Object.assign(oldProject, model);
        await this._projectRepository.update(id, updatedProject);
        return Promise.resolve(updatedProject);
    }

    async delete(id: number, requestorId: number) {
        let projectEntity: ProjectEntity = await this._projectRepository.findById(id);
        if (!projectEntity) throw new AppError('AppError', 'Project not found.', 404);
        await this.validateAuthority(projectEntity.companyId, requestorId);
        await this._projectRepository.delete(id);
        return Promise.resolve();
    }

    // private async validateAuthority(type: ProjectAuthTypes, userId: number, companyId: number, projectId?: number): Promise<void> {
    //     let cmpEn: CompanyEntity;
    //     if (companyId !== null) cmpEn = await this._companyRepository.findOne(companyId, { relations: ["users", "owner"] });
    //
    //     //TODO company kurucusunun admin olması daha sonra değişirse burası da değişir.
    //     if (type === ProjectAuthTypes.ADMIN) {
    //         if (!cmpEn) throw new AppError('AppError', 'Internal Error.', 500);
    //         if (cmpEn.owner.id !== userId)
    //             throw new AppError('AppError', 'Yetkiniz yoktur.', 403);
    //         return Promise.resolve();
    //     }
    //
    //     let prjEn: ProjectEntity;
    //     if (projectId !== null) prjEn = await this._projectRepository.findForDetails(projectId);
    //
    //     if (type === ProjectAuthTypes.USER) {
    //         if (!prjEn) throw new AppError('AppError', 'Internal Error.', 500);
    //         if (prjEn.users.filter(x => x.id === userId).length < 1 && cmpEn.owner.id !== userId)
    //             throw new AppError('AppError', 'Bu topluluğun üyesi değilsiniz.', 403);
    //         return Promise.resolve();
    //     }
    //
    //     if (type === ProjectAuthTypes.MANAGER) {
    //         if (!prjEn) throw new AppError('AppError', 'Internal Error.', 500);
    //         if (prjEn.managers.filter(x => x.id === userId).length < 1 && cmpEn.owner.id !== userId)
    //             throw new AppError('AppError', 'Yetkiniz yoktur.', 403);
    //         return Promise.resolve();
    //     }
    //
    //     throw new AppError('AppError', 'Internal Error.', 500);
    //     //TODO Internal errorları düzelt.
    //
    // }

    private async validateAuthority(companyId: number, userId: number): Promise<void> {
        let cmpEn = await this._companyRepository.findOne(companyId, { relations: ["users", "owner"] });
        console.log("cmpEn : ", cmpEn);
        if (cmpEn.members.filter(x => x.userId === userId).length < 1 && cmpEn.owner.id !== userId)
            throw new AppError('AppError', 'Bu topluluğun üyesi değilsiniz.', 403);
        return Promise.resolve();
    }
}
