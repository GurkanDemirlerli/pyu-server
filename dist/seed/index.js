"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const seed_1 = require("./seed");
const ioc_1 = require("../ioc");
console.log("veritabanı seedle çalıştırıldı.");
ioc_1.IOC.configureContainer();
ioc_1.IOC.container.bind(seed_1.SeedDatabase)
    .toSelf();
const seedDatabase = ioc_1.IOC.container.get(seed_1.SeedDatabase);
seedDatabase.initialize();
//# sourceMappingURL=index.js.map