import { ISubProjectService } from "@services/abstract";
import { injectable, inject } from "inversify";
import { InjectTypes } from "@ioc";
import { ISubProjectRepository } from "@repositories/abstract";
import { SubProjectEntity } from "@entities/sub-project.entity";
import { AppError } from "@errors/app-error";
import { ProjectTypes } from "@enums";

@injectable()
export class SubProjectService implements ISubProjectService {

  constructor(
    @inject(InjectTypes.Repository.SUB_PROJECT) private readonly _subProjectRepository: ISubProjectRepository
  ) { }

  async find(id: number, requestorId: number): Promise<SubProjectEntity> {
    let sbpEn = await this._subProjectRepository.findForDetails(id);
    if (!sbpEn) throw new AppError('AppError', 'Sub Project not found.', 404);
    // const memberEn: CompanyMembershipEntity = await this._companyMembershipRepository.findOne(null, { where: { userId: requestorId, companyId: rtpEn.company.id } });
    // if (!memberEn && rtpEn.company.owner.id !== requestorId)
    //   throw new AppError('AppError', 'You are not part of this company', 403);
    // let prjDto: ProjectDetailDto = Object.assign(new ProjectDetailDto(), rtpEn);
    // sbpEn.assignedTask.

    await this.populateAncestors(sbpEn);
    return Promise.resolve(sbpEn);
  }

  private async populateAncestors(sbp: SubProjectEntity) {
    if (sbp.assignedTask.project.projectType === ProjectTypes.ROOT)
      return;
    sbp.assignedTask.project.subProject = await this._subProjectRepository.findAncestor(sbp.assignedTask.project.subProject.id);
    this.populateAncestors(sbp.assignedTask.project.subProject);
  }
}
