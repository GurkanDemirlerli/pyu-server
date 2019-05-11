import { IRepositoryBase } from './../../abstract/base/i-repository.base';
import { getManager, FindManyOptions, FindOneOptions } from 'typeorm';
import { unmanaged, injectable } from 'inversify';

export type ObjectType<T> = { new(): T } | Function;
@injectable()
export class RepositoryBase<T> implements IRepositoryBase<T> {
    private type: ObjectType<T>;
    constructor(@unmanaged() type: ObjectType<T>) {
        this.type = type;
    }

    list(options: FindManyOptions<T>): Promise<T[]> {
        return getManager().getRepository(this.type).find(options);
    }
    findById(id: number): Promise<T> {
        return getManager().getRepository(this.type).findOne(id);
    }

    findOne(id: number, options: FindOneOptions<T>): Promise<T> {
        return getManager().getRepository(this.type).findOne(id, options);
    }

    insert(model: T): Promise<T> {
        return getManager().getRepository(this.type).save(model);
    }

    update(id: number, model: T): Promise<any> {
        return getManager().getRepository(this.type).update(id, model);

    }
    delete(id: number): Promise<any> {
        return getManager().getRepository(this.type).delete(id);
    }
}
