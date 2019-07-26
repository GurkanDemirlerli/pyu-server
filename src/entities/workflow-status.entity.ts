import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { WorkflowEntity } from "./workflow.entity";
import { SubjectFolderEntity } from "./subject-folder.entity";
import { SubjectTaskEntity } from "./subject-task.entity";
import { SubjectProjectEntity } from "./subject-project.entity";

@Entity("workflow_status")
export class WorkflowStatusEntity {

    @PrimaryGeneratedColumn()
    workflowStatusId: number;

    @Column("int", { nullable: true })
    workflowId: number;
    @ManyToOne(type => WorkflowEntity, wf => wf.statuses)
    @JoinColumn({ name: "workflowId" })
    workflow: WorkflowEntity;

    @Column("int")
    statusType: number;

    @Column()
    name: string;

    @Column()
    color: string;

    @Column("int")
    order: number;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    deletedAt: Date;

    @OneToMany(type => SubjectFolderEntity, sf => sf.defaultWorkflowStatus)
    defaultFolders: SubjectFolderEntity[];

    @OneToMany(type => SubjectTaskEntity, st => st.status)
    tasks: SubjectTaskEntity[];    

    @OneToMany(type => SubjectProjectEntity, st => st.status)
    projects: SubjectProjectEntity[];
    

}
