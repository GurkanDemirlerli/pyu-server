import { RepositoryBase } from './base/repository.base';
import { getManager } from "typeorm";
import { ISubjectItemRepository } from "../abstract/i-subject-item.repository";
import { SubjectItemEntity } from "./../../entities/subject-item.entity";
import { injectable } from "inversify";
import 'reflect-metadata';
import * as dottie from 'dottie';

@injectable()
export class SubjectItemRepository extends RepositoryBase<SubjectItemEntity> implements ISubjectItemRepository {
    constructor() {
        super(
            SubjectItemEntity
        );
    }

    async getDescendants(subjectId: number) {
        const rawRes = await getManager().query(`CALL get_descendants_subjects(?)`, [subjectId]);
        let mapped = dottie.transform(rawRes[0]);

        return mapped;
    }

    async getAncestors(subjectId: number) {
        const rawRes = await getManager().query(`CALL get_ancestors_subjects(?)`, [subjectId]);
        let mapped = [];
        (rawRes[0] as any[]).map((item) => {
            mapped.push(dottie.transform(item));
        });
        return mapped;
    }

    // async move(childId: number, newParentId: number) {
    //     await getManager()
    //         .createQueryBuilder()
    //         .update('subject_item_closure')
    //         .set({
    //             "subjectId_ancestor": newParentId as any
    //         })
    //         .where('"subjectId_descendant" = :id', { id: childId })
    //         .execute();
    // }
}