module.exports = {
  http: {
    port: process.env.PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'u8qmYXol2sxzDfTr',
    signOptions: {
      expiresIn: 60 * 60 * 24 * 7,
    },
  },
  logger: {
    transports: {
      console: {
        level: 'silly',
        colorize: true,
        timestamp: true,
      },
      file: {
        level: 'error',
        timestamp: true,
        filename: 'quiz-app.log',
        json: false,
        maxsize: 5000000,
        maxFiles: 5,
        prettyPrint: true,
      },
    },
  },
};
