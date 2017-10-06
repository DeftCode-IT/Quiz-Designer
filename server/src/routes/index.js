const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');
const quizzesRoutes = require('./quizzes');

const router = express.Router();

router
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use('/auth', authRoutes)
  .use('/quizzes', quizzesRoutes);

module.exports = router;
