import { ProjectEntity } from './project.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from './user.entity';
import { AnswerEntity } from './answer.entity';
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
    @ManyToOne(type => ProjectEntity, project => project.tasks)
    @JoinColumn({ name: "projectId" })
    project: ProjectEntity;

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;
}
