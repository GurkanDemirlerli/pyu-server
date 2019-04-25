import { CompanyCreateDto } from './../../_models/dtos/company/company-create.dto';
import { CompanyFilter } from './../../_models/filters/company-filter';
export interface ICompanyService {
    add(model: CompanyCreateDto);
    list(filters: CompanyFilter);
    find(id: number);
    update(model);
    delete(id:number);
}