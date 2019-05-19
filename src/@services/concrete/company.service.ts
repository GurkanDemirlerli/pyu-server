import { ICompanyService } from "@services/abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "@ioc";
import { ICompanyRepository } from "@repositories/abstract";
import { CompanyCreateDto, CompanyListDto, CompanyDetailDto, CompanyUpdateDto, CompanyUserRegisterDto } from "@models/dtos";
import { CompanyEntity } from "@entities/company.entity";
import { CompanyFilter } from "@models/filters";
import { AppError } from "@errors/app-error";
import { CompanyRoles } from "@enums";

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

    acceptMembership(id: number, requestorId: number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._companyRepository.findOne(id, { relations: ["requestedUsers", "users", "owner"] }).then((foundCompany) => {
                if (!foundCompany) throw new AppError('AppError', 'Company not found.', 404);
                //TODO yetki kontrol

                //TODO istek varmı diye kontrol et
                console.log(requestorId);
                console.log(foundCompany);
                if (foundCompany.requestedUsers.filter(x => x.id === requestorId).length < 1)
                    throw new AppError('AppError', 'There is not any membership request for you from this company.', 401);

                if (foundCompany.users.filter(x => x.id == requestorId).length > 0 || foundCompany.owner.id === requestorId)
                    throw new AppError('AppError', 'You Are Already a Member of this company.', 409);

                return this._companyRepository.insertMember(id, requestorId);
                //TODO üye eklendiğinde kabul edilen istedği sil
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            })
        });

    }

    requestMembership(id: number, model: CompanyUserRegisterDto, requestorId: number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._companyRepository.findOne(id, { relations: ["requestedUsers", "users", "owner"] }).then((foundCompany) => {
                if (!foundCompany) throw new AppError('AppError', 'Company not found.', 404);
                //TODO yetki kontrol

                if (foundCompany.users.filter(x => x.id === model.userId).length > 0 || foundCompany.owner.id === model.userId)
                    throw new AppError('AppError', 'User Is Already a Member of this company.', 409);

                if (foundCompany.requestedUsers.filter(x => x.id === model.userId).length > 0)
                    throw new AppError('AppError', 'Your Company already sent a membership request to this user.', 409);

                return this._companyRepository.insertMembershipRequest(id, model.userId);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    private validateAuthority(companyId: number, userId: number, role: CompanyRoles) {
        return new Promise<any>((resolve, reject) => {
            this._companyRepository.findOne(companyId, { relations: ["users", "creator"] }).then((foundCompany) => {
                let cmp: CompanyEntity = foundCompany;
                if (cmp.users.filter(x => x.id === userId).length < 1 && cmp.owner.id !== userId)
                    throw new AppError('AppError', 'You Are Not A Member of This Company', 403);
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

}
