import { WorkScheduleEntity } from './work-schedule.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { SubjectItemEntity } from "./subject-item.entity";
import { WorkflowEntity } from "./workflow.entity";
import { AccountEntity } from "./account.entity";
import { WorkspaceMemberEntity } from "./workspace-member.entity";

@Entity("workspace")
export class WorkspaceEntity {

    @PrimaryGeneratedColumn()
    workspaceId: number;

    @Column("int")
    ownerId: number;
    @ManyToOne(type => AccountEntity, ac => ac.workspaces)
    @JoinColumn({ name: "ownerId" })
    owner: AccountEntity;

    @Column({ length: 60 })
    name: string;

    @Column()
    createdAt: Date;

    @OneToMany(type => SubjectItemEntity, sbj => sbj.workspace)
    subjects: SubjectItemEntity[];

    @OneToMany(type => WorkflowEntity, wf => wf.workspace)
    workflows: WorkflowEntity[];

    @OneToMany(type => WorkspaceMemberEntity, mb => mb.workspace)
    members: WorkspaceMemberEntity[];

    @OneToMany(type => WorkScheduleEntity, wsh => wsh.workspace)
    schedules: WorkScheduleEntity[];

    @Column("int")
    workspaceType: number;
}
