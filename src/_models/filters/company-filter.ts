import { PaginationFilter } from "@models/pagination-filter";

export interface CompanyFilter extends PaginationFilter {
    owner?: boolean;
}
