const config = {
    http: {
        port: process.env.PORT || 3000
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'u8qmYXol2sxzDfTr',
        expiresIn: 60 * 60 * 24 * 7
    }
};

module.exports = config;
