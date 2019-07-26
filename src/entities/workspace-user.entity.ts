import { SubjectItemEntity } from './subject-item.entity';
import { SubjectCommentEntity } from './subject-comment.entity';
import { TaskDependencyEntity } from './task-dependency.entity';
import {
    Entity,
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn,
    OneToOne,
} from "typeorm";
import { AccountEntity } from "./account.entity";
import { WorkspaceMemberEntity } from "./workspace-member.entity";
import { WorkspaceGroupUserEntity } from "./workspace-group-user.entity";
import { WorkScheduleEntity } from './work-schedule.entity';
import { TaskAssignmentEntity } from './task-assignment.entity';

@Entity("workspace_user")
export class WorkspaceUserEntity {

    @Column("int", { primary: true })
    workspaceMemberId: number;

    @OneToOne(type => WorkspaceMemberEntity, wsm => wsm.user)
    @JoinColumn({ name: "workspaceMemberId" })
    workspaceMember: WorkspaceMemberEntity;


    @Column("int")
    accountId: number;
    @ManyToOne(type => AccountEntity, ac => ac.workspaces)
    @JoinColumn({ name: "accountId" })
    account: AccountEntity;

    @Column("int")
    workScheduleId: number;
    @ManyToOne(type => WorkScheduleEntity, wsc => wsc.users)
    @JoinColumn({ name: "workScheduleId" })
    workSchedule: WorkScheduleEntity;

    @Column("int")
    userType: number;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    removedAt: Date;

    @OneToMany(type => WorkspaceGroupUserEntity, wsgu => wsgu.workspaceUser)
    usersToGroups: WorkspaceGroupUserEntity[];

    @OneToMany(type => TaskDependencyEntity, wsu => wsu.creator)
    createdTaskDependencies: TaskDependencyEntity[];

    @OneToMany(type => SubjectCommentEntity, scm => scm.creator)
    comments: SubjectCommentEntity[];

    @OneToMany(type => SubjectItemEntity, sbi => sbi.creator)
    createdSubjects: SubjectItemEntity[];

    @OneToMany(type => TaskAssignmentEntity, tasg => tasg.workspaceUser)
    taskAssignments: TaskAssignmentEntity[];
    

}
