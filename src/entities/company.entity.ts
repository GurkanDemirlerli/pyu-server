import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { UserEntity } from './user.entity';
import { ProjectEntity } from "./project.entity";
import { CompanyMemberEntity } from "./company-member.entity";
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

    @OneToMany(type => CompanyMemberEntity, cmem => cmem.company)
    members: CompanyMemberEntity[];

    @Column("int")
    ownerId: number;
    @ManyToOne(type => UserEntity, user => user.ownedCompanies)
    @JoinColumn({ name: "ownerId" })
    owner: UserEntity;

    @ManyToMany(type => UserEntity, user => user.requestedCompanies)
    @JoinTable()
    requestedUsers: UserEntity[];

}
