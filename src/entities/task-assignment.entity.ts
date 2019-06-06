import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from '@entities/user.entity';
import { TaskEntity } from "@entities/task.entity";

@Entity("task_assignment")
export class TaskAssignmentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    userId: number;
    @ManyToOne(type => UserEntity, user => user.taskAssignments)
    @JoinColumn({ name: "userId" })
    user: UserEntity;

    @Column("int")
    taskId: number;
    @ManyToOne(type => TaskEntity, tsk => tsk.assignees)
    @JoinColumn({ name: "taskId" })
    task: TaskEntity;

    @Column()
    createdAt: Date;

}
