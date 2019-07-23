"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(name, message, status) {
        super(message);
        this.name = name;
        Error.captureStackTrace(this, this.constructor);
        this.status = status || 500;
    }
}
exports.AppError = AppError;
//# sourceMappingURL=app-error.js.map