import { SubjectFolderEntity } from './subject-folder.entity';
import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
    ManyToOne,
} from "typeorm";

@Entity("subject_project")
export class SubjectProjectEntity {

    @Column("int", { primary: true })
    subjectId: number;

    @OneToOne(type => SubjectFolderEntity, sbe => sbe.project)
    @JoinColumn({ name: "subjectId" })
    folder: SubjectFolderEntity;

    @Column("int")
    statusId: number;
    @ManyToOne(type => WorkflowStatusEntity, wfs => wfs.projects)
    @JoinColumn({ name: "statusId" })
    status: WorkflowStatusEntity;

    @Column({ nullable: true })
    startDate: Date;

    @Column({ nullable: true })
    dueDate: Date;

}
