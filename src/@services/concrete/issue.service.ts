import { IIssueService } from "@services/abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "@ioc";
import { IIssueRepository } from "@repositories/abstract";
import { IssueCreateDto, IssueListDto, IssueDetailDto, IssueUpdateDto } from "@models/dtos";
import { IssueEntity } from "@entities/issue.entity";
import { IssueFilter } from "@models/filters";
import { AppError } from "@errors/app-error";

@injectable()
export class IssueService implements IIssueService {

    constructor(
        @inject(InjectTypes.Repository.ISSUE) private readonly _issueRepository: IIssueRepository
    ) { }

    add(model: IssueCreateDto): Promise<number> {
        return new Promise<any>((resolve, reject) => {
            //TODO yetkisi var mı diye kontrol et
            let issueEn: IssueEntity = Object.assign(new IssueEntity(), model);
            this._issueRepository.insert(issueEn).then((res) => {
                resolve(res.id);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    list(filters: IssueFilter, requestorId: number): Promise<IssueListDto[]> {
        throw new Error("Method not implemented.");
    }

    find(id: number, requestorId: number): Promise<IssueDetailDto> {
        throw new Error("Method not implemented.");
    }

    update(id: number, model: IssueUpdateDto, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            let oldIssue: IssueEntity;
            let updatedIssue: IssueEntity;
            this._issueRepository.findById(id).then((foundIssue) => {
                oldIssue = foundIssue;
                if (!foundIssue) throw new AppError('AppError', 'Issue not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                updatedIssue = Object.assign(oldIssue, model);
                return this._issueRepository.update(id, updatedIssue);
            }).then(() => {
                resolve(updatedIssue);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    delete(id: number, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            this._issueRepository.findById(id).then((foundIssue) => {
                if (!foundIssue) throw new AppError('AppError', 'Issue not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                return this._issueRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }


    //TODO Auth fonksiyonu yaz

}
