import {
    CommentEntity,
    TaskEntity,
    UserEntity

} from './../entities';

import { ConnectionOptions } from "typeorm";
import 'reflect-metadata';
export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "pyudb",
    entities: [
        TaskEntity,
        CommentEntity,
        UserEntity
    ],
    synchronize: true,
}