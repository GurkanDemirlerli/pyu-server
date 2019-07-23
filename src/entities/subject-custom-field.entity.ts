
import {
    Entity,
    Column,
    JoinColumn,
    OneToOne,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { SubjectItemEntity } from "./subject-item.entity";
import { CustomFieldEntity } from "./custom-field.entity";

@Entity("subject_custom_field")
export class SubjectCustomFieldEntity {

    @PrimaryColumn("int")
    subjectId: number;
    
    @ManyToOne(type => SubjectItemEntity, sbi => sbi.subjectCustomFields)
    @JoinColumn({ name: "subjectId" })
    subject: SubjectItemEntity;


    @PrimaryColumn("int")
    customFieldId: number;
    
    @ManyToOne(type => CustomFieldEntity, cf => cf.subjectCustomFields)
    @JoinColumn({ name: "customFieldId" })
    customField: CustomFieldEntity;
    
    @Column()
    value: string;
    

}
