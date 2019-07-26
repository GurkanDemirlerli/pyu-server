import { SubjectFolderEntity } from './subject-folder.entity';
import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
} from "typeorm";

@Entity("subject_domain")
export class SubjectDomainEntity {

    @Column("int", { primary: true })
    subjectId: number;

    @OneToOne(type => SubjectFolderEntity, sbe => sbe.domain)
    @JoinColumn({ name: "subjectId" })
    folder: SubjectFolderEntity;

    @Column()
    color: string;

    @Column()
    isPublic: boolean;

    @Column()
    icon: string;


}
