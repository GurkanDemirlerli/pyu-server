// import { IssueEntity } from '@entities/issue.entity';
// import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm";
// import { UserEntity } from '@entities/user.entity';
// import { CompanyEntity } from "@entities/company.entity";
// import { ProjectManagerEntity } from '@entities/project-manager.entity';
// import { ProjectMembershipEntity } from '@entities/project-membership.entity';
// import { ProjectEntity } from './project.entity';
// import { QuestionEntity } from './question.entity';
// @Entity("root_project")
// export class RootProjectEntity {
//
//   @PrimaryGeneratedColumn()
//   id: number;
//
//   @Column({
//     length: 100
//   })
//   title: string;
//
//   @Column("int")
//   baseProjectId: number;
//   @OneToOne(type => ProjectEntity, bs => bs.rootProject)
//   @JoinColumn({ name: "baseProjectId" })
//   baseProject: ProjectEntity;
//
//   @Column({
//     length: 100
//   })
//   description: string;
//
//   @OneToMany(type => IssueEntity, issue => issue.project)
//   issues: IssueEntity[];
//
//   @Column("int")
//   companyId: number;
//   @ManyToOne(type => CompanyEntity, company => company.rootProjects)
//   @JoinColumn({ name: "companyId" })
//   company: CompanyEntity;
//
//   @Column("int")
//   userId: number;
//   @ManyToOne(type => UserEntity, user => user.createdRootProjects)
//   @JoinColumn({ name: "userId" })
//   creator: UserEntity;
//
//   @Column()
//   createdAt: Date;
//
//   @Column()
//   lastUpdated: Date;
//
//   @OneToMany(type => ProjectMembershipEntity, pms => pms.rootProject)
//   members: ProjectMembershipEntity[];
//
//   @OneToMany(type => ProjectManagerEntity, prm => prm.project)
//   managers: ProjectManagerEntity[];
//
//   @OneToMany(type => QuestionEntity, question => question.rootProject)
//   questions: QuestionEntity[];
//
//
// }
