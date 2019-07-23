import { TaskEntity } from './task.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from './user.entity';

@Entity("comment")
export class CommentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 400
    })
    content: string;

    @Column("int")
    taskId: number;
    @ManyToOne(type => TaskEntity, task => task.comments)
    @JoinColumn({ name: "taskId" })
    task: TaskEntity;

    @Column("int")
    userId: number;
    @ManyToOne(type => UserEntity, user => user.comments)
    @JoinColumn({ name: "userId" })
    creator: UserEntity;

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;
}
