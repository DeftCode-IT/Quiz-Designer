const _ = require('lodash');

const resolve = (req, res) =>
  res
    .status(_.result(res, 'result.status', 200))
    .json(_.omit(res.result || {}, ['status']));

const error = err => {
  const response = {
    name: err.name,
    message: err.message,
  };

  if (err.options) {
    _.assign(response, { options: err.options });
  }

  return response;
};

module.exports = {
  resolve,
  error,
};
