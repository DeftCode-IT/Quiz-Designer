module.exports = {
  PAYLOAD_NOT_SPECIFIED: {
    name: 'PAYLOAD_NOT_SPECIFIED',
    message: 'No payload provided',
    code: 500
  },
  NO_JWT_SECRET_ENV_VARIABLE: {
    name: 'NO_JWT_SECRET_ENV_VARIABLE',
    message: 'JWT secret key could not be found in environment variables',
    code: 500
  },
  MISSING_AUTHORIZATION_HEADER: {
    name: 'MISSING_AUTHORIZATION_HEADER',
    message: 'No authorization data provided',
    code: 500
  },
  MISSING_TOKEN: {
    name: 'MISSING_TOKEN',
    message: 'No authorization token',
    code: 500
  },
  EXPIRED_TOKEN: {
    name: 'EXPIRED_TOKEN',
    message: 'Invalid token or expired',
    code: 500
  },
  INVALID_CREDENTIALS: {
    name: 'INVALID_CREDENTIALS',
    message: 'Invalid email or/and password',
    code: 401
  },
  MISSING_CREDENTIALS: {
    name: 'MISSING_CREDENTIALS',
    message: 'Missing email or/and password',
    code: 401
  },
  INVALID_REGISTER: {
    name: 'INVALID_REGISTER',
    message: 'Account already exists',
    code: 500
  },
  USER_EXISTS: {
    name: 'USER_EXISTS',
    message: 'The user already exists',
    code: 500
  }
};
