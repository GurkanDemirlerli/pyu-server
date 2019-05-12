import { Container } from "inversify";
import { SeedDatabase } from "./seed";
import { IAnswerRepository, ICommentRepository, ITaskRepository, IProjectRepository, IIssueRepository, ICompanyRepository, IQuestionRepository, IStatusRepository, IUserRepository } from "@repositories/abstract";
import { AnswerRepository, CommentRepository, CompanyRepository, TaskRepository, UserRepository, IssueRepository, ProjectRepository, QuestionRepository, StatusRepository } from "@repositories/concrete";
import { InjectTypes } from "./inject-types";
import 'reflect-metadata';
export module DBIOC {
    export const container = new Container();
    export function configureContainer(): Container {

        container
            .bind<SeedDatabase>(SeedDatabase)
            .toSelf()

        container
            .bind<IAnswerRepository>(InjectTypes.Repository.ANSWER)
            .to(AnswerRepository);

        container
            .bind<ICommentRepository>(InjectTypes.Repository.COMMENT)
            .to(CommentRepository);

        container
            .bind<ICompanyRepository>(InjectTypes.Repository.COMPANY)
            .to(CompanyRepository);

        container
            .bind<IIssueRepository>(InjectTypes.Repository.ISSUE)
            .to(IssueRepository);

        container
            .bind<IProjectRepository>(InjectTypes.Repository.PROJECT)
            .to(ProjectRepository);

        container
            .bind<IQuestionRepository>(InjectTypes.Repository.QUESTION)
            .to(QuestionRepository);

        container
            .bind<IStatusRepository>(InjectTypes.Repository.STATUS)
            .to(StatusRepository);


        container
            .bind<ITaskRepository>(InjectTypes.Repository.TASK)
            .to(TaskRepository);

        container
            .bind<IUserRepository>(InjectTypes.Repository.USER)
            .to(UserRepository);

        return container;
    }
}
