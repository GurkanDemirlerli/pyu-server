import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";
import { TaskEntity } from "@entities/task.entity";
import { StatusEntity } from "@entities/status.entity";

@Entity("sub_project")
export class SubProjectEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => TaskEntity, task => task.subProject)
  assignedTask: TaskEntity;

  @OneToMany(type => TaskEntity, task => task.project)
  tasks: TaskEntity[];

  @OneToMany(type => StatusEntity, status => status.project)
  statuses: StatusEntity[];
}
