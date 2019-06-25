import { SubProjectEntity } from "@entities/sub-project.entity";

export interface ISubProjectService {
  find(id: number, requestorId: number): Promise<SubProjectEntity>;
}
