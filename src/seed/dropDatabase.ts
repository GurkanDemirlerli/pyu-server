import { createConnection } from "typeorm";
import * as appConfig from "./../common/app-config";



createConnection(appConfig.dbOptions).then(async connection => {
    connection.dropDatabase().then(()=>{
        console.log("Veritabanı silindi.");

    })
}).catch(error => console.log("TypeORM connection error: ", error));

