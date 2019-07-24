import { GroupEntity } from './group.entity';
import { WorkspaceUserEntity } from './workspace-user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToOne,
    OneToMany,
} from "typeorm";
import { WorkspaceEntity } from "./workspace.entity";
import { FolderSharingEntity } from './folder-sharing.entity';

@Entity("workspace_member")
export class WorkspaceMemberEntity {

    @PrimaryGeneratedColumn()
    workspaceMemberId: number;

    @Column("int")
    workspaceId: number;
    @ManyToOne(type => WorkspaceEntity, ws => ws.members)
    @JoinColumn({ name: "workspaceId" })
    workspace: WorkspaceEntity;

    @Column("int")
    memberType: number;

    @OneToOne(type => WorkspaceUserEntity, us => us.workspaceMember)
    user: WorkspaceUserEntity;

    @OneToOne(type => GroupEntity, gr => gr.workspaceMember)
    group: GroupEntity;

    @OneToMany(type => FolderSharingEntity, fs => fs.workspaceMember)
    folderSharings: FolderSharingEntity[];
}
