import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { CompanyEntity } from "@entities/company.entity";
import { ProjectEntity } from './project.entity';
@Entity("project_folder")
export class ProjectFolderEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 300
  })
  title: string;

  @Column("int", { nullable: true })
  rootProjectId: number;
  @OneToOne(type => ProjectEntity, bs => bs.rootFolder)
  @JoinColumn({ name: "rootProjectId" })
  rootProject: ProjectEntity;

  @OneToMany(type => ProjectEntity, prj => prj.projectFolder)
  projects: ProjectEntity[];

  @Column("int")
  companyId: number;
  @ManyToOne(type => CompanyEntity, company => company.projects)
  @JoinColumn({ name: "companyId" })
  company: CompanyEntity;

}



//                                              ROOT FOLDER
//                                              ROOT PROJECT
//                              PROJECT                             PROJECT
//                PROJECT               PROJECT         PROJECT                 PROJECT
