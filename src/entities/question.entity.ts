import { ProjectEntity } from '@entities/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from '@entities/user.entity';
import { AnswerEntity } from '@entities/answer.entity';
import { RootProjectEntity } from './root-project.entity';
@Entity("question")
export class QuestionEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    title: string;

    @Column({
        length: 100
    })
    content: string;

    @OneToMany(type => AnswerEntity, answer => answer.question)
    answers: AnswerEntity[];

    @Column("int")
    creatorId: number;
    @ManyToOne(type => UserEntity, user => user.questions)
    @JoinColumn({ name: "creatorId" })
    creator: UserEntity;

    @Column("int")
    projectId: number;
    @ManyToOne(type => RootProjectEntity, project => project.questions)
    @JoinColumn({ name: "projectId" })
    project: RootProjectEntity;

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;
    rootProject: any;
}
