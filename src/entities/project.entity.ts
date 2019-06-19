import { IssueEntity } from '@entities/issue.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { UserEntity } from '@entities/user.entity';
import { TaskEntity } from "@entities/task.entity";
import { CompanyEntity } from "@entities/company.entity";
import { StatusEntity } from "@entities/status.entity";
import { ProjectManagerEntity } from '@entities/project-manager.entity';
import { ProjectMembershipEntity } from '@entities/project-membership.entity';
@Entity("project")
export class ProjectEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    title: string;

    @Column({
        length: 100
    })
    description: string;

    @OneToMany(type => TaskEntity, task => task.project)
    tasks: TaskEntity[];

    @OneToMany(type => StatusEntity, status => status.project)
    statuses: StatusEntity[];

    @OneToMany(type => IssueEntity, issue => issue.project)
    issues: IssueEntity[];

    @Column("int")
    companyId: number;
    @ManyToOne(type => CompanyEntity, company => company.projects)
    @JoinColumn({ name: "companyId" })
    company: CompanyEntity;

    @Column("int")
    userId: number;
    @ManyToOne(type => UserEntity, user => user.createdProjects)
    @JoinColumn({ name: "userId" })
    creator: UserEntity;

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;

    @OneToMany(type => ProjectMembershipEntity, pms => pms.project)
    members: ProjectMembershipEntity[];

    @OneToMany(type => ProjectManagerEntity, prm => prm.project)
    managers: ProjectManagerEntity[];
}
