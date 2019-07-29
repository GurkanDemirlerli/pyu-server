"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const ioc_1 = require("../ioc");
const folder_sharing_controller_1 = require("../@controllers/folder-sharing.controller");
class FolderSharingRoutes {
    static configureRoutes(app) {
        const root = "/api/mocks";
        const ctrl = ioc_1.IOC.container.get(folder_sharing_controller_1.FolderSharingController);
        app.route(root + '/')
            .get((req, res, next) => ctrl.list(req, res, next));
        app.route(root + '/:id')
            .get((req, res, next) => ctrl.find(req, res, next));
        app.route(root + '/')
            .post((req, res, next) => ctrl.insert(req, res, next));
        app.route(root + '/:id')
            .put((req, res, next) => ctrl.update(req, res, next));
        app.route(root + '/:id')
            .delete((req, res, next) => ctrl.delete(req, res, next));
    }
}
exports.FolderSharingRoutes = FolderSharingRoutes;
//# sourceMappingURL=folder-sharing.routes.js.map