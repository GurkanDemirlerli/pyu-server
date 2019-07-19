import { PaginationFilter } from "../pagination-filter";

export interface TaskFilter extends PaginationFilter {
    status?: number;
    projectId?: number;
    assignedTo?: number;
    createdBy?: number;
}
