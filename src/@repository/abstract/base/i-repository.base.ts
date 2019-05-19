import { FindManyOptions, FindOneOptions, EntityManager } from 'typeorm';
export interface IRepositoryBase<T> {
    list(options: FindManyOptions<T>): Promise<T[]>;
    findById(id: number): Promise<T>;
    findOne(id: number, options: FindOneOptions<T>): Promise<T>;
    insert(model: T, manager?: EntityManager): Promise<T>;
    update(id: number, model: T, manager?: EntityManager): Promise<any>;
    delete(id: number, manager?: EntityManager): Promise<any>;
}
