import { WorkspaceEntity } from './workspace.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from "typeorm";

@Entity("account")
export class AccountEntity {

    @PrimaryGeneratedColumn()
    accountId: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    deletedAt: Date;

    @OneToMany(type => WorkspaceEntity, ws => ws.owner)
    workspaces: WorkspaceEntity[];

}
