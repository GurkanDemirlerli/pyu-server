import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from '@entities/user.entity';
import { QuestionEntity } from '@entities/question.entity';
@Entity("answer")
export class AnswerEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    content: string;

    @Column("int")
    creatorId: number;
    @ManyToOne(type => UserEntity, user => user.answers)
    @JoinColumn({ name: "creatorId" })
    creator: UserEntity;

    @Column("int")
    questionId: number;
    @ManyToOne(type => QuestionEntity, question => question.answers)
    @JoinColumn({ name: "questionId" })
    question: QuestionEntity;

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;
}
