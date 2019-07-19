import 'reflect-metadata';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { StatusTemplateEntity } from "./status-template.entity";

@Entity("abstract_status")
export class AbstractStatusEntity {

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
  baseStatus: number;

  @Column("int")
  order: number;

  @Column("int")
  templateId: number;
  @ManyToOne(type => StatusTemplateEntity, stTemp => stTemp.statuses)
  @JoinColumn({ name: "templateId" })
  template: StatusTemplateEntity;

  @Column()
  createdAt: Date;
}
