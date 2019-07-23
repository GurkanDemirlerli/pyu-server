import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
} from "typeorm";
import { SubjectItemEntity } from "./subject-item.entity";

@Entity("subject_folder")
export class SubjectFolderEntity {

    @Column("int", { primary: true })
    subjectId: number;

    @OneToOne(type => SubjectItemEntity, sbe => sbe.folder)
    @JoinColumn({ name: "subjectId" })
    subject: SubjectItemEntity;
    

}
