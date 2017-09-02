const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const logger = require('./common/logger');

const app = express();

app.use(morgan('dev', { stream: { write: message => logger.info(message) } }));

app.listen(config.http.port, () => logger.info(`Server is working on port: ${config.http.port}`));
