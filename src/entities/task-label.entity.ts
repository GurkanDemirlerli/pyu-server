import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { TaskEntity } from "@entities/task.entity";
import { LabelEntity } from "./label.entity";

@Entity("task_label")
export class TaskLabelEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    taskId: number;
    @ManyToOne(type => TaskEntity, task => task.relatedLabels)
    @JoinColumn({ name: "taskId" })
    task: TaskEntity;

    @Column("int")
    labelId: number;
    @ManyToOne(type => LabelEntity, lbl => lbl.relatedTasks)
    @JoinColumn({ name: "labelId" })
    label: TaskEntity;

    @Column()
    createdAt: Date;

}
