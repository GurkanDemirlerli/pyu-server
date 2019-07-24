import { SubjectFolderEntity } from './subject-folder.entity';
import { WorkspaceMemberEntity } from './workspace-member';

import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { FolderRoleEntity } from './folder-role.entity';

@Entity("folder_sharing")
export class FolderSharingEntity {

    @PrimaryColumn("int")
    subjectFolderId: number;

    @ManyToOne(type => SubjectFolderEntity, sf => sf.folderSharings)
    @JoinColumn({ name: "subjectFolderId" })
    folder: SubjectFolderEntity;

    @PrimaryColumn("int")
    workspaceMemberId: number;

    @ManyToOne(type => WorkspaceMemberEntity, wm => wm.folderSharings)
    @JoinColumn({ name: "workspaceMemberId" })
    workspaceMember: WorkspaceMemberEntity;

    @PrimaryColumn("int")
    folderRoleId: number;

    @ManyToOne(type => FolderRoleEntity, fr => fr.folderSharings)
    @JoinColumn({ name: "folderRoleId" })
    folderRole: FolderRoleEntity;

    @Column()
    value: string;
}
