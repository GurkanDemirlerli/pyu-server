export interface ISubjectItemService {
    getAncestors(id: number, requestorId: number): Promise<any>;
    getDescendants(id: number, requestorId: number): Promise<any>;
    find(id: number, requestorId: number): Promise<any>;
}