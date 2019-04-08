import { TaskEntity } from './task.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity("comment")
export class CommentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    title: string;

    @Column({
        length: 400
    })
    content: string;

    @Column("int")
    taskId: number;

    @ManyToOne(type => TaskEntity, task => task.comments)

    @JoinColumn({ name: "taskId" })
    task: TaskEntity;
}