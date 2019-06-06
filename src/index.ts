console.log("Starting...")
import 'module-alias/register';
import 'reflect-metadata';
import * as config from 'config';

import { Server } from './app';
// const swaggerUi = require('swagger-ui-express');
// import * as swaggerDocument from './swagger.json';
export const app = Server.bootstrap().app;

export const server = app.listen(config.get('port'), () => {
});
