import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { UserEntity } from './user.entity';
import { ProjectEntity } from "./project.entity";
@Entity("company")
export class CompanyEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column({
        length: 100
    })
    description: string;

    @OneToMany(type => ProjectEntity, project => project.company)
    projects: ProjectEntity[];

    @Column("int")
    ownerId: number;
    @ManyToOne(type => UserEntity, user => user.ownedCompanies)
    @JoinColumn({ name: "ownerId" })
    owner: UserEntity;

    @ManyToMany(type => UserEntity, user => user.companies)
    @JoinTable()
    users: UserEntity[];

    @ManyToMany(type => UserEntity, user => user.requestedCompanies)
    @JoinTable()
    requestedUsers: UserEntity[];

}
