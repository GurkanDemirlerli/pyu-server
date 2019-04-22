import { CompanyCreateDto } from "../../_models/dtos/company/company-create.dto";

export interface ICompanyService {
    add(model: CompanyCreateDto);
    list(filters);
    find(id: number);
    update(model);
    delete(id:number);
}