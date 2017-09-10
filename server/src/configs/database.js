const mongoose = require('mongoose');
const p = require('bluebird');
const config = require('../config');
const logger = require('../helpers/logger');

mongoose.Promise = p;

const options = {
  promiseLibrary: p,
  useMongoClient: true,
};

const connect = () => {
  const uri = `mongodb://${config.database.dbUserName}:${config.database.dbPass}@${config.database.host}:${config.database.port}/${config.database.dbName}`;

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

