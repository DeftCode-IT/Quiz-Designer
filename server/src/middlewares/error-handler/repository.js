const _ = require('lodash');
const errorConfig = require('./../../constants').errors;

const errorFormater = (err) => {
  let error = _.pick(errorConfig, [err.message, err.name]);

  if (_.isEmpty(error)) {
    return _.assign(Error(), {
      name: err.name || 'Unhandled error',
      message: err.message || 'Sorry! An unknown error occurred',
      code: 500,
      stack: err.stack,
    });
  }

  error = error[err.message] || error[err.name];

  const e = _.assign(
    Error(),
    _.pick(error, ['name', 'message', 'code']),
    _.pick(err, ['stack']),
  );
  e.options = _.defaultTo(_.isArray(err.errors) ? err.errors[0] : {}, err.options || {});

  return e;
};

module.exports = {
  errorFormater,
};
