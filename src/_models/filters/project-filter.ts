import { PaginationFilter } from "@models/pagination-filter";

export interface ProjectFilter extends PaginationFilter {
  statusId?: number;
  parentId?: number;
  // createdBy?: number;
}
