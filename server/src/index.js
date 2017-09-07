const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const logger = require('./common/logger');
const routes = require('./feature');
const errorHandler = require('./middlewares/error-handler');

const app = express();

mongoose.connect(`mongodb://${config.database.dbUserName}:${config.database.dbPass}@${config.database.host}:${config.database.port}/${config.database.dbName}`);

app
  .use(morgan('dev', { stream: { write: message => logger.info(message) } }))
  .use(routes)
  .use(errorHandler);

app.listen(config.http.port, () => logger.info(`Server is working on port: ${config.http.port}`));
