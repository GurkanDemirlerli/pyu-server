import { CompanyCreateDto, CompanyUpdateDto, CompanyDetailDto, CompanyListDto, CompanyUserRegisterDto, AddStatusTemplateDto } from "@models/dtos";
import { CompanyFilter } from "@models/filters";
import { CompanyEntity } from "@entities/company.entity";

export interface ICompanyService {
    add(model: CompanyCreateDto): Promise<number>;
    list(filters: CompanyFilter, requestorId: number): Promise<CompanyListDto[]>;
    find(id: number, requestorId: number): Promise<CompanyDetailDto>;
    update(id: number, model: CompanyUpdateDto, requestorId: number): Promise<CompanyEntity>;
    delete(id: number, requestorId: number): Promise<void>;
    requestMembership(id: number, model: CompanyUserRegisterDto, requestorId: number): Promise<void>;
    acceptMembership(id: number, requestorId: number): Promise<void>;
    addStatusTemplate(id: number, model: AddStatusTemplateDto, requestorId: number): Promise<any>;
}
