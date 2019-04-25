import { IIssueRepository } from "../../@repository/abstract/i-issue.repository";
import { injectable, inject } from "inversify";
import { IIssueService } from "../abstract/i-issue.service";
import { InjectTypes } from "../../ioc";
import { IssueEntity } from "../../entities/issue.entity";
import { IssueCreateDto } from "../../_models/dtos/issue/issue-create.dto";

@injectable()
export class IssueService implements IIssueService {

    constructor(
        @inject(InjectTypes.Repository.ISSUE) private readonly _issueRepository: IIssueRepository
    ) { }

    add(model: IssueCreateDto) {
        return new Promise<any>((resolve, reject) => {
            let issue: IssueEntity = Object.assign(new IssueEntity(), model);
            this._issueRepository.insert(issue).then((res) => {
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



}