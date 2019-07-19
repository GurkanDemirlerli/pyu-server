import { Entity, PrimaryGeneratedColumn, OneToMany, Column, OneToOne, ManyToOne, JoinColumn, Tree, TreeChildren, TreeParent, } from "typeorm";
import { TaskEntity } from "./task.entity";
import { StatusEntity } from "./status.entity";
import { IssueEntity } from "./issue.entity";
import { CompanyEntity } from "./company.entity";
import { UserEntity } from "./user.entity";
import { ProjectMembershipEntity } from "./project-membership.entity";
import { ProjectManagerEntity } from "./project-manager.entity";
import { QuestionEntity } from "./question.entity";

@Entity("project")
export class ProjectEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 300 })
  title: string;

  @Column({ length: 300 })
  description: string;

  @Column({ length: 3 })
  prefix: string;

  @Column()
  createdAt: Date;

  @Column()
  lastUpdated: Date;

  @Column("int")
  companyId: number;
  @ManyToOne(type => CompanyEntity, company => company.projects)
  @JoinColumn({ name: "companyId" })
  company: CompanyEntity;

  @Column("int")
  creatorId: number;
  @ManyToOne(type => UserEntity, user => user.createdProjects)
  @JoinColumn({ name: "creatorId" })
  creator: UserEntity;

  @OneToMany(type => ProjectEntity, prj => prj.parent)
  children: ProjectEntity[];

  @Column("int", { nullable: true })
  statusId: number;
  @ManyToOne(type => StatusEntity, status => status.projects)
  @JoinColumn({ name: "statusId" })
  status: StatusEntity;

  @Column("int", { nullable: true })
  parentId: number;
  @ManyToOne(type => ProjectEntity, prj => prj.children)
  @JoinColumn({ name: "parentId" })
  parent: ProjectEntity;

  @OneToMany(type => IssueEntity, issue => issue.project)
  issues: IssueEntity[];

  @OneToMany(type => TaskEntity, task => task.project)
  tasks: TaskEntity[];

  @OneToMany(type => StatusEntity, status => status.project)
  statuses: StatusEntity[];

  @OneToMany(type => ProjectMembershipEntity, pms => pms.project)
  members: ProjectMembershipEntity[];

  @OneToMany(type => ProjectManagerEntity, prm => prm.project)
  managers: ProjectManagerEntity[];

  @OneToMany(type => QuestionEntity, question => question.project)
  questions: QuestionEntity[];
}
