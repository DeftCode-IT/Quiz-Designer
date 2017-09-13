const winston = require('winston');
const { loggerConfig } = require('../../config');

let logger;

if (process.env.NODE_ENV !== 'test') {
  logger = new (winston.Logger)({
    exitOnError: false,
    transports: [
      new (winston.transports.Console)(loggerConfig.transports.console),
      new (winston.transports.File)(loggerConfig.transports.file)
    ]
  });
} else {
  logger = new (winston.Logger)({
    exitOnError: false,
    transports: [
      new (winston.transports.File)(loggerConfig.transports.file)
    ]
  });
}


module.exports = logger;
