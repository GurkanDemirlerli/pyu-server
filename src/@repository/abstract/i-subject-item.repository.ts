import { SubjectItemEntity } from "./../../entities/subject-item.entity";
import { IRepositoryBase } from "./base/i-repository.base";

export interface ISubjectItemRepository extends IRepositoryBase<SubjectItemEntity> {
    getDescendants(subjectId: number);
    getAncestors(subjectId: number);
}