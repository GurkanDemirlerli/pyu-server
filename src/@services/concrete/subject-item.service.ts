import { ISubjectItemService } from "../abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "../../ioc";
import { ISubjectItemRepository } from "../../@repository/abstract";
import { SubjectItemEntity } from "../../entities/subject-item.entity";
import { AppError } from "../../errors/app-error";
import * as _ from 'lodash';

@injectable()
export class SubjectItemService implements ISubjectItemService {

    constructor(
        @inject(InjectTypes.Repository.SUBJECT_ITEM) private readonly _subjectItemRepository: ISubjectItemRepository
    ) { }

    async getAncestors(id: number, requestorId: number): Promise<any> {
        const flatList: any[] = await this._subjectItemRepository.getAncestors(id);
        let ppl = this.populateSubjects(flatList);
        return Promise.resolve(ppl);
    }

    async getDescendants(id: number, requestorId: number): Promise<any> {
        const flatList: any[] = await this._subjectItemRepository.getDescendants(id);
        let ppl = this.populateSubjects(flatList);
        return Promise.resolve(ppl);
    }

    async find(id: number, requestorId: number): Promise<any> {
        let sbjEn: SubjectItemEntity = await this._subjectItemRepository.findOne(id, { relations: ["task"] });
        if (!sbjEn) throw new AppError('AppError', 'Subject not found.', 404);
        return Promise.resolve(sbjEn);
    }

    private populateSubjects(flatList) {
        let out = [];
        let csGr = _.groupBy(flatList, "subjectId");
        for (let sbKey in csGr) {
            let it = Object.assign({}, ...csGr[sbKey], { customField: undefined }, { customFields: [] });
            if (it.folder.subjectId === null)
                it.folder = null;
            if (it.task.subjectId === null)
                it.task = null;
            let gr = _.groupBy(csGr[sbKey], 'customField.customFieldId');
            for (let csKey in gr) {
                if (gr[csKey]["customFieldId"] !== null) {
                    let x = Object.assign({}, ...(gr[csKey]));
                    if (x.customField.customFieldId !== null)
                        it.customFields.push(x.customField);
                }

            }
            out.push(it);
        }
        return out;
    }
}

