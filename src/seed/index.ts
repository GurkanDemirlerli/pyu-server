import { IOC } from '../ioc';
import { SeedDatabase } from './seed';

console.log("veritabanı seedle çalıştırıldı.");


let container = IOC.configureContainer();
container
    .bind<SeedDatabase>(SeedDatabase)
    .toSelf()

const seedDatabase = IOC.container.get(SeedDatabase);


seedDatabase.initialize();