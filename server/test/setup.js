process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const p = require('bluebird');
const config = require('./../src/config');
const user = require('./../src/models/user');
const helpers = require('./helpers');
const dbConfig = config.database.test;

const options = {
  promiseLibrary: p,
  useMongoClient: true
};

before(done => {
  const uri = `mongodb://${dbConfig.dbUserName}:${dbConfig.dbPass}@${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;

  mongoose.connect(uri, options).then(() => {
    mongoose.connection.dropDatabase(() => {
      user.create(helpers.createUser()).then(() => {
        done();
      });
    });
  });
});