import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
} from "typeorm";
import { WorkScheduleEntity } from './work-schedule.entity';

@Entity("work_schedule_week")
export class WorkScheduleWeekEntity {

    @Column("int", { primary: true })
    workScheduleId: number;

    @OneToOne(type => WorkScheduleEntity, wsh => wsh.week)
    @JoinColumn({ name: "workScheduleId" })
    workSchedule: WorkScheduleEntity;

    @Column()
    isMondayActive: boolean;

    @Column()
    isTuesdayActive: boolean;

    @Column()
    isWednesdayActive: boolean;

    @Column()
    isThursdayActive: boolean;

    @Column()
    isFridayActive: boolean;

    @Column()
    isSaturdayActive: boolean;

    @Column()
    isSundayActive: boolean;
}
