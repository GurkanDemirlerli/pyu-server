import { SubjectMoveDto } from "../../_models/dtos/subject/subject-move.dto";

export interface ISubjectItemService {
    getAncestors(id: number, requestorId: number): Promise<any>;
    getDescendants(id: number, requestorId: number): Promise<any>;
    find(id: number, requestorId: number): Promise<any>;
    move(model: SubjectMoveDto, requestorId: number);
}