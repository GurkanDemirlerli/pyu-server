import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
} from "typeorm";
import { SubjectItemEntity } from "./subject-item.entity";

@Entity("subject_task")
export class SubjectTaskEntity {

    @Column("int", { primary: true })
    subjectId: number;

    @OneToOne(type => SubjectItemEntity, sbe => sbe.task)
    @JoinColumn({ name: "subjectId" })
    subject: SubjectItemEntity;

    @Column("int")
    priority: number;

}
