import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from './user.entity';
import { CompanyEntity } from "./company.entity";

@Entity("company_membership")
export class CompanyMembershipEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    userId: number;
    @ManyToOne(type => UserEntity, user => user.memberships)
    @JoinColumn({ name: "userId" })
    user: UserEntity;

    @Column("int")
    companyId: number;
    @ManyToOne(type => CompanyEntity, company => company.members)
    @JoinColumn({ name: "companyId" })
    company: CompanyEntity;

    @Column("datetime")
    joiningDate: Date;

    @Column("datetime", { nullable: true })
    leavingDate: Date;

    @Column("int")
    status: number;
}
