"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const app_1 = require("./app");
require("reflect-metadata");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger.json");
require("module-alias/register");
exports.app = app_1.Server.bootstrap().app;
exports.server = exports.app.listen(config.get('port'), () => {
    exports.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
});
