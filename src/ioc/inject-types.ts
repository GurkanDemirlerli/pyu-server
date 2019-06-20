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
    COMPANY_MEMBERSHIP = 'CompanyMembershipRepository',
    MEMBERSHIP_REQUEST = 'MembershipRequestRepository',
    TASK_ASSIGNMENT = 'TaskAssignmentRepository',
    PROJECT_MEMBERSHIP = 'ProjectMembershipRepository'
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
