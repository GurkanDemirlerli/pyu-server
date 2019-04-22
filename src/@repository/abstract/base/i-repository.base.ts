import { Repository } from 'typeorm';
export interface IRepositoryBase<T> {
    list(): Promise<T[]>;
    findById(id): Promise<T>;
    findOne(id:number,options): Promise<T>;
    insert(model: T): Promise<any>;
    update(model: T): Promise<any>;
    delete(id): Promise<any>;
}