const _ = require('lodash');

const resolve = (req, res) =>
  res
    .status(_.result(res, 'result.status', 200))
    .json(_.omit(res.result || {}, ['status']));


module.exports = {
  resolve,
};
