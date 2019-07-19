import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from './user.entity';
import { TaskEntity } from './task.entity';
import { ProjectEntity } from "./project.entity";
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
    projectId: number;
    @ManyToOne(type => ProjectEntity, prj => prj.issues)
    @JoinColumn({ name: "projectId" })
    project: ProjectEntity;

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;
}
