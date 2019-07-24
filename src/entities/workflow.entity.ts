import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { WorkspaceEntity } from "./workspace.entity";
import { SubjectFolderEntity } from "./subject-folder.entity";
import { WorkflowStatusEntity } from "./workflow-status.entity";

@Entity("workflow")
export class WorkflowEntity {

    @PrimaryGeneratedColumn()
    workflowId: number;

    @Column("int", { nullable: true })
    workspaceId: number;
    @ManyToOne(type => WorkspaceEntity, wsp => wsp.workflows)
    @JoinColumn({ name: "workspaceId" })
    workspace: WorkspaceEntity;

    @Column({ length: 60 })
    name: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    deletedAt: Date;

    @Column()
    isBuiltin: boolean;

    @OneToMany(type => SubjectFolderEntity, sf => sf.workflow)
    folders: SubjectFolderEntity[];

    @OneToMany(type => WorkflowStatusEntity, fs => fs.workflow)
    statuses: WorkflowStatusEntity[];
}
