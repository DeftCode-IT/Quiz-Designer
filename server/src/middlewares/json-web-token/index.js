const _ = require('lodash');

const { verifyToken } = require('./repository');
const { verifyTokenQuiz } = require('./repository');

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
  authQuizAccess
};
