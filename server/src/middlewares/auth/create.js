const _ = require('lodash');
const { create } = require('../../helpers/auth');

const reqHandler = (req, res, next) =>
  create(req.body)
    .then(user => {
      _.assign(res, { result: { data: user } });
      next();
    })
    .catch(next);

module.exports = reqHandler;
