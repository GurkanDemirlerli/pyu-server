import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { CommentEntity } from './comment.entity';
import { UserEntity } from './user.entity';
@Entity("task")
export class TaskEntity {

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

    @OneToMany(type => CommentEntity, comment => comment.task)
    comments: CommentEntity[];

    @Column("int")
    creatorId: number;

    @ManyToOne(type => UserEntity, user => user.createdTasks)

    @JoinColumn({ name: "creatorId" })
    creator: UserEntity;
}