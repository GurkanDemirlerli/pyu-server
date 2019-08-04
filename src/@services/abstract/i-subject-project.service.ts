import { ProjectCreateDto } from './../../_models/dtos/project/project-create.dto';
export interface ISubjectProjectService {
    add(model: ProjectCreateDto, requestorId: number): Promise<number>;
    list(filters: any, requestorId: number): Promise<any[]>;
    find(id: number, requestorId: number): Promise<any>;
    update(id: number, model: any, requestorId: number): Promise<any>;
    delete(id: number, requestorId: number): Promise<void>;
}