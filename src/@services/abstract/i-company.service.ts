import { CompanyCreateDto, CompanyUpdateDto, CompanyDetailDto } from "@models/dtos";
import { CompanyFilter } from "@models/filters";
import { CompanyEntity } from "@entities/company.entity";

export interface ICompanyService {
    add(model: CompanyCreateDto): Promise<number>;
    list(filters: CompanyFilter, requestorId: number);
    find(id: number, requestorId: number): Promise<CompanyDetailDto>;
    update(id: number, model: CompanyUpdateDto, requestorId: number);
    delete(id: number, requestorId: number);
}
