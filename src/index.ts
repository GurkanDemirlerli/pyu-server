import * as config from 'config';
import { Server } from './app';
import 'reflect-metadata';
const swaggerUi = require('swagger-ui-express');
import * as swaggerDocument from './swagger.json';
import 'module-alias/register';

export const app = Server.bootstrap().app;
export const server = app.listen(config.get('port'), () => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
});
