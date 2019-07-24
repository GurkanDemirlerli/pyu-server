import { WorkspaceUserEntity } from './workspace-user.entity';
import { GroupEntity } from './group.entity';
import { WorkspaceMemberEntity } from './workspace-member';

import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";

@Entity("workspace_group_user")
export class WorkspaceGroupUserEntity {

    @PrimaryColumn("int")
    workspaceUserId: number;

    @ManyToOne(type => WorkspaceUserEntity, wsm => wsm.usersToGroups)
    @JoinColumn({ name: "workspaceUserId" })
    workspaceUser: WorkspaceUserEntity;

    @PrimaryColumn("int")
    groupId: number;

    @ManyToOne(type => GroupEntity, gr => gr.groupsToUsers)
    @JoinColumn({ name: "groupId" })
    group: GroupEntity;

    @Column()
    value: string;
}
