import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { TaskLabelEntity } from './task-label.entity';
@Entity("label")
export class LabelEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 15
    })
    name: string;

    @OneToMany(type => TaskLabelEntity, tsklbl => tsklbl.label)
    relatedTasks: TaskLabelEntity[];

    @Column()
    createdAt: Date;
}
