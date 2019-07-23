import { IssueEntity } from './issue.entity';
import { ProjectEntity } from './project.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToOne } from "typeorm";
import { CommentEntity } from './comment.entity';
import { UserEntity } from './user.entity';
import { StatusEntity } from './status.entity';
import { TaskAssignmentEntity } from './task-assignment.entity';
import { TaskLabelEntity } from './task-label.entity';
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
  //
  // @Column("int")
  // type: number;

  @Column("int")
  code: number;

  @Column("int")
  priority: number;

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
