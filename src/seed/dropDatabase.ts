import { createConnection } from "typeorm";
import * as appConfig from "./../common/app-config";

console.log("Veritabanı sil Çalıştırıldı.");

createConnection(appConfig.dbOptions).then(async connection => {
    connection.dropDatabase().then(() => {
        console.log("Veritabanı silindi.");
        process.exit(0);
    })
}).catch((error) => {
    console.log("TypeORM connection error: ", error)
    process.exit(1);
});

