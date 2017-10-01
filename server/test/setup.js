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
      p.all([
        user.create(helpers.createUser()),
        user.create(helpers.createUser())
      ]).then(res => {
        helpers.constants.user1 = res[0];
        helpers.constants.user2 = res[1];

        p.all([
          quiz.create(helpers.createQuiz({title: 'First title of quiz', createdBy: res[0]._id})),
          quiz.create(helpers.createQuiz({title: 'Second title of quiz', createdBy: res[1]._id})),
          quiz.create(helpers.createQuiz({title: 'Third title of quiz', createdBy: res[1]._id}))
        ]).then(() => {
          done();
        });
      }).catch(err => {
        console.log('ERROR: ', err);
      });
    });
  });
});
