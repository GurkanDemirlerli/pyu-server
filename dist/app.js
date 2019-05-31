"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const errorHandler = require("errorhandler");
const express = require("express");
const expressStatusMonitor = require("express-status-monitor");
const helmet = require("helmet");
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");
const typeorm_1 = require("typeorm");
const _routes_1 = require("./@routes");
const ioc_1 = require("./ioc");
const appConfig = require("./common/app-config");
// import { logger } from './services';
require("reflect-metadata");
/**
 * The server.
 *
 * @class Server
 */
class Server {
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     */
    static bootstrap() {
        return new Server();
    }
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        ioc_1.IOC.configureContainer();
        // create expressjs application
        this.app = express();
        // configure application
        this.config();
        // add routes
        _routes_1.RouteBinder.configureRoutes(this.app);
    }
    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    config() {
        // add static paths
        this.app.use(express.static(path.join(__dirname, 'public')));
        // mount logger
        // this.app.use(morgan('tiny', {
        //   stream: {
        //     write: (message: string) => logger.info(message.trim()),
        //   },
        // } as morgan.Options));
        this.app.use(morgan('dev'));
        // mount json form parser
        this.app.use(bodyParser.json({ limit: '50mb' }));
        // mount query string parser
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
        // mount override?
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(methodOverride());
        this.app.use(expressStatusMonitor());
        // catch 404 and forward to error handler
        this.app.use((err, req, res, next) => {
            err.status = 404;
            next(err);
        });
        // error handling
        this.app.use(errorHandler());
        typeorm_1.createConnection(appConfig.dbOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {
            console.log(__dirname);
            console.log("SERVER STARTED");
        })).catch(error => console.log("TypeORM connection error: ", error));
    }
}
exports.Server = Server;
