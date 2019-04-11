import { Repository } from 'typeorm';
export interface IRepositoryBase<T>  {
    list();
    findById(id);
    insert(model: T);
    update(model: T);
    delete(id);
}