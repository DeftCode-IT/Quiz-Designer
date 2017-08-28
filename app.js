var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    quiz            = require("./models/quiz"),
    question        = require("./models/question"),
    result          = require("./models/result"),
    seedDB          = require("./seeds");


seedDB();
mongoose.connect("mongodb://localhost/quizDesigner");
app.use(bodyParser.urlencoded({extended: true}));


var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log('Udało się połączyć');
  });

  app.listen(3000, function () {
    console.log('Quiz_designer działa na porcie 3000');
  });