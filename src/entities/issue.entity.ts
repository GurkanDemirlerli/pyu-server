import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from '@entities/user.entity';
import { TaskEntity } from '@entities/task.entity';
import { RootProjectEntity } from './root-project.entity';
@Entity("issue")
export class IssueEntity {

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

    @OneToMany(type => TaskEntity, task => task.fromIssue)
    tasks: TaskEntity[];

    @Column("int")
    creatorId: number;
    @ManyToOne(type => UserEntity, user => user.createdIssues)
    @JoinColumn({ name: "creatorId" })
    creator: UserEntity;

    @Column("int")
    rootProjectId: number;
    @ManyToOne(type => RootProjectEntity, rt => rt.issues)
    @JoinColumn({ name: "rootProjectId" })
    project: RootProjectEntity;

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;
}
