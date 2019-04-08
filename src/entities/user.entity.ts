import { TaskEntity } from './task.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity("user")
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column({
        length: 100
    })
    surname: string;

    @Column({
        length: 100
    })
    username: string;

    @Column({
        length: 100
    })
    email: string;

    @Column({
        length: 100
    })
    password: string;
}