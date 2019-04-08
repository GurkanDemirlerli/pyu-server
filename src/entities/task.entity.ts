import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { CommentEntity } from './comment.entity';
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
}