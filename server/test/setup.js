process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const p = require('bluebird');
const config = require('./../src/config');
const user = require('./../src/models/user');
const quiz = require('./../src/models/quiz');
const helpers = require('./helpers');
const dbConfig = config.database.test;

const options = {
  promiseLibrary: p,
  useMongoClient: true
};

const uri = `mongodb://${dbConfig.dbUserName}:${dbConfig.dbPass}@${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;

before(done => {
  mongoose.connect(uri, options).then(() => {
    mongoose.connection.dropDatabase(() => {
      const promises = [
        user.create(helpers.createUser()),
        quiz.create(helpers.createQuiz({title: 'First title of quiz'})),
        quiz.create(helpers.createQuiz({title: 'Second title of quiz'})),
        quiz.create(helpers.createQuiz({title: 'Third title of quiz'}))
      ];

      p.all(promises).then(() => {
        done();
      }).catch(err => {
        console.log('ERROR: ', err);
      });
    });
  });
});
