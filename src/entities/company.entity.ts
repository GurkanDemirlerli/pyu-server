import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { UserEntity } from '@entities/user.entity';
import { ProjectEntity } from "@entities/project.entity";
import { CompanyMembershipEntity } from "@entities/company-membership.entity";
import { MembershipRequestEntity } from "@entities/membership-request.entity";
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

    @OneToMany(type => CompanyMembershipEntity, cmem => cmem.company)
    members: CompanyMembershipEntity[];

    @OneToMany(type => MembershipRequestEntity, msr => msr.company)
    requestsSent: MembershipRequestEntity[];

    @Column("int")
    ownerId: number;
    @ManyToOne(type => UserEntity, user => user.ownedCompanies)
    @JoinColumn({ name: "ownerId" })
    owner: UserEntity;

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;
}
