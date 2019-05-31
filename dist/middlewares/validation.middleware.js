"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
function validationMiddleware(type, skipMissingProperties = false) {
    return (req, res, next) => {
        class_validator_1.validate(class_transformer_1.plainToClass(type, req.body), { skipMissingProperties })
            .then((errors) => {
            if (errors.length > 0) {
                const message = errors.map((error) => Object.values(error.constraints)).join(', ');
                return res.status(422).json({
                    message: message,
                    success: false
                });
            }
            else {
                next();
            }
        });
    };
}
exports.validationMiddleware = validationMiddleware;
