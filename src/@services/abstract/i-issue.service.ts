import { IssueCreateDto } from './../../_models/dtos/issue/issue-create.dto';
import { IssueFilter } from './../../_models/filters/issue-filter';
export interface IIssueService {
    add(model: IssueCreateDto);
    list(filters: IssueFilter);
    find(id: number);
    update(model);
    delete(id:number);
}