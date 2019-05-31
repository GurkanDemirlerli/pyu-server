import { IssueEntity } from './issue.entity';
import { CommentEntity } from './comment.entity';
import { QuestionEntity } from './question.entity';
import { CompanyEntity } from './company.entity';
import { TaskEntity } from './task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ProjectEntity } from './project.entity';
import { AnswerEntity } from './answer.entity';
import { StatusEntity } from './status.entity';
import { ProjectManagerEntity } from './project-manager.entity';
import { MembershipRequestEntity } from './membership-request.entity';
import { ProjectMembershipEntity } from './project-membership.entity';
import { TaskAssignmentEntity } from './task-assignment.entity';
import { CompanyMembershipEntity } from './company-membership.entity';

@Entity("user")
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column({
        length: 100
    })
    surname: string;

    @Column({
        length: 100
    })
    username: string;

    @Column({
        length: 100
    })
    email: string;

    @Column({
        length: 100
    })
    password: string;

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;

    @OneToMany(type => TaskEntity, task => task.creator)
    createdTasks: TaskEntity[];

    @OneToMany(type => ProjectEntity, project => project.creator)
    createdProjects: ProjectEntity[];

    @OneToMany(type => CompanyEntity, company => company.owner)
    ownedCompanies: CompanyEntity[];

    @OneToMany(type => QuestionEntity, question => question.creator)
    questions: QuestionEntity[];

    @OneToMany(type => AnswerEntity, answer => answer.creator)
    answers: AnswerEntity[];

    @OneToMany(type => CommentEntity, comment => comment.creator)
    comments: AnswerEntity[];

    @OneToMany(type => IssueEntity, issue => issue.creator)
    createdIssues: IssueEntity[];

    @OneToMany(type => StatusEntity, status => status.creator)
    createdStatuses: StatusEntity[];

    @OneToMany(type => CompanyMembershipEntity, cmem => cmem.user)
    memberships: CompanyMembershipEntity[];

    @OneToMany(type => MembershipRequestEntity, msr => msr.user)
    companyRequests: MembershipRequestEntity[];

    @OneToMany(type => ProjectMembershipEntity, pms => pms.user)
    projects: ProjectMembershipEntity[];

    @OneToMany(type => ProjectManagerEntity, pmn => pmn.user)
    managedProjects: ProjectManagerEntity[];

    @OneToMany(type => TaskAssignmentEntity, tsa => tsa.user)
    taskAssignments: TaskAssignmentEntity[];

}
