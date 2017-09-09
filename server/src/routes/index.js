const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');
const routesTest = require('./test');

const router = express.Router();

router
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true,
  }))
  .use('/', routesTest)
  .use('/auth', authRoutes);

module.exports = router;
