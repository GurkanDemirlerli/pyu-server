// import { Entity, PrimaryGeneratedColumn, OneToMany, Column, OneToOne,  } from "typeorm";
// import { TaskEntity } from "@entities/task.entity";
// import { StatusEntity } from "@entities/status.entity";
// import { SubProjectEntity } from "./sub-project.entity";
// import { RootProjectEntity } from "./root-project.entity";
//
// @Entity("project")
// export class ProjectEntity {
//
//   @PrimaryGeneratedColumn()
//   id: number;
//
//   @OneToMany(type => TaskEntity, task => task.project)
//   tasks: TaskEntity[];
//
//   @OneToMany(type => StatusEntity, status => status.project)
//   statuses: StatusEntity[];
//
//   @Column("int")
//   projectType: number; //TODO 0 root, 1 sub
//
//   @OneToOne(type => SubProjectEntity, sb => sb.baseProject)
//   subProject: SubProjectEntity;
//
//   @OneToOne(type => RootProjectEntity, rt => rt.baseProject)
//   rootProject: RootProjectEntity;
//
// }
