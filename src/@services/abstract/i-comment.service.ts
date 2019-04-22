export interface ICommentService {
    add();
    list(filters);
    find(filters);
    update();
    delete();
}