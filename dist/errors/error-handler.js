"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const app_error_1 = require("./app-error");
var ErrorHandler;
(function (ErrorHandler) {
    function handleErrorResponses(error, res, Method = 'unknown', Controller = 'unknown') {
        let status = 500;
        let _errorMessage;
        if (helpers_1.Helpers.isJson(error.message))
            _errorMessage = JSON.parse(error.message);
        else
            _errorMessage = error.message;
        if (error instanceof app_error_1.AppError) {
            status = error.status;
        }
        console.log(`ERROR at Method: ${Method} , Controller: ${Controller}`);
        console.log('Error Name :', error.name);
        console.log('Error Message :', _errorMessage);
        console.log('Error StackTrace :', error.stack);
        return res.status(status).json({
            success: false,
            error: {
                name: error.name,
                message: _errorMessage
            }
        });
    }
    ErrorHandler.handleErrorResponses = handleErrorResponses;
})(ErrorHandler = exports.ErrorHandler || (exports.ErrorHandler = {}));
