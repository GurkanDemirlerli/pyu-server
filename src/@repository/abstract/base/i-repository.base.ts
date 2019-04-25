import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';
export interface IRepositoryBase<T> {
    list(options: FindManyOptions<T>): Promise<T[]>;
    findById(id): Promise<T>;
    findOne(id: number, options: FindOneOptions<T>): Promise<T>;
    insert(model: T): Promise<any>;
    update(model: T): Promise<any>;
    delete(id): Promise<any>;
}