import { injectable } from "inversify";
import 'reflect-metadata';
import { RepositoryBase } from "./base/repository.base";
import { IMembershipRequestRepository } from "@repositories/abstract";
import { MembershipRequestEntity } from "@entities/membership-request.entity";
@injectable()
export class MembershipRequestRepository extends RepositoryBase<MembershipRequestEntity> implements IMembershipRequestRepository {
    constructor() {
        super(
            MembershipRequestEntity
        );
    }
}
