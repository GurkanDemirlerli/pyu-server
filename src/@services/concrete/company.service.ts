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
import { Uow } from "@repositories/uow";

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

    //Yalnızca kullanıcının üyesi veya kurucusu olduğu topluluklar gelecek
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

    //Yalnızca kullanıcının üyesi olduğu topluluklar gelecek aksi halde unauthorized, diger kullanıcılar için daha az veri getiren başka metot olacak
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
        let updatedCompany: CompanyEntity;
        let oldCompany: CompanyEntity = await this._companyRepository.findById(id);
        if (!oldCompany) throw new AppError('AppError', 'Company not found.', 404);
        if (oldCompany.ownerId !== requestorId)
            throw new AppError('AppError', 'Your are not the owner of this company.', 403);
        updatedCompany = Object.assign(oldCompany, model);
        await this._companyRepository.update(id, updatedCompany);
        return Promise.resolve(updatedCompany);
    }

    //Yalnızca kurucu işlem yapabilir
    async delete(id: number, requestorId: number) {
        let companyEn: CompanyEntity = await this._companyRepository.findById(id);
        if (!companyEn) throw new AppError('AppError', 'Company not found.', 404);
        if (companyEn.ownerId !== requestorId)
            throw new AppError('AppError', 'Your are not the owner of this company.', 403);
        await this._companyRepository.delete(id);
        return Promise.resolve();
    }

    //Yalnızca isteği alan kişi işlem yapabilir.
    async acceptMembership(msrId: number, requestorId: number): Promise<void> {
        let msReEn: MembershipRequestEntity = await this._membershipRequestRepository.findOne(msrId, { relations: ["user", "company", "company.members"] });
        if (!msReEn)
            throw new AppError('AppError', 'Membership request not found.', 404);
        if (msReEn.userId !== requestorId)
            throw new AppError('AppError', 'You cant accept requests which are not for you', 403);
        if (msReEn.company.members.filter(x => x.userId === msReEn.userId).length > 0 || msReEn.company.ownerId === msReEn.userId)
            throw new AppError('AppError', 'You are Already a Member of this company.', 409);
        let cMemEn: CompanyMembershipEntity = new CompanyMembershipEntity();
        cMemEn.userId = msReEn.userId;
        cMemEn.companyId = msReEn.companyId;
        cMemEn.joiningDate = new Date();
        cMemEn.status = 1; //TODO enum yapılacak kullanıcı topluluğun aktif üyesiyse 1 topluluktan atılırsa başka değer

        let uow = new Uow();
        await uow.start();
        try {
            cMemEn = await this._companyMembershipRepository.insert(cMemEn, uow.getManager());
            await this._membershipRequestRepository.delete(msrId, uow.getManager());
            await uow.commit();
        } catch (err) { await uow.rollback(); throw err; } finally { await uow.release(); }
        return Promise.resolve();
    }

    //Yalnızca kurucu istek gönderebilir.
    async requestMembership(id: number, model: CompanyUserRegisterDto, requestorId: number): Promise<void> {
        let companyEn: CompanyEntity = await this._companyRepository.findOne(id, { relations: ["requestsSent", "members", "members.user", "owner"] });
        if (!companyEn)
            throw new AppError('AppError', 'Company not found.', 404);
        if (companyEn.ownerId !== requestorId)
            throw new AppError('AppError', 'You must be the owner of this company for this operation', 403);
        if (companyEn.members.filter(x => x.userId === model.userId).length > 0 || companyEn.owner.id === model.userId)
            throw new AppError('AppError', 'User Is Already a Member of this company.', 409);
        let duplicated = await this._membershipRequestRepository.findOne(null, { where: { userId: model.userId, companyId: id } });
        if (duplicated)
            throw new AppError('AppError', 'Your Company already sent a membership request to this user.', 409);

        let msReEn: MembershipRequestEntity = new MembershipRequestEntity();
        msReEn.userId = model.userId;
        msReEn.companyId = id;
        msReEn.createdAt = new Date();
        await this._membershipRequestRepository.insert(msReEn);
        return Promise.resolve();
    }

}
