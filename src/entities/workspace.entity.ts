import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from "typeorm";
import { SubjectItemEntity } from "./subject-item.entity";

@Entity("workspace")
export class WorkspaceEntity {

    @PrimaryGeneratedColumn()
    workspaceId: number;

    @OneToMany(type => SubjectItemEntity, sbj => sbj.workspace)
    subjects: SubjectItemEntity[];

    @Column({ length: 60 })
    name: string;

    @Column()
    createdAt: Date;
}
