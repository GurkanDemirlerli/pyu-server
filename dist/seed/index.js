"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seed_1 = require("./seed");
require("reflect-metadata");
const container_1 = require("./container");
console.log("veritabanı seedle çalıştırıldı.");
container_1.DBIOC.configureContainer();
const seedDatabase = container_1.DBIOC.container.get(seed_1.SeedDatabase);
seedDatabase.initialize();
