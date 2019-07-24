import { SubjectItemEntity } from './subject-item.entity';

import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
} from "typeorm";

@Entity("subject_description")
export class SubjectDescriptionEntity {

    @Column("int", { primary: true })
    subjectId: number;

    @OneToOne(type => SubjectItemEntity, sbi => sbi.description)
    @JoinColumn({ name: "subjectId" })
    subject: SubjectItemEntity;

    @Column()
    text: string;
}
