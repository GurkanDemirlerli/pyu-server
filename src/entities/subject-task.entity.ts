import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { SubjectItemEntity } from "./subject-item.entity";
import { WorkflowStatusEntity } from "./workflow-status.entity";
import { TaskDependencyEntity } from "./task-dependency.entity";
import { TaskAssignmentEntity } from "./task-assignment.entity";

@Entity("subject_task")
export class SubjectTaskEntity {

    @Column("int", { primary: true })
    subjectId: number;

    @OneToOne(type => SubjectItemEntity, sbe => sbe.task)
    @JoinColumn({ name: "subjectId" })
    subject: SubjectItemEntity;

    @Column("int")
    statusId: number;
    @ManyToOne(type => WorkflowStatusEntity, wfs => wfs.tasks)
    @JoinColumn({ name: "statusId" })
    status: WorkflowStatusEntity;

    @Column("int")
    priority: number;

    @Column({ nullable: true })
    completedAt: Date;

    @Column("int")
    duration: number;

    @Column({ nullable: true })
    startDate: Date;

    @Column({ nullable: true })
    dueDate: Date;
    
    @OneToMany(type => TaskDependencyEntity, wsu => wsu.predecessor)
    predecessorDependecies: TaskDependencyEntity[];

    @OneToMany(type => TaskDependencyEntity, wsu => wsu.successor)
    successorDependencies: TaskDependencyEntity[];

    @OneToMany(type => TaskAssignmentEntity, tasg => tasg.task)
    assignments: TaskAssignmentEntity[];

}
