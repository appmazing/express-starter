/**
 * Core dependencies
 */
import express from 'express';
import config from 'config';

/**
 * As we are customising functionallity of `winston` logger
 * thus we want to import this module instead of importing `winstons` directly
 */
import logger from './utils/logger';

/**
 * Config driven bootstrapping part of apps,
 * ie. fixtures, server initialisation, websockets
 */
import bootstrap from './bootstrap';

/**
 * Initialize Express.js server instance
 */
const app = express();

/**
 * Expose `config` & `logger` instances to application
 */
app.locals = config;
app.log = logger();

/* @TODO: think about better error output, red color perhaps? */
export default bootstrap(app).catch((e) => { app.log('info', ('FATAL, ' + e)); });
