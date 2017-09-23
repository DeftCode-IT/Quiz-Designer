const _ = require('lodash');
const verifyToken = require('./repository').verifyToken;
const verifyTokenQuiz = require('./repository').verifyTokenQuiz;
const generateToken = require('./repository').generateToken;

const authenticate = (req, res, next) => verifyToken(req.headers.authorization)
  .then(payload => {
    _.assign(req, { resources: { payload } });
    next();
  })
  .catch(next);

const authQuizAccess = (req, res, next) => {
  if (req.headers.authorization) {
    return verifyTokenQuiz(req.headers.authorization)
      .then(payload => {
        _.assign(req, { resources: { payload } });
        next();
      });
  }

  return next();
};

module.exports = {
  authenticate,
  generateToken,
  authQuizAccess
};
