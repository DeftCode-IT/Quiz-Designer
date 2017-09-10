module.exports = {
  PAYLOAD_NOT_SPECIFIED: {
    name: 'PAYLOAD_NOT_SPECIFIED',
    message: 'No payload provided',
  },
  NO_JWT_SECRET_ENV_VARIABLE: {
    name: 'NO_JWT_SECRET_ENV_VARIABLE',
    message: 'JWT secret key could not be found in environment variables',
  },
  MISSING_AUTHORIZATION_HEADER: {
    name: 'MISSING_AUTHORIZATION_HEADER',
    message: 'No authorization data provided',
  },
  MISSING_TOKEN: {
    name: 'MISSING_TOKEN',
    message: 'No authorization token',
  },
  EXPIRED_TOKEN: {
    name: 'EXPIRED_TOKEN',
    message: 'Invalid token or expired',
  },
  INVALID_LOGIN: {
    name: 'INVALID_LOGIN',
    message: 'Missing email or password',
  },
  INVALID_REGISTER: {
    name: 'INVALID_REGISTER',
    message: 'Account already exists',
  },
  USER_EXISTS: {
    name: 'USER_EXISTS',
    message: 'The user already exists',
  },
};
