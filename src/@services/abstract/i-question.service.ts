export interface IQuestionService {
    add();
    list(filters);
    find(filters);
    update();
    delete();
}