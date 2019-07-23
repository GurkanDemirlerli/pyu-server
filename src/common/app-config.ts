import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "pyudb",
    entities: [ 
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrations: [
        'src/migrations/*.ts',
    ],
    cli: {
        migrationsDir: 'src/migrations',
    },
};
export = config;