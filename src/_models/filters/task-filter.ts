import { PaginationFilter } from "@models/pagination-filter";

export interface TaskFilter extends PaginationFilter {
    status?: number;
    projectId?: number;
    assignedTo?: number;
    createdBy?: number;
}
