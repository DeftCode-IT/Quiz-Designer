const _ = require('lodash');

const errorHandler = err => {
  const response = {
    name: err.name,
    message: err.message
  };

  if (err.options) {
    _.assign(response, { options: err.options });
  }

  return response;
};

module.exports = errorHandler;
