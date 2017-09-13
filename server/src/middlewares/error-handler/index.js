const winston = require('../../helpers/logger');
const { errorFormater } = require('../../helpers/error-handler/repository');

const errorHandler = (error, req, res, next) => {
  if (!error) {
    return next();
  }

  const formatedError = errorFormater(error);

  winston.error(`(${formatedError.code}) ${formatedError.name} : ${formatedError.message} \n ${formatedError.stack} \n ${JSON.stringify(formatedError.options)}`);
  return res.status(formatedError.code).json(formatedError);
};

module.exports = errorHandler;
