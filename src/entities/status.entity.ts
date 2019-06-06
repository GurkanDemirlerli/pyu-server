import { TaskEntity } from '@entities/task.entity';
import { ProjectEntity } from '@entities/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from '@entities/user.entity';
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

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;
}
