import { SubjectCommentEntity } from './subject-comment.entity';
import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
} from "typeorm";

@Entity("subject_comment_content")
export class SubjectCommentContentEntity {

    @Column("int", { primary: true })
    subjectCommentId: number;

    @OneToOne(type => SubjectCommentEntity, scm => scm.content)
    @JoinColumn({ name: "subjectCommentId" })
    subjectComment: SubjectCommentEntity;

    @Column()
    text: string;
}
