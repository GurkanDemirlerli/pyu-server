import { SeedDatabase } from './seed';
import 'reflect-metadata';
import { DBIOC } from './container';

console.log("veritabanı seedle çalıştırıldı.");

DBIOC.configureContainer();
const seedDatabase = DBIOC.container.get(SeedDatabase);

seedDatabase.initialize();
