const mongoose = require('mongoose');
const p = require('bluebird');
const config = require('../config');
const logger = require('../helpers/logger');

mongoose.Promise = p;

const options = {
  promiseLibrary: p,
  useMongoClient: true
};

let dbConfig;

if (process.env.NODE_ENV !== 'test') {
  dbConfig = config.database.prod;
} else {
  dbConfig = config.database.test;
}

const connect = () => {
  const uri = `mongodb://${dbConfig.dbUserName}:${dbConfig.dbPass}@${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;

  return mongoose.connect(uri, options)
    .then(() => {
      const admin = new mongoose.mongo.Admin(mongoose.connection.db);
      admin.buildInfo((err, info) => {
        if (err) {
          logger.error(`Error getting MongoDB info: ${err}`);
        } else {
          logger.info(`Connection to MongoDB (version ${info.version}) opened successfully!`);
        }
      });
    })
    .catch(err => logger.error(`Error connecting to MongoDB: ${err}`));
};

module.exports = connect;

