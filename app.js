const    express         = require('express');
const    app             = express();
const    bodyParser      = require('body-parser');
const    mongoose        = require('mongoose');
const    quiz            = require('./models/quiz');
const    question        = require('./models/question');
const    result          = require('./models/result');
const    seedDB          = require('./seeds');


seedDB();
mongoose.connect('mongodb://mo1368_quiz:Designer2017!@mongo14.mydevil.net:27017/mo1368_quiz');

const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log('mongoose connected');
  });

  app.listen(3000, () => console.log('Quiz_designer working on port: 3000'));