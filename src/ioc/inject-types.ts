export module InjectTypes {
    export enum Repository {
        TASK = 'TaskRepository',
        COMMENT = 'CommentRepository',
        USER = 'UserRepository',
        COMPANY = 'CompanyRepository',
        PROJECT = 'ProjectRepository',
        STATUS = 'StatusRepository'
    }

    export enum Service {
        PROJECT = 'ProjectService',
        COMPANY = 'CompanyService',
        AUTH = 'AuthService',
        TASK = 'TaskService'
    }

}