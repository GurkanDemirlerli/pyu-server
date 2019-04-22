import { IRepositoryBase } from './../../abstract/base/i-repository.base';
import { getManager, Repository } from 'typeorm';
import { unmanaged, injectable } from 'inversify';

export type ObjectType<T> = { new(): T } | Function;
@injectable()
export class RepositoryBase<T> implements IRepositoryBase<T> {
    private type: ObjectType<T>;
    constructor(@unmanaged() type: ObjectType<T>) {
        this.type = type;
    }

    list() {
        return getManager().getRepository(this.type).find();
    }
    findById(id): Promise<T> {
        throw new Error("Method not implemented.");
    }

    findOne(id: number, options) {
        return getManager().getRepository(this.type).findOne(id, options);
    }

    insert(model: T) {
        return getManager().getRepository(this.type).save(model);
    }
    update(model: T): Promise<any> {
        throw new Error("Method not implemented.");

    }
    delete(id): Promise<any> {
        throw new Error("Method not implemented.");
    }
}