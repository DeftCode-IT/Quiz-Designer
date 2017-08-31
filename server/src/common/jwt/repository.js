const jwt = require('jsonwebtoken');
const _ = require('lodash');
const p = require('bluebird');
const config = require('./../../config');
const { errors } = require('./../../constants');

const jwtConfig = config.jwt;

const jwtVerify = p.promisify(jwt.verify);

const verifyToken = (token) => {
  if (!token) {
    return p.reject(Error(errors.MISSING_AUTHORIZATION_HEADER.name));
  }

  if (!jwtConfig.secret) {
    return p.reject(Error(errors.NO_JWT_SECRET_ENV_VARIABLE.name));
  }

  return jwtVerify(token, jwtConfig.secret)
    .then((decoded) => {
      if (!decoded) {
        return p.reject(Error(errors.MISSING_TOKEN.name));
      }

      return decoded;
    })
    .catch(() => p.reject(Error(errors.EXPIRED_TOKEN.name)));
};

const generateToken = (payload) => {
  if (!payload) {
    return p.reject(Error(errors.PAYLOAD_NOT_SPECIFIED.name));
  }

  if (!jwtConfig.secret) {
    return p.reject(Error(errors.NO_JWT_SECRET_ENV_VARIABLE.name));
  }

  const copiedPayload = _.assign({}, payload);

  return jwt.sign(copiedPayload, jwtConfig.secret, config.signOptions);
};

module.exports = {
  generateToken,
  verifyToken,
};
