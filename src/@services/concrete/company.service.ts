import { ICompanyRepository } from "../../@repository/abstract/i-company.repository";
import { injectable, inject } from "inversify";
import { ICompanyService } from "../abstract/i-company.service";
import { InjectTypes } from "../../ioc";
import { CompanyEntity } from "../../entities/company.entity";
import { CompanyCreateDto } from "../../_models/dtos/company/company-create.dto";

@injectable()
export class CompanyService implements ICompanyService {

    constructor(
        @inject(InjectTypes.Repository.COMPANY) private readonly _companyRepository: ICompanyRepository
    ) { }

    add(model: CompanyCreateDto) {
        return new Promise<any>((resolve, reject) => {
            let company: CompanyEntity = Object.assign(new CompanyEntity(), model);
            this._companyRepository.insert(company).then((res) => {
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