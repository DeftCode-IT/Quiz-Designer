const _ = require('lodash');
const verifyToken = require('./repository').verifyToken;
const generateToken = require('./repository').generateToken;

const authenticate = (req, res, next) => verifyToken(req.headers.authorization)
  .then(payload => {
    _.assign(req, { resources: { payload } });
    next();
  })
  .catch(next);

module.exports = {
  authenticate,
  generateToken,
};
