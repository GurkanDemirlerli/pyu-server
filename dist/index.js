"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import 'module-alias/register';
require('dotenv').config();
console.log("Starting...");
require("reflect-metadata");
const config = require("config");
const app_1 = require("./app");
// const swaggerUi = require('swagger-ui-express');
// import * as swaggerDocument from './swagger.json';
exports.app = app_1.Server.bootstrap().app;
exports.server = exports.app.listen(config.get('port'), () => {
});
//# sourceMappingURL=index.js.map