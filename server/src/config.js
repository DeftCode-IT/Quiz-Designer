module.exports = {
  database: {
    prod: {
      host: 'mongo12.mydevil.net',
      port: 27017,
      dbName: 'mo1021_qd_prod',
      dbUserName: 'mo1021_qd_prod',
      dbPass: 'juwWCIKmmmZ7qBwPyyLk'
    },
    test: {
      host: 'mongo12.mydevil.net',
      port: 27017,
      dbName: 'mo1021_qd_test',
      dbUserName: 'mo1021_qd_test',
      dbPass: '8IaZxu6k2D0vV1KoBM1W'
    }
  },
  http: {
    port: process.env.PORT || 3000
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'u8qmYXol2sxzDfTr',
    signOptions: {
      expiresIn: 60 * 60 * 24 * 7
    }
  },
  loggerConfig: {
    transports: {
      console: {
        level: 'silly',
        colorize: true,
        timestamp: true
      },
      file: {
        level: 'error',
        timestamp: true,
        filename: 'quiz-app.log',
        json: false,
        maxsize: 5000000,
        maxFiles: 5,
        prettyPrint: true
      }
    }
  }
};
