"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class Uow {
    constructor() {
        this.qr = typeorm_1.getConnection().createQueryRunner();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.qr.connect();
            yield this.qr.startTransaction();
        });
    }
    getManager() {
        return this.qr.manager;
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.qr.commitTransaction();
        });
    }
    rollback() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.qr.rollbackTransaction();
        });
    }
    release() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.qr.release();
        });
    }
}
exports.Uow = Uow;
