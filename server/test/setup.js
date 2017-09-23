const mongoose = require('mongoose');
const p = require('bluebird');
const config = require('./../src/config');
const user = require('./../src/models/user');
const dbConfig = config.database.test;

const options = {
  promiseLibrary: p,
  useMongoClient: true
};

before(done => {
  const uri = `mongodb://${dbConfig.dbUserName}:${dbConfig.dbPass}@${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;

  mongoose.connect(uri, options).then(() => {
    mongoose.connection.dropDatabase(() => {
      user.create({
        email: 'example@example.com',
        password: '$2a$10$1Dih.A4T/LsoFnqyYHo93u25Wkv67wKHTr8sDANrh9c2BiJR8ZjF6'
      }).then(() => {
        done();
      });
    });
  });
});