const _ = require('lodash');

module.exports = (req, res) => res.json(_.omit(res.result || {}, ['status']));
