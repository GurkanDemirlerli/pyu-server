import { CompanyEntity } from "./../../entities/company.entity";
import { IRepositoryBase } from "./base/i-repository.base";
import { CompanyFilter } from "@models/filters";

export interface ICompanyRepository extends IRepositoryBase<CompanyEntity> {
    listByFiltersAndUser(filters: CompanyFilter, userId: number): Promise<CompanyEntity[]>;
    findForDetails(id: number): Promise<CompanyEntity>;
    insertMember(companyId: number, userId: number): Promise<void>;
    insertMembershipRequest(companyId: number, userId: number): Promise<void>;
}
