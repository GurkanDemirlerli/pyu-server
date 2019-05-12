import { CompanyCreateDto, CompanyUpdateDto, CompanyDetailDto, CompanyListDto } from "@models/dtos";
import { CompanyFilter } from "@models/filters";
import { CompanyEntity } from "@entities/company.entity";

export interface ICompanyService {
    add(model: CompanyCreateDto): Promise<number>;
    list(filters: CompanyFilter, requestorId: number): Promise<CompanyListDto[]>;
    find(id: number, requestorId: number): Promise<CompanyDetailDto>;
    update(id: number, model: CompanyUpdateDto, requestorId: number): Promise<CompanyEntity>;
    delete(id: number, requestorId: number): Promise<void>;
}
