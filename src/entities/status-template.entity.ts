import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from '@entities/user.entity';
import { CompanyEntity } from './company.entity';
import { AbstractStatusEntity } from './abstract-status.entity';
@Entity("status_template")
export class StatusTemplateEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  name: string;

  @OneToMany(type => AbstractStatusEntity, abst => abst.template)
  statuses:AbstractStatusEntity[];

  @Column("int")
  creatorId: number;
  @ManyToOne(type => UserEntity, user => user.createdstatusTemplates)
  @JoinColumn({ name: "creatorId" })
  creator: UserEntity;

  @Column("int")
  companyId: number;
  @ManyToOne(type => CompanyEntity, cmp => cmp.statusTemplates)
  @JoinColumn({ name: "companyId" })
  company: CompanyEntity;

  @Column()
  createdAt: Date;

  @Column()
  lastUpdated: Date;
}
