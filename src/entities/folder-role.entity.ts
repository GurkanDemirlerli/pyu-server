import { FolderSharingEntity } from './folder-sharing.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from "typeorm";

@Entity("folder_role")
export class FolderRoleEntity {

    @PrimaryGeneratedColumn()
    folderRoleId: number;

    @Column()
    name: string;

    @Column()
    isBuiltin: boolean;
    
    @Column()
    right1: boolean;
    
    @Column()
    right2: boolean;

    @OneToMany(type => FolderSharingEntity, fs => fs.folderRole)
    folderSharings: FolderSharingEntity[];

    //...
    //...
    //...
}
