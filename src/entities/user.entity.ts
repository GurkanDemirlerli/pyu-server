import { IssueEntity } from '@entities/issue.entity';
import { CommentEntity } from '@entities/comment.entity';
import { QuestionEntity } from '@entities/question.entity';
import { CompanyEntity } from '@entities/company.entity';
import { TaskEntity } from '@entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ProjectEntity } from '@entities/project.entity';
import { AnswerEntity } from '@entities/answer.entity';
import { StatusEntity } from '@entities/status.entity';
import { ProjectManagerEntity } from '@entities/project-manager.entity';
import { MembershipRequestEntity } from '@entities/membership-request.entity';
import { ProjectMembershipEntity } from '@entities/project-membership.entity';
import { TaskAssignmentEntity } from '@entities/task-assignment.entity';
import { CompanyMembershipEntity } from '@entities/company-membership.entity';
import { StatusTemplateEntity } from './status-template.entity';

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

    @OneToMany(type => StatusTemplateEntity, stTemp => stTemp.creator)
    createdstatusTemplates: StatusTemplateEntity[];

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
