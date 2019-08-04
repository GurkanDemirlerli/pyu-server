export interface ISubjectDomainService {
    add(model: any): Promise<number>;
    list(filters: any, requestorId: number): Promise<any[]>;
    find(id: number, requestorId: number): Promise<any>;
    update(id: number, model: any, requestorId: number): Promise<any>;
    delete(id: number, requestorId: number): Promise<void>;
    getActiveDomains(workspaceId: number, requestorId: number): Promise<any>;
}