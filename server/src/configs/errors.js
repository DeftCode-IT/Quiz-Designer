module.exports = {
  PAYLOAD_NOT_SPECIFIED: {
    name: 'PAYLOAD_NOT_SPECIFIED',
    message: 'No payload provided',
    code: 400,
  },
  NO_JWT_SECRET_ENV_VARIABLE: {
    name: 'NO_JWT_SECRET_ENV_VARIABLE',
    message: 'JWT secret key could not be found in environment variables',
    code: 400,
  },
  MISSING_AUTHORIZATION_HEADER: {
    name: 'MISSING_AUTHORIZATION_HEADER',
    message: 'No authorization data provided',
    code: 401,
  },
  MISSING_TOKEN: {
    name: 'MISSING_TOKEN',
    message: 'No authorization token',
    code: 401,
  },
  EXPIRED_TOKEN: {
    name: 'EXPIRED_TOKEN',
    message: 'Token expired',
    code: 401,
  },
  INVALID_LOGIN: {
    name: 'INVALID_LOGIN',
    message: 'Missing email or password',
    code: 401,
  },
  INVALID_REGISTER: {
    name: 'INVALID_REGISTER',
    message: 'Account already exists',
    code: 401,
  },
  USER_EXISTS: {
    name: 'USER_EXISTS',
    message: 'The user already exists',
    code: 401,
  },
};
