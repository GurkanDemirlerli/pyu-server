import { SubjectTaskEntity } from './subject-task.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToOne,
    Tree,
    TreeChildren,
    TreeParent,
    OneToMany,
} from "typeorm";
import { WorkspaceEntity } from "./workspace.entity";
import { SubjectFolderEntity } from './subject-folder.entity';
import { SubjectCustomFieldEntity } from './subject-custom-field.entity';

@Entity("subject_item")
export class SubjectItemEntity {

    @PrimaryGeneratedColumn()
    subjectId: number;

    @OneToOne(type => SubjectTaskEntity, tsk => tsk.subject)
    task: SubjectTaskEntity;

    @OneToOne(type => SubjectFolderEntity, fld => fld.subject)
    folder: SubjectFolderEntity;

    @Column("int")
    workspaceId: number;
    @ManyToOne(type => WorkspaceEntity, ws => ws.subjects)
    @JoinColumn({ name: "workspaceId" })
    workspace: WorkspaceEntity;

    // @Column("int")
    // creatorId: number;
    // @ManyToOne(type => WorkspaceMemberEntity, wsm => wsm.createdSubjects)
    // @JoinColumn({ name: "creatorId" })
    // creator: WorkspaceMemberEntity;

    @Column("int", { nullable: true })
    parentId: number;
    @ManyToOne(type => SubjectItemEntity, sbj => sbj.children)
    @JoinColumn({ name: "parentId" })
    parent: SubjectItemEntity;

    @OneToMany(type => SubjectItemEntity, sbj => sbj.parent)
    children: SubjectItemEntity[];

    @Column("int")
    subjectType: number;

    @Column({ length: 60 })
    name: string;

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;

    @Column("int")
    subjectDeleteState: number;

    @OneToMany(type => SubjectCustomFieldEntity, scf => scf.customField)
    subjectCustomFields: SubjectCustomFieldEntity[];

}
