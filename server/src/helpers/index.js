const _ = require('lodash');

const resolve = (req, res) =>
  res
    .json(_.omit(res.result || {}, ['status']));


module.exports = {
  resolve
};
