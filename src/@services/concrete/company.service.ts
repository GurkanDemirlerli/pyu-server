import { ICompanyService } from "@services/abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "@ioc";
import { ICompanyRepository, ICompanyMembershipRepository, IMembershipRequestRepository } from "@repositories/abstract";
import { CompanyCreateDto, CompanyListDto, CompanyDetailDto, CompanyUpdateDto, CompanyUserRegisterDto } from "@models/dtos";
import { CompanyEntity } from "@entities/company.entity";
import { CompanyFilter } from "@models/filters";
import { AppError } from "@errors/app-error";
import { CompanyMembershipEntity } from "@entities/company-membership.entity";
import { MembershipRequestEntity } from "@entities/membership-request.entity";

@injectable()
export class CompanyService implements ICompanyService {

    constructor(
        @inject(InjectTypes.Repository.COMPANY) private readonly _companyRepository: ICompanyRepository,
        @inject(InjectTypes.Repository.COMPANY_MEMBERSHIP) private readonly _companyMembershipRepository: ICompanyMembershipRepository,
        @inject(InjectTypes.Repository.MEMBERSHIP_REQUEST) private readonly _membershipRequestRepository: IMembershipRequestRepository
    ) { }

    //Herkes topluluk oluşturabilir. Daha sonra sayı sınırı ekle.
    async add(model: CompanyCreateDto): Promise<number> {
        let companyEn: CompanyEntity = Object.assign(new CompanyEntity(), model);
        companyEn.createdAt = new Date();
        companyEn.lastUpdated = new Date();
        let inserted: CompanyEntity = await this._companyRepository.insert(companyEn);
        return Promise.resolve(inserted.id);
    }

    //Yalnızca kullanıcının üyesi olduğu topluluklar gelecek
    async list(filters: CompanyFilter, requestorId: number) {
        let companyDtos: CompanyListDto[] = [];
        let companyEns: CompanyEntity[] = await this._companyRepository.listByFiltersAndUser(filters, requestorId);
        companyEns.map((cmp) => {
            let companyDto: CompanyListDto = Object.assign(new CompanyListDto(), cmp, { projects: undefined, users: undefined })
            companyDto.projectCount = cmp.projects.length;
            companyDto.userCount = cmp.members.length;
            companyDtos.push(companyDto);
        });
        return Promise.resolve(companyDtos);
    }

    //Yalnızca kullanıcının üyesi olduğu topluluklar gelecek aksi halde unauthorized
    async find(id: number, requestorId: number): Promise<CompanyDetailDto> {
        let companyEn: CompanyEntity = await this._companyRepository.findForDetails(id);
        if (!companyEn) throw new AppError('AppError', 'Company not found.', 404);
        let companyDto: CompanyDetailDto = Object.assign(new CompanyDetailDto(), companyEn, { projects: undefined, users: undefined });
        companyDto.projectCount = companyEn.projects.length;
        companyDto.userCount = companyEn.members.length;
        return Promise.resolve(companyDto);
    }

    //Yalnızca kurucu işlem yapabilir
    async update(id: number, model: CompanyUpdateDto, requestorId: number) {
      console.log("BBBBBBBBBBBBBBBBB");

        let updatedCompany: CompanyEntity;
        let oldCompany: CompanyEntity = await this._companyRepository.findById(id);
        if (!oldCompany) throw new AppError('AppError', 'Company not found.', 404);
        // if (oldCompany.ownerId !== requestorId)
        //     throw new AppError('AppError', 'Your are not the owner of this company.', 401);
        updatedCompany = Object.assign(oldCompany, model);
        await this._companyRepository.update(id, updatedCompany);
        return Promise.resolve(updatedCompany);
    }

    //Yalnızca kurucu işlem yapabilir
    async delete(id: number, requestorId: number) {
        let companyEn: CompanyEntity = await this._companyRepository.findById(id);
        if (!companyEn) throw new AppError('AppError', 'Company not found.', 404);
        //yetki kontrol
        await this._companyRepository.delete(id);
        return Promise.resolve();
    }

    //Yalnızca isteği alan kişi işlem yapabilir.
    async acceptMembership(id: number, requestorId: number): Promise<void> {
        let companyEn: CompanyEntity = await this._companyRepository.findOne(id, { relations: ["requestsSent", "members", "members.user", "owner"] });
        if (!companyEn) throw new AppError('AppError', 'Company not found.', 404);
        if (companyEn.requestsSent.filter(x => x.userId === requestorId).length < 1)
            throw new AppError('AppError', 'There is not any membership request for you from this company.', 401);
        if (companyEn.members.filter(x => x.userId == requestorId).length > 0 || companyEn.owner.id === requestorId)
            throw new AppError('AppError', 'You Are Already a Member of this company.', 409);
        let cMemEn: CompanyMembershipEntity = new CompanyMembershipEntity();
        cMemEn.userId = requestorId;
        cMemEn.companyId = id;
        cMemEn.joiningDate = new Date();
        cMemEn.status = 1; // enum yapılacak kullanıcı topluluğun aktif üyesiyse 1 topluluktan atılırsa başka değer
        await this._companyMembershipRepository.insert(cMemEn);
        return Promise.resolve();
    }

    //Yalnızca kurucu istek gönderebilir.
    async requestMembership(id: number, model: CompanyUserRegisterDto, requestorId: number): Promise<void> {
        let companyEn: CompanyEntity = await this._companyRepository.findOne(id, { relations: ["requestsSent", "members", "members.user", "owner"] });
        if (!companyEn) throw new AppError('AppError', 'Company not found.', 404);
        if (companyEn.members.filter(x => x.userId === model.userId).length > 0 || companyEn.owner.id === model.userId)
            throw new AppError('AppError', 'User Is Already a Member of this company.', 409);
        if (companyEn.requestsSent.filter(x => x.userId === model.userId).length > 0)
            throw new AppError('AppError', 'Your Company already sent a membership request to this user.', 409);
        let msReEn: MembershipRequestEntity = new MembershipRequestEntity();
        msReEn.userId = model.userId;
        msReEn.companyId = id;
        msReEn.createdAt = new Date();
        await this._membershipRequestRepository.insert(msReEn);
        return Promise.resolve();
    }

    // private validateAuthority(companyId: number, userId: number, role: CompanyRoles) {
    //     return new Promise<any>((resolve, reject) => {
    //         this._companyRepository.findOne(companyId, { relations: ["users", "creator"] }).then((foundCompany) => {
    //             let cmp: CompanyEntity = foundCompany;
    //             if (cmp.members.filter(x => x.userId === userId).length < 1 && cmp.owner.id !== userId)
    //                 throw new AppError('AppError', 'You Are Not A Member of This Company', 403);
    //             resolve();
    //         }).catch((err) => {
    //             reject(err);
    //         });
    //     });
    // }

}
