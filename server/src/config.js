module.exports = {
  database: {
    host: 'mongo14.mydevil.net',
    port: 27017,
    dbName: 'mo1368_quiz',
    dbUserName: 'mo1368_quiz',
    dbPass: 'Designer2017!',
  },
  http: {
    port: process.env.PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'u8qmYXol2sxzDfTr',
    signOptions: {
      expiresIn: 60 * 60 * 24 * 7,
    },
  },
  loggerConfig: {
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
