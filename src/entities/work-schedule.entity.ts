import { WorkspaceUserEntity } from './workspace-user.entity';
import { WorkspaceEntity } from './workspace.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
    OneToOne,
} from "typeorm";
import { WorkScheduleWeekEntity } from './work-schedule-week.entity';
import { WorkScheduleExclusionEntity } from './work-schedule-exclusion.entity';

@Entity("work_schedule")
export class WorkScheduleEntity {

    @PrimaryGeneratedColumn()
    workScheduleId: number;

    @Column("int")
    workspaceId: number;
    @ManyToOne(type => WorkspaceEntity, ws => ws.schedules)
    @JoinColumn({ name: "workspaceId" })
    workspace: WorkspaceEntity;

    @Column()
    name: string;

    @OneToMany(type => WorkspaceUserEntity, wsu => wsu.workSchedule)
    users: WorkspaceUserEntity[];
    
    @OneToMany(type => WorkScheduleExclusionEntity, wse => wse.workSchedule)
    exclusions: WorkScheduleExclusionEntity[];

    @OneToOne(type => WorkScheduleWeekEntity, wsw => wsw.workSchedule)
    week: WorkScheduleWeekEntity;

}
