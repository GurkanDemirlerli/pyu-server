import { ICompanyService } from "@services/abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "@ioc";
import { ICompanyRepository } from "@repositories/abstract";
import { CompanyCreateDto, CompanyListDto, CompanyDetailDto, CompanyUpdateDto } from "@models/dtos";
import { CompanyEntity } from "@entities/company.entity";
import { CompanyFilter } from "@models/filters";
import { AppError } from "@errors/app-error";

@injectable()
export class CompanyService implements ICompanyService {

    constructor(
        @inject(InjectTypes.Repository.COMPANY) private readonly _companyRepository: ICompanyRepository
    ) { }

    add(model: CompanyCreateDto): Promise<number> {
        return new Promise<any>((resolve, reject) => {
            let companyEn: CompanyEntity = Object.assign(new CompanyEntity(), model);
            this._companyRepository.insert(companyEn).then((res) => {
                resolve(res.id);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    list(filters: CompanyFilter, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            let companyDtos: CompanyListDto[] = [];
            this._companyRepository.listByFiltersAndUser(filters, requestorId).then((companies) => {
                companies.map((cmp) => {
                    let companyDto: CompanyListDto = Object.assign(new CompanyListDto(), cmp, { projects: undefined, users: undefined })
                    companyDto.projectCount = cmp.projects.length;
                    companyDto.userCount = cmp.users.length;
                    companyDtos.push(companyDto);
                });
                resolve(companyDtos);
            }).catch((err) => {
                reject(err);
            })
        });
    }

    find(id: number, requestorId: number): Promise<CompanyDetailDto> {
        return new Promise<CompanyDetailDto>((resolve, reject) => {
            let companyEntity: CompanyEntity;
            this._companyRepository.findForDetails(id).then((foundCompany) => {
                if (!foundCompany) throw new AppError('AppError', 'Company not found.', 404);
                companyEntity = foundCompany;
                //TODO bu companyiye üye mi diyo kontrol et
                let companyDto: CompanyDetailDto = Object.assign(new CompanyDetailDto(), companyEntity, { projects: undefined, users: undefined });
                companyDto.projectCount = companyEntity.projects.length;
                companyDto.userCount = companyEntity.users.length;
                resolve(companyDto);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    update(id: number, model: CompanyUpdateDto, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            let oldCompany: CompanyEntity;
            let updatedCompany: CompanyEntity;
            this._companyRepository.findById(id).then((foundCompany) => {
                oldCompany = foundCompany;
                if (!foundCompany) throw new AppError('AppError', 'Company not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                updatedCompany = Object.assign(oldCompany, model);
                return this._companyRepository.update(id, updatedCompany);
            }).then(() => {
                resolve(updatedCompany);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    delete(id: number, requestorId: number) {
        return new Promise<any>((resolve, reject) => {
            this._companyRepository.findById(id).then((foundCompany) => {
                if (!foundCompany) throw new AppError('AppError', 'Company not found.', 404);
                //TODO yetkisi var mı diye kontrol et
                return this._companyRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }


    //TODO Auth fonksiyonu yaz

    // private validateAuthority(projectId: number, userId: number): Promise<void> {
    //     return new Promise<any>((resolve, reject) => {
    //         this._projectRepository.findOne(projectId, { relations: ["users", "creator"] }).then((res) => {
    //             let prjct = res;
    //             if (prjct.users.filter(x => x.id === userId).length < 1 && prjct.creator.id !== userId)
    //                 throw new AppError('AppError', 'Bu projede yetkiniz yoktur.', 403);
    //             resolve();
    //         }).catch((err) => {
    //             reject(err);
    //         });
    //     });
    // }



}
