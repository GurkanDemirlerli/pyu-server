import { Entity, PrimaryGeneratedColumn, OneToOne, Column, JoinColumn } from "typeorm";
import { TaskEntity } from "@entities/task.entity";
import { ProjectEntity } from "./project.entity";

@Entity("sub_project")
export class SubProjectEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  assignedTaskId: number;
  @OneToOne(type => TaskEntity, task => task.subProject)
  @JoinColumn({ name: "assignedTaskId" })
  assignedTask: TaskEntity;

  @Column("int")
  baseProjectId: number;
  @OneToOne(type => ProjectEntity, bs => bs.subProject)
  @JoinColumn({ name: "baseProjectId" })
  baseProject: ProjectEntity;

}
