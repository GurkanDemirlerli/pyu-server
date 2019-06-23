import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from '@entities/user.entity';
import { RootProjectEntity } from "./root-project.entity";

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
    rootProjectId: number;
    @ManyToOne(type => RootProjectEntity, prj => prj.managers)
    @JoinColumn({ name: "rootProjectId" })
    project: RootProjectEntity;

    @Column()
    createdAt: Date;

}
