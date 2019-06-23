import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from '@entities/user.entity';
import { ProjectEntity } from "@entities/project.entity";
import { RootProjectEntity } from "./root-project.entity";

@Entity("project_membership")
export class ProjectMembershipEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    userId: number;
    @ManyToOne(type => UserEntity, user => user.rootProjects)
    @JoinColumn({ name: "userId" })
    user: UserEntity;

    @Column("int")
    rootProjectId: number;
    @ManyToOne(type => RootProjectEntity, rt => rt.managers)
    @JoinColumn({ name: "rootProjectId" })
    rootProject: RootProjectEntity;

    @Column()
    createdAt: Date;

}
