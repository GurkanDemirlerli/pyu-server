import { FindManyOptions, FindOneOptions } from 'typeorm';
export interface IRepositoryBase<T> {
    list(options: FindManyOptions<T>): Promise<T[]>;
    findById(id: number): Promise<T>;
    findOne(id: number, options: FindOneOptions<T>): Promise<T>;
    insert(model: T): Promise<T>;
    update(id: number, model: T): Promise<any>;
    delete(id: number): Promise<any>;
}
