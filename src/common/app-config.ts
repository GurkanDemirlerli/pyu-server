import { StatusEntity } from './../entities/status.entity';
import { IssueEntity } from './../entities/issue.entity';
import { AnswerEntity } from './../entities/answer.entity';
import { QuestionEntity } from './../entities/question.entity';
import { CompanyEntity } from './../entities/company.entity';
import { ProjectEntity } from './../entities/project.entity';
import { CompanyMembershipEntity } from '@entities/company-membership.entity';
import { MembershipRequestEntity } from '@entities/membership-request.entity';
import { ProjectManagerEntity } from '@entities/project-manager.entity';
import { ProjectMembershipEntity } from '@entities/project-membership.entity';
import { TaskAssignmentEntity } from '@entities/task-assignment.entity';
import {
    CommentEntity,
    TaskEntity,
    UserEntity

} from './../entities';
import { ConnectionOptions } from "typeorm";
import 'reflect-metadata';

export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "pyudb",
    entities: [
        TaskEntity,
        CommentEntity,
        UserEntity,
        ProjectEntity,
        CompanyEntity,
        QuestionEntity,
        AnswerEntity,
        IssueEntity,
        StatusEntity,
        CompanyMembershipEntity,
        MembershipRequestEntity,
        ProjectManagerEntity,
        ProjectMembershipEntity,
        TaskAssignmentEntity
    ],
    synchronize: true,
}
