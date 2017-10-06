const _ = require('lodash');
const errorConfig = require('../../config').errors;

const errorFormater = err => {
  let errorSupport = _.pick(errorConfig, [err.message, err.name]);

  if (_.isEmpty(errorSupport)) {
    return _.assign(Error(), {
      name: err.name || 'Unhandled error',
      message: err.message || 'Sorry! An unknown error occurred',
      code: 500,
      stack: err.stack
    });
  }

  errorSupport = errorSupport[err.message] || errorSupport[err.name];

  const error = _.assign(
    Error(),
    _.pick(errorSupport, ['name', 'message', 'code']),
    _.pick(err, ['stack'])
  );
  error.options = _.defaultTo(_.isArray(err.errors) ? err.errors[0] : {}, err.options || {});

  return error;
};

module.exports = {
  errorFormater
};
