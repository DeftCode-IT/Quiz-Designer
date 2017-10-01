const winston = require('winston');
const { config } = require('./../../config');

let logger;

if (process.env.NODE_ENV !== 'test') {
  logger = new (winston.Logger)({
    exitOnError: false,
    transports: [
      new (winston.transports.Console)(config.loggerConfig.transports.console),
      new (winston.transports.File)(config.loggerConfig.transports.file)
    ]
  });
} else {
  logger = new (winston.Logger)({
    exitOnError: false,
    transports: [
      new (winston.transports.File)(config.loggerConfig.transports.file)
    ]
  });
}

module.exports = logger;
