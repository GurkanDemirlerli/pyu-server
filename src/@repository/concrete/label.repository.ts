import { RepositoryBase } from './base/repository.base';
import { ILabelRepository } from "../abstract/i-label.repository";
import { LabelEntity } from "./../../entities/label.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
@injectable()
export class LabelRepository extends RepositoryBase<LabelEntity> implements ILabelRepository {
    constructor() {
        super(
            LabelEntity
        );
    }
}
