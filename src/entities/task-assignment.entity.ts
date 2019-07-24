import { WorkspaceUserEntity } from './workspace-user.entity';
import { SubjectTaskEntity } from './subject-task.entity';

import {
    Entity,
    Column,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";

@Entity("task_assignment")
export class TaskAssignmentEntity {

    @PrimaryColumn("int")
    subjectTaskId: number;
    
    @ManyToOne(type => SubjectTaskEntity, sbt => sbt.assignments)
    @JoinColumn({ name: "subjectTaskId" })
    task: SubjectTaskEntity;

    @PrimaryColumn("int")
    workspaceUserId: number;
    
    @ManyToOne(type => WorkspaceUserEntity, usr => usr.taskAssignments)
    @JoinColumn({ name: "workspaceUserId" })
    workspaceUser: WorkspaceUserEntity;
    
    @Column()
    createdAt: Date;
    

}
