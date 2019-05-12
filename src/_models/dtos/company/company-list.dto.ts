import { UserSummaryDto } from "@models/dtos";

export class CompanyListDto {
    id: number;
    name: string;
    description: string;
    owner: UserSummaryDto;
    userCount: number = 0;
    projectCount: number = 0;
}
