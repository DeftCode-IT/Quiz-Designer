const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');
const routesTest = require('./test');
const quizesRoutes = require('./quizes');

const router = express.Router();

router
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use('/', routesTest)
  .use('/auth', authRoutes)
  .use('/quizes', quizesRoutes);

module.exports = router;
