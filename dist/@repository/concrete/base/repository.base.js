"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const inversify_1 = require("inversify");
let RepositoryBase = class RepositoryBase {
    constructor(type) {
        this.type = type;
    }
    list(options) {
        return typeorm_1.getManager().getRepository(this.type).find(options);
    }
    findById(id) {
        return typeorm_1.getManager().getRepository(this.type).findOne(id);
    }
    findOne(id, options) {
        if (id !== null)
            return typeorm_1.getManager().getRepository(this.type).findOne(id, options);
        else
            return typeorm_1.getManager().getRepository(this.type).findOne(options);
    }
    insert(model, manager = typeorm_1.getManager()) {
        return manager.getRepository(this.type).save(model);
    }
    update(id, model, manager = typeorm_1.getManager()) {
        return manager.getRepository(this.type).update(id, model);
    }
    delete(id, manager = typeorm_1.getManager()) {
        return manager.getRepository(this.type).delete(id);
    }
};
RepositoryBase = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.unmanaged()),
    __metadata("design:paramtypes", [Object])
], RepositoryBase);
exports.RepositoryBase = RepositoryBase;
//# sourceMappingURL=repository.base.js.map