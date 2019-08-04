"use strict";
const config = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "pyudb",
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
};
module.exports = config;
//# sourceMappingURL=app-config.js.map