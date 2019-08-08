import { SubjectItemEntity } from './../../entities/subject-item.entity';
import { ProjectCreateDto } from './../../_models/dtos/project/project-create.dto';
import { ISubjectProjectService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ISubjectProjectRepository, ISubjectItemRepository, ISubjectFolderRepository } from "../../@repository/abstract";
import { SubjectProjectEntity } from "../../entities/subject-project.entity";
import { AppError } from "../../errors/app-error";
import { SubjectTypes } from 'src/enums';
import { Uow } from '../../@repository/uow';
import { SubjectFolderEntity } from 'src/entities/subject-folder.entity';

@injectable()
export class SubjectProjectService implements ISubjectProjectService {

    constructor(
        @inject(InjectTypes.Repository.SUBJECT_PROJECT) private readonly _subjectProjectRepository: ISubjectProjectRepository,
        @inject(InjectTypes.Repository.SUBJECT_ITEM) private readonly _subjectItemRepository: ISubjectItemRepository,
        @inject(InjectTypes.Repository.SUBJECT_FOLDER) private readonly _subjectFolderRepository: ISubjectFolderRepository
    ) { }

    async add(model: ProjectCreateDto, requestorId: number): Promise<number> {

        //TODO yetki kontrol

        let parentEn = await this._subjectItemRepository.findOne(model.parentId, { relations: ["folder"] });
        if (!parentEn)
            throw new AppError('AppError', 'Parent not found.', 404);
        if (!(parentEn.subjectType == SubjectTypes.DOMAIN || parentEn.subjectType == SubjectTypes.FOLDER || parentEn.subjectType == SubjectTypes.PROJECT))
            throw new AppError('AppError', 'Parent must be a domain, folder or project', 404);
        let sbjEn, fldEn, prjEn;
        let uow = new Uow();
        await uow.start();
        try {
            sbjEn = new SubjectItemEntity();
            sbjEn.createdAt = new Date();
            sbjEn.lastUpdated = new Date();
            sbjEn.name = model.name;
            sbjEn.subjectDeleteState = 0;
            sbjEn.creatorId = requestorId;
            sbjEn.subjectType = SubjectTypes.PROJECT;
            sbjEn.workspaceId = parentEn.workspaceId;
            sbjEn.parentId = model.parentId;
            sbjEn = await this._subjectItemRepository.insert(sbjEn, uow.getManager());


            fldEn = new SubjectFolderEntity();
            fldEn.defaultWorkflowStatusId = parentEn.folder.defaultWorkflowStatusId;
            fldEn.subjectId = sbjEn.subjectId;
            fldEn.workflowId = parentEn.folder.workflowId;

            fldEn = await this._subjectFolderRepository.insert(fldEn, uow.getManager());

            prjEn = new SubjectProjectEntity();
            prjEn.dueDate = model.dueDate;
            prjEn.startDate = model.startDate;

            //HARD-CODING null'ı parentinin default statusIdsi yap
            prjEn.statusId = parentEn.folder.defaultWorkflowStatusId;
            prjEn.subjectId = fldEn.subjectId;

            prjEn = await this._subjectProjectRepository.insert(prjEn, uow.getManager());

            await uow.commit();
        } catch (err) { await uow.rollback(); throw err; } finally { await uow.release(); }

        return Promise.resolve(prjEn.subjectId);
    }
    list(filters: any, requestorId: number): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    update(id: number, model: any, requestorId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: number, requestorId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async find(id: number, requestorId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

