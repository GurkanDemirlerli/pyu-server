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
    PROJECT_MEMBERSHIP = 'ProjectMembershipRepository',
    LABEL = 'LabelRepository',
    TASK_LABEL = 'TaskLabelRepository',
    ABSTRACT_STATUS = 'AbstractStatusRepository',
    STATUS_TEMPLATE = 'StatusTemplateRepository',
    PROJECT_MANAGER = 'ProjectManagerRepository',
    SUB_PROJECT = 'SubProjectRepository',
    ROOT_PROJECT = 'RootProjectEntity'
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
