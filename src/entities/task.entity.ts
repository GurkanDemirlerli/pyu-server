import { IssueEntity } from '@entities/issue.entity';
import { ProjectEntity } from '@entities/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToOne } from "typeorm";
import { CommentEntity } from '@entities/comment.entity';
import { UserEntity } from '@entities/user.entity';
import { StatusEntity } from '@entities/status.entity';
import { TaskAssignmentEntity } from '@entities/task-assignment.entity';
import { TaskLabelEntity } from './task-label.entity';
import { SubProjectEntity } from './sub-project.entity';
@Entity("task")
export class TaskEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  title: string;

  @Column({
    length: 100
  })
  description: string;

  @Column("int")
  type: number;

  @Column("int")
  code: number;

  @Column("int")
  priority: number;

  @Column("int", { nullable: true })
  subProjectId: number;
  @OneToOne(type => SubProjectEntity, project => project.assignedTask)
  @JoinColumn({ name: "subProjectId" })
  subProject: SubProjectEntity;

  @OneToMany(type => CommentEntity, comment => comment.task)
  comments: CommentEntity[];

  @Column("int")
  creatorId: number;
  @ManyToOne(type => UserEntity, user => user.createdTasks)
  @JoinColumn({ name: "creatorId" })
  creator: UserEntity;

  @Column("int")
  projectId: number;
  @ManyToOne(type => ProjectEntity, project => project.tasks)
  @JoinColumn({ name: "projectId" })
  project: ProjectEntity;

  @Column("int")
  statusId: number;
  @ManyToOne(type => StatusEntity, status => status.tasks)
  @JoinColumn({ name: "statusId" })
  status: StatusEntity;

  @Column("int", { nullable: true })
  fromIssueId: number;
  @ManyToOne(type => IssueEntity, issue => issue.tasks)
  @JoinColumn({ name: "fromIssueId" })
  fromIssue: IssueEntity;

  @OneToMany(type => TaskAssignmentEntity, tsa => tsa.task)
  assignees: TaskAssignmentEntity[];

  @OneToMany(type => TaskLabelEntity, tsklbl => tsklbl.task)
  relatedLabels: TaskLabelEntity[];

  @Column()
  createdAt: Date;

  @Column()
  lastUpdated: Date;
}
