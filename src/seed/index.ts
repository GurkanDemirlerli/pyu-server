import 'reflect-metadata';
import { SeedDatabase } from './seed';
import { IOC } from '../ioc';

console.log("veritabanı seedle çalıştırıldı.");

IOC.configureContainer();
IOC.container.bind<SeedDatabase>(SeedDatabase)
  .toSelf();
const seedDatabase = IOC.container.get(SeedDatabase);

seedDatabase.initialize();
