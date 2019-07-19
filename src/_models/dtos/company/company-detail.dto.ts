import { UserSummaryDto } from "..";

export class CompanyDetailDto {
    id: number;
    name: string;
    description: string;
    owner: UserSummaryDto;
    userCount: number = 0;
    projectCount: number = 0;
}
