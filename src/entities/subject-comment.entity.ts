import { WorkspaceUserEntity } from './workspace-user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToOne,
} from "typeorm";
import { SubjectItemEntity } from "./subject-item.entity";
import { SubjectCommentContentEntity } from './subject-comment-content.entity';

@Entity("subject_comment")
export class SubjectCommentEntity {

    @PrimaryGeneratedColumn()
    subjectCommentId: number;

    @Column("int")
    subjectId: number;
    @ManyToOne(type => SubjectItemEntity, sbi => sbi.comments)
    @JoinColumn({ name: "subjectId" })
    subject: SubjectItemEntity;

    @Column("int")
    creatorId: number;
    @ManyToOne(type => WorkspaceUserEntity, wsu => wsu.comments)
    @JoinColumn({ name: "creatorId" })
    creator: WorkspaceUserEntity;

    @OneToOne(type => SubjectCommentContentEntity, scc => scc.subjectComment)
    content: SubjectCommentContentEntity;

    @Column()
    createdAt: Date;

}
