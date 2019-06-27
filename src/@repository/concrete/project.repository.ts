import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { IProjectRepository } from "../abstract/i-project.repository";
import { ProjectEntity } from "./../../entities/project.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
import { ProjectFilter } from '@models/filters';
@injectable()
export class ProjectRepository extends RepositoryBase<ProjectEntity> implements IProjectRepository {
  constructor() {
    super(
      ProjectEntity
    );
  }

  listByFiltersByCompany(filters: ProjectFilter, companyId: number): Promise<ProjectEntity[]> {
    let query = getManager().createQueryBuilder(ProjectEntity, "project")
      .leftJoinAndSelect("project.managers", "manager")
      .where("project.companyId =:companyId", { companyId: companyId })
    query = query.orderBy("project.id", "DESC");
    if (filters.take !== undefined) {
      query = query.take(filters.take);
      if (filters.skip !== undefined) query = query.skip(filters.skip);
    }
    return query.orderBy("project.id", "DESC").getMany();
  }

  findForDetails(id: number): Promise<ProjectEntity> {
    let query = getManager().createQueryBuilder(ProjectEntity, "project").select(["project.id", "project.title", "project.description"])
      .where("project.id =:id", { id: id })
      .leftJoin("project.company", "company").addSelect(["company.id", "company.name", "company.description"])
      .leftJoin("company.owner", "companyOwner").addSelect(["companyOwner.id", "companyOwner.name", "companyOwner.surname", "companyOwner.username"])
      .leftJoin("project.creator", "creator").addSelect(["creator.id", "creator.name", "creator.surname", "creator.username"])
      .leftJoinAndSelect("project.statuses", "status")
    return query.getOne();
  }

//   getRootProjects(companyId: number) {
//     let query = getManager().getTreeRepository(ProjectEntity).findDescendantsTree(
//
//   });
// }
}


//Companynin tüm root projectlerini getir yaprakları olmadan.
//Alt seviyelerde bir project görüntülendiğinde en büyük atasının tüm yapraklarını görüntüle
//
