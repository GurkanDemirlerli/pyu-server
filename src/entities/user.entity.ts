import { CommentEntity } from './comment.entity';
import { QuestionEntity } from './question.entity';
import { CompanyEntity } from './company.entity';
import { TaskEntity } from './task.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany } from "typeorm";
import { ProjectEntity } from './project.entity';
import { AnswerEntity } from './answer.entity';

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

    @ManyToMany(type => ProjectEntity, project => project.users)
    projects: ProjectEntity[];

    @ManyToMany(type => CompanyEntity, company => company.users)
    companies: CompanyEntity[];
}