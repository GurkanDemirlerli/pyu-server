import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from './user.entity';
import { ProjectEntity } from "./project.entity";

@Entity("project_membership")
export class ProjectMembershipEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    userId: number;
    @ManyToOne(type => UserEntity, user => user.projectMemberships)
    @JoinColumn({ name: "userId" })
    user: UserEntity;

    @Column("int")
    projectId: number;
    @ManyToOne(type => ProjectEntity, rt => rt.managers)
    @JoinColumn({ name: "projectId" })
    project: ProjectEntity;

    @Column()
    createdAt: Date;

}
