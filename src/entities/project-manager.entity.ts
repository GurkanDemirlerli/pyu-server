import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from './user.entity';
import { ProjectEntity } from "./project.entity";

@Entity("project_manager")
export class ProjectManagerEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    userId: number;
    @ManyToOne(type => UserEntity, user => user.managedProjects)
    @JoinColumn({ name: "userId" })
    user: UserEntity;

    @Column("int")
    projectId: number;
    @ManyToOne(type => ProjectEntity, prj => prj.managers)
    @JoinColumn({ name: "projectId" })
    project: ProjectEntity;

    @Column("datetime")
    createdAt: Date;

}
