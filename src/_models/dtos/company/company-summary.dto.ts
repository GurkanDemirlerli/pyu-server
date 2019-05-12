import { UserSummaryDto } from "..";

export class CompanySummaryDto {
    id: number;
    name: string;
    description: string;
    owner: UserSummaryDto;
}
