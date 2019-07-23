"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subject_task_routes_1 = require("./subject-task.routes");
const workspace_routes_1 = require("./workspace.routes");
const subject_item_routes_1 = require("./subject-item.routes");
class RouteBinder {
    static configureRoutes(app) {
        subject_item_routes_1.SubjectItemRoutes.configureRoutes(app);
        workspace_routes_1.WorkspaceRoutes.configureRoutes(app);
        subject_task_routes_1.SubjectTaskRoutes.configureRoutes(app);
    }
}
exports.RouteBinder = RouteBinder;
//# sourceMappingURL=index.js.map