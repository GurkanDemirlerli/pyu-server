import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from '@entities/user.entity';
import { CompanyEntity } from "@entities/company.entity";

@Entity("membership_request")
export class MembershipRequestEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    userId: number;
    @ManyToOne(type => UserEntity, user => user.companyRequests)
    @JoinColumn({ name: "userId" })
    user: UserEntity;

    @Column("int")
    companyId: number;
    @ManyToOne(type => CompanyEntity, company => company.requestsSent)
    @JoinColumn({ name: "companyId" })
    company: CompanyEntity;

    @Column()
    createdAt: Date;

}
