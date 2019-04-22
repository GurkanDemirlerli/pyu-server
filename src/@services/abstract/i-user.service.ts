export interface IUserService {
    register();
    login();
    list(filters);
    find(filters);
    updateProfile();
    delete();
}