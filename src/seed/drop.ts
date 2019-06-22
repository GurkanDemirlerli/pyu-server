import { createConnection } from "typeorm";
import * as appConfig from "./../common/app-config";

console.log("Veritabanı sil Çalıştırıldı.");

const config = Object.assign(appConfig.dbOptions, { synchronize: undefined });

 createConnection(config).then(async connection => {
    connection.dropDatabase().then(() => {
        console.log("Veritabanı silindi.");
        connection.close().then(()=>{
          process.exit(0);
        });
    })
}).catch((error) => {
    console.log("TypeORM connection error: ", error)
    process.exit(1);
});
