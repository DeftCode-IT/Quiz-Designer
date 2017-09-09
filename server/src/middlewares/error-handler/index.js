const winston = require('../../helpers/logger');
const { errorFormater } = require('../../helpers/error-handler/repository');
const responseErrorFormate = require('../../helpers').error;

const errorHandler = (error, req, res, next) => {
  let err = error;

  if (!err) {
    return next();
  }

  err = errorFormater(err);

  winston.error(`(${err.code}) ${err.name} : ${err.message} \n ${err.stack} \n ${JSON.stringify(err.options)}`);
  return res.status(err.code).json(responseErrorFormate(err));
};

module.exports = errorHandler;
