const _ = require('lodash');
const { login } = require('../../helpers/auth');

const reqHandler = (req, res, next) =>
  login(req.body)
    .then(token => {
      _.assign(res, { result: { data: { token } } });
      next();
    })
    .catch(next);


module.exports = reqHandler;
