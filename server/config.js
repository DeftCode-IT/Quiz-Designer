const config = {
    http: {
        port: process.env.PORT || 3000
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'quiz_designer',
        expiresIn: 60 * 60 * 24 * 7
    },
    errors: {
        PAYLOAD_NOT_SPECIFIED: {
            name   : 'PAYLOAD_NOT_SPECIFIED',
            message: 'No payload provided',
            code   : 400
        },
        NO_JWT_SECRET_ENV_VARIABLE: {
            name   : 'NO_JWT_SECRET_ENV_VARIABLE',
            message: 'JWT secret key could not be found in environment variables',
            code   : 400
        },
        MISSING_AUTHORIZATION_HEADER: {
            name   : 'MISSING_AUTHORIZATION_HEADER',
            message: 'No authorization data provided',
            code   : 401
        },
        MISSING_TOKEN: {
            name   : 'MISSING_TOKEN',
            message: 'No authorization token',
            code   : 401
        }
    }
};

module.exports = config;
