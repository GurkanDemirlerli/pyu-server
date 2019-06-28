import { ICompanyService } from "@services/abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "@ioc";
import { ICompanyRepository, ICompanyMembershipRepository, IMembershipRequestRepository, IStatusTemplateRepository, IAbstractStatusRepository } from "@repositories/abstract";
import { CompanyCreateDto, CompanyListDto, CompanyDetailDto, CompanyUpdateDto, CompanyUserRegisterDto, AddStatusTemplateDto, UserSummaryDto } from "@models/dtos";
import { CompanyEntity } from "@entities/company.entity";
import { CompanyFilter } from "@models/filters";
import { AppError } from "@errors/app-error";
import { CompanyMembershipEntity } from "@entities/company-membership.entity";
import { MembershipRequestEntity } from "@entities/membership-request.entity";
import { Uow } from "@repositories/uow";
import { StatusTemplateEntity } from "@entities/status-template.entity";
import { AbstractStatusEntity } from "@entities/abstract-status.entity";
import { ProjectTreeItem } from "@models/project-tree-item.dto";

@injectable()
export class CompanyService implements ICompanyService {

  constructor(
    @inject(InjectTypes.Repository.COMPANY) private readonly _companyRepository: ICompanyRepository,
    @inject(InjectTypes.Repository.COMPANY_MEMBERSHIP) private readonly _companyMembershipRepository: ICompanyMembershipRepository,
    @inject(InjectTypes.Repository.MEMBERSHIP_REQUEST) private readonly _membershipRequestRepository: IMembershipRequestRepository,
    @inject(InjectTypes.Repository.STATUS_TEMPLATE) private readonly _statusTemplateRepository: IStatusTemplateRepository,
    @inject(InjectTypes.Repository.ABSTRACT_STATUS) private readonly _abstractStatusRepository: IAbstractStatusRepository,

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
      let companyDto: CompanyListDto = Object.assign(new CompanyListDto(), cmp, { rootProjects: undefined, users: undefined })
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

  async addStatusTemplate(id: number, model: AddStatusTemplateDto, requestorId: number): Promise<any> {
    let uow = new Uow();
    await uow.start();
    try {
      let modST = new StatusTemplateEntity();
      modST.companyId = id;
      modST.createdAt = new Date();
      modST.lastUpdated = new Date();
      modST.creatorId = requestorId;
      modST.name = model.name;
      modST = await this._statusTemplateRepository.insert(modST);

      for (let i = 0; i < model.statuses.length; i++) {
        let abs = new AbstractStatusEntity();
        abs.baseStatus = model.statuses[i].baseStatus;
        abs.title = model.statuses[i].title;
        abs.description = model.statuses[i].description;
        abs.createdAt = new Date();
        abs.order = model.statuses[i].order;
        abs.templateId = modST.id;
        abs = await this._abstractStatusRepository.insert(abs);
      }
      await uow.commit();
    } catch (err) { await uow.rollback(); throw err; } finally { await uow.release(); }
    return Promise.resolve();
  }

  async showTree(companyId: number): Promise<any> {
    let trees = await this._companyRepository.getTree(companyId);
    let treeFlatList: any[] = [];

    for (let i = 0; i < trees[0].length; i++) {
      let x = Object.assign(new ProjectTreeItem(), trees[0][i]);
      treeFlatList.push(x);
    }
    let roots = treeFlatList.filter(r => r.parentId === null);
    for (let i in roots) {
      roots[i].children = this.getNestedChildren(treeFlatList, roots[i].id);
    }

    let nw = roots.map((item) => {
      return Object.assign({}, {
        label: item.title,
        data: item.id,
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder",
        children: item.children,
      });
    });

    return Promise.resolve(nw);
  }

  async getMembers(companyId:number):Promise<any>{
    let userDtos: UserSummaryDto[] = [];
    let cmpMbshipEns: CompanyMembershipEntity[];
    cmpMbshipEns = await this._companyMembershipRepository.list({ where: { companyId: companyId }, relations: ["user"] });
    for (let i = 0; i < cmpMbshipEns.length; i++) {
      let userDto = new UserSummaryDto();
      userDto.id = cmpMbshipEns[i].user.id;
      userDto.name = cmpMbshipEns[i].user.name;
      userDto.surname = cmpMbshipEns[i].user.surname;
      userDtos.push(userDto);
    }
    return Promise.resolve(userDtos);
  }

  private getNestedChildren(array: ProjectTreeItem[], parentId: number) {
    let out = []
    for (let i in array) {
      if (array[i].parentId == parentId) {
        let children = this.getNestedChildren(array, array[i].id)
        if (children.length) {
          array[i].children = children
        }
        out.push({
          label: array[i].title,
          data: array[i].id,
          expandedIcon: "fa fa-folder-open",
          collapsedIcon: "fa fa-folder",
          children: array[i].children
        })
      }
    }

    return out;
  }

  async getstatusTemplates(companyId: number): Promise<any> {
    let sTempEn = await this._statusTemplateRepository.list({ where: { companyId: companyId } });
    return Promise.resolve(sTempEn);
  }

}
