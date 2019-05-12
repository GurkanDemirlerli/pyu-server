import { IssueCreateDto, IssueUpdateDto, IssueDetailDto, IssueListDto } from "@models/dtos";
import { IssueFilter } from "@models/filters";
import { IssueEntity } from "@entities/issue.entity";

export interface IIssueService {
    add(model: IssueCreateDto): Promise<number>;
    list(filters: IssueFilter, requestorId: number): Promise<IssueListDto[]>;
    find(id: number, requestorId: number): Promise<IssueDetailDto>;
    update(id: number, model: IssueUpdateDto, requestorId: number): Promise<IssueEntity>;
    delete(id: number, requestorId: number): Promise<void>;
}
