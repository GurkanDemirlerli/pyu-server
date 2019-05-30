export module InjectTypes {
    export enum Repository {
        ANSWER = 'AnswerRepository',
        COMMENT = 'CommentRepository',
        COMPANY = 'CompanyRepository',
        ISSUE = 'IssueRepository',
        PROJECT = 'ProjectRepository',
        QUESTION = 'QuestionRepository',
        STATUS = 'StatusRepository',
        TASK = 'TaskRepository',
        USER = 'UserRepository',
        COMPANY_MEMBERSHIP = 'CompanyMembershipRepository'
    }

    export enum Service {
        ANSWER = 'AnswerService',
        COMMENT = 'CommentService',
        COMPANY = 'CompanyService',
        ISSUE = 'IssueService',
        PROJECT = 'ProjectService',
        QUESTION = 'QuestionService',
        TASK = 'TaskService',
        USER = 'UserService'
    }

}
