import { WorkspaceGroupUserEntity } from './workspace-group-user.entity';
import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
    OneToMany,
} from "typeorm";
import { WorkspaceMemberEntity } from "./workspace-member";

@Entity("group")
export class GroupEntity {

    @Column("int", { primary: true })
    workspaceMemberId: number;

    @OneToOne(type => WorkspaceMemberEntity, wsm => wsm.group)
    @JoinColumn({ name: "workspaceMemberId" })
    workspaceMember: WorkspaceMemberEntity;

    @Column()
    name: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    removedAt: Date;

    @OneToMany(type => WorkspaceGroupUserEntity, wsgu => wsgu.group)
    groupsToUsers: WorkspaceGroupUserEntity[];

}
