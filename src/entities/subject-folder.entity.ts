import { FolderSharingEntity } from './folder-sharing.entity';
import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { SubjectItemEntity } from "./subject-item.entity";
import { SubjectDomainEntity } from "./subject-domain.entity";
import { SubjectProjectEntity } from "./subject-project.entity";
import { WorkflowEntity } from './workflow.entity';
import { WorkflowStatusEntity } from './workflow-status.entity';

@Entity("subject_folder")
export class SubjectFolderEntity {

    @Column("int", { primary: true })
    subjectId: number;

    @OneToOne(type => SubjectItemEntity, sbe => sbe.folder)
    @JoinColumn({ name: "subjectId" })
    subject: SubjectItemEntity;

    @Column("int")
    workflowId: number;
    @ManyToOne(type => WorkflowEntity, wf => wf.folders)
    @JoinColumn({ name: "workflowId" })
    workflow: WorkflowEntity;

    @Column("int")
    defaultWorkflowStatusId: number;
    @ManyToOne(type => WorkflowStatusEntity, wfs => wfs.defaultFolders)
    @JoinColumn({ name: "defaultWorkflowStatusId" })
    defaultWorkflowStatus: WorkflowStatusEntity;

    @OneToOne(type => SubjectProjectEntity, spr => spr.folder)
    project: SubjectProjectEntity;

    @OneToOne(type => SubjectDomainEntity, sd => sd.folder)
    domain: SubjectDomainEntity;

    @OneToMany(type => FolderSharingEntity, fs => fs.folder)
    folderSharings: FolderSharingEntity[];

}
