import { IRootProjectService } from "@services/abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "@ioc";
import { IProjectRepository, IStatusRepository, ICompanyRepository, ICompanyMembershipRepository, IUserRepository, IProjectMembershipRepository, IRootProjectRepository } from "@repositories/abstract";
import { ProjectListDto, ProjectDetailDto, ProjectUpdateDto, UserSummaryDto, ProjectUserRegisterDto, RootProjectCreateDto } from "@models/dtos";
import { ProjectEntity } from "@entities/project.entity";
import { ProjectFilter } from "@models/filters";
import { AppError } from "@errors/app-error";
import { StatusEntity } from "@entities/status.entity";
import { BaseStatus, ProjectTypes } from "@enums";
import { Uow } from "@repositories/uow";
import { CompanyMembershipEntity } from "@entities/company-membership.entity";
import { UserEntity } from "@entities/user.entity";
import { ProjectMembershipEntity } from "@entities/project-membership.entity";
import { RootProjectEntity } from "@entities/root-project.entity";
import { TreeExplorerItem } from "@models";

@injectable()
export class RootProjectService implements IRootProjectService {

  constructor(
    @inject(InjectTypes.Repository.ROOT_PROJECT) private readonly _rootProjectRepository: IRootProjectRepository,
    @inject(InjectTypes.Repository.PROJECT) private readonly _projectRepository: IProjectRepository,
    @inject(InjectTypes.Repository.STATUS) private readonly _statusRepository: IStatusRepository,
    @inject(InjectTypes.Repository.COMPANY) private readonly _companyRepository: ICompanyRepository,
    @inject(InjectTypes.Repository.COMPANY_MEMBERSHIP) private readonly _companyMembershipRepository: ICompanyMembershipRepository,
    @inject(InjectTypes.Repository.PROJECT_MEMBERSHIP) private readonly _projectMembershipRepository: IProjectMembershipRepository
  ) { }

  //Yalnızca sahibi ekleyebilir
  async add(model: RootProjectCreateDto): Promise<number> {
    let companyEn = await this._companyRepository.findOne(model.companyId, { relations: [] });
    if (!companyEn)
      throw new AppError('AppError', 'Company Not Found', 404);

    console.log("Owner:", companyEn.ownerId);
    console.log("Model:", model.userId)
    if (companyEn.ownerId !== model.userId)
      throw new AppError('AppError', 'You can not add a new project to company which is not yours', 403);
    let prjEn: ProjectEntity;
    let rtpEn: RootProjectEntity;

    let uow = new Uow();
    await uow.start();
    try {
      prjEn = new ProjectEntity();
      prjEn.projectType = ProjectTypes.ROOT;
      prjEn = await this._projectRepository.insert(prjEn, uow.getManager());

      rtpEn = new RootProjectEntity();
      rtpEn.baseProjectId = prjEn.id;
      rtpEn.companyId = model.companyId;
      rtpEn.userId = model.userId;
      rtpEn.title = model.title;
      rtpEn.description = model.description;
      rtpEn.createdAt = new Date();
      rtpEn.lastUpdated = new Date();
      rtpEn = await this._rootProjectRepository.insert(rtpEn, uow.getManager());

      await uow.commit();
    } catch (err) { await uow.rollback(); throw err; } finally { await uow.release(); }
    return Promise.resolve(rtpEn.id);
  }

  //sadece ayni sirkettekiler erisebilir
  async listByCompany(filters: ProjectFilter, requestorId: number, companyId: number): Promise<ProjectListDto[]> {
    let projectDtos: ProjectListDto[] = [];
    const memberEn: CompanyMembershipEntity = await this._companyMembershipRepository.findOne(null, { where: { userId: requestorId, companyId: companyId } });
    if (!memberEn)
      throw new AppError('AppError', 'You are not part of this company', 403);
    let projects = await this._projectRepository.listByFiltersByCompany(filters, companyId);
    projects.map((prj) => {
      let projectDto = Object.assign(new ProjectListDto(), prj);
      projectDtos.push(projectDto);
    });
    return Promise.resolve(projectDtos);
  }

  //sadece ayni sirkettekiler erisebilir
  async find(id: number, requestorId: number): Promise<ProjectDetailDto> {
    let rtpEn = await this._rootProjectRepository.findForDetails(id);
    if (!rtpEn) throw new AppError('AppError', 'Project not found.', 404);
    const memberEn: CompanyMembershipEntity = await this._companyMembershipRepository.findOne(null, { where: { userId: requestorId, companyId: rtpEn.company.id } });
    if (!memberEn && rtpEn.company.owner.id !== requestorId)
      throw new AppError('AppError', 'You are not part of this company', 403);
    let prjDto: ProjectDetailDto = Object.assign(new ProjectDetailDto(), rtpEn);
    return Promise.resolve(prjDto);
  }

  //yalnızca sirket sahibi izinlidir
  async update(id: number, model: ProjectUpdateDto, requestorId: number) {
    let updatedProject: ProjectEntity;
    let oldProject: ProjectEntity = await this._projectRepository.findById(id);
    if (!oldProject) throw new AppError('AppError', 'Project not found.', 404);
    const companyEn = await this._companyRepository.findOne(oldProject.companyId, { relations: [] });
    if (!companyEn)
      throw new AppError('AppError', 'Company Not Found', 404);
    if (companyEn.ownerId !== requestorId)
      throw new AppError('AppError', 'You can not update this project', 403);
    updatedProject = Object.assign(oldProject, model);
    await this._projectRepository.update(id, updatedProject);
    return Promise.resolve(updatedProject);
  }

  //yalnızca sirket sahibi izinlidir
  async delete(id: number, requestorId: number) {
    let projectEntity: ProjectEntity = await this._projectRepository.findById(id);
    if (!projectEntity) throw new AppError('AppError', 'Project not found.', 404);
    const companyEn = await this._companyRepository.findOne(projectEntity.companyId, { relations: [] });
    if (!companyEn)
      throw new AppError('AppError', 'Company Not Found', 404);
    if (companyEn.ownerId !== requestorId)
      throw new AppError('AppError', 'You can not delete this project', 403);
    await this._projectRepository.delete(id);
    return Promise.resolve();
  }

  async getMembers(id: number, requestorId: number): Promise<UserSummaryDto[]> {
    let userDtos: UserSummaryDto[] = [];
    let projectMbshipEns: ProjectMembershipEntity[];
    projectMbshipEns = await this._projectMembershipRepository.list({ where: { projectId: id }, relations: ["user"] });
    for (let i = 0; i < projectMbshipEns.length; i++) {
      let userDto = new UserSummaryDto();
      userDto.id = projectMbshipEns[i].user.id;
      userDto.name = projectMbshipEns[i].user.name;
      userDto.surname = projectMbshipEns[i].user.surname;
      userDtos.push(userDto);
    }
    return Promise.resolve(userDtos);
  }

  //Todo projenin bolunduğu şirketin üyesi mi diye kontrol edilecek. Yetkli kontrolü yapılacak
  async addMember(id: number, model: ProjectUserRegisterDto): Promise<void> {
    let prjMbshipEn: ProjectMembershipEntity = new ProjectMembershipEntity();
    prjMbshipEn.userId = model.userId;
    // prjMbshipEn.projectId = id;
    prjMbshipEn.createdAt = new Date();
    await this._projectMembershipRepository.insert(prjMbshipEn);
    return Promise.resolve();
  }



  async getTree(id: number): Promise<TreeExplorerItem> {
    let tr: TreeExplorerItem = new TreeExplorerItem();
    let root = await this._rootProjectRepository.findOne(id, null);
    tr.label = root.title;
    tr.data = root.baseProjectId;
    tr.expandedIcon = "fa fa-folder-open";
    tr.collapsedIcon = "fa fa-folder";

    await this._projectRepository.populateChilds();

    return Promise.resolve(new TreeExplorerItem());
  }

}
