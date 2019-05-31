"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const appConfig = require("./../common/app-config");
console.log("Veritabanı sil Çalıştırıldı.");
const config = Object.assign(appConfig.dbOptions, { synchronize: undefined });
typeorm_1.createConnection(config).then((connection) => __awaiter(this, void 0, void 0, function* () {
    connection.dropDatabase().then(() => {
        console.log("Veritabanı silindi.");
        process.exit(0);
    });
})).catch((error) => {
    console.log("TypeORM connection error: ", error);
    process.exit(1);
});
