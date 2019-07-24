import { WorkScheduleEntity } from './work-schedule.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";

@Entity("work_schedule_exclusion")
export class WorkScheduleExclusionEntity {

    @PrimaryGeneratedColumn()
    workScheduleExclusionId: number;

    @Column("int")
    workScheduleId: number;
    @ManyToOne(type => WorkScheduleEntity, wse => wse.exclusions)
    @JoinColumn({ name: "workScheduleId" })
    workSchedule: WorkScheduleEntity;

    @Column()
    fromDate: Date;

    @Column()
    toDate: Date;

    @Column()
    isActiveDay: boolean;

    @Column()
    exclusionType: number;



}
