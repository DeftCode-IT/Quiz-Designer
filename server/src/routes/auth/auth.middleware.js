const _ = require('lodash');
const { create, login } = require('./auth.helpers');

const registerUser = (req, res, next) =>
  create(req.body)
    .then(user => {
      _.assign(res, { result: { data: user } });
      next();
    })
    .catch(next);

const loginUser = (req, res, next) =>
  login(req.body)
    .then(token => {
      _.assign(res, { result: { data: { token } } });
      next();
    })
    .catch(next);


module.exports = {
  registerUser,
  loginUser
};
