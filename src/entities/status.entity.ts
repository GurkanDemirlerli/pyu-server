import { TaskEntity } from './task.entity';
import { ProjectEntity } from './project.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from './user.entity';
@Entity("status")
export class StatusEntity {

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

    @Column("int")
    baseStatus: number;

    @Column("int")
    order: number;

    @OneToMany(type => TaskEntity, task => task.status)
    tasks: TaskEntity[];

    @Column("int")
    creatorId: number;
    @ManyToOne(type => UserEntity, user => user.createdStatuses)
    @JoinColumn({ name: "creatorId" })
    creator: UserEntity;

    @Column("int")
    projectId: number;
    @ManyToOne(type => ProjectEntity, project => project.statuses)
    @JoinColumn({ name: "projectId" })
    project: ProjectEntity;
}