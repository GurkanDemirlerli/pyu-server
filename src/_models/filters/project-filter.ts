import { PaginationFilter } from "@models/pagination-filter";

export interface ProjectFilter extends PaginationFilter {
  statusId?: number;
  projectId?: number;
  // createdBy?: number;
}
