import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    OneToMany,
} from "typeorm";
import { SubjectCustomFieldEntity } from "./subject-custom-field.entity";

@Entity("custom_field")
export class CustomFieldEntity {

    @PrimaryGeneratedColumn()
    customFieldId: number;

    @Column()
    name: string;

    @Column()
    customFieldType: number;

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;

    @OneToMany(type => SubjectCustomFieldEntity, scf => scf.customField)
    subjectCustomFields: SubjectCustomFieldEntity[];

}
