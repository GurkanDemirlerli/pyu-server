import { SubjectTaskEntity } from './subject-task.entity';

import {
    Entity,
    Column,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { WorkspaceUserEntity } from './workspace-user.entity';

@Entity("task_dependency")
export class TaskDependencyEntity {

    @PrimaryColumn("int")
    predecessorId: number;

    @ManyToOne(type => SubjectTaskEntity, ts => ts.predecessorDependecies)
    @JoinColumn({ name: "predecessorId" })
    predecessor: SubjectTaskEntity;

    @PrimaryColumn("int")
    successorId: number;

    @ManyToOne(type => SubjectTaskEntity, ts => ts.successorDependencies)
    @JoinColumn({ name: "successorId" })
    successor: SubjectTaskEntity;

    @Column("int")
    creatorId: number;
    @ManyToOne(type => WorkspaceUserEntity, us => us.createdTaskDependencies)
    @JoinColumn({ name: "creatorId" })
    creator: WorkspaceUserEntity;

    @Column()
    dependencyType: number;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    deletedAt: Date;




}
