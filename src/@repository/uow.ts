import { QueryRunner, getConnection } from "typeorm";

export class Uow {
    qr: QueryRunner;

    constructor() {
        this.qr = getConnection().createQueryRunner();
    }

    async start() {
        await this.qr.connect();
        await this.qr.startTransaction();
    }

    getManager() {
        return this.qr.manager;
    }

    async commit() {
        await this.qr.commitTransaction();
    }

    async rollback() {
        await this.qr.rollbackTransaction();
    }

    async release() {
        await this.qr.release();
    }
}
