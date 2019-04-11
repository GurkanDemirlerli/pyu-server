import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { CommentEntity } from './comment.entity';
import { UserEntity } from './user.entity';
import { TaskEntity } from "./task.entity";
import { CompanyEntity } from "./company.entity";
@Entity("project")
export class ProjectEntity {

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

    @OneToMany(type => TaskEntity, task => task.project)
    tasks: CommentEntity[];

    @Column("int")
    companyId: number;
    @ManyToOne(type => CompanyEntity, company => company.projects)
    @JoinColumn({ name: "companyId" })
    company: CompanyEntity;

    @Column("int")
    userId: number;
    @ManyToOne(type => UserEntity, user => user.createdProjects)
    @JoinColumn({ name: "userId" })
    creator: UserEntity;

    @ManyToMany(type => UserEntity, user => user.projects)
    @JoinTable()
    users: UserEntity[];

}