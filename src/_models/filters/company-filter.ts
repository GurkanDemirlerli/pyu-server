import { PaginationFilter } from "../pagination-filter";

export interface CompanyFilter extends PaginationFilter {
    owner?: boolean;
}
